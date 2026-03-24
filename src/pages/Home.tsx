import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Shield, Zap, Eye, TrendingUp, ShieldCheck, ChevronLeft, ChevronRight, Phone, CheckCircle2, FlaskConical, Wheat, Factory, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000", // Green field
    title: "hero.title",
    accent: "hero.titleAccent"
  }
];

export default function Home() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.desc')} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src={heroSlides[0].image} 
            className="w-full h-full object-cover"
            alt="Green Field"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-4 drop-shadow-lg">
              {t('hero.title')}
              <span className="text-yellow-400">
                {t('hero.titleAccent')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 font-bold drop-shadow-md">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#products" 
                className="w-full sm:w-auto bg-orange-500 text-white px-10 py-4 rounded-md font-black shadow-[0_4px_0_rgb(194,65,12)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgb(194,65,12)] transition-all uppercase tracking-wider"
              >
                {t('hero.explore')}
              </a>
              <Link 
                to="/about" 
                className="w-full sm:w-auto bg-[#001a66] text-white px-10 py-4 rounded-md font-black shadow-[0_4px_0_rgb(0,10,40)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgb(0,10,40)] transition-all uppercase tracking-wider"
              >
                {t('hero.learnMore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Poultry Feed */}
            <div className="relative group overflow-hidden rounded-lg border-4 border-[#003399] shadow-2xl">
              <div className="bg-[#003399] text-white py-3 text-center font-black text-xl uppercase tracking-widest">
                {t('products.poultryTitle')}
              </div>
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800" 
                  alt="Poultry"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%]">
                <Link to="/products/poultry" className="block w-full bg-[#003399] text-white py-2 text-center font-bold rounded shadow-lg hover:bg-[#002277] transition-colors">
                  {t('products.viewPoultry')}
                </Link>
              </div>
            </div>

            {/* Cattle Feed */}
            <div className="relative group overflow-hidden rounded-lg border-4 border-[#994d00] shadow-2xl">
              <div className="bg-[#994d00] text-white py-3 text-center font-black text-xl uppercase tracking-widest">
                {t('products.cattleTitle')}
              </div>
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800" 
                  alt="Cattle"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%]">
                <Link to="/products/cattle" className="block w-full bg-[#994d00] text-white py-2 text-center font-bold rounded shadow-lg hover:bg-[#773a00] transition-colors">
                  {t('products.viewCattle')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-300 -z-10" />
            <h2 className="inline-block bg-white px-8 text-2xl md:text-3xl font-black text-[#003300] uppercase tracking-[0.2em]">
              {t('features.title')}
            </h2>
            <p className="text-orange-700 font-bold mt-2 text-lg">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="text-orange-500" size={40} />, title: t('features.protein') },
              { icon: <CheckCircle2 className="text-blue-600" size={40} />, title: t('features.amino') },
              { icon: <TrendingUp className="text-green-600" size={40} />, title: t('features.stability') },
              { icon: <Star className="text-orange-600" size={40} />, title: t('features.profit') },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-sm md:text-base font-black text-slate-800 uppercase tracking-tight leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-300 -z-10" />
            <h2 className="inline-block bg-white px-8 text-2xl md:text-3xl font-black text-[#003300] uppercase tracking-[0.2em]">
              {t('whyChoose.title')}
            </h2>
            <p className="text-orange-700 font-bold mt-2 text-lg">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <FlaskConical className="text-green-700" size={48} />, title: t('whyChoose.research') },
              { icon: <Wheat className="text-yellow-600" size={48} />, title: t('whyChoose.ingredients') },
              { icon: <Factory className="text-blue-900" size={48} />, title: t('whyChoose.manufacturing') },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#003300] uppercase tracking-wider">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid - Optimized for Mobile Browsing */}
      <section id="products" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{t('products.title')}</h2>
              <p className="text-slate-600 text-sm md:text-base">{t('products.desc')}</p>
            </div>
            <Link to="/contact" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base">
              {t('products.viewAll')} <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <Link to={`/product/${product.id}`} className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <img 
                    src={product.id === 'starter' 
                      ? "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600"
                      : product.id === 'grower'
                      ? "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=600" // Cow
                      : product.id === 'sweet-bran'
                      ? "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600" // Cattle Feed
                      : "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=600" // Goat
                    } 
                    alt={product[language].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-sm">
                      {product[language].phase}
                    </span>
                  </div>
                </Link>
                
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">{product[language].name}</h3>
                      <p className="text-xs md:text-sm text-slate-500 font-medium">{product[language].duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{t('products.price')}</p>
                      <p className="text-base md:text-lg font-black text-orange-500">{t('products.callUs')}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-xs md:text-sm line-clamp-2 mb-6 md:mb-8 leading-relaxed">
                    {product[language].tagline}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={`/product/${product.id}`}
                      className="flex-1 bg-slate-100 text-slate-900 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
                    >
                      <Eye size={16} />
                      {t('products.viewDetails')}
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-orange-500 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all"
                    >
                      <Phone size={16} />
                      {t('products.addToCart')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Farmer in Field"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-widest drop-shadow-lg">
              {t('contact.cta')}
            </h2>
            <div className="flex flex-col gap-6 items-center">
              <a 
                href="tel:+8801817875139" 
                className="w-full max-w-md bg-[#004d00] text-white py-4 rounded-md font-black text-xl flex items-center justify-center gap-4 shadow-xl hover:bg-[#003300] transition-all border-b-4 border-[#002200]"
              >
                <Phone size={28} />
                {t('contact.callUs')}
              </a>
              <Link 
                to="/contact" 
                className="w-full max-w-md bg-orange-500 text-white py-4 rounded-md font-black text-xl flex items-center justify-center gap-4 shadow-xl hover:bg-orange-600 transition-all border-b-4 border-orange-700"
              >
                <MessageSquare size={28} />
                {t('contact.sendMessage')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


