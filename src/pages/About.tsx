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
  Check, 
  Copy, 
  PhoneCall, 
  ExternalLink,
  Compass,
  CheckCircle2,
  Building2,
  HeartHandshake,
  Wheat,
  FlaskConical,
  TrendingUp,
  Leaf,
  Sprout
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
    <div className="pt-24 pb-20 min-h-screen bg-[#fcfdfa] text-slate-900">
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/5 border border-emerald-900/10 text-emerald-900 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles size={13} className="text-amber-500" />
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

      {/* Hero Image Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1600" 
            alt="Quality livestock nutrition" 
            className="w-full h-[360px] sm:h-[480px] md:h-[580px] object-cover opacity-85 hover:scale-[1.02] transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          
          {/* Frosted Floating Card on Image */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 max-w-2xl p-6 sm:p-8 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/15 text-white shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold tracking-wider uppercase mb-3 border border-emerald-400/30">
              <Award size={13} />
              <span>{t('about.qualityFirst')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
              {t('about.qualityDesc')}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {t('about.storyDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION DUAL STAGE — Core Requirements Restored & Highlighted */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 mb-2 block">
            {language === 'bn' ? 'আমাদের দিকনির্দেশক মূলনীতি' : 'OUR GUIDING COMPASS'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#03230c]">
            {language === 'bn' ? 'মিশন ও রূপকল্প (Mission & Vision)' : 'Our Mission & Vision'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            {language === 'bn' 
              ? 'খামারিদের ক্ষমতায়ন ও দেশের প্রাণিসম্পদ খাতে টেকসই সমৃদ্ধি নিশ্চিত করতে আমাদের সুনির্দিষ্ট লক্ষ্য ও দীর্ঘমেয়াদী পরিকল্পনা।'
              : 'Our clear mandate and strategic horizon for transforming livestock farming and nutritional self-sufficiency.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-900 text-white shadow-xl border border-emerald-500/20 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-6 border border-emerald-400/30">
                <Target size={16} className="text-emerald-400" />
                <span>{t('about.missionTitle')}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
                {language === 'bn' ? 'বৈজ্ঞানিক পুষ্টির মাধ্যমে খামারির লাভ সর্বোচ্চকরণ' : 'Empowering Farmers with Precision Animal Nutrition'}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-8">
                {t('about.missionDesc')}
              </p>

              {/* Actionable Commitments */}
              <div className="space-y-3.5 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {language === 'bn' 
                      ? 'সর্বনিম্ন এফসিআর (FCR) ও সুষম অ্যামিনো এসিডের মাধ্যমে দ্রুত দৈহিক বৃদ্ধি নিশ্চিত করা।' 
                      : 'Achieving industry-best Feed Conversion Ratios (FCR 1.5–1.6) through precision amino acid balancing.'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {language === 'bn' 
                      ? 'মাইকোটক্সিন ও ক্ষতিকর উপাদানমুক্ত নিরাপদ ফিড সরবরাহের মাধ্যমে পোল্ট্রি ও গবাদি পশুর রোগ প্রতিরোধ বৃদ্ধি।' 
                      : 'Shielding flocks against fungal and bacterial toxins with advanced multi-toxin binders and probiotics.'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {language === 'bn' 
                      ? 'খামারির উৎপাদন খরচ কমিয়ে সর্বোচ্চ আর্থিক লাভ ও টেকসই গ্রামীণ অর্থনীতি গড়ে তোলা।' 
                      : 'Minimizing production overhead to maximize profitability and long-term farmer livelihood.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-semibold">
              <span>{language === 'bn' ? 'উদ্দেশ্য: খামারির ১০০% সন্তুষ্টি' : 'Focus: 100% Farmer Satisfaction'}</span>
              <span>{language === 'bn' ? 'প্রমাণিত ফর্মুলেশন' : 'Scientifically Validated'}</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-amber-950 via-slate-950 to-slate-900 text-white shadow-xl border border-amber-500/20 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase mb-6 border border-amber-400/30">
                <Compass size={16} className="text-amber-400" />
                <span>{t('about.visionTitle')}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
                {language === 'bn' ? 'বাংলাদেশের কৃষিশিল্পে আস্থার শীর্ষ প্রতীক' : 'Setting the National Benchmark for Agro-Nutritional Excellence'}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-8">
                {t('about.visionDesc')}
              </p>

              {/* Strategic Horizon Points */}
              <div className="space-y-3.5 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {language === 'bn' 
                      ? 'অত্যাধুনিক স্বয়ংক্রিয় মিলিং ও বিশ্বমানের ল্যাব নিয়ন্ত্রণের মাধ্যমে শতভাগ বিশুদ্ধ পণ্যের নিশ্চয়তা।' 
                      : 'Setting new industry standards with European automated processing and NIR analytical grain profiling.'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {language === 'bn' 
                      ? 'দেশের প্রতিটি প্রান্তে নিরাপদ ও সাশ্রয়ী আমিষ উৎপাদনের মাধ্যমে জাতীয় খাদ্য নিরাপত্তায় অগ্রণী ভূমিকা পালন।' 
                      : 'Championing national food security through chemical-free poultry meat, egg yield, and pure dairy milk.'}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {language === 'bn' 
                      ? 'পরিবেশবান্ধব বায়ো-গ্রিন প্রযুক্তি ও আধুনিক এগ্রো-রিসার্চের সমন্বয়ে কৃষির ভবিষ্যৎ বিনির্মাণ।' 
                      : 'Leading sustainable green agriculture with low-carbon footprints and regenerative supply chains.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-semibold">
              <span>{language === 'bn' ? 'দূরদৃষ্টি: আধুনিক বাংলাদেশ এগ্রো' : 'Horizon: Future of Bangladesh Agro'}</span>
              <span>{language === 'bn' ? 'বিশ্বমানের মানদণ্ড' : 'Global Standards'}</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CORE VALUES & IMPORTANT INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 mb-2 block">
            {language === 'bn' ? 'আমাদের মৌলিক ভিত্তি' : 'FOUNDATIONAL PRINCIPLES'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#03230c]">
            {t('about.valuesTitle')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            {language === 'bn'
              ? 'যেসব মূল্যবোধ ও নীতিমালার ওপর ভিত্তি করে MI UNIFYLD AGRO LTD পরিচালিত হয়।'
              : 'The core values guiding our product integrity, dealer relationships, and farmer support.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck size={26} className="text-emerald-700" />,
              title: language === 'bn' ? 'আপসহীন মান ও বায়ো-নিরাপত্তা' : 'Uncompromising Biosecurity',
              desc: language === 'bn'
                ? 'কাঁচামাল বাছাই থেকে চূড়ান্ত ব্যাগিং পর্যন্ত প্রতিটি ধাপে কঠোর কোয়ালিটি কন্ট্রোল ও জিরো-মাইকোটক্সিন নিশ্চিতকরণ।'
                : 'Zero tolerance for substandard grains; strict mycotoxin tests and ISO-compliant hygienic manufacturing.'
            },
            {
              icon: <HeartHandshake size={26} className="text-amber-600" />,
              title: language === 'bn' ? 'খামারিদের সমৃদ্ধি প্রথম' : 'Farmer-First Prosperity',
              desc: language === 'bn'
                ? 'খামারির মুনাফাই আমাদের প্রকৃত সাফল্য। ন্যায্য মূল্য এবং সঠিক পুষ্টি পরামর্শের মাধ্যমে সর্বদা খামারির পাশে থাকা।'
                : 'Empowering farm owners with affordable high-performance feeds and continuous veterinary advisory.'
            },
            {
              icon: <FlaskConical size={26} className="text-blue-700" />,
              title: language === 'bn' ? 'গবেষণা ও আধুনিক বিজ্ঞান' : 'Scientific Rigor & R&D',
              desc: language === 'bn'
                ? 'প্রাণিসম্পদ পুষ্টিবিদদের গবেষণার সমন্বয়ে তৈরি ফর্মুলেশন যা বাংলাদেশের আবহাওয়ায় সর্বোচ্চ কার্যকারিতা দেয়।'
                : 'Formulations engineered specifically for tropical climates, seasonal thermal stress, and disease resilience.'
            },
            {
              icon: <Building2 size={26} className="text-purple-700" />,
              title: language === 'bn' ? 'স্বচ্ছতা ও ব্যবসায়িক সততা' : 'Integrity & Transparency',
              desc: language === 'bn'
                ? 'সঠিক ওজন, নির্দিষ্ট পুষ্টি উপাদান ও স্বচ্ছ ব্যবসায়িক অঙ্গীকারের মাধ্যমে দীর্ঘস্থায়ী আস্থার সম্পর্ক রক্ষা।'
                : 'Truth in labeling, precise batch weights, exact protein metrics, and honest commercial partnerships.'
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2 leading-tight">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANUFACTURING & LAB TESTING STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        <div className="p-8 sm:p-14 rounded-[2.5rem] bg-[#03230c] text-white border border-emerald-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-4 border border-emerald-400/30">
              <FlaskConical size={14} />
              <span>{language === 'bn' ? 'অত্যাধুনিক পরিকাঠামো' : 'High-Tech Infrastructure'}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              {t('about.standardsTitle')}
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed mb-8">
              {language === 'bn'
                ? 'MI UNIFYLD AGRO LTD-এর ফিড উৎপাদন ব্যবস্থা আন্তর্জাতিক প্রযুক্তিতে সুসজ্জিত। কাঁচামাল আনলোডিং থেকে শুরু করে সম্পূর্ণ স্বয়ংক্রিয় মাইক্রো-ডোজিং, উচ্চ ঘনত্বের স্টীম কন্ডিশনার এবং স্বাস্থ্যকর প্যাকেটজাতকরণ—প্রতিটি ব্যাচ পরীক্ষিত ও গুণগত মানে আপসহীন।'
                : 'Our feed processing facility operates on cutting-edge automated processing with automated micro-dosing, high-temperature conditioning for pathogen eradication, and computerized batching.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <h4 className="font-bold text-amber-300 mb-1">
                  {language === 'bn' ? '১০০% ল্যাব টেস্টেড' : '100% NIR Lab Tested'}
                </h4>
                <p className="text-slate-300">
                  {language === 'bn'
                    ? 'প্রতিটি চালানে আর্দ্রতা, অপরিশোধিত প্রোটিন ও ফাইবার কঠোরভাবে যাচাই করা হয়।'
                    : 'NIR spectroscopic analysis of every raw ingredient before production batching.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <h4 className="font-bold text-emerald-300 mb-1">
                  {language === 'bn' ? 'অণুজীব ও সালমোনেলা মুক্ত' : 'Pathogen & Salmonella Shield'}
                </h4>
                <p className="text-slate-300">
                  {language === 'bn'
                    ? 'উচ্চ তাপমাত্রার হাইজেনিক কন্ডিশনিং ব্যাকটেরিয়ার সংক্রমণ শূন্যে নামিয়ে আনে।'
                    : 'Controlled conditioning temperatures eliminate pathogenic bacteria safely.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <h4 className="font-bold text-blue-300 mb-1">
                  {language === 'bn' ? 'সুনির্দিষ্ট দানার গঠন' : 'Uniform Pellet & Crumble'}
                </h4>
                <p className="text-slate-300">
                  {language === 'bn'
                    ? 'বয়স অনুযায়ী নিখুঁত সাইজের ক্রাম্বল ও পিলেট, যা খাদ্য অপচয় পুরোপুরি রোধ করে।'
                    : 'Stage-matched crumble sizes ensuring high feed intake and zero feed wastage.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Leadership & Official Directory */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-slate-700 bg-white border border-slate-200 shadow-xs mb-3">
              <Mail size={12} className="text-amber-500" />
              <span>{language === 'bn' ? 'কর্পোরেট যোগাযোগ' : 'Corporate Reach'}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-3">
              {t('about.contactTitle')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
              {t('about.contactDesc')}
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
                    className="text-xs font-semibold text-emerald-800 group-hover:text-emerald-950 truncate max-w-[200px]"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-500 group-hover:text-emerald-700 flex items-center justify-center transition-colors"
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
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <PhoneCall size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  {language === 'bn' ? 'সরাসরি হটলাইন' : 'Direct Farm Nutrition Helpline'}
                </p>
                <p className="text-lg font-bold text-slate-950">
                  +880 1817-875139 · +880 1897-789766
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
