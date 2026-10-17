import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products, getProductImage } from '../data/products';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { trackMetaViewContent, trackMetaContact } from '../utils/metaPixel';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Package, 
  Clock, 
  Droplets, 
  Wind, 
  MessageSquare, 
  Phone, 
  Mail, 
  ShoppingBag, 
  Plus, 
  Minus,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { addToCart, formatPrice } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fbfbfd]">
        <h1 className="text-xl font-bold mb-4 text-slate-900">{t('details.notFound')}</h1>
        <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold">
          <ArrowLeft size={16} /> {t('404.back')}
        </Link>
      </div>
    );
  }

  const content = product[language];
  const productImage = getProductImage(product);

  // Track Meta ViewContent for retargeting / automated messaging
  useEffect(() => {
    if (product) {
      trackMetaViewContent({
        id: product.id,
        name: product.en.name,
        price: product.price,
        category: product.category,
      });
    }
  }, [product?.id]);

  const handleDirectOrder = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="bg-[#fbfbfd] text-slate-900 min-h-screen product-card" data-product-id={product.id} itemScope itemType="https://schema.org/Product">
      <Helmet>
        <title>{`${content.name} | MI UNIFYLD AGRO LTD`}</title>
        <meta name="description" content={content.tagline} />
      </Helmet>

      {/* Hero Showcase — Agro Farm Product Stage */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#021f0a] via-[#032d10] to-[#011405] text-white overflow-hidden border-b border-emerald-500/20">
        {/* Soft Ambient Radial Background Lights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Pill */}
          <Link
            to="/products/all"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-200 hover:text-white border border-emerald-500/20 text-xs font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={13} />
            <span>{t('details.back')}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: Product Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-amber-300 text-[11px] font-bold tracking-tight mb-4 backdrop-blur-md">
                <Sparkles size={12} />
                <span>{content.phase}</span>
              </div>

              <h1 itemProp="name" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-[1.1] text-white product-title">
                {content.name}
              </h1>

              <p itemProp="description" className="text-base sm:text-lg text-emerald-100 italic mb-8 leading-relaxed font-medium">
                "{content.tagline}"
              </p>

              {/* Quick Spec Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/25">
                  <Clock size={16} className="text-amber-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-emerald-300/80 font-bold">{t('details.duration')}</p>
                    <p className="text-xs font-bold text-white">{content.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/25">
                  <Package size={16} className="text-amber-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-emerald-300/80 font-bold">{t('details.packaging')}</p>
                    <p className="text-xs font-bold text-white">{content.bagSize}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Studio Showcase Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto bg-gradient-to-b from-white/[0.12] to-white/[0.03] p-8 sm:p-12 rounded-[2.5rem] border border-emerald-500/30 shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={productImage}
                  alt={content.name}
                  width={600}
                  height={600}
                  itemProp="image"
                  className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Floating Price Tag */}
                <div className="absolute bottom-6 right-6">
                  <div
                    className="bg-white/95 apple-blur text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/60 flex flex-col items-end"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{t('products.price')}</p>
                    <p className="text-lg font-bold text-slate-900 price-tag">
                      {product.price ? (
                        <span itemProp="price" content={String(product.price)}>
                          {formatPrice(product.price)}
                        </span>
                      ) : (
                        t('products.callForPrice')
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid — Apple Tech Specs Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          
          {/* Left Column: Tech Specs & Overview (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview Section */}
            <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/70 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {t('details.overview')}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {content.description}
              </p>

              {/* Physical Characteristics & Growth Performance */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
                    {t('details.characteristics')}
                  </h3>
                  <div className="divide-y divide-slate-100">
                    {content.characteristics.map((c, i) => (
                      <div key={i} className="flex justify-between items-center py-2.5 text-xs sm:text-sm">
                        <span className="text-slate-500 font-medium">{c.label}</span>
                        <span className="text-slate-900 font-semibold">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
                    {t('details.performance')}
                  </h3>
                  <div className="divide-y divide-slate-100">
                    {content.performance.map((p, i) => (
                      <div key={i} className="flex justify-between items-center py-2.5 text-xs sm:text-sm">
                        <span className="text-slate-500 font-medium">{p.label}</span>
                        <span className="text-slate-900 font-semibold">{p.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Nutritional Analysis Table */}
            <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/70 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                {t('details.nutritional')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {content.nutritional.map((n, i) => (
                  <div key={i} className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                      {n.label}
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      {n.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Multi-Season Environmental Stability */}
            <section className="bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-white/[0.08] shadow-xl">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">
                  {language === 'bn' ? 'আবহাওয়া অভিযোজন' : 'Climate Resilience'}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {t('details.seasonal')}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Zap size={18} />
                    <h3 className="text-xs font-bold tracking-wide">{t('details.summer')}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'bn' 
                      ? 'বেটেইন + ইলেক্ট্রোলাইট ফর্মুলা যা হিট স্ট্রেস কমায় এবং পানিশূন্যতা রোধ করে।' 
                      : 'Betaine + Electrolytes provide heat stress defense and prevent feed refusal.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-blue-400 mb-3">
                    <Droplets size={18} />
                    <h3 className="text-xs font-bold tracking-wide">{t('details.monsoon')}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'bn' 
                      ? 'টক্সিন বাইন্ডার ও অ্যান্টিঅক্সিডেন্ট আর্দ্রতায় ফাঙ্গাস আক্রমণ প্রতিরোধ করে।' 
                      : 'Toxin binders and antioxidants shield liver and gut from fungal mycotoxins.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-indigo-400 mb-3">
                    <Wind size={18} />
                    <h3 className="text-xs font-bold tracking-wide">{t('details.winter')}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'bn' 
                      ? 'উচ্চ মেটাবলিক এনার্জি যা শীতকালে শরীরের তাপমাত্রা ও বৃদ্ধি অবিচল রাখে।' 
                      : 'High metabolic energy ensures uninterrupted growth velocity in cold conditions.'}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Purchasing Dock (1 col) */}
          <div className="space-y-8">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/70 shadow-xs lg:sticky lg:top-28">
              
              {/* Pricing Display */}
              <div className="mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {t('products.price')}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {product.price ? formatPrice(product.price) : t('products.callForPrice')}
                  </span>
                  {product.price && (
                    <span className="text-xs text-slate-500 font-semibold">
                      / {content.bagSize}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-emerald-700 font-medium mt-1">
                  {language === 'bn' ? '✓ ক্যাশ অন ডেলিভারি এবং দ্রুত সরবরাহ' : '✓ Cash on Delivery & Direct Delivery'}
                </p>
              </div>

              {/* Quantity Stepper */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {language === 'bn' ? 'পরিমাণ (ব্যাগ সংখ্যা)' : 'Quantity (Bags)'}
                </label>
                <div className="flex items-center justify-between p-1.5 rounded-full bg-slate-100 border border-slate-200/60">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-slate-200/60 shadow-xs transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-base font-bold text-slate-900 px-4">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-slate-200/60 shadow-xs transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {product.price && quantity > 1 && (
                  <p className="text-xs text-right text-slate-500 font-medium mt-2">
                    {language === 'bn' ? 'সর্বমোট: ' : 'Total: '}
                    <span className="text-slate-900 font-bold">{formatPrice(product.price * quantity)}</span>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 mb-8">
                <button
                  onClick={handleDirectOrder}
                  aria-label="Buy now"
                  className="buy-now-btn w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 rounded-full font-black text-xs tracking-tight shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>{t('order.directOrder')}</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => addToCart(product, quantity)}
                  aria-label="Add to cart"
                  data-action="cart"
                  className="add-to-cart-btn w-full py-3 bg-[#021f0a] hover:bg-emerald-900 text-white rounded-full font-bold text-xs tracking-tight transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                  <ShoppingBag size={14} />
                  <span>{t('order.addToCart')}</span>
                </button>
              </div>

              {/* Key Advantages */}
              <div className="mb-8 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {t('details.advantages')}
                </h4>
                <div className="space-y-2">
                  {content.advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Communication Channels */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900 mb-3">
                  {t('details.interested')}
                </p>
                <div className="space-y-2">
                  <a
                    href={`https://m.me/61594281573717?ref=${encodeURIComponent(product.id)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackMetaContact('Facebook_Messenger_Product', { product_id: product.id, product_name: content.name })}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0084FF] hover:bg-[#0073e6] text-white rounded-full font-semibold text-xs transition-colors"
                  >
                    <span>{language === 'bn' ? 'ফেসবুক মেসেঞ্জারে সরাসরি কথা বলুন' : 'Chat on Facebook Messenger'}</span>
                  </a>

                  <a
                    href={`https://wa.me/8801817875139?text=${encodeURIComponent(`Hello MI UNIFYLD AGRO LTD, I want to inquire about ${content.name}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackMetaContact('WhatsApp_Product', { product_id: product.id })}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full font-semibold text-xs transition-colors"
                  >
                    <MessageSquare size={14} />
                    <span>{t('contact.whatsapp')}</span>
                  </a>

                  <a
                    href="tel:+8801817875139"
                    onClick={() => trackMetaContact('Hotline_Call_Product', { product_id: product.id })}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full font-semibold text-xs transition-colors"
                  >
                    <Phone size={14} />
                    <span>{t('nav.callNow')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mobile Action Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/90 apple-blur border-t border-slate-200/60 md:hidden flex gap-2.5 shadow-2xl">
        <button
          onClick={() => addToCart(product, quantity)}
          className="flex-1 bg-slate-100 text-slate-900 py-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95"
        >
          <ShoppingBag size={15} />
          <span>{t('order.addToCart')}</span>
        </button>
        <button
          onClick={handleDirectOrder}
          className="flex-1 bg-slate-950 text-white py-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95"
        >
          <span>{t('order.directOrder')}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
