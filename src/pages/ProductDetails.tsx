import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Package, 
  Clock, 
  Droplets, 
  Wind,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
};

export default function ProductDetails() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">{t('details.notFound')}</h1>
        <Link to="/" className="text-orange-500 font-bold flex items-center gap-2">
          <ArrowLeft size={20} /> {t('404.back')}
        </Link>
      </div>
    );
  }

  const content = product[language];

  const productImage = product.id === 'starter' 
    ? "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800"
    : product.id === 'grower'
    ? "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800" // Cow
    : product.id === 'sweet-bran'
    ? "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800" // Cattle Feed
    : "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=800"; // Goat

  return (
    <div className="pt-20 pb-20 md:pb-24 bg-slate-50">
      <Helmet>
        <title>{`${content.name} | MI UNIFYLD AGRO LTD`}</title>
        <meta name="description" content={content.tagline} />
      </Helmet>
      {/* Header Section */}
      <div className={`bg-gradient-to-br ${product.color} text-white py-12 md:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full -ml-48 -mb-48 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors font-medium text-sm md:text-base">
            <ArrowLeft size={18} /> {t('details.back')}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-4 md:mb-6 inline-block">
                {content.phase}
              </span>
              <h1 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-tight">
                {content.name}
              </h1>
              <p className="text-lg md:text-2xl font-medium text-white/90 mb-6 md:mb-8 italic leading-relaxed">
                "{content.tagline}"
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">{t('details.duration')}</p>
                    <p className="font-bold text-sm md:text-base">{content.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Package size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">{t('details.packaging')}</p>
                    <p className="font-bold text-sm md:text-base">{content.bagSize}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img 
                  src={productImage} 
                  alt={content.name}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl md:rounded-3xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
                  <div className="bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex flex-col items-center">
                    <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">{t('products.price')}</p>
                    <p className="text-xl font-black text-orange-500">{t('products.callUs')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <section className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">{t('details.overview')}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                {content.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">{t('details.characteristics')}</h3>
                  <div className="space-y-2 md:space-y-3">
                    {content.characteristics.map((c, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-slate-500 text-xs md:text-sm">{c.label}</span>
                        <span className="text-slate-900 font-semibold text-xs md:text-sm">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-green-500 mb-4">{t('details.performance')}</h3>
                  <div className="space-y-2 md:space-y-3">
                    {content.performance.map((p, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-slate-500 text-xs md:text-sm">{p.label}</span>
                        <span className="text-slate-900 font-semibold text-xs md:text-sm">{p.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">{t('details.nutritional')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {content.nutritional.map((n, i) => (
                  <div key={i} className="bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl text-center">
                    <p className="text-[8px] md:text-[10px] uppercase tracking-wider text-slate-500 mb-1">{n.label}</p>
                    <p className="text-xs md:text-sm font-bold text-slate-900">{n.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-900 text-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">{t('details.seasonal')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 text-orange-400">
                    <Zap size={20} />
                    <h3 className="font-bold uppercase tracking-widest text-[10px] md:text-xs">{t('details.summer')}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {language === 'bn' 
                      ? 'বেটেইন + ইলেক্ট্রোলাইট → হিট স্ট্রেস সুরক্ষা। পানিশূন্যতা ও ফিড রিজেকশন কম হয়।' 
                      : 'Betaine + Electrolyte → Heat stress protection. Reduced water loss and feed rejection.'}
                  </p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Droplets size={20} />
                    <h3 className="font-bold uppercase tracking-widest text-[10px] md:text-xs">{t('details.monsoon')}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {language === 'bn' 
                      ? 'টক্সিন বাইন্ডার + অ্যান্টিঅক্সিডেন্ট → ফাঙ্গাল টক্সিন রিস্ক কম। লিভার ও গাট সুরক্ষিত থাকে।' 
                      : 'Toxin Binder + Antioxidant → Lower fungal toxin risk. Protected liver and gut health.'}
                  </p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 text-indigo-400">
                    <Wind size={20} />
                    <h3 className="font-bold uppercase tracking-widest text-[10px] md:text-xs">{t('details.winter')}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {language === 'bn' 
                      ? 'উচ্চ বিপাকীয় শক্তির কারণে গ্রোথ স্লো হয় না, ফিড এফিসিয়েন্সি বজায় থাকে।' 
                      : 'High metabolic energy ensures growth doesn\'t slow down. Feed efficiency is maintained.'}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 lg:sticky lg:top-28">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6">{t('details.advantages')}</h3>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {content.advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-600 font-medium">{adv}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 md:pt-8 border-t border-slate-100">
                <p className="text-xs md:text-sm font-bold text-slate-900 mb-4">{t('details.interested')}</p>
                <div className="space-y-3">
                  <a href="https://wa.me/8801817875139" className="flex items-center justify-center gap-3 w-full py-3 md:py-4 bg-orange-500 text-white rounded-xl md:rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-md text-sm">
                    <MessageSquare size={18} /> {t('products.addToCart')}
                  </a>
                  <a href="tel:+8801817875139" className="flex items-center justify-center gap-3 w-full py-3 md:py-4 bg-slate-900 text-white rounded-xl md:rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-md text-sm">
                    <Phone size={18} /> {t('nav.callNow')}
                  </a>
                  <a href="mailto:miunifyldagroltd@gmail.com" className="flex items-center justify-center gap-3 w-full py-3 md:py-4 bg-slate-100 text-slate-700 rounded-xl md:rounded-2xl font-bold hover:bg-slate-200 transition-all text-sm">
                    <Mail size={18} /> {t('details.sendEmail')}
                  </a>
                </div>
                <p className="text-[8px] md:text-[10px] text-slate-400 text-center mt-6 uppercase tracking-widest font-bold">
                  {t('details.commitment')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 md:hidden flex gap-3">
        <a href="tel:+8801817875139" className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg">
          <Phone size={20} /> {t('nav.callNow')}
        </a>
        <a href="https://wa.me/8801817875139" className="flex-1 bg-orange-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg">
          <MessageSquare size={20} /> {t('products.addToCart')}
        </a>
      </div>
    </div>
  );
}

