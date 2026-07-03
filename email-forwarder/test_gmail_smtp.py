#!/usr/bin/env python3
"""
Verify Gmail SMTP credentials before deploying the forwarder.
Run: python test_gmail_smtp.py
"""

import os
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv

load_dotenv()

GMAIL_USER         = os.environ["GMAIL_USER"]
GMAIL_APP_PASSWORD = os.environ["GMAIL_APP_PASSWORD"]

msg = MIMEText("Gmail SMTP credentials are working for MI-Agro Forwarder.")
msg["From"]    = GMAIL_USER
msg["To"]      = GMAIL_USER
msg["Subject"] = "MI-Agro Forwarder — SMTP Credential Test"

print(f"Testing SMTP login for {GMAIL_USER}...")
with smtplib.SMTP("smtp.gmail.com", 587, timeout=15) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()
    smtp.login(GMAIL_USER, GMAIL_APP_PASSWORD)
    smtp.sendmail(GMAIL_USER, [GMAIL_USER], msg.as_bytes())

print("SUCCESS — check Gmail inbox for the test email.")
