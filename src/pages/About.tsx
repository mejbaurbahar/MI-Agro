import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Mail, 
  Sparkles, 
  Award, 
  Microscope, 
  Check, 
  Copy, 
  PhoneCall, 
  ExternalLink 
} from 'lucide-react';
import { toast } from 'sonner';

export default function About() {
  const { t, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    toast.success(
      language === 'bn' 
        ? `${email} কপি করা হয়েছে!` 
        : `${email} copied to clipboard!`
    );
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const executiveContacts = [
    { 
      label: language === 'bn' ? 'সাধারণ জিজ্ঞাসা ও সাপোর্ট' : 'General Inquiries & Support', 
      role: 'Corporate Helpdesk', 
      email: 'info@miunifyldagroltd.com',
      note: language === 'bn' ? 'পণ্য পরামর্শ, ডিলারশিপ ও অর্ডার সংক্রান্ত' : 'Product inquiries, dealership & orders'
    },
    { 
      label: language === 'bn' ? 'ব্যবস্থাপনা পরিচালক' : 'Managing Director', 
      role: 'Executive Leadership', 
      email: 'md@miunifyldagroltd.com',
      note: language === 'bn' ? 'স্ট্র্যাটেজিক পার্টনারশিপ ও কর্পোরেট সম্পর্ক' : 'Strategic partnerships & corporate operations'
    },
    { 
      label: language === 'bn' ? 'চেয়ারম্যান' : 'Chairman', 
      role: 'Board of Directors', 
      email: 'chairman@miunifyldagroltd.com',
      note: language === 'bn' ? 'ভিশন, পলিসি ও ভবিষ্যৎ পরিকল্পনা' : 'Corporate governance & vision'
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.desc')} />
      </Helmet>

      {/* Hero Section - Apple Keynote Style */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles size={13} className="text-orange-500" />
            <span>{t('about.title')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 mb-6 leading-[1.08]"
          >
            {t('about.precisionNutrition')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            {t('about.heroDesc')}
          </motion.p>
        </div>
      </section>

      {/* Hero Image Showcase - Apple Hardware Stage Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1600" 
            alt="Quality livestock nutrition" 
            className="w-full h-[360px] sm:h-[500px] md:h-[620px] object-cover opacity-85 hover:scale-[1.02] transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Frosted Floating Card on Image */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 max-w-xl p-6 sm:p-8 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/15 text-white shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold tracking-wider uppercase mb-3 border border-emerald-400/30">
              <Award size={13} />
              <span>{t('about.qualityFirst')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
              {t('about.qualityDesc')}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {t('about.missionDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Apple Bento Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-2">
            {language === 'bn' ? 'আমাদের মূল স্তম্ভ' : 'CORE PILLARS'}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">
            {language === 'bn' ? 'বিজ্ঞান ও নির্ভরযোগ্যতার সম্মিলন' : 'Engineered for Performance. Trusted by Farmers.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: QA */}
          <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-emerald-600 mb-6">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">
                {t('about.qa')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {language === 'bn'
                  ? 'কাঁচামাল পরীক্ষা থেকে শুরু করে চূড়ান্ত প্যাকেটজাত ফিড পর্যন্ত আন্তর্জাতিক মানদণ্ড অনুযায়ী প্রতিটি ল্যাব টেস্ট নিশ্চিত করা হয়।'
                  : 'From raw grain inspection to finished pellet packaging, every batch undergoes strict lab analysis for moisture, protein, and zero mycotoxins.'}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>{language === 'bn' ? '১০০% ল্যাব টেস্টেড' : '100% Lab Tested'}</span>
              <span>ISO Grade</span>
            </div>
          </div>

          {/* Card 2: Precision Formulation */}
          <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-orange-600 mb-6">
                <Target size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">
                {t('features.amino')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {language === 'bn'
                  ? 'লাইসিন ও মেথিওনিন অপ্টিমাইজেশনের মাধ্যমে সর্বোচ্চ হজমশক্তি ও সর্বনিম্ন এফসিআর (FCR) নিশ্চিত করা হয়, ফলে খামারির খরচ কমে।'
                  : 'Precision amino acid profiling ensuring optimal protein synthesis, high nutrient digestibility, and market-leading Feed Conversion Ratios.'}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-orange-600">
              <span>{language === 'bn' ? 'সর্বোচ্চ এফসিআর কার্যকারিতা' : 'Optimal FCR Performance'}</span>
              <span>Enzyme Enriched</span>
            </div>
          </div>

          {/* Card 3: Support */}
          <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 mb-6">
                <Users size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">
                {t('about.support')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {language === 'bn'
                  ? 'অভিজ্ঞ ভেটেরিনারি বিশেষজ্ঞ ও নিউট্রিশনিস্টদের সরাসরি ফিল্ড সাপোর্ট, খামারের রোগ প্রতিরোধ ও সঠিক ফিডিং গাইডলাইন নিশ্চিত করা হয়।'
                  : 'Experienced field veterinarians and nutritionists delivering on-site advisory, flock health monitoring, and feeding schedules.'}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>{language === 'bn' ? 'সরাসরি বিশেষজ্ঞ পরামর্শ' : 'Direct Expert Advisory'}</span>
              <span>24/7 Helpline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Leadership & Official Directory - Apple Minimal Card Style */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-slate-700 bg-white border border-slate-200 shadow-xs mb-3">
              <Mail size={12} className="text-orange-500" />
              <span>{language === 'bn' ? 'কর্পোরেট যোগাযোগ' : 'Corporate Reach'}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-3">
              {t('about.contactTitle') || (language === 'bn' ? 'অফিসিয়াল যোগাযোগ' : 'Official Communication')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
              {t('about.contactDesc') || (language === 'bn' ? 'সরাসরি দায়িত্বপ্রাপ্ত কর্মকর্তাদের সাথে যোগাযোগের অফিসিয়াল ইমেইল ঠিকানা।' : 'Reach out directly through our verified corporate channels.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executiveContacts.map((contact) => (
              <div
                key={contact.email}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-500">
                      {contact.role}
                    </span>
                    <button
                      onClick={() => handleCopyEmail(contact.email)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                      title={language === 'bn' ? 'ইমেইল কপি করুন' : 'Copy email'}
                    >
                      {copiedEmail === contact.email ? (
                        <Check size={15} className="text-emerald-600" />
                      ) : (
                        <Copy size={15} />
                      )}
                    </button>
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-950 mb-1 leading-snug">
                    {contact.label}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {contact.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-xs font-semibold text-orange-600 group-hover:text-orange-700 truncate max-w-[200px]"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-orange-50 text-slate-500 group-hover:text-orange-600 flex items-center justify-center transition-colors"
                    aria-label={`Email ${contact.label}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Hotline Quick Connect */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <PhoneCall size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  {language === 'bn' ? 'সরাসরি হটলাইন' : 'Direct Farm Nutrition Helpline'}
                </p>
                <p className="text-lg font-bold text-slate-950">
                  +880 1817-875139
                </p>
              </div>
            </div>
            <a
              href="tel:+8801817875139"
              className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:scale-[1.02]"
            >
              {language === 'bn' ? 'এখনই কল করুন' : 'Call Directly'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
