#!/usr/bin/env python3
"""
Test script — sends a test email to the local forwarder.
Run AFTER the forwarder is up: python test_forward.py
"""

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import sys

FORWARDER_HOST = "127.0.0.1"
FORWARDER_PORT = 25

TO_ALIAS = sys.argv[1] if len(sys.argv) > 1 else "info@miunifyldagroltd.com"

msg = MIMEMultipart("alternative")
msg["From"]    = "Test Sender <testsender@example.com>"
msg["To"]      = TO_ALIAS
msg["Subject"] = "Test Email — MI-Agro Forwarder"

body_text = "This is a plain text test email sent to the MI-Agro forwarder."
body_html = """\
<html><body>
<p>This is an <b>HTML test email</b> sent to the MI-Agro forwarder.</p>
<p>If you see this in Gmail, forwarding is working correctly.</p>
</body></html>"""

msg.attach(MIMEText(body_text, "plain"))
msg.attach(MIMEText(body_html, "html"))

with smtplib.SMTP(FORWARDER_HOST, FORWARDER_PORT, timeout=10) as smtp:
    smtp.set_debuglevel(1)
    smtp.sendmail("testsender@example.com", [TO_ALIAS], msg.as_bytes())
    print(f"\nOK — test email sent to {TO_ALIAS}")
    print("Check miunifyldagroltd@gmail.com inbox.")
