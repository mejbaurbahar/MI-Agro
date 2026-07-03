#!/usr/bin/env python3
"""
MI UNIFYLD AGRO LTD - Email Forwarder
Receives SMTP on port 25 for custom domain aliases and forwards via Gmail SMTP.
"""

import asyncio
import hashlib
import logging
import logging.handlers
import os
import smtplib
import time
from email import message_from_bytes
from email.utils import parseaddr, formataddr, make_msgid
from pathlib import Path

from aiosmtpd.controller import Controller
from aiosmtpd.smtp import Envelope, Session, SMTP
from dotenv import load_dotenv

load_dotenv()

# ──────────────────────────────────────────────────────────────────────────────
# Config
# ──────────────────────────────────────────────────────────────────────────────

GMAIL_USER        = os.environ["GMAIL_USER"]
GMAIL_APP_PASSWORD = os.environ["GMAIL_APP_PASSWORD"]
FORWARD_TO        = os.environ.get("FORWARD_TO", GMAIL_USER)
LISTEN_HOST       = os.environ.get("LISTEN_HOST", "0.0.0.0")
LISTEN_PORT       = int(os.environ.get("LISTEN_PORT", "25"))
DOMAIN            = os.environ.get("DOMAIN", "miunifyldagroltd.com")
MAX_RETRIES       = int(os.environ.get("MAX_RETRIES", "3"))
RETRY_DELAY       = int(os.environ.get("RETRY_DELAY", "60"))
DEDUP_WINDOW      = int(os.environ.get("DEDUP_WINDOW", "300"))
LOG_LEVEL         = os.environ.get("LOG_LEVEL", "INFO")
LOG_FILE          = os.environ.get("LOG_FILE", "forwarder.log")

ALIASES: set[str] = {
    addr.strip().lower()
    for addr in os.environ.get(
        "ALIASES",
        "info@miunifyldagroltd.com,md@miunifyldagroltd.com,chairman@miunifyldagroltd.com",
    ).split(",")
    if addr.strip()
}

# ──────────────────────────────────────────────────────────────────────────────
# Logging
# ──────────────────────────────────────────────────────────────────────────────

def setup_logging() -> logging.Logger:
    logger = logging.getLogger("forwarder")
    logger.setLevel(getattr(logging, LOG_LEVEL.upper(), logging.INFO))

    fmt = logging.Formatter("%(asctime)s [%(levelname)s] %(message)s", datefmt="%Y-%m-%d %H:%M:%S")

    ch = logging.StreamHandler()
    ch.setFormatter(fmt)
    logger.addHandler(ch)

    fh = logging.handlers.RotatingFileHandler(
        LOG_FILE, maxBytes=10 * 1024 * 1024, backupCount=5, encoding="utf-8"
    )
    fh.setFormatter(fmt)
    logger.addHandler(fh)

    return logger

log = setup_logging()

# ──────────────────────────────────────────────────────────────────────────────
# Dedup cache  {msg_id: timestamp}
# ──────────────────────────────────────────────────────────────────────────────

_seen: dict[str, float] = {}

def _is_duplicate(msg_id: str) -> bool:
    now = time.monotonic()
    # Evict expired entries
    expired = [k for k, ts in _seen.items() if now - ts > DEDUP_WINDOW]
    for k in expired:
        del _seen[k]

    if msg_id in _seen:
        return True
    _seen[msg_id] = now
    return False

# ──────────────────────────────────────────────────────────────────────────────
# Forward via Gmail SMTP (with retries)
# ──────────────────────────────────────────────────────────────────────────────

def _build_forward(raw: bytes, rcpt_to: str) -> bytes:
    """
    Takes raw incoming bytes and wraps it for forwarding:
    - Adds X-Forwarded-* headers
    - Sets envelope From to the alias (SPF-safe)
    - Sets Reply-To to original sender
    - Keeps full original message intact
    """
    msg = message_from_bytes(raw)

    orig_from   = msg.get("From", "")
    orig_sender = msg.get("Reply-To") or orig_from
    orig_subj   = msg.get("Subject", "(no subject)")
    orig_date   = msg.get("Date", "")
    orig_msg_id = msg.get("Message-ID", make_msgid(domain=DOMAIN))

    # Preserve original headers we care about
    msg.replace_header("To", FORWARD_TO) if msg.get("To") else msg["To"] = FORWARD_TO

    # Keep original From visible, set Reply-To so replies go back to sender
    msg["Reply-To"] = orig_sender
    msg["X-Forwarded-To"]   = FORWARD_TO
    msg["X-Forwarded-For"]  = rcpt_to
    msg["X-Original-From"]  = orig_from
    msg["X-Original-To"]    = rcpt_to
    msg["X-Forwarder"]      = f"MI-Agro-Forwarder/{DOMAIN}"

    return msg.as_bytes(policy=msg.policy)


