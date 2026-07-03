FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY forwarder.py .

# Port 25 = SMTP
EXPOSE 25

CMD ["python", "forwarder.py"]
