import { Phone, Mail, MapPin, Facebook, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { trackMetaContact } from '../utils/metaPixel';

export default function Footer() {
  const { t, language } = useLanguage();

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
                title="Facebook Page"
                aria-label="Facebook Page"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://m.me/61594281573717"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackMetaContact('Facebook_Messenger_Footer')}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#0084FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/[0.08]"
                title="Facebook Messenger"
                aria-label="Facebook Messenger"
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MI UNIFYLD AGRO LTD. All rights reserved.</p>
          <p className="text-[11px]">
            {language === 'bn' ? 'উচ্চমানের পোল্ট্রি, ক্যাটল ও খাদ্য সমাধান' : 'Premium Poultry, Cattle & Food Solutions'}
          </p>
        </div>
      </div>
    </footer>
  );
}
