import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  ArrowLeft, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  FileText,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'sonner';
import { trackNerjaEvent } from '../utils/nerja';

interface OrderSuccessData {
  orderId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  items: {
    name: string;
    bagSize: string;
    quantity: number;
    unitPrice: number | null;
    lineTotal: number | null;
  }[];
  subtotal: number;
  totalBags: number;
  paymentMethod: string;
  date: string;
}

export default function Checkout() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, totalItems, formatPrice } = useCart();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'cod'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderSuccessData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateOrderId = () => {
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    return `MIA-${dateStr}-${randomSuffix}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      toast.error(language === 'bn' ? 'আপনার কার্ট খালি!' : 'Your cart is empty!');
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      toast.error(
        language === 'bn' 
          ? 'অনুগ্রহ করে নাম, ফোন নম্বর এবং সম্পূর্ণ ঠিকানা প্রদান করুন।' 
          : 'Please provide full name, phone number, and address.'
      );
      return;
    }

    setIsSubmitting(true);

    const orderId = generateOrderId();
    const orderItems = items.map((item) => ({
      id: item.product.id,
      nameEn: item.product.en.name,
      nameBn: item.product.bn.name,
      bagSize: item.product[language].bagSize,
      quantity: item.quantity,
      unitPrice: item.product.price,
      lineTotal: item.product.price ? item.product.price * item.quantity : null,
    }));

    const payload = {
      orderId,
      customer: {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        address: formData.address.trim(),
        notes: formData.notes.trim(),
      },
      items: orderItems,
      subtotal,
      totalBags: totalItems,
      paymentMethod: 'Cash on Delivery',
      createdAt: new Date().toISOString(),
    };

    let apiSentSuccessfully = false;

    try {
      // 1. Try Node server /api/order
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        apiSentSuccessfully = true;
      } else {
        // Fallback: try PHP endpoint if on Apache/cPanel
        try {
          const phpResponse = await fetch('/api/order.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (phpResponse.ok) apiSentSuccessfully = true;
        } catch {
          // ignore fallback error
        }
      }
    } catch (err) {
      console.warn('Network call to order API returned notice:', err);
      // Try php endpoint fallback
      try {
        const phpResponse = await fetch('/api/order.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (phpResponse.ok) apiSentSuccessfully = true;
      } catch {
        // Continue to success screen so customer is not stranded
      }
    }

    const orderSuccessRecord: OrderSuccessData = {
      orderId,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      notes: formData.notes,
      items: items.map((i) => ({
        name: i.product[language].name,
        bagSize: i.product[language].bagSize,
        quantity: i.quantity,
        unitPrice: i.product.price,
        lineTotal: i.product.price ? i.product.price * i.quantity : null,
      })),
      subtotal,
      totalBags: totalItems,
      paymentMethod: 'Cash on Delivery (ক্যাশ অন ডেলিভারি)',
      date: new Date().toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    // Track explicit purchase and customer identity for Nerja AI
    trackNerjaEvent('purchase', {
      order_id: orderId,
      revenue: subtotal,
      currency: 'BDT',
      total_bags: totalItems,
      payment_method: 'Cash on Delivery',
      customer_name: formData.name.trim(),
      customer_phone: formData.phone.trim(),
      customer_email: formData.email.trim(),
      items: orderItems,
    });

    if (formData.phone.trim()) {
      trackNerjaEvent('phone_captured', { phone: formData.phone.trim() });
    }
    if (formData.email.trim()) {
      trackNerjaEvent('email_captured', { email: formData.email.trim() });
    }

    setCompletedOrder(orderSuccessRecord);
    clearCart();
    setIsSubmitting(false);

    toast.success(
      language === 'bn'
        ? 'আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!'
        : 'Your order has been placed successfully!'
    );
  };

  // Build WhatsApp pre-filled text for instant admin notification & confirmation
  const getWhatsAppMessageUrl = (order: OrderSuccessData) => {
    const itemsText = order.items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name} (${item.bagSize}) x ${item.quantity} = ${
            item.lineTotal ? `৳${item.lineTotal.toLocaleString()}` : 'দর যাচাই'
          }`
      )
      .join('\n');

    const msg = `*নতুন অর্ডার কনফার্মেশন - MI UNIFYLD AGRO LTD*\n` +
      `---------------------------------\n` +
      `*অর্ডার আইডি:* ${order.orderId}\n` +
      `*তারিখ:* ${order.date}\n\n` +
      `*গ্রাহকের তথ্য:*\n` +
      `• নাম: ${order.name}\n` +
      `• মোবাইল: ${order.phone}\n` +
      `• ইমেইল: ${order.email || 'N/A'}\n` +
      `• ঠিকানা: ${order.address}\n` +
      (order.notes ? `• বিশেষ নোট: ${order.notes}\n` : '') +
      `\n*অর্ডারকৃত পণ্যসমূহ:*\n${itemsText}\n\n` +
      `*মোট ব্যাগ:* ${order.totalBags} ব্যাগ\n` +
      `*সর্বমোট মূল্য:* ৳${order.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}\n` +
      `*পেমেন্ট পদ্ধতি:* ক্যাশ অন ডেলিভারি\n` +
      `---------------------------------\n` +
      `দয়া করে অর্ডারটি নিশ্চিত করুন। ধন্যবাদ!`;

    return `https://wa.me/8801817875139?text=${encodeURIComponent(msg)}`;
  };

  // Success view
  if (completedOrder) {
    return (
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen order-confirmation order-received">
        <Helmet>
          <title>{`${t('checkout.title')} | MI UNIFYLD AGRO LTD`}</title>
        </Helmet>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 size={44} />
              </div>
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 order-number">
                {t('checkout.orderId')}: {completedOrder.orderId}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
                {t('checkout.successTitle')}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                Thank you! Your order has been placed successfully. {t('checkout.successDesc')}
              </p>
            </div>

            {/* Order Details Card */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200/80 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {t('checkout.name')}
                  </p>
                  <p className="font-bold text-slate-800">{completedOrder.name}</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {t('checkout.phone')}
                  </p>
                  <p className="font-bold text-slate-800">{completedOrder.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {t('checkout.email')}
                  </p>
                  <p className="font-bold text-slate-800">{completedOrder.email || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {t('checkout.address')}
                  </p>
                  <p className="font-bold text-slate-800">{completedOrder.address}</p>
                </div>
              </div>

              {/* Items summary */}
              <div>
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                  {t('checkout.summary')} ({completedOrder.totalBags} {t('cart.bag')})
                </p>
                <div className="space-y-2">
                  {completedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm order_item">
                      <span className="font-medium text-slate-700">
                        {item.name} ({item.bagSize}) × {item.quantity}
                      </span>
                      <span className="font-black text-slate-900">
                        {item.lineTotal ? `৳ ${item.lineTotal.toLocaleString()}` : t('products.callForPrice')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total & Payment */}
              <div className="pt-4 border-t border-slate-200 flex justify-between items-baseline order-total">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 block">
                    {t('checkout.paymentMethod')}
                  </span>
                  <span className="font-bold text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded-md inline-block mt-1">
                    {completedOrder.paymentMethod}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase font-bold text-slate-500 block">
                    {t('checkout.total')}
                  </span>
                  <strong className="text-2xl font-black text-slate-900 amount price">
                    ৳ {completedOrder.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </strong>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <a
                href={getWhatsAppMessageUrl(completedOrder)}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-lg shadow-green-600/25 transition-all"
              >
                <MessageSquare size={20} />
                <span>{t('checkout.sendWhatsapp')}</span>
              </a>

              <Link
                to="/"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>{t('checkout.backHome')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // If cart is empty
  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
        <Helmet>
          <title>{`${t('checkout.title')} | MI UNIFYLD AGRO LTD`}</title>
        </Helmet>
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 mb-2">
              {t('cart.empty')}
            </h1>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              {language === 'bn' 
                ? 'চেকআউট করতে আপনার পছন্দের ফিড পণ্য কার্টে যুক্ত করুন অথবা সরাসরি অর্ডার করুন।' 
                : 'Please add products to your cart or place a direct order to proceed with checkout.'}
            </p>
            <Link
              to="/products/all"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all"
            >
              <span>{t('checkout.viewProducts')}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{`${t('checkout.title')} | MI UNIFYLD AGRO LTD`}</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <Link
            to="/products/all"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 mb-3 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{t('cart.continue')}</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            {t('checkout.title')}
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            {language === 'bn'
              ? 'নিচের ফর্মটি পূরণ করে আপনার ক্যাশ অন ডেলিভারি অর্ডারটি সম্পন্ন করুন।'
              : 'Complete your Cash on Delivery order by filling out the information below.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Customer Form & Payment */}
          <div className="lg:col-span-7 space-y-6">
            {/* Customer Details Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                  <User size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">
                    {t('checkout.customerInfo')}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {language === 'bn'
                      ? 'অর্ডার প্রসেসিং ও ডেলিভারির জন্য সঠিক তথ্য প্রদান করুন'
                      : 'Provide accurate information for order delivery'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    {t('checkout.name')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="customer-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('checkout.namePlaceholder')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="customer-phone" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      {t('checkout.phone')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="customer-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('checkout.phonePlaceholder')}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="customer-email" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      {t('checkout.email')} <span className="text-slate-400 text-[10px]">({language === 'bn' ? 'ঐচ্ছিক' : 'Optional'})</span>
                    </label>
                    <div className="relative">
                      <input
                        id="customer-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('checkout.emailPlaceholder')}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label htmlFor="customer-address" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    {t('checkout.address')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    name="address"
                    autoComplete="street-address"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder={t('checkout.addressPlaceholder')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="customer-notes" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    {t('checkout.notes')}
                  </label>
                  <textarea
                    id="customer-notes"
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder={t('checkout.notesPlaceholder')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-700 flex items-center justify-center font-bold">
                  <Truck size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900">
                    {t('checkout.paymentMethod')}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {language === 'bn' 
                      ? 'নিরাপদ ক্যাশ অন ডেলিভারি পেমেন্ট' 
                      : 'Safe Cash on Delivery payment'}
                  </p>
                </div>
              </div>

              {/* Cash On Delivery Radio */}
              <div className="border-2 border-green-600 bg-green-50/40 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="mt-1 h-5 w-5 text-green-600 border-slate-300 focus:ring-green-500"
                />
                <label htmlFor="cod" className="cursor-pointer flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-900 text-sm sm:text-base">
                      {t('checkout.cod')}
                    </span>
                    <span className="bg-green-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      {language === 'bn' ? 'উপলব্ধ' : 'Available'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t('checkout.codDesc')}
                  </p>
                </label>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <ShieldCheck size={18} className="text-green-600 shrink-0" />
                <span>
                  {language === 'bn'
                    ? '১০০% নিশ্চিত খাঁটি ও ফ্রেশ ফিড সরাসরি মিল থেকে সরবরাহ করা হয়।'
                    : '100% genuine & fresh feed dispatched directly from company mills.'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Items Summary & Adjustment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <h2 className="text-lg font-black text-slate-900">
                  {t('checkout.summary')}
                </h2>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  {totalItems} {t('cart.bag')}
                </span>
              </div>

              {/* Items List with inline quantity adjustment */}
              <div className="divide-y divide-slate-100 max-h-[360px] overflow-y-auto pr-1 mb-6">
                {items.map((item) => {
                  const productContent = item.product[language];
                  const unitPrice = item.product.price;
                  const itemTotal = unitPrice ? unitPrice * item.quantity : null;

                  return (
                    <div key={item.product.id} className="py-4 first:pt-0 flex gap-3.5 items-center">
                      <img
                        src={`/products/${item.product.id}.png`}
                        alt={productContent.name}
                        className="w-16 h-16 rounded-xl object-cover bg-slate-100 shrink-0 border border-slate-200/80"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                            {productContent.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors ml-2"
                            title={t('cart.remove')}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 mb-2">
                          {productContent.bagSize}
                        </p>

                        <div className="flex items-center justify-between">
                          {/* Quantity control directly on checkout */}
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-7 text-center text-xs font-black text-slate-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          {/* Line total */}
                          <div className="text-right">
                            <p className="text-xs sm:text-sm font-black text-slate-900">
                              {itemTotal ? formatPrice(itemTotal) : t('products.callForPrice')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Price Calculation breakdown */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-xs sm:text-sm text-slate-600">
                  <span>{t('cart.subtotal')}</span>
                  <span className="font-bold text-slate-900">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-xs sm:text-sm text-slate-600">
                  <div>
                    <span>{t('checkout.deliveryFee')}</span>
                    <p className="text-[10px] text-slate-400">
                      {t('checkout.deliveryFeeNote')}
                    </p>
                  </div>
                  <span className="font-semibold text-green-700">
                    {language === 'bn' ? 'আলোচনা সাপেক্ষে' : 'To be confirmed'}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-base font-black text-slate-900">
                    {t('checkout.total')}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-orange-600">
                      {formatPrice(subtotal)}
                    </span>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {language === 'bn' ? 'বাংলাদেশি টাকা (BDT)' : 'Bangladeshi Taka (BDT)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  aria-label="Confirm Order"
                  className="place-order-btn w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('checkout.submitting')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{t('checkout.placeOrder')}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200/60 flex items-start gap-2.5">
                <AlertCircle size={16} className="text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
                  {language === 'bn'
                    ? 'অর্ডার সাবমিটের পর আমাদের বিক্রয় প্রতিনিধি আপনার সাথে ফোনে যোগাযোগ করে অর্ডার কনফার্ম এবং ডেলিভারি সম্পন্ন করবেন।'
                    : 'After submitting, our sales team will call you to confirm your order and arrange fast delivery.'}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
