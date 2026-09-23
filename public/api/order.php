<?php
/**
 * MI UNIFYLD AGRO LTD - Order Notification Handler
 * For Apache / cPanel / Linux Web Hosting
 *
 * Sends two emails per order:
 *   1. Admin notification with EVERY field the customer entered at checkout.
 *   2. Customer confirmation copy (only if the customer gave a valid email).
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

const ADMIN_EMAIL = 'miunifyldagroltd@gmail.com';
const FROM_EMAIL = 'info@miunifyldagroltd.com';
const COMPANY = 'MI UNIFYLD AGRO LTD';

// ---------------------------------------------------------------- helpers

function esc($value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/** Strip CR/LF so user input can never inject extra mail headers. */
function headerSafe($value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', (string) $value));
}

function money($value): string
{
    return '৳' . number_format((float) $value, 2);
}

function encodeSubject(string $subject): string
{
    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
}

/** One label/value row in the details table. Skips empty values unless $always. */
function detailRow(string $label, string $valueHtml, bool $always = true): string
{
    if (!$always && trim(strip_tags($valueHtml)) === '') {
        return '';
    }
    return "<tr>
      <td style='width:130px;padding:8px 0;color:#64748b;font-size:13px;vertical-align:top;'>{$label}</td>
      <td style='padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;vertical-align:top;'>{$valueHtml}</td>
    </tr>";
}

/**
 * Shared HTML shell used by both emails. $intro sits under the banner,
 * $bodyHtml is the order content, $footerNote is the closing call-out.
 */
function renderTemplate(string $badge, string $headline, string $intro, string $bodyHtml, string $footerNote): string
{
    $company = esc(COMPANY);
    return "<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <title>" . esc($headline) . "</title>
</head>
<body style='margin:0;padding:24px 12px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#1e293b;'>
  <div style='max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;'>

    <div style='background:#003300;padding:28px 24px;text-align:center;'>
      <div style='color:#ffffff;font-size:22px;font-weight:bold;letter-spacing:1px;'>{$company}</div>
      <div style='margin-top:8px;display:inline-block;background:#f59e0b;color:#3b2300;font-size:11px;font-weight:bold;letter-spacing:1.5px;padding:4px 12px;border-radius:999px;'>" . esc($badge) . "</div>
    </div>

    <div style='padding:26px 24px 8px 24px;'>
      <h1 style='margin:0 0 8px 0;font-size:20px;color:#003300;'>" . esc($headline) . "</h1>
      <p style='margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#475569;'>{$intro}</p>
    </div>

    <div style='padding:0 24px 24px 24px;'>
      {$bodyHtml}
      {$footerNote}
    </div>

    <div style='background:#f8fafc;border-top:1px solid #e2e8f0;padding:18px 24px;text-align:center;font-size:12px;line-height:1.7;color:#64748b;'>
      <strong style='color:#334155;'>{$company}</strong><br>
      Polwel Carnation Shopping Center, Sector 08, Uttara, Dhaka 1230<br>
      Hotline: +880 1817 875139 &nbsp;|&nbsp; +880 1897 789766<br>
      <a href='https://www.miunifyldagroltd.com' style='color:#0284c7;text-decoration:none;'>www.miunifyldagroltd.com</a>
    </div>
  </div>
</body>
</html>";
}

/** Sends a multipart/alternative (text + HTML) message. */
function sendMultipart(string $to, string $subject, string $html, string $text, array $extraHeaders, string $envelopeFrom): bool
{
    $boundary = 'mia_' . md5(uniqid((string) mt_rand(), true));

    $headers = array_merge([
        'MIME-Version: 1.0',
        "Content-Type: multipart/alternative; boundary=\"{$boundary}\"",
        'From: ' . COMPANY . ' Orders <' . FROM_EMAIL . '>',
        'X-Mailer: PHP/' . phpversion(),
    ], $extraHeaders);

    $body = "--{$boundary}\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text)) . "\r\n"
        . "--{$boundary}\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html)) . "\r\n"
        . "--{$boundary}--";

    return (bool) @mail($to, encodeSubject($subject), $body, implode("\r\n", $headers), "-f{$envelopeFrom}");
}

// ---------------------------------------------------------------- input

