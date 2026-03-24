import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-20">
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.desc')} />
      </Helmet>
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-24"
          >
            <h1 className="text-4xl md:text-7xl font-black text-[#003300] mb-6 uppercase tracking-tight">{t('about.title')}</h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('about.heroDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-32">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-[#003300]">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1200" // Cow
                alt="Our Commitment" 
                className="w-full h-[300px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003300]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-black mb-1 uppercase tracking-wider">{t('about.qualityFirst')}</p>
                <p className="text-yellow-400 font-bold">{t('about.qualityDesc')}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block bg-green-100 text-[#003300] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border border-[#003300]/20">
                {t('about.mission')}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#003300] leading-tight uppercase">
                {t('about.precisionNutrition')}
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm md:text-lg font-medium">
                {t('about.missionDesc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl shadow-sm border border-slate-200 group hover:border-[#003300] transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-md">
                    <ShieldCheck size={28} />
                  </div>
                  <span className="font-black text-[#003300] uppercase text-sm">{t('about.qa')}</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl shadow-sm border border-slate-200 group hover:border-[#003300] transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-700 shadow-md">
                    <Target size={28} />
                  </div>
                  <span className="font-black text-[#003300] uppercase text-sm">{t('features.amino')}</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl shadow-sm border border-slate-200 group hover:border-[#003300] transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-800 shadow-md">
                    <Users size={28} />
                  </div>
                  <span className="font-black text-[#003300] uppercase text-sm">{t('about.support')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
