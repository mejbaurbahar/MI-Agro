import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  Eye, 
  TrendingUp, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  FlaskConical, 
  Wheat, 
  Factory, 
  MessageSquare, 
  ShoppingBag,
  Sparkles,
  Sprout,
  Award,
  Truck,
  HeartPulse
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products, getProductImage } from '../data/products';
import { trackMetaViewContent } from '../utils/metaPixel';

export default function Home() {
  const { t, language } = useLanguage();
  const { addToCart, formatPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfdfa] text-slate-900 overflow-hidden">
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.desc')} />
      </Helmet>

      {/* Hero Section — Real Agro Farm Visual Stage (Gemini generated authentic poultry barn, zero products, zero text) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image: Pure authentic commercial agro farm scene */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/hero-farm-v2.jpg" 
            className="w-full h-full object-cover object-center scale-100"
            alt="MI Unifyld Agro Farm"
          />

          {/* Authentic Agrarian Overlays: Light enough so the real farm, chickens & barn are crisp, with smooth edge vignetting */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#021807]/75 via-[#021807]/35 to-[#021807] z-10" />
          <div className="absolute inset-0 bg-black/20 z-10 backdrop-brightness-[0.95]" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center pt-28 pb-20 md:pt-36 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Agro Farm Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-2xl">
              <Sprout size={15} className="text-emerald-400 animate-pulse" />
              <span>{language === 'bn' ? '🌱 আধুনিক পোল্ট্রি ও ডেইরি খামার পুষ্টি' : '🌱 Modern Poultry & Dairy Farm Nutrition'}</span>
            </div>

            {/* Farm Power Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {language === 'bn' ? 'পুষ্টিকর বৃদ্ধি, ' : 'Nourishing Growth, '}
              <span className="text-amber-400 bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                {language === 'bn' ? 'সর্বোচ্চ খামার লাভ' : 'Maximizing Farm Profit'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-emerald-50 max-w-2xl mx-auto mb-10 leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {language === 'bn' 
                ? 'বাংলাদেশে সর্বোচ্চ মানের ব্রয়লার, সোনালী ও ক্যাটল ফিডের বিশ্বস্ত সমাধান। বৈজ্ঞানিক ফর্মুলেশনে দ্রুত শারীরিক বৃদ্ধি ও কম এফসিআর (FCR)।'
                : 'Premium poultry, sonali, and cattle feed solutions engineered for low FCR, faster weight gain, and maximum farm profitability.'
              }
            </p>

            {/* Agro Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-8 py-4 rounded-full text-sm font-bold tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{language === 'bn' ? 'ফিড পণ্যসমূহ দেখুন' : 'Explore Feed Products'}</span>
                <ArrowRight size={17} className="text-slate-950" />
              </a>

              <a
                href="tel:+8801817875139"
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/25 px-8 py-4 rounded-full text-sm font-bold tracking-wide backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone size={17} className="text-amber-300" />
                <span>{language === 'bn' ? 'সরাসরি খামার পরামর্শ' : 'Farm Nutrition Helpline'}</span>
              </a>
            </div>
          </motion.div>

          {/* Key Agro Metrics & Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-emerald-500/25"
          >
            {[
              { 
                icon: <Zap className="text-amber-400" size={20} />, 
                val: '১.৫ - ১.৬', 
                label: language === 'bn' ? 'সর্বনিম্ন এফসিআর (FCR)' : 'Optimal Feed FCR',
                sub: language === 'bn' ? 'দ্রুত শারীরিক বৃদ্ধি' : 'Faster Weight Gain'
              },
              { 
                icon: <TrendingUp className="text-emerald-400" size={20} />, 
                val: '৫-১০%', 
                label: language === 'bn' ? 'দুগ্ধ ফলন বৃদ্ধি' : 'Milk Yield Increase',
                sub: language === 'bn' ? 'ক্যালসিয়াম ও প্রোটিন সমৃদ্ধ' : 'High Bypass Protein'
              },
              { 
                icon: <FlaskConical className="text-blue-400" size={20} />, 
                val: '১০০%', 
                label: language === 'bn' ? 'ল্যাব টেস্টেড বিশুদ্ধতা' : 'Lab Tested Purity',
                sub: language === 'bn' ? 'জিরো ক্ষতিকর কেমিক্যাল' : 'Zero Toxins'
              },
              { 
                icon: <Truck className="text-yellow-400" size={20} />, 
                val: '২৪-৪৮ ঘণ্টা', 
                label: language === 'bn' ? 'সারাদেশে সরবরাহ' : 'Nationwide Delivery',
                sub: language === 'bn' ? 'সরাসরি খামারের দ্বারে' : 'Direct to Your Farm'
              },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md text-left flex flex-col justify-between hover:border-emerald-400/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                    {stat.val}
                  </span>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-200 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-emerald-400/80 font-medium">
                    {stat.sub}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories Lineup — Real Agro Farm Category Cards */}
      <section className="py-20 sm:py-28 bg-[#f6f9f3] border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300/60 mb-3">
              <Wheat size={13} className="text-emerald-700" />
              <span>{language === 'bn' ? 'আমাদের পণ্য সম্ভার' : 'Farm Product Categories'}</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#03230c]">
              {language === 'bn' ? 'প্রতিটি খামারের জন্য সেরা পুষ্টি' : 'Precision Nutrition For Every Farm'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 font-medium max-w-xl mx-auto">
              {language === 'bn'
                ? 'ব্রয়লার, সোনালী ও ডেইরি ক্যাটল খামারের উৎপাদনশীলতা এবং পরিবারিক খাদ্যের নির্ভরযোগ্য পুষ্টি সমাধান।'
                : 'Formulated to meet nutritional needs for commercial poultry, Sonali chicken, and high-yielding dairy cattle.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t('products.poultryTitle'),
                desc: language === 'bn' ? 'ব্রয়লার ও লেয়ারের জন্য সুষম পুষ্টি এবং দ্রুত দৈহিক বৃদ্ধি।' : 'Balanced nutrition for optimal broiler growth and high egg production.',
                badge: language === 'bn' ? '🐔 পোল্ট্রি খামার' : '🐔 Commercial Poultry',
                image: '/products/starter.png',
                link: '/products/poultry',
                btnText: t('products.viewPoultry'),
                bgGlow: 'from-emerald-500/10 to-green-500/5',
                borderColor: 'hover:border-emerald-500',
                stats: language === 'bn' ? 'FCR ১.৫-১.৬ · দ্রুত বৃদ্ধি' : 'FCR 1.5-1.6 · Fast Gain'
              },
              {
                title: t('products.sonaliTitle'),
                desc: language === 'bn' ? 'উন্নত রোগ প্রতিরোধ ক্ষমতা এবং সমান গ্রোথ রেট নিশ্চিতকরণ।' : 'Higher immunity, uniform growth rate, and natural plumage shine.',
                badge: language === 'bn' ? '🐥 সোনালী ও কালার বার্ড' : '🐥 Sonali & Native Flock',
                image: '/products/sonali-starter.png',
                link: '/products/sonali',
                btnText: t('products.viewSonali'),
                bgGlow: 'from-amber-500/10 to-yellow-500/5',
                borderColor: 'hover:border-amber-500',
                stats: language === 'bn' ? 'উচ্চ রোগ প্রতিরোধ · কম মৃত্যুহার' : 'High Immunity · Low Mortality'
              },
              {
                title: t('products.cattleTitle'),
                desc: language === 'bn' ? 'দুধ বৃদ্ধি ও স্বাস্থ্যকর মোটাতাজাকরণে খামারিদের প্রথম পছন্দ।' : 'Higher milk yield, high butterfat, and rapid cattle fattening.',
                badge: language === 'bn' ? '🐄 ডেইরি ও ষাঁড় মোটাতাজা' : '🐄 Dairy & Cattle Beef',
                image: '/products/dairy-milk-master-feed.png',
                link: '/products/cattle',
                btnText: t('products.viewCattle'),
                bgGlow: 'from-teal-500/10 to-emerald-500/5',
                borderColor: 'hover:border-teal-500',
                stats: language === 'bn' ? 'দুধ বৃদ্ধি ৫-১০% · ফ্যাট উন্নত' : 'Milk +5-10% · Muscle Gain'
              },
              {
                title: t('products.foodTitle'),
                desc: language === 'bn' ? 'সিলেটের খাঁটি প্রিমিয়াম চা ও শতভাগ হাইজেনিক অর্গানিক আটা।' : 'Authentic Sylhet tea blend and pure organic food staples.',
                badge: language === 'bn' ? '🌾 খাঁটি খাদ্য ও পানীয়' : '🌾 Pure Food & Beverage',
                image: '/products/premium-tea.png',
                link: '/products/food',
                btnText: t('products.viewFood'),
                bgGlow: 'from-orange-500/10 to-amber-500/5',
                borderColor: 'hover:border-orange-500',
                stats: language === 'bn' ? '১০০% বিশুদ্ধ · প্রাকৃতিক স্বাদ' : '100% Pure · Natural Taste'
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${cat.borderColor}`}
              >
                <div>
                  {/* Category Pill Tag */}
                  <span className="inline-block text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                    {cat.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {cat.desc}
                  </p>
                </div>

                {/* Packaging Showcase Stage */}
                <div className={`my-4 py-6 px-4 rounded-2xl bg-gradient-to-b ${cat.bgGlow} flex items-center justify-center border border-slate-100`}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-44 sm:h-48 w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Footer */}
                <div>
                  <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl text-center mb-3">
                    {cat.stats}
                  </div>
                  <Link
                    to={cat.link}
                    className="w-full bg-[#03230c] hover:bg-emerald-900 text-white py-3 rounded-full text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{cat.btnText}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Farmers Choose MI Unifyld Agro — Farm Pillars */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 mb-2 block">
              {language === 'bn' ? 'কেন আমরা সেরা?' : 'OUR CORE ADVANTAGES'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#03230c]">
              {language === 'bn' ? 'খামারিদের শতভাগ আস্থার বিজ্ঞান' : 'Engineered for Maximum Farm Profit'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
              {language === 'bn'
                ? 'আমরা শুধু ফিড বিক্রি করি না; সঠিক পুষ্টি ও ফিল্ড গাইডের মাধ্যমে খামারির দীর্ঘস্থায়ী সাফল্য নিশ্চিত করি।'
                : 'We partner directly with farmers to ensure high digestibility, lower operational cost, and higher disease resistance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sprout size={26} className="text-emerald-700" />,
                title: language === 'bn' ? 'সেরা মানের কাঁচামাল' : 'Premium Grain Selection',
                desc: language === 'bn' 
                  ? 'উন্নত মানের ভুট্টা, সয়াবিন ও প্রোটিন মিল থেকে প্রস্তুত, যেখানে ভেজালের কোনো সুযোগ নেই।' 
                  : 'Sourced from top-grade non-GMO corn, high-protein soybean meal, and pure mineral premixes.'
              },
              {
                icon: <FlaskConical size={26} className="text-blue-700" />,
                title: language === 'bn' ? 'অ্যামিনো এসিড ব্যালেন্স' : 'Amino Acid Precision',
                desc: language === 'bn' 
                  ? 'লাইসিন, মেথিওনিন ও এনজাইমের সঠিক সমন্বয়, যা সর্বোচ্চ খাদ্য শোষণ ও দ্রুত দৈহিক বৃদ্ধি নিশ্চিত করে।' 
                  : 'Precisely balanced lysine and methionine ensuring high digestibility and optimal feed conversion.'
              },
              {
                icon: <ShieldCheck size={26} className="text-amber-600" />,
                title: language === 'bn' ? 'মাইকোটক্সিন মুক্ত' : 'Mycotoxin Shielded',
                desc: language === 'bn' 
                  ? 'কঠোর ল্যাব টেস্টিং ও টক্সিন বাইন্ডারের ব্যবহারে মুরগি ও গবাদি পশুর রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি পায়।' 
                  : 'Advanced antifungal inhibitors and toxin binders to protect livestock health and liver function.'
              },
              {
                icon: <HeartPulse size={26} className="text-red-600" />,
                title: language === 'bn' ? 'খামারি মাঠ সাপোর্ট' : 'Expert Field Support',
                desc: language === 'bn' 
                  ? 'আমাদের ভেটেরিনারি সার্জন ও নিউট্রিশনিস্টদের নিয়মিত খামার পরিদর্শন ও ফিডিং পরামর্শ।' 
                  : 'On-site farm visits and direct nutrition advisory by certified veterinary doctors and feed experts.'
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f8faf6] border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Lineup Grid */}
      <section id="products" className="py-20 sm:py-28 bg-[#f6f9f3] border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2 block">
                {language === 'bn' ? 'সরাসরি অর্ডার করুন' : 'TOP PERFORMING FEEDS'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#03230c]">
                {language === 'bn' ? 'জনপ্রিয় খামার পণ্যসমূহ' : 'Farmer Favorites Lineup'}
              </h2>
            </div>
            <Link
              to="/products/all"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs border border-emerald-200 shadow-xs transition-colors"
            >
              <span>{t('products.viewAll')}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-white rounded-3xl p-5 border border-slate-200 hover:border-emerald-500/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Phase & Size Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                      {product[language].phase}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {product[language].bagSize}
                    </span>
                  </div>

                  {/* Product Bag Image */}
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => trackMetaViewContent({ id: product.id, name: product.en.name, price: product.price, category: product.category })}
                    className="block my-3 py-4 rounded-2xl bg-[#fafbfa] group-hover:bg-[#f1f7ef] transition-colors flex items-center justify-center overflow-hidden border border-slate-100"
                  >
                    <img
                      src={getProductImage(product)}
                      alt={product[language].name}
                      className="h-44 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>

                  {/* Title & Tagline */}
                  <h3 className="font-bold text-base text-slate-900 leading-snug line-clamp-1 group-hover:text-emerald-800 transition-colors">
                    {product[language].name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mt-1 mb-4">
                    {product[language].tagline}
                  </p>
                </div>

                {/* Price & Action Buttons */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500">
                      {language === 'bn' ? 'মূল্য:' : 'Price:'}
                    </span>
                    <span className="text-sm font-black text-[#03230c]">
                      {product.price ? formatPrice(product.price) : t('products.callForPrice')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="flex-1 bg-slate-100 hover:bg-emerald-100 text-slate-800 hover:text-emerald-900 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                      title={t('order.addToCart')}
                    >
                      <ShoppingBag size={14} />
                      <span>{language === 'bn' ? 'কার্টে রাখুন' : 'Add'}</span>
                    </button>

                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        navigate('/checkout');
                      }}
                      className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all active:scale-95"
                    >
                      <span>{language === 'bn' ? 'অর্ডার করুন' : 'Order'}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Advisory & Direct Order Banner */}
      <section className="relative py-24 overflow-hidden">
        {/* Real Farm Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Real Agro Farmer in Field"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021f08]/95 via-[#021f08]/85 to-[#001004]/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl text-white">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3">
              {language === 'bn' ? '২৪/৭ খামারি সহায়তা কেন্দ্র' : '24/7 Farmer Advisory & Order Line'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight">
              {t('contact.cta')}
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              {language === 'bn'
                ? 'আপনার খামারের ফিড পরিকল্পনা, সঠিক ডোজ ও সরাসরি কারখানা থেকে সরবরাহের জন্য আমাদের এগ্রো বিশেষজ্ঞদের সাথে কথা বলুন।'
                : 'Get tailored feed formulation, flock guidance, and direct farm dispatch with our nutrition experts.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href="tel:+8801817875139"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black px-8 py-4 rounded-full text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Phone size={17} />
                <span>{t('contact.callUs')}</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-full text-sm border border-white/25 flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
              >
                <MessageSquare size={17} />
                <span>{t('contact.sendMessage')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
