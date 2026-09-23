import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { buildOrderEmails, type OrderPayload } from "./orderEmail";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const gmailUser = process.env.GMAIL_USER || "miunifyldagroltd@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailPass) {
      console.error("GMAIL_APP_PASSWORD is not set in environment variables.");
      return res.status(500).json({ error: "Server configuration error. Please contact support." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`, // Gmail often rewrites 'from' to the authenticated user
      to: "miunifyldagroltd@gmail.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #003300;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  });

  // API Route for Checkout Orders
  app.post("/api/order", async (req, res) => {
    const order = req.body as OrderPayload;
    const { customer, items } = order || ({} as OrderPayload);

    if (!customer || !customer.name || !customer.phone || !customer.address || !Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: "Missing required order fields" });
    }

    const currentOrderId = String(order.orderId || `MIA-${Date.now().toString().slice(-6)}`).replace(/[^A-Za-z0-9-]/g, "");
    const gmailUser = process.env.GMAIL_USER || "miunifyldagroltd@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    const { admin, customerCopy, total, totalBags } = buildOrderEmails(order, currentOrderId);

    console.log(`[Order Received] ID: ${currentOrderId} | Customer: ${customer.name} (${customer.phone}) | Total: ${total} | Bags: ${totalBags}`);

    let emailSent = false;
    let customerEmailSent = false;

    if (gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });

      try {
        await transporter.sendMail({
          from: `"MI-Agro Order Desk" <${gmailUser}>`,
          to: "miunifyldagroltd@gmail.com",
          replyTo: customerCopy ? customer.email : "info@miunifyldagroltd.com",
          subject: admin.subject,
          text: admin.text,
          html: admin.html,
        });
        emailSent = true;
        console.log(`[Order Email Sent] Order #${currentOrderId} notification sent to admin`);
      } catch (err) {
        console.error("Error sending order email:", err);
      }

      if (customerCopy) {
        try {
          await transporter.sendMail({
            from: `"MI UNIFYLD AGRO LTD" <${gmailUser}>`,
            to: customer.email,
            replyTo: "miunifyldagroltd@gmail.com",
            subject: customerCopy.subject,
            text: customerCopy.text,
            html: customerCopy.html,
          });
          customerEmailSent = true;
        } catch (err) {
          console.error("Error sending customer confirmation:", err);
        }
      }
    } else {
      console.warn("GMAIL_APP_PASSWORD not set. Order logged locally.");
    }

    return res.status(200).json({ success: true, orderId: currentOrderId, emailSent, customerEmailSent });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