def _send_via_gmail(raw_forward: bytes, envelope_from: str, attempt: int = 1) -> None:
    try:
        with smtplib.SMTP("smtp.gmail.com", 587, timeout=30) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.ehlo()
            smtp.login(GMAIL_USER, GMAIL_APP_PASSWORD)
            smtp.sendmail(envelope_from, [FORWARD_TO], raw_forward)
        log.info("Forwarded OK → %s (attempt %d)", FORWARD_TO, attempt)

    except smtplib.SMTPRecipientsRefused as exc:
        log.error("Recipient refused: %s", exc)
        raise

    except (smtplib.SMTPException, OSError) as exc:
        if attempt < MAX_RETRIES:
            log.warning("SMTP error (attempt %d/%d): %s — retrying in %ds", attempt, MAX_RETRIES, exc, RETRY_DELAY)
            time.sleep(RETRY_DELAY * attempt)
            _send_via_gmail(raw_forward, envelope_from, attempt + 1)
        else:
            log.error("Forward FAILED after %d attempts: %s", MAX_RETRIES, exc)
            raise


# ──────────────────────────────────────────────────────────────────────────────
# SMTP Handler
# ──────────────────────────────────────────────────────────────────────────────

class ForwardingHandler:
    async def handle_RCPT(
        self,
        server: SMTP,
        session: Session,
        envelope: Envelope,
        address: str,
        rcpt_options: list[str],
    ) -> str:
        normalized = address.lower().strip()
        if normalized not in ALIASES:
            log.warning("Rejected RCPT TO <%s> — not in alias list", address)
            return "550 5.1.1 User not found"
        envelope.rcpt_tos.append(address)
        return "250 OK"

    async def handle_DATA(
        self,
        server: SMTP,
        session: Session,
        envelope: Envelope,
    ) -> str:
        raw: bytes = envelope.content  # type: ignore[assignment]
        msg = message_from_bytes(raw)

        orig_from   = envelope.mail_from or msg.get("From", "unknown")
        rcpt_to     = ", ".join(envelope.rcpt_tos)
        subject     = msg.get("Subject", "(no subject)")
        msg_id      = msg.get("Message-ID") or hashlib.sha256(raw[:512]).hexdigest()

        log.info("Received: From=<%s> To=<%s> Subject=%r MsgID=%s", orig_from, rcpt_to, subject, msg_id)

        if _is_duplicate(msg_id):
            log.info("Duplicate skipped: %s", msg_id)
            return "250 OK (duplicate suppressed)"

        # Use first matching alias as envelope from (SPF-safe)
        first_alias = envelope.rcpt_tos[0] if envelope.rcpt_tos else f"noreply@{DOMAIN}"

        try:
            forward_raw = _build_forward(raw, rcpt_to)
            # Run blocking SMTP in thread pool so we don't block the event loop
            loop = asyncio.get_event_loop()
            await loop.run_in_executor(None, _send_via_gmail, forward_raw, first_alias)
        except Exception as exc:
            log.error("Failed to forward message %s: %s", msg_id, exc)
            return "451 4.3.0 Temporary failure, try again later"

        return "250 OK"


# ──────────────────────────────────────────────────────────────────────────────
# Entrypoint
# ──────────────────────────────────────────────────────────────────────────────

def main() -> None:
    log.info("Starting MI-Agro Email Forwarder")
    log.info("Domain   : %s", DOMAIN)
    log.info("Aliases  : %s", ", ".join(sorted(ALIASES)))
    log.info("Forward → : %s", FORWARD_TO)
    log.info("Listen   : %s:%d", LISTEN_HOST, LISTEN_PORT)

    handler    = ForwardingHandler()
    controller = Controller(handler, hostname=LISTEN_HOST, port=LISTEN_PORT)

    controller.start()
    log.info("SMTP server ready on %s:%d", LISTEN_HOST, LISTEN_PORT)

    try:
        asyncio.get_event_loop().run_forever()
    except KeyboardInterrupt:
        log.info("Shutting down…")
    finally:
        controller.stop()


if __name__ == "__main__":
    main()
