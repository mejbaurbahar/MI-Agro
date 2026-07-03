#!/usr/bin/env bash
# MI-Agro Email Forwarder — Linux VPS deploy script
# Run as root on Ubuntu/Debian: bash deploy.sh
set -euo pipefail

APP_DIR="/opt/mi-agro-forwarder"
SERVICE_USER="emailfwd"

echo "=== MI-Agro Email Forwarder Deployment ==="

# 1. System deps
apt-get update -q
apt-get install -y python3 python3-venv python3-pip

# 2. Create dedicated user (no login shell)
id "$SERVICE_USER" &>/dev/null || useradd --system --no-create-home --shell /usr/sbin/nologin "$SERVICE_USER"

# 3. App directory
mkdir -p "$APP_DIR/logs"
cp forwarder.py requirements.txt "$APP_DIR/"
chown -R "$SERVICE_USER:$SERVICE_USER" "$APP_DIR"

# 4. Virtual environment
python3 -m venv "$APP_DIR/venv"
"$APP_DIR/venv/bin/pip" install --no-cache-dir -r "$APP_DIR/requirements.txt"

# 5. .env file
if [[ ! -f "$APP_DIR/.env" ]]; then
    cp .env.example "$APP_DIR/.env"
    chmod 600 "$APP_DIR/.env"
    chown "$SERVICE_USER:$SERVICE_USER" "$APP_DIR/.env"
    echo ""
    echo "!!! Edit $APP_DIR/.env and set GMAIL_APP_PASSWORD before starting !!!"
    echo ""
fi

# 6. Systemd service
cp email-forwarder.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable email-forwarder
systemctl restart email-forwarder

echo "=== Done. Status:"
systemctl status email-forwarder --no-pager
