/**
 * Order email templates for the Node server (mirrors public/api/order.php).
 * Every value that came from the customer is HTML-escaped before it is placed in markup.
 */

export interface OrderItemPayload {
  id?: string;
  nameEn?: string;
  nameBn?: string;
  name?: string;
  bagSize?: string;
  quantity?: number;
  unitPrice?: number | null;
  lineTotal?: number | null;
}

export interface OrderPayload {
  orderId?: string;
  customer: { name: string; phone: string; email?: string; address: string; notes?: string };
  items: OrderItemPayload[];
  subtotal?: number;
  totalBags?: number;
  paymentMethod?: string;
  language?: string;
  deliveryFee?: string;
  pageUrl?: string;
}

export interface BuiltEmail {
  subject: string;
  html: string;
  text: string;
}

const COMPANY = 'MI UNIFYLD AGRO LTD';
const SITE_URL = 'https://www.miunifyldagroltd.com';

// Product id is whitelisted so URLs can only point at our own site.
const productLinks = (id?: string) => {
  const pid = String(id ?? '').toLowerCase().replace(/[^a-z0-9-]/g, '');
  return {
    url: pid ? `${SITE_URL}/product/${pid}` : `${SITE_URL}/products/all`,
    image: pid ? `${SITE_URL}/products/${pid}.png` : '',
  };
};

export const esc = (value: unknown): string =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const multiline = (value: unknown) => esc(value).replace(/\r?\n/g, '<br>');
const money = (n: number) => `৳${Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const row = (label: string, valueHtml: string) => `
  <tr>
    <td style="width:130px;padding:8px 0;color:#64748b;font-size:13px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;vertical-align:top;">${valueHtml}</td>
  </tr>`;

function shell(badge: string, headline: string, intro: string, body: string, note: string): string {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(headline)}</title></head>
<body style="margin:0;padding:24px 12px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:#003300;padding:28px 24px;text-align:center;">
      <div style="color:#ffffff;font-size:22px;font-weight:bold;letter-spacing:1px;">${COMPANY}</div>
      <div style="margin-top:8px;display:inline-block;background:#f59e0b;color:#3b2300;font-size:11px;font-weight:bold;letter-spacing:1.5px;padding:4px 12px;border-radius:999px;">${esc(badge)}</div>
    </div>
    <div style="padding:26px 24px 8px 24px;">
      <h1 style="margin:0 0 8px 0;font-size:20px;color:#003300;">${esc(headline)}</h1>
      <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#475569;">${intro}</p>
    </div>
    <div style="padding:0 24px 24px 24px;">${body}${note}</div>
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:18px 24px;text-align:center;font-size:12px;line-height:1.7;color:#64748b;">
      <strong style="color:#334155;">${COMPANY}</strong><br>
      Polwel Carnation Shopping Center, Sector 08, Uttara, Dhaka 1230<br>
      Hotline: +880 1817 875139 &nbsp;|&nbsp; +880 1897 789766<br>
      <a href="https://www.miunifyldagroltd.com" style="color:#0284c7;text-decoration:none;">www.miunifyldagroltd.com</a>
    </div>
  </div>
</body></html>`;
}

