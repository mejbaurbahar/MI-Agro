<?php
/**
 * MI UNIFYLD AGRO LTD - Order Notification Handler
 * For Apache / cPanel / Linux Web Hosting
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

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['customer']) || !isset($data['items'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid order payload']);
    exit;
}

$orderId = isset($data['orderId']) ? $data['orderId'] : ('MIA-' . date('Ymd') . '-' . rand(1000, 9999));
$customer = $data['customer'];
$items = $data['items'];
$subtotal = isset($data['subtotal']) ? floatval($data['subtotal']) : 0;
$totalBags = isset($data['totalBags']) ? intval($data['totalBags']) : count($items);
$paymentMethod = isset($data['paymentMethod']) ? $data['paymentMethod'] : 'Cash on Delivery';

$name = htmlspecialchars($customer['name'] ?? 'N/A');
$phone = htmlspecialchars($customer['phone'] ?? 'N/A');
$email = htmlspecialchars($customer['email'] ?? 'N/A');
$address = htmlspecialchars($customer['address'] ?? 'N/A');
$notes = htmlspecialchars($customer['notes'] ?? '');

// Format item rows
$itemsHtml = '';
$itemsText = '';
$counter = 1;

foreach ($items as $item) {
    $iName = htmlspecialchars($item['nameBn'] ?? $item['nameEn'] ?? 'Product');
    $iBag = htmlspecialchars($item['bagSize'] ?? '50 kg');
    $iQty = intval($item['quantity'] ?? 1);
    $iUnitPrice = isset($item['unitPrice']) && $item['unitPrice'] ? '৳' . number_format($item['unitPrice'], 2) : 'দর যাচাই';
    $iLineTotal = isset($item['lineTotal']) && $item['lineTotal'] ? '৳' . number_format($item['lineTotal'], 2) : 'দর যাচাই';

    $itemsHtml .= "<tr>
        <td style='padding: 10px; border-bottom: 1px solid #e2e8f0; font-size: 14px;'><strong>{$iName}</strong><br><span style='color: #64748b; font-size: 12px;'>{$iBag}</span></td>
        <td style='padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: center; font-size: 14px;'>{$iQty}</td>
        <td style='padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-size: 14px;'>{$iUnitPrice}</td>
        <td style='padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-size: 14px; font-weight: bold;'>{$iLineTotal}</td>
    </tr>";

    $itemsText .= "{$counter}. {$iName} ({$iBag}) x {$iQty} = {$iLineTotal}\n";
    $counter++;
}

$formattedTotal = '৳' . number_format($subtotal, 2);
$timestamp = date('d M Y, h:i A T');

// HTML Email Body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>New Order Notification - {$orderId}</title>
</head>
<body style='font-family: Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b;'>
  <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;'>
    <div style='background: #003300; padding: 24px; text-align: center; color: #ffffff;'>
      <h1 style='margin: 0; font-size: 22px; letter-spacing: 1px;'>MI UNIFYLD AGRO LTD</h1>
      <p style='margin: 5px 0 0 0; color: #f59e0b; font-size: 13px; font-weight: bold;'>NEW CUSTOMER ORDER RECEIVED</p>
    </div>

    <div style='padding: 24px;'>
      <div style='background: #f1f5f9; padding: 16px; border-radius: 8px; margin-bottom: 20px;'>
        <div style='font-size: 15px; font-weight: bold; color: #0f172a; margin-bottom: 6px;'>
          Order ID: <span style='color: #ea580c;'>{$orderId}</span>
        </div>
        <div style='font-size: 12px; color: #64748b;'>
          Received at: {$timestamp}
        </div>
      </div>

      <h3 style='margin: 0 0 12px 0; font-size: 16px; color: #003300; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;'>
        Customer & Delivery Details
      </h3>
      <table style='width: 100%; margin-bottom: 20px; font-size: 14px;'>
        <tr>
          <td style='width: 120px; color: #64748b; padding: 4px 0;'><strong>Name:</strong></td>
          <td style='padding: 4px 0;'><strong>{$name}</strong></td>
        </tr>
        <tr>
          <td style='color: #64748b; padding: 4px 0;'><strong>Phone:</strong></td>
          <td style='padding: 4px 0;'><a href='tel:{$phone}' style='color: #0284c7; text-decoration: none; font-weight: bold;'>{$phone}</a></td>
        </tr>
        <tr>
          <td style='color: #64748b; padding: 4px 0;'><strong>Email:</strong></td>
          <td style='padding: 4px 0;'><a href='mailto:{$email}' style='color: #0284c7; text-decoration: none;'>{$email}</a></td>
        </tr>
        <tr>
          <td style='color: #64748b; padding: 4px 0;'><strong>Address:</strong></td>
          <td style='padding: 4px 0;'>{$address}</td>
        </tr>" . ($notes ? "<tr>
          <td style='color: #64748b; padding: 4px 0;'><strong>Notes:</strong></td>
          <td style='padding: 4px 0; color: #b45309;'><em>{$notes}</em></td>
        </tr>" : "") . "
        <tr>
          <td style='color: #64748b; padding: 4px 0;'><strong>Payment:</strong></td>
          <td style='padding: 4px 0;'><span style='background: #dcfce7; color: #166534; font-weight: bold; padding: 2px 8px; border-radius: 4px;'>{$paymentMethod}</span></td>
        </tr>
      </table>

      <h3 style='margin: 0 0 12px 0; font-size: 16px; color: #003300; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;'>
        Ordered Products ({$totalBags} Bags)
      </h3>
      <table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>
        <thead>
          <tr style='background: #f8fafc; color: #475569; font-size: 12px; text-transform: uppercase;'>
            <th style='padding: 10px; text-align: left; border-bottom: 2px solid #e2e8f0;'>Product</th>
            <th style='padding: 10px; text-align: center; border-bottom: 2px solid #e2e8f0;'>Qty</th>
            <th style='padding: 10px; text-align: right; border-bottom: 2px solid #e2e8f0;'>Price</th>
            <th style='padding: 10px; text-align: right; border-bottom: 2px solid #e2e8f0;'>Total</th>
          </tr>
        </thead>
        <tbody>
          {$itemsHtml}
        </tbody>
        <tfoot>
          <tr>
            <td colspan='3' style='padding: 12px 10px; text-align: right; font-weight: bold; font-size: 15px;'>Grand Total:</td>
            <td style='padding: 12px 10px; text-align: right; font-weight: bold; font-size: 18px; color: #ea580c;'>{$formattedTotal}</td>
          </tr>
        </tfoot>
      </table>

      <div style='background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 4px; font-size: 13px; color: #92400e;'>
        <strong>Next Step:</strong> Please call the customer at <strong><a href='tel:{$phone}' style='color: #b45309;'>{$phone}</a></strong> to confirm the order delivery schedule and dispatch the bags.
      </div>
    </div>

    <div style='background: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;'>
      MI UNIFYLD AGRO LTD | Polwel Carnation Shopping Center, Sector 08, Uttara, Dhaka 1230<br>
      Hotline: +880 1817 875139 | +880 1897 789766
    </div>
  </div>
</body>
</html>
";

// Plain text alternative
$textBody = "NEW ORDER RECEIVED - MI UNIFYLD AGRO LTD\n" .
    "Order ID: {$orderId}\n" .
    "Time: {$timestamp}\n\n" .
    "CUSTOMER DETAILS:\n" .
    "Name: {$name}\n" .
    "Phone: {$phone}\n" .
    "Email: {$email}\n" .
    "Address: {$address}\n" .
    ($notes ? "Notes: {$notes}\n" : "") .
    "Payment: {$paymentMethod}\n\n" .
    "ITEMS ORDERED:\n" .
    "{$itemsText}\n" .
    "TOTAL: {$formattedTotal} ({$totalBags} Bags)\n\n" .
    "Call {$phone} to confirm and dispatch.";

$to = 'miunifyldagroltd@gmail.com';
$subject = "🛒 New Order #{$orderId} - {$name} - {$formattedTotal}";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: MI UNIFYLD AGRO Orders <info@miunifyldagroltd.com>\r\n";
if (!empty($customer['email']) && filter_var($customer['email'], FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: {$name} <" . $customer['email'] . ">\r\n";
} else {
    $headers .= "Reply-To: info@miunifyldagroltd.com\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion();

$mailSent = @mail($to, $subject, $htmlBody, $headers);

// Backup log in public/api/orders.log
$logEntry = date('Y-m-d H:i:s') . " | {$orderId} | {$name} | {$phone} | {$formattedTotal} | Sent: " . ($mailSent ? 'YES' : 'NO') . "\n";
@file_put_contents(__DIR__ . '/orders.log', $logEntry, FILE_APPEND);

echo json_encode([
    'success' => true,
    'orderId' => $orderId,
    'emailSent' => $mailSent
]);
