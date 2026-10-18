import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft,
  Server,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#fcfdfa] text-slate-900">
      <Helmet>
        <title>{t('seo.privacy.title')}</title>
        <meta name="description" content={t('seo.privacy.desc')} />
      </Helmet>

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            <span>{language === 'bn' ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-400/30">
            <ShieldCheck size={14} />
            <span>{language === 'bn' ? 'অফিসিয়াল নীতি ও নিরাপত্তা' : 'Official Trust & Security'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            {language === 'bn' ? 'গোপনীয়তা ও তথ্য সুরক্ষা নীতিমালা' : 'Privacy & Data Protection Policy'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'bn'
              ? 'MI UNIFYLD AGRO LTD গ্রাহকদের তথ্যের সর্বোচ্চ সুরক্ষা ও গোপনীয়তা বজায় রাখতে প্রতিশ্রুতিবদ্ধ।'
              : 'MI UNIFYLD AGRO LTD is deeply committed to upholding the privacy, transparency, and security of all farmer and customer data.'}
          </p>

          <div className="mt-6 text-xs text-emerald-300/80 font-mono">
            {language === 'bn' ? 'সর্বশেষ হালনাগাদ: অক্টোবর ২০২৬' : 'Last Updated: October 2026'} · Version 2.4
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">

          {/* Section 1: Overview */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <FileText size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                {language === 'bn' ? '১. পরিচিতি ও সাধারণ অঙ্গীকার' : '1. Overview & Commitment'}
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {language === 'bn' ? (
                <>
                  এই গোপনীয়তা নীতিমালায় বর্ণনা করা হয়েছে কীভাবে <strong>MI UNIFYLD AGRO LTD</strong> (ঠিকানা: পলওয়েল কার্নেশন শপিং সেন্টার, প্লট নং ৯/বি, লেভেল ৭, সেক্টর ০৮, উত্তরা, ঢাকা ১২৩০) আপনার ব্যক্তিগত তথ্য সংগ্রহ, প্রক্রিয়াকরণ এবং সংরক্ষণ করে। আমাদের ওয়েবসাইট ব্যবহার বা পণ্য অর্ডারের মাধ্যমে আপনি এই নীতিমালার শর্তাবলি সমর্থন করছেন।
                </>
              ) : (
                <>
                  This Privacy Policy describes how <strong>MI UNIFYLD AGRO LTD</strong> (located at Polwel Carnation Shopping Center, Plot No 9/B, Level 7, Sector 08, Uttara, Dhaka 1230) collects, uses, and safeguards information gathered when you visit our website, communicate with our nutritionists, or purchase our products.
                </>
              )}
            </p>
          </div>

          {/* Section 2: Data We Collect */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <UserCheck size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                {language === 'bn' ? '২. আমরা যেসব তথ্য সংগ্রহ করি' : '2. Information We Collect'}
              </h2>
            </div>
            
            <div className="space-y-4 text-sm text-slate-600">
              <p>
                {language === 'bn' 
                  ? 'গ্রাহক সেবা ও নির্ভুল পণ্য সরবরাহের সুবিধার্থে আমরা সীমিত ও প্রয়োজনীয় তথ্য সংগ্রহ করি:' 
                  : 'To process orders accurately and provide technical agro advisory, we collect:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>{language === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact Information'}</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'bn' 
                      ? 'নাম, মোবাইল ফোন নম্বর, ইমেইল ঠিকানা এবং খামার বা দোকানের বিস্তারিত ঠিকানা।' 
                      : 'Full name, active mobile number, optional email address, and farm/business delivery address.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>{language === 'bn' ? 'অর্ডার ও পোল্ট্রি খামার সংক্রান্ত তথ্য' : 'Farm & Order Requirements'}</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'bn' 
                      ? 'নির্বাচিত ফিডের ধরন (স্টার্টার, গ্রোয়ার, ফিনিশার), ব্যাগের পরিমাণ এবং খামারের বিশেষ নির্দেশনা।' 
                      : 'Selected feed category (Starter, Grower, Finisher), quantity, flock age, and delivery instructions.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>{language === 'bn' ? 'কারিগরি ব্রাউজিং ডেটা' : 'Technical & Analytics Data'}</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'bn' 
                      ? 'আইপি অ্যাড্রেস, ব্রাউজারের ধরন ও অ্যানোনিমাস ট্র্যাকিং (যেমন Meta Pixel) ওয়েবসাইটের গতি ও পারফরম্যান্স উন্নয়নের জন্য।' 
                      : 'Aggregated analytics data, browser type, and anonymous Meta Pixel signals to optimize website performance.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>{language === 'bn' ? 'সরাসরি চ্যাট লগ' : 'Communication Logs'}</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'bn' 
                      ? 'হোয়াটসঅ্যাপ, ফেসবুক মেসেঞ্জার বা হটলাইনে আপনার সাথে হওয়া অর্ডার সংক্রান্ত তথ্যাদি।' 
                      : 'Inquiries, customer care requests, and order details exchanged via WhatsApp or Messenger.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: How We Use Data */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Lock size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                {language === 'bn' ? '৩. তথ্যের ব্যবহার ও উদ্দেশ্য' : '3. Purpose of Information Use'}
              </h2>
            </div>
            
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {language === 'bn'
                    ? 'আপনার অর্ডার নিশ্চিত করা, ফোন কলের মাধ্যমে ডেলিভারি সমন্বয় এবং খামারে ফিড পৌঁছে দেওয়া।'
                    : 'Validating orders, coordinating freight/truck logistics, and delivering feed directly to your farm gate.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {language === 'bn'
                    ? 'পোল্ট্রি ও ক্যাটল পুষ্টি সংক্রান্ত বিশেষজ্ঞ পরামর্শ ও সঠিক খাদ্য ব্যবহারের গাইডলাইন প্রদান।'
                    : 'Providing personalized veterinary and feed ration formulation support based on flock/cattle dynamics.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {language === 'bn'
                    ? 'প্রতারণা রোধ, ভুয়া অর্ডার সনাক্তকরণ এবং নিরাপদ ক্যাশ অন ডেলিভারি নিশ্চিতকরণ।'
                    : 'Preventing fraudulent submissions, verifying delivery credentials, and securing Cash-on-Delivery fulfillment.'}
                </span>
              </li>
            </ul>
          </div>

          {/* Section 4: Absolute Zero Sale of Data */}
          <div className="p-8 sm:p-10 rounded-3xl bg-emerald-950 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                {language === 'bn' ? '৪. কোনো তৃতীয় পক্ষের কাছে তথ্য বিক্রি করা হয় না' : '4. Zero Sale of Customer Data'}
              </h2>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              {language === 'bn' ? (
                <>
                  MI UNIFYLD AGRO LTD নীতিগতভাবে গ্রাহক বা খামারিদের যেকোনো তথ্যকে আমানত হিসেবে গণ্য করে। আমরা <strong>কখনোই আপনার মোবাইল নম্বর, নাম বা ব্যবসায়িক তথ্য কোনো বিজ্ঞাপন সংস্থা, তৃতীয় পক্ষ বা স্প্যামারদের কাছে বিক্রি, লিজ বা হস্তান্তর করি না।</strong>
                </>
              ) : (
                <>
                  MI UNIFYLD AGRO LTD maintains a strict non-disclosure policy. <strong>We NEVER sell, rent, lease, or monetize your contact numbers, address, or livestock records to third-party telemarketers or advertisers.</strong> Your information remains strictly confidential between you and MI UNIFYLD AGRO LTD.
                </>
              )}
            </p>
          </div>

          {/* Section 5: Cookies & Meta Pixel */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Server size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                {language === 'bn' ? '৫. কুকিজ ও মেটা পিক্সেল (Meta Pixel)' : '5. Cookies & Meta Tracking'}
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {language === 'bn' ? (
                <>
                  আমাদের ওয়েবসাইট ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে মেটা পিক্সেল (Meta Pixel) এবং কুকিজ ব্যবহার করতে পারে। এর মাধ্যমে আমরা শুধুমাত্র ব্যবহারকারীর পছন্দ এবং বিজ্ঞাপনের কার্যকারিতা পরিমাপ করি। আপনি চাইলে আপনার ব্রাউজার সেটিংস থেকে যেকোনো সময় কুকিজ নিষ্ক্রিয় করতে পারেন।
                </>
              ) : (
                <>
                  Our website may utilize standard browser cookies and the Meta Pixel to evaluate website interactions and deliver relevant agro product announcements. All collected browsing signals are aggregated anonymously. You may disable cookies through your browser preferences at any time.
                </>
              )}
            </p>
          </div>

          {/* Section 6: Customer Rights */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                <Eye size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                {language === 'bn' ? '৬. আপনার অধিকার ও ডেটা মুছে ফেলার অনুরোধ' : '6. Your Rights & Data Deletion'}
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
              {language === 'bn' ? (
                <>
                  আপনার সংরক্ষিত তথ্য পর্যালোচনা, সংশোধন বা সম্পূর্ণ মুছে ফেলার সম্পূর্ণ অধিকার আপনার রয়েছে। আপনার যোগাযোগের তথ্য তালিকা থেকে অপসারণ করতে চাইলে আমাদের অফিসিয়াল ইমেইলে সরাসরি বার্তা পাঠাতে পারেন।
                </>
              ) : (
                <>
                  You retain complete rights to inspect, amend, or request the permanent erasure of your personal data from our operational databases. To exercise your rights, email our compliance desk at <strong>info@miunifyldagroltd.com</strong>.
                </>
              )}
            </p>
          </div>

          {/* Section 7: Corporate Contact */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-950 mb-4">
              {language === 'bn' ? '৭. যোগাযোগ ও অভিযোগ কর্মকর্তা' : '7. Contact & Privacy Inquiries'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>{language === 'bn' ? 'প্রধান কার্যালয়:' : 'Head Office:'}</strong><br />
                  পলওয়েল কার্নেশন শপিং সেন্টার, প্লট ৯/বি, লেভেল ৭, সেক্টর ০৮, উত্তরা, ঢাকা ১২৩০
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>{language === 'bn' ? 'হটলাইন:' : 'Helpline:'}</strong><br />
                  <a href="tel:+8801817875139" className="hover:underline font-bold">+880 1817 875139</a><br />
                  +880 1897 789766
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>{language === 'bn' ? 'ইমেইল:' : 'Official Email:'}</strong><br />
                  <a href="mailto:info@miunifyldagroltd.com" className="hover:underline">info@miunifyldagroltd.com</a><br />
                  <a href="mailto:md@miunifyldagroltd.com" className="hover:underline">md@miunifyldagroltd.com</a>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
