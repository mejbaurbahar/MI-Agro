import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, MessageSquare, ShieldCheck, Lock, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { trackMetaContact } from '../utils/metaPixel';

export default function Footer() {
  const { t, language } = useLanguage();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-[#021808] text-emerald-100/70 pt-16 pb-12 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img
                src="/products/logo.png"
                alt="MI UNIFYLD AGRO LTD Logo"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-white font-semibold text-base tracking-tight">
                MI Unifyld Agro Ltd.
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              {t('footer.about')}
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.facebook.com/profile.php?id=61594281573717"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackMetaContact('Facebook_Page_Footer')}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/[0.08]"
                title={language === 'bn' ? 'ফেসবুক পেজ' : 'Facebook Page'}
                aria-label="Facebook Page"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.facebook.com/messages/t/61594281573717"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackMetaContact('Facebook_Messenger_Footer')}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#0084FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/[0.08]"
                title={language === 'bn' ? 'ফেসবুকে মেসেজ পাঠান' : 'Chat via Facebook Messages'}
                aria-label="Facebook Messages"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-tight uppercase">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/products/all" className="hover:text-white transition-colors">
                  {language === 'bn' ? 'সব পণ্য ক্যাটালগ' : 'Complete Catalog'}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-emerald-400 text-emerald-300/90 font-medium transition-colors flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>{t('footer.privacyPolicy')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Feeds & Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-tight uppercase">
              {t('footer.products')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {products.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/product/${product.id}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {product[language].name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products/all" className="text-emerald-400 hover:text-emerald-300 font-semibold inline-block pt-1">
                  {language === 'bn' ? 'আরও পণ্য দেখুন →' : 'View all products →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-tight uppercase">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-emerald-400 shrink-0" />
                <a href="tel:+8801817875139" className="hover:text-white transition-colors">
                  +880 1817 875139
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-emerald-400 shrink-0" />
                <a href="mailto:info@miunifyldagroltd.com" className="hover:text-white transition-colors">
                  info@miunifyldagroltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated Privacy & Trust Section Banner at the bottom of the page */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/25">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h5 className="text-white text-xs font-bold tracking-wide">
                {language === 'bn' ? 'খামারি ও গ্রাহক তথ্য নিরাপত্তা ও গোপনীয়তা নীতি' : 'Customer Data Protection & Privacy Policy'}
              </h5>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                {language === 'bn'
                  ? 'আপনার অর্ডার ও যোগাযোগের সকল তথ্য MI UNIFYLD AGRO LTD-এর কাছে সম্পূর্ণ নিরাপদ। আমরা কোনো তৃতীয় পক্ষের কাছে তথ্য বিক্রি করি না।'
                  : 'All customer and order records are strictly safeguarded. We never sell, lease, or share personal details with third parties.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="text-xs font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
            >
              {language === 'bn' ? 'সংক্ষিপ্ত সারসংক্ষেপ' : 'Quick Summary'}
            </button>
            <Link
              to="/privacy-policy"
              className="px-4 py-2 rounded-full bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-semibold tracking-wide transition-all"
            >
              {language === 'bn' ? 'সম্পূর্ণ নীতিমালা →' : 'Full Policy →'}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} MI UNIFYLD AGRO LTD. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              {t('footer.termsOfService')}
            </Link>
            <span>•</span>
            <span className="text-slate-500">
              {language === 'bn' ? 'উচ্চমানের পোল্ট্রি, ক্যাটল ও খাদ্য সমাধান' : 'Premium Poultry, Cattle & Food Solutions'}
            </span>
          </div>
        </div>
      </div>

      {/* Instant Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 relative">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">
                  {language === 'bn' ? 'গোপনীয়তা ও তথ্য সুরক্ষা নীতি' : 'Privacy & Trust Assurance'}
                </h3>
                <p className="text-[11px] text-emerald-700 font-semibold">MI UNIFYLD AGRO LTD</p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed mb-6">
              <p>
                {language === 'bn'
                  ? 'MI UNIFYLD AGRO LTD গ্রাহকদের তথ্যের সর্বোচ্চ নিরাপত্তা বজায় রাখে। অর্ডার ডেলিভারি ও পুষ্টি পরামর্শ ব্যতিরেকে আপনার নাম, ঠিকানা বা মোবাইল নম্বর অন্য কোনো বাণিজ্যিক উদ্দেশ্যে ব্যবহার করা হয় না।'
                  : 'MI UNIFYLD AGRO LTD maintains complete confidentiality over customer records. Information collected during orders is strictly used for shipment dispatch and feed advisory.'}
              </p>
              <p className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-900 font-medium">
                {language === 'bn'
                  ? '✅ কোনো তৃতীয় পক্ষের কাছে ফোন নম্বর বা ব্যক্তিগত তথ্য বিক্রি বা হস্তান্তর করা হয় না।'
                  : '✅ Zero sale or leasing of customer phone numbers or farm records to any external third party.'}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                {language === 'bn' ? 'ঠিক আছে' : 'Close'}
              </button>
              <Link
                to="/privacy-policy"
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'bn' ? 'সম্পূর্ণ পাতা পড়ুন' : 'View Full Policy Page'}</span>
                <ExternalLink size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