$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data) || !isset($data['customer']) || !isset($data['items']) || !is_array($data['items'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid order payload']);
    exit;
}

$rawCustomer = $data['customer'];
$items = $data['items'];

$orderId = isset($data['orderId']) && $data['orderId'] !== ''
    ? preg_replace('/[^A-Za-z0-9\-]/', '', (string) $data['orderId'])
    : ('MIA-' . date('Ymd') . '-' . rand(1000, 9999));
$subtotal = isset($data['subtotal']) ? (float) $data['subtotal'] : 0.0;
$totalBags = isset($data['totalBags']) ? (int) $data['totalBags'] : 0;
$paymentMethod = esc($data['paymentMethod'] ?? 'Cash on Delivery');
$language = (($data['language'] ?? 'bn') === 'en') ? 'English' : 'বাংলা (Bangla)';
$deliveryFee = esc($data['deliveryFee'] ?? 'To be confirmed');
$pageUrl = esc($data['pageUrl'] ?? '');

$rawName = headerSafe($rawCustomer['name'] ?? '');
$name = esc($rawName);
$phone = esc($rawCustomer['phone'] ?? '');
$email = esc($rawCustomer['email'] ?? '');
$address = nl2br(esc($rawCustomer['address'] ?? ''));
$notes = nl2br(esc($rawCustomer['notes'] ?? ''));

$customerEmail = filter_var(trim($rawCustomer['email'] ?? ''), FILTER_VALIDATE_EMAIL) ?: '';

// Order timestamp in Dhaka time regardless of server timezone.
$now = new DateTime('now', new DateTimeZone('Asia/Dhaka'));
$timestamp = $now->format('d M Y, h:i A') . ' (BST)';

// ---------------------------------------------------------------- items

$itemsHtml = '';
$itemsText = '';
$counter = 1;
$computedBags = 0;

foreach ($items as $item) {
    $nameEn = esc($item['nameEn'] ?? $item['name'] ?? 'Product');
    $nameBn = esc($item['nameBn'] ?? '');
    $bag = esc($item['bagSize'] ?? '50 kg');
    $qty = max(1, (int) ($item['quantity'] ?? 1));
    $computedBags += $qty;

    $hasPrice = !empty($item['unitPrice']);
    $unitPrice = $hasPrice ? money($item['unitPrice']) : 'Call for price';
    $lineTotal = !empty($item['lineTotal']) ? money($item['lineTotal']) : 'Call for price';

    // Show the English (original) product name first, Bangla name beneath if different.
    $subName = ($nameBn !== '' && $nameBn !== $nameEn) ? "<br><span style='color:#64748b;font-size:12px;'>{$nameBn}</span>" : '';

    $itemsHtml .= "<tr>
      <td style='padding:12px 10px;border-bottom:1px solid #e2e8f0;font-size:14px;'>
        <strong style='color:#0f172a;'>{$counter}. {$nameEn}</strong>{$subName}<br>
        <span style='color:#64748b;font-size:12px;'>{$bag}</span>
      </td>
      <td style='padding:12px 10px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:14px;'>{$qty}</td>
      <td style='padding:12px 10px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:14px;'>{$unitPrice}</td>
      <td style='padding:12px 10px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:14px;font-weight:bold;'>{$lineTotal}</td>
    </tr>";

    $itemsText .= "{$counter}. " . html_entity_decode(strip_tags($nameEn), ENT_QUOTES, 'UTF-8')
        . ' (' . html_entity_decode($bag, ENT_QUOTES, 'UTF-8') . ") x {$qty} @ {$unitPrice} = {$lineTotal}\n";
    $counter++;
}

if ($totalBags <= 0) {
    $totalBags = $computedBags;
}

$formattedTotal = money($subtotal);

$itemsTable = "
<h3 style='margin:24px 0 10px 0;font-size:15px;color:#003300;border-bottom:2px solid #e2e8f0;padding-bottom:6px;'>
  Ordered Products ({$totalBags} " . ($totalBags === 1 ? 'Bag' : 'Bags') . ")
</h3>
<table role='presentation' style='width:100%;border-collapse:collapse;'>
  <thead>
    <tr style='background:#f8fafc;color:#475569;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;'>
      <th style='padding:10px;text-align:left;border-bottom:2px solid #e2e8f0;'>Product</th>
      <th style='padding:10px;text-align:center;border-bottom:2px solid #e2e8f0;'>Qty</th>
      <th style='padding:10px;text-align:right;border-bottom:2px solid #e2e8f0;'>Unit Price</th>
      <th style='padding:10px;text-align:right;border-bottom:2px solid #e2e8f0;'>Total</th>
    </tr>
  </thead>
  <tbody>{$itemsHtml}</tbody>
  <tfoot>
    <tr>
      <td colspan='3' style='padding:12px 10px 4px 10px;text-align:right;font-size:13px;color:#64748b;'>Delivery Fee:</td>
      <td style='padding:12px 10px 4px 10px;text-align:right;font-size:13px;color:#166534;font-weight:bold;'>{$deliveryFee}</td>
    </tr>
    <tr>
      <td colspan='3' style='padding:8px 10px;text-align:right;font-weight:bold;font-size:15px;'>Grand Total:</td>
      <td style='padding:8px 10px;text-align:right;font-weight:bold;font-size:20px;color:#ea580c;'>{$formattedTotal}</td>
    </tr>
  </tfoot>
</table>";

$orderMeta = "
<div style='background:#f1f5f9;border-radius:10px;padding:14px 16px;margin-bottom:6px;'>
  <div style='font-size:15px;font-weight:bold;color:#0f172a;'>Order ID: <span style='color:#ea580c;'>" . esc($orderId) . "</span></div>
  <div style='font-size:12px;color:#64748b;margin-top:4px;'>Placed on {$timestamp}</div>
</div>";

// ---------------------------------------------------------------- admin email

$emailCell = $customerEmail
    ? "<a href='mailto:" . esc($customerEmail) . "' style='color:#0284c7;text-decoration:none;'>{$email}</a>"
    : "<span style='color:#94a3b8;'>Not provided</span>";

$customerRows =
    detailRow('Full Name', $name)
    . detailRow('Phone', "<a href='tel:{$phone}' style='color:#0284c7;text-decoration:none;'>{$phone}</a>")
    . detailRow('Email', $emailCell)
    . detailRow('Delivery Address', $address)
    . detailRow('Special Notes', $notes !== '' ? "<em style='color:#b45309;'>{$notes}</em>" : "<span style='color:#94a3b8;'>None</span>")
    . detailRow('Payment Method', "<span style='background:#dcfce7;color:#166534;padding:2px 8px;border-radius:4px;'>{$paymentMethod}</span>")
    . detailRow('Customer Language', esc($language))
    . detailRow('Order Page', $pageUrl !== '' ? "<span style='font-weight:normal;font-size:12px;color:#64748b;'>{$pageUrl}</span>" : '', false);

$adminBody = $orderMeta . "
<h3 style='margin:22px 0 6px 0;font-size:15px;color:#003300;border-bottom:2px solid #e2e8f0;padding-bottom:6px;'>Customer &amp; Delivery Details</h3>
<table role='presentation' style='width:100%;border-collapse:collapse;'>{$customerRows}</table>
{$itemsTable}";

$adminNote = "<div style='margin-top:22px;background:#fef3c7;border-left:4px solid #f59e0b;padding:14px;border-radius:6px;font-size:13px;line-height:1.6;color:#92400e;'>
  <strong>Action required:</strong> Call <a href='tel:{$phone}' style='color:#b45309;font-weight:bold;'>{$phone}</a> to confirm the order, agree the delivery fee and schedule dispatch.
</div>";

$adminHtml = renderTemplate(
    'NEW ORDER',
    "New order from {$rawName}",
    'A customer has just placed an order on the website. All details they entered at checkout are below.',
    $adminBody,
    $adminNote
);

$plainName = html_entity_decode(strip_tags($name), ENT_QUOTES, 'UTF-8');
$plainPhone = html_entity_decode(strip_tags($phone), ENT_QUOTES, 'UTF-8');
$plainEmail = $email !== '' ? html_entity_decode($email, ENT_QUOTES, 'UTF-8') : 'Not provided';
$plainAddress = trim((string) ($rawCustomer['address'] ?? ''));
$plainNotes = trim((string) ($rawCustomer['notes'] ?? ''));

$adminText = "NEW ORDER - " . COMPANY . "\n"
    . "==================================\n"
    . "Order ID : {$orderId}\n"
    . "Placed   : {$timestamp}\n\n"
    . "CUSTOMER DETAILS\n"
    . "Name     : {$plainName}\n"
    . "Phone    : {$plainPhone}\n"
    . "Email    : {$plainEmail}\n"
    . "Address  : {$plainAddress}\n"
    . 'Notes    : ' . ($plainNotes !== '' ? $plainNotes : 'None') . "\n"
    . 'Payment  : ' . html_entity_decode($paymentMethod, ENT_QUOTES, 'UTF-8') . "\n"
    . "Language : {$language}\n\n"
    . "ITEMS ({$totalBags} bags)\n{$itemsText}\n"
    . 'Delivery fee: ' . html_entity_decode($deliveryFee, ENT_QUOTES, 'UTF-8') . "\n"
    . "GRAND TOTAL: {$formattedTotal}\n\n"
    . "Call {$plainPhone} to confirm and dispatch.";

$adminReplyTo = $customerEmail
    ? 'Reply-To: ' . trim(preg_replace('/[^\p{L}\p{N} .\'-]/u', '', headerSafe($plainName))) . ' <' . $customerEmail . '>'
    : 'Reply-To: ' . FROM_EMAIL;

$adminSent = sendMultipart(
    ADMIN_EMAIL,
    headerSafe("New Order #{$orderId} - {$plainName} - {$formattedTotal}"),
    $adminHtml,
    $adminText,
    [$adminReplyTo],
    FROM_EMAIL
);

// ---------------------------------------------------------------- customer copy

$customerSent = false;
if ($customerEmail !== '') {
    $customerBody = $orderMeta . "
<h3 style='margin:22px 0 6px 0;font-size:15px;color:#003300;border-bottom:2px solid #e2e8f0;padding-bottom:6px;'>Your Delivery Details</h3>
<table role='presentation' style='width:100%;border-collapse:collapse;'>"
        . detailRow('Name', $name)
        . detailRow('Phone', $phone)
        . detailRow('Delivery Address', $address)
        . detailRow('Special Notes', $notes, false)
        . detailRow('Payment', $paymentMethod)
        . "</table>{$itemsTable}";

    $customerNote = "<div style='margin-top:22px;background:#ecfdf5;border-left:4px solid #16a34a;padding:14px;border-radius:6px;font-size:13px;line-height:1.6;color:#166534;'>
  <strong>What happens next?</strong> Our sales team will call you on <strong>{$phone}</strong> to confirm your order and arrange delivery. Please keep your phone nearby. You pay in cash when the feed is delivered.
</div>
<p style='margin:18px 0 0 0;font-size:13px;color:#64748b;line-height:1.6;'>ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে। আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।</p>";

    $customerHtml = renderTemplate(
        'ORDER RECEIVED',
        "Thank you, {$rawName}!",
        'We have received your order and it is now being processed. Here is a copy for your records.',
        $customerBody,
        $customerNote
    );

    $customerText = "Thank you for your order - " . COMPANY . "\n\n"
        . "Order ID: {$orderId}\nPlaced: {$timestamp}\n\n"
        . "Name: {$plainName}\nPhone: {$plainPhone}\nAddress: {$plainAddress}\n"
        . ($plainNotes !== '' ? "Notes: {$plainNotes}\n" : '')
        . "\nITEMS ({$totalBags} bags)\n{$itemsText}\nGRAND TOTAL: {$formattedTotal}\n"
        . "Payment: Cash on Delivery\n\n"
        . "Our team will call {$plainPhone} to confirm delivery.\n"
        . "Hotline: +880 1817 875139 | +880 1897 789766";

    $customerSent = sendMultipart(
        $customerEmail,
        headerSafe('Your order #' . $orderId . ' has been received - ' . COMPANY),
        $customerHtml,
        $customerText,
        ['Reply-To: ' . ADMIN_EMAIL],
        FROM_EMAIL
    );
}

// ---------------------------------------------------------------- backup log

$logEntry = json_encode([
    'time' => $now->format('c'),
    'orderId' => $orderId,
    'name' => $plainName,
    'phone' => $plainPhone,
    'email' => $plainEmail,
    'address' => $plainAddress,
    'notes' => $plainNotes,
    'total' => $formattedTotal,
    'bags' => $totalBags,
    'items' => $itemsText,
    'adminEmailSent' => $adminSent,
    'customerEmailSent' => $customerSent,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n";
@file_put_contents(__DIR__ . '/orders.log', $logEntry, FILE_APPEND | LOCK_EX);

echo json_encode([
    'success' => true,
    'orderId' => $orderId,
    'emailSent' => $adminSent,
    'customerEmailSent' => $customerSent,
]);
