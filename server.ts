import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

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
    const { orderId, customer, items, subtotal, totalBags, paymentMethod, createdAt } = req.body;

    if (!customer || !customer.name || !customer.phone || !customer.address || !items || !items.length) {
      return res.status(400).json({ error: "Missing required order fields" });
    }

    const currentOrderId = orderId || `MIA-${Date.now().toString().slice(-6)}`;
    const gmailUser = process.env.GMAIL_USER || "miunifyldagroltd@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    // Generate table rows for ordered items
    const itemsTableRows = items.map((item: any, idx: number) => {
      const name = item.nameBn || item.nameEn || item.name || 'Product';
      const bag = item.bagSize || '50 kg';
      const qty = item.quantity || 1;
      const unitPrice = item.unitPrice ? `৳${Number(item.unitPrice).toLocaleString()}` : 'দর যাচাই';
      const lineTotal = item.lineTotal ? `৳${Number(item.lineTotal).toLocaleString()}` : 'দর যাচাই';
      return `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px;">
            <strong>${idx + 1}. ${name}</strong><br>
            <span style="color: #64748b; font-size: 12px;">${bag}</span>
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: center; font-size: 14px;">${qty}</td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-size: 14px;">${unitPrice}</td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-size: 14px; font-weight: bold;">${lineTotal}</td>
        </tr>
      `;
    }).join("");

    const textItemsList = items.map((item: any, idx: number) => {
      const name = item.nameBn || item.nameEn || item.name || 'Product';
      const bag = item.bagSize || '50 kg';
      const qty = item.quantity || 1;
      const lineTotal = item.lineTotal ? `৳${Number(item.lineTotal).toLocaleString()}` : 'দর যাচাই';
      return `${idx + 1}. ${name} (${bag}) x ${qty} = ${lineTotal}`;
    }).join("\n");

    const formattedTotal = `৳${Number(subtotal || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

    console.log(`[Order Received] ID: ${currentOrderId} | Customer: ${customer.name} (${customer.phone}) | Total: ${formattedTotal} | Bags: ${totalBags}`);

    if (gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const mailOptions = {
        from: `"MI-Agro Order Desk" <${gmailUser}>`,
        to: "miunifyldagroltd@gmail.com",
        replyTo: customer.email || "info@miunifyldagroltd.com",
        subject: `🛒 New Order #${currentOrderId} - ${customer.name} - ${formattedTotal}`,
        text: `
NEW ORDER RECEIVED - MI UNIFYLD AGRO LTD
Order ID: ${currentOrderId}
Date: ${createdAt || new Date().toISOString()}

CUSTOMER DETAILS:
Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email || 'N/A'}
Address: ${customer.address}
${customer.notes ? `Special Notes: ${customer.notes}\n` : ''}Payment Method: ${paymentMethod || 'Cash on Delivery'}

ITEMS ORDERED:
${textItemsList}

Total Bags: ${totalBags || items.length}
GRAND TOTAL: ${formattedTotal}

Action required: Call ${customer.phone} to confirm delivery and complete order.
        `,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px; color: #1e293b;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
              <div style="background: #003300; padding: 24px; text-align: center; color: #ffffff;">
                <h1 style="margin: 0; font-size: 22px; letter-spacing: 1px;">MI UNIFYLD AGRO LTD</h1>
                <p style="margin: 5px 0 0 0; color: #f59e0b; font-size: 13px; font-weight: bold;">NEW ONLINE ORDER NOTIFICATION</p>
              </div>

              <div style="padding: 24px;">
                <div style="background: #f1f5f9; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                  <div style="font-size: 15px; font-weight: bold; color: #0f172a; margin-bottom: 6px;">
                    Order ID: <span style="color: #ea580c;">${currentOrderId}</span>
                  </div>
                  <div style="font-size: 12px; color: #64748b;">
                    Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })}
                  </div>
                </div>

                <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #003300; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                  Customer & Delivery Information
                </h3>
                <table style="width: 100%; margin-bottom: 20px; font-size: 14px;">
                  <tr>
                    <td style="width: 120px; color: #64748b; padding: 4px 0;"><strong>Customer Name:</strong></td>
                    <td style="padding: 4px 0;"><strong>${customer.name}</strong></td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; padding: 4px 0;"><strong>Phone:</strong></td>
                    <td style="padding: 4px 0;"><a href="tel:${customer.phone}" style="color: #0284c7; text-decoration: none; font-weight: bold;">${customer.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; padding: 4px 0;"><strong>Email:</strong></td>
                    <td style="padding: 4px 0;"><a href="mailto:${customer.email}" style="color: #0284c7; text-decoration: none;">${customer.email || 'N/A'}</a></td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; padding: 4px 0;"><strong>Address:</strong></td>
                    <td style="padding: 4px 0;">${customer.address}</td>
                  </tr>
                  ${customer.notes ? `
                  <tr>
                    <td style="color: #64748b; padding: 4px 0;"><strong>Notes:</strong></td>
                    <td style="padding: 4px 0; color: #b45309;"><em>${customer.notes}</em></td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="color: #64748b; padding: 4px 0;"><strong>Payment:</strong></td>
                    <td style="padding: 4px 0;"><span style="background: #dcfce7; color: #166534; font-weight: bold; padding: 2px 8px; border-radius: 4px;">${paymentMethod || 'Cash on Delivery'}</span></td>
                  </tr>
                </table>

                <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #003300; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                  Ordered Products (${totalBags || items.length} Bags)
                </h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <thead>
                    <tr style="background: #f8fafc; color: #475569; font-size: 12px; text-transform: uppercase;">
                      <th style="padding: 10px; text-align: left; border-bottom: 2px solid #e2e8f0;">Product</th>
                      <th style="padding: 10px; text-align: center; border-bottom: 2px solid #e2e8f0;">Qty</th>
                      <th style="padding: 10px; text-align: right; border-bottom: 2px solid #e2e8f0;">Price</th>
                      <th style="padding: 10px; text-align: right; border-bottom: 2px solid #e2e8f0;">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itemsTableRows}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3" style="padding: 12px 10px; text-align: right; font-weight: bold; font-size: 15px;">Grand Total:</td>
                      <td style="padding: 12px 10px; text-align: right; font-weight: bold; font-size: 18px; color: #ea580c;">${formattedTotal}</td>
                    </tr>
                  </tfoot>
                </table>

                <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 14px; border-radius: 6px; font-size: 13px; color: #92400e;">
                  <strong>Action Required:</strong> Call customer at <strong><a href="tel:${customer.phone}" style="color: #b45309; text-decoration: underline;">${customer.phone}</a></strong> to confirm the order, schedule delivery, and complete the order.
                </div>
              </div>

              <div style="background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
                MI UNIFYLD AGRO LTD | Uttara, Dhaka 1230 | +880 1817 875139
              </div>
            </div>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`[Order Email Sent] Order #${currentOrderId} notification sent to ${gmailUser}`);
      } catch (err) {
        console.error("Error sending order email:", err);
      }
    } else {
      console.warn("GMAIL_APP_PASSWORD not set. Order logged locally.");
    }

    return res.status(200).json({ success: true, orderId: currentOrderId });
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
