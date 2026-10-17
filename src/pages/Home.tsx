import { useState } from 'react';
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
  Sparkles
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
    <div className="bg-[#fbfbfd] text-slate-900 overflow-hidden">
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.desc')} />
      </Helmet>

      {/* Hero Section — Apple Keynote Aesthetic */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-slate-300 text-xs font-medium tracking-tight mb-6 backdrop-blur-md">
              <Sparkles size={13} className="text-emerald-400" />
              <span>{language === 'bn' ? 'বিজ্ঞানসম্মত ফর্মুলেশন ও সর্বোচ্চ ফলন' : 'Scientific Formula · Maximum Yield'}</span>
            </div>

            {/* Apple Cinematic Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                {t('hero.titleAccent')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              {t('hero.desc')}
            </p>

            {/* Apple Dual Action Pills */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{t('hero.explore')}</span>
                <ArrowRight size={15} />
              </a>
              <Link
                to="/about"
                className="w-full sm:w-auto bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.12] px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight backdrop-blur-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{t('hero.learnMore')}</span>
              </Link>
            </div>
          </motion.div>

          {/* Key Metric Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 border-t border-white/[0.08]"
          >
            {[
              { val: '90%+', label: language === 'bn' ? 'পীক ডিম উৎপাদন' : 'Peak Egg Rate' },
              { val: '100%', label: language === 'bn' ? 'বিশুদ্ধ ফর্মুলেশন' : 'Pure Formulation' },
              { val: '৫-১০%', label: language === 'bn' ? 'দুগ্ধ ফলন বৃদ্ধি' : 'Milk Yield Increase' },
              { val: '২৫/৫০ কেজি', label: language === 'bn' ? 'স্ট্যান্ডার্ড প্যাকেজিং' : 'Standard Packaging' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1 font-mono">
                  {stat.val}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories Lineup — Apple Hardware Cards */}
      <section className="py-20 sm:py-28 bg-[#fbfbfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
              {language === 'bn' ? 'পণ্য সম্ভার' : 'Product Lineups'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {language === 'bn' ? 'প্রতিটি খামার ও পরিবারের জন্য সেরা পুষ্টি' : 'Engineered for Every Farm & Family'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Poultry Feed */}
            <div className="group bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 mb-4">
                  {language === 'bn' ? 'পোল্ট্রি' : 'Poultry'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t('products.poultryTitle')}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {language === 'bn' ? 'ব্রয়লার ও লেয়ারের জন্য সুষম পুষ্টি এবং দ্রুত বৃদ্ধি।' : 'Balanced nutrition for broiler & layer chicks.'}
                </p>
              </div>
              <div className="relative aspect-[4/5] bg-slate-50/70 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                <img
                  src="/products/starter.png"
                  alt="Poultry Feed"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Link
                to="/products/poultry"
                className="w-full py-2.5 rounded-full text-xs font-semibold text-center bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{t('products.viewPoultry')}</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* 2. Sonali Feed */}
            <div className="group bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 mb-4">
                  {language === 'bn' ? 'সোনালী' : 'Sonali'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t('products.sonaliTitle')}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {language === 'bn' ? 'উন্নত রোগ প্রতিরোধ ক্ষমতা এবং সমান গ্রোথ রেট।' : 'Maximum immunity and uniform growth curve.'}
                </p>
              </div>
              <div className="relative aspect-[4/5] bg-slate-50/70 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                <img
                  src="/products/sonali-starter.png"
                  alt="Sonali Feed"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Link
                to="/products/sonali"
                className="w-full py-2.5 rounded-full text-xs font-semibold text-center bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{t('products.viewSonali')}</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* 3. Cattle Feed */}
            <div className="group bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 mb-4">
                  {language === 'bn' ? 'ক্যাটল' : 'Cattle'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t('products.cattleTitle')}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {language === 'bn' ? 'দুধ বৃদ্ধি ও স্বাস্থ্যকর মোটাতাজাকরণে নির্ভরযোগ্য।' : 'Optimized for high milk yield and healthy fattening.'}
                </p>
              </div>
              <div className="relative aspect-[4/5] bg-slate-50/70 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                <img
                  src="/products/sweet-bran.png"
                  alt="Cattle Feed"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Link
                to="/products/cattle"
                className="w-full py-2.5 rounded-full text-xs font-semibold text-center bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{t('products.viewCattle')}</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* 4. Food & Beverage */}
            <div className="group bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-orange-50 text-orange-700 mb-4">
                  {language === 'bn' ? 'ফুড ও বেভারেজ' : 'Food & Beverage'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t('products.foodTitle')}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {language === 'bn' ? 'সিলেটের খাঁটি প্রিমিয়াম চা ও শতভাগ হাইজেনিক গম।' : 'Finest Sylhet CTC tea & automatic milled pure wheat.'}
                </p>
              </div>
              <div className="relative aspect-[4/5] bg-slate-50/70 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                <img
                  src="/food-beverage.png"
                  alt="Food & Beverage"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/products/premium-tea.png';
                  }}
                />
              </div>
              <Link
                to="/products/food"
                className="w-full py-2.5 rounded-full text-xs font-semibold text-center bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{t('products.viewFood')}</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Scientific Benefits — Apple Specs Grid */}
      <section className="py-20 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
              {t('features.subtitle')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {t('features.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap size={24} className="text-amber-500" />,
                title: t('features.protein'),
                desc: language === 'bn' ? 'উচ্চ হজমযোগ্য প্রোটিন ও এনার্জির সমন্বয়' : 'Optimized crude protein and digestible energy.',
              },
              {
                icon: <CheckCircle2 size={24} className="text-blue-500" />,
                title: t('features.amino'),
                desc: language === 'bn' ? 'লাইসিন ও মেথিওনিন সুষম মাত্রায় সংরক্ষিত' : 'Precision balance of essential amino acids.',
              },
              {
                icon: <TrendingUp size={24} className="text-emerald-500" />,
                title: t('features.stability'),
                desc: language === 'bn' ? 'ঋতুভিত্তিক বৈরি আবহাওয়া সহনশীল সুরক্ষা' : 'Formulated for multi-season environmental stability.',
              },
              {
                icon: <ShieldCheck size={24} className="text-indigo-500" />,
                title: t('features.profit'),
                desc: language === 'bn' ? 'উন্নত FCR ও দ্রুত ওজনে সর্বোচ্চ অর্থনৈতিক লাভ' : 'Superior FCR leading to maximized farm profitability.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-slate-200/60 mb-5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Apple Manufacturing & QC */}
      <section className="py-20 bg-[#fbfbfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {t('whyChoose.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FlaskConical size={32} className="text-emerald-600" />,
                title: t('whyChoose.research'),
                desc: language === 'bn' ? 'পোল্ট্রি ও প্রাণিসম্পদ গবেষকদের সরাসরি তত্ত্বাবধানে প্রণীত।' : 'Designed under direct supervision of animal nutritionists.',
              },
              {
                icon: <Wheat size={32} className="text-amber-600" />,
                title: t('whyChoose.ingredients'),
                desc: language === 'bn' ? 'শুধুমাত্র নির্বাচিত এ-গ্রেড শস্যদানা এবং টক্সিনমুক্ত উপাদান।' : '100% lab-tested grade-A raw materials with zero mycotoxins.',
              },
              {
                icon: <Factory size={32} className="text-slate-700" />,
                title: t('whyChoose.manufacturing'),
                desc: language === 'bn' ? 'ইউরোপীয় প্রযুক্তির সম্পূর্ণ অটোমেটেড ও হাইজেনিক প্ল্যান্ট।' : 'State-of-the-art automated European technology milling.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/70 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase — Apple Store Grid */}
      <section id="products" className="py-20 sm:py-28 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-14 gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
                {language === 'bn' ? 'নির্বাচিত পণ্যসমূহ' : 'Featured Catalog'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
                {t('products.title')}
              </h2>
            </div>
            <Link
              to="/products/all"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 px-4 py-2 rounded-full transition-colors"
            >
              <span>{t('products.viewAll')}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between product-card"
                data-product-id={product.id}
                itemScope
                itemType="https://schema.org/Product"
              >
                <div>
                  {/* Studio Image Stage */}
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => trackMetaViewContent({ id: product.id, name: product.en.name, price: product.price, category: product.category })}
                    className="relative aspect-[4/5] bg-gradient-to-b from-slate-50/60 to-slate-100/30 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-6 block"
                  >
                    <img
                      src={getProductImage(product)}
                      alt={product[language].name}
                      width={400}
                      height={400}
                      itemProp="image"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 apple-blur text-slate-800 px-3 py-1 rounded-full text-[10px] font-semibold tracking-tight shadow-xs border border-slate-200/60">
                        {product[language].phase}
                      </span>
                    </div>
                  </Link>

                  {/* Header & Price */}
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex-1">
                      <h3 itemProp="name" className="text-base font-bold text-slate-900 leading-snug product-title">
                        {product[language].name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {product[language].duration}
                      </p>
                    </div>

                    <div className="text-right shrink-0" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <p className="text-base font-bold text-slate-900 price-tag">
                        {product.price ? (
                          <span itemProp="price" content={String(product.price)}>
                            {formatPrice(product.price)}
                          </span>
                        ) : (
                          t('products.callForPrice')
                        )}
                      </p>
                      {product.price && (
                        <span className="text-[10px] text-slate-400 font-medium block">
                          {product[language].bagSize}
                        </span>
                      )}
                    </div>
                  </div>

                  <p itemProp="description" className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-6">
                    {product[language].tagline}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => addToCart(product, 1)}
                    aria-label="Add to cart"
                    data-action="cart"
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                  >
                    <ShoppingBag size={14} />
                    <span>{t('order.addToCart')}</span>
                  </button>

                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      navigate('/checkout');
                    }}
                    aria-label="Buy now"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
                  >
                    <span>{t('order.directOrder')}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Contact Banner — Apple Cinema Card */}
      <section className="py-20 bg-[#fbfbfd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-14 overflow-hidden border border-white/[0.08] shadow-2xl text-center">
            {/* Ambient Radial Accent */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
                {language === 'bn' ? '২৪/৭ খামারি সহায়তা' : 'Expert Farm Advisory'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {t('contact.cta')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
                {language === 'bn' 
                  ? 'আপনার খামারের আকার ও চাহিদা অনুযায়ী সঠিক ফিড ফর্মুলেশন নির্বাচনে আমাদের এগ্রো বিশেষজ্ঞদের সাথে কথা বলুন।' 
                  : 'Connect directly with our animal nutritionists for tailored flock and cattle feed planning.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+8801817875139"
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 px-7 py-3 rounded-full text-xs font-bold tracking-tight shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone size={15} />
                  <span>{t('contact.callUs')}</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.12] px-7 py-3 rounded-full text-xs font-bold tracking-tight backdrop-blur-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={15} />
                  <span>{t('contact.sendMessage')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