export function buildOrderEmails(order: OrderPayload, orderId: string) {
  const { customer, items } = order;
  const totalBags = order.totalBags || items.reduce((n, i) => n + Math.max(1, Number(i.quantity) || 1), 0);
  const total = money(order.subtotal || 0);
  const payment = esc(order.paymentMethod || 'Cash on Delivery');
  const deliveryFee = esc(order.deliveryFee || 'To be confirmed');
  const language = order.language === 'en' ? 'English' : 'বাংলা (Bangla)';
  const placed = `${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka', dateStyle: 'medium', timeStyle: 'short' })} (BST)`;

  const itemRows = items
    .map((item, idx) => {
      const nameEn = esc(item.nameEn || item.name || 'Product');
      const nameBn = esc(item.nameBn || '');
      const sub = nameBn && nameBn !== nameEn ? `<br><span style="color:#64748b;font-size:12px;">${nameBn}</span>` : '';
      const unit = item.unitPrice ? money(item.unitPrice) : 'Call for price';
      const line = item.lineTotal ? money(item.lineTotal) : 'Call for price';
      const { url, image } = productLinks(item.id);
      const thumb = image
        ? `<a href="${url}"><img src="${image}" alt="${nameEn}" width="64" height="64" style="display:block;width:64px;height:64px;object-fit:cover;border-radius:8px;border:1px solid #e2e8f0;background:#f1f5f9;"></a>`
        : '';
      return `<tr>
        <td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;font-size:14px;">
          <table role="presentation" style="border-collapse:collapse;"><tr>
            <td style="padding:0 12px 0 0;vertical-align:top;">${thumb}</td>
            <td style="vertical-align:top;">
              <a href="${url}" style="color:#0f172a;text-decoration:none;"><strong>${idx + 1}. ${nameEn}</strong></a>${sub}<br>
              <span style="color:#64748b;font-size:12px;">${esc(item.bagSize || '50 kg')}</span><br>
              <a href="${url}" style="color:#0284c7;font-size:12px;text-decoration:none;">View product &rarr;</a>
            </td>
          </tr></table>
        </td>
        <td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:14px;">${Math.max(1, Number(item.quantity) || 1)}</td>
        <td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:14px;">${unit}</td>
        <td style="padding:12px 10px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:14px;font-weight:bold;">${line}</td>
      </tr>`;
    })
    .join('');

  const itemsText = items
    .map((item, idx) => {
      const unit = item.unitPrice ? money(item.unitPrice) : 'Call for price';
      const line = item.lineTotal ? money(item.lineTotal) : 'Call for price';
      return `${idx + 1}. ${item.nameEn || item.name || 'Product'} (${item.bagSize || '50 kg'}) x ${Math.max(1, Number(item.quantity) || 1)} @ ${unit} = ${line}\n   ${productLinks(item.id).url}`;
    })
    .join('\n');

  const itemsTable = `
    <h3 style="margin:24px 0 10px 0;font-size:15px;color:#003300;border-bottom:2px solid #e2e8f0;padding-bottom:6px;">Ordered Products (${totalBags} ${totalBags === 1 ? 'Bag' : 'Bags'})</h3>
    <table role="presentation" style="width:100%;border-collapse:collapse;">
      <thead><tr style="background:#f8fafc;color:#475569;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">
        <th style="padding:10px;text-align:left;border-bottom:2px solid #e2e8f0;">Product</th>
        <th style="padding:10px;text-align:center;border-bottom:2px solid #e2e8f0;">Qty</th>
        <th style="padding:10px;text-align:right;border-bottom:2px solid #e2e8f0;">Unit Price</th>
        <th style="padding:10px;text-align:right;border-bottom:2px solid #e2e8f0;">Total</th>
      </tr></thead>
      <tbody>${itemRows}</tbody>
      <tfoot>
        <tr><td colspan="3" style="padding:12px 10px 4px 10px;text-align:right;font-size:13px;color:#64748b;">Delivery Fee:</td><td style="padding:12px 10px 4px 10px;text-align:right;font-size:13px;color:#166534;font-weight:bold;">${deliveryFee}</td></tr>
        <tr><td colspan="3" style="padding:8px 10px;text-align:right;font-weight:bold;font-size:15px;">Grand Total:</td><td style="padding:8px 10px;text-align:right;font-weight:bold;font-size:20px;color:#ea580c;">${total}</td></tr>
      </tfoot>
    </table>`;

  const meta = `<div style="background:#f1f5f9;border-radius:10px;padding:14px 16px;margin-bottom:6px;">
    <div style="font-size:15px;font-weight:bold;color:#0f172a;">Order ID: <span style="color:#ea580c;">${esc(orderId)}</span></div>
    <div style="font-size:12px;color:#64748b;margin-top:4px;">Placed on ${esc(placed)}</div>
  </div>`;

  const phone = esc(customer.phone);
  const validEmail = !!customer.email && /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(customer.email);
  const emailCell = validEmail
    ? `<a href="mailto:${esc(customer.email)}" style="color:#0284c7;text-decoration:none;">${esc(customer.email)}</a>`
    : '<span style="color:#94a3b8;">Not provided</span>';
  const notesCell = customer.notes?.trim()
    ? `<em style="color:#b45309;">${multiline(customer.notes)}</em>`
    : '<span style="color:#94a3b8;">None</span>';

  const adminBody = `${meta}
    <h3 style="margin:22px 0 6px 0;font-size:15px;color:#003300;border-bottom:2px solid #e2e8f0;padding-bottom:6px;">Customer &amp; Delivery Details</h3>
    <table role="presentation" style="width:100%;border-collapse:collapse;">
      ${row('Full Name', esc(customer.name))}
      ${row('Phone', `<a href="tel:${phone}" style="color:#0284c7;text-decoration:none;">${phone}</a>`)}
      ${row('Email', emailCell)}
      ${row('Delivery Address', multiline(customer.address))}
      ${row('Special Notes', notesCell)}
      ${row('Payment Method', `<span style="background:#dcfce7;color:#166534;padding:2px 8px;border-radius:4px;">${payment}</span>`)}
      ${row('Customer Language', esc(language))}
      ${order.pageUrl ? row('Order Page', `<span style="font-weight:normal;font-size:12px;color:#64748b;">${esc(order.pageUrl)}</span>`) : ''}
    </table>${itemsTable}`;

  const adminNote = `<div style="margin-top:22px;background:#fef3c7;border-left:4px solid #f59e0b;padding:14px;border-radius:6px;font-size:13px;line-height:1.6;color:#92400e;"><strong>Action required:</strong> Call <a href="tel:${phone}" style="color:#b45309;font-weight:bold;">${phone}</a> to confirm the order, agree the delivery fee and schedule dispatch.</div>`;

  const admin: BuiltEmail = {
    subject: `New Order #${orderId} - ${customer.name} - ${total}`.replace(/[\r\n]+/g, " "),
    html: shell('NEW ORDER', `New order from ${customer.name}`, 'A customer has just placed an order on the website. All details they entered at checkout are below.', adminBody, adminNote),
    text: [
      `NEW ORDER - ${COMPANY}`,
      '==================================',
      `Order ID : ${orderId}`,
      `Placed   : ${placed}`,
      '',
      'CUSTOMER DETAILS',
      `Name     : ${customer.name}`,
      `Phone    : ${customer.phone}`,
      `Email    : ${customer.email || 'Not provided'}`,
      `Address  : ${customer.address}`,
      `Notes    : ${customer.notes?.trim() || 'None'}`,
      `Payment  : ${order.paymentMethod || 'Cash on Delivery'}`,
      `Language : ${language}`,
      '',
      `ITEMS (${totalBags} bags)`,
      itemsText,
      '',
      `Delivery fee: ${order.deliveryFee || 'To be confirmed'}`,
      `GRAND TOTAL: ${total}`,
      '',
      `Call ${customer.phone} to confirm and dispatch.`,
    ].join('\n'),
  };

  let customerCopy: BuiltEmail | null = null;
  if (validEmail) {
    const customerBody = `${meta}
      <h3 style="margin:22px 0 6px 0;font-size:15px;color:#003300;border-bottom:2px solid #e2e8f0;padding-bottom:6px;">Your Delivery Details</h3>
      <table role="presentation" style="width:100%;border-collapse:collapse;">
        ${row('Name', esc(customer.name))}
        ${row('Phone', phone)}
        ${row('Delivery Address', multiline(customer.address))}
        ${customer.notes?.trim() ? row('Special Notes', multiline(customer.notes)) : ''}
        ${row('Payment', payment)}
      </table>${itemsTable}`;
    const customerNote = `<div style="margin-top:22px;background:#ecfdf5;border-left:4px solid #16a34a;padding:14px;border-radius:6px;font-size:13px;line-height:1.6;color:#166534;"><strong>What happens next?</strong> Our sales team will call you on <strong>${phone}</strong> to confirm your order and arrange delivery. You pay in cash when the feed is delivered.</div>
      <p style="margin:18px 0 0 0;font-size:13px;color:#64748b;line-height:1.6;">ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে। আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।</p>`;

    customerCopy = {
      subject: `Your order #${orderId} has been received - ${COMPANY}`,
      html: shell('ORDER RECEIVED', `Thank you, ${customer.name}!`, 'We have received your order and it is now being processed. Here is a copy for your records.', customerBody, customerNote),
      text: [
        `Thank you for your order - ${COMPANY}`,
        '',
        `Order ID: ${orderId}`,
        `Placed: ${placed}`,
        '',
        `Name: ${customer.name}`,
        `Phone: ${customer.phone}`,
        `Address: ${customer.address}`,
        ...(customer.notes?.trim() ? [`Notes: ${customer.notes.trim()}`] : []),
        '',
        `ITEMS (${totalBags} bags)`,
        itemsText,
        `GRAND TOTAL: ${total}`,
        'Payment: Cash on Delivery',
        '',
        `Our team will call ${customer.phone} to confirm delivery.`,
        'Hotline: +880 1817 875139 | +880 1897 789766',
      ].join('\n'),
    };
  }

  return { admin, customerCopy, total, totalBags };
}
