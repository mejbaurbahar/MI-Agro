import { Phone, Mail, MapPin, Facebook, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                U
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-white tracking-tight uppercase">MI UNIFYLD</span>
                <span className="text-[10px] uppercase tracking-widest text-yellow-500 font-semibold">Agro Ltd</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.about')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.products')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              {products.map((product) => (
                <li key={product.id}>
                  <Link to={`/product/${product.id}`} className="hover:text-orange-500 transition-colors">
                    {product[language].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500 shrink-0" />
                  <span>+880 1817 875139</span>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <span>+880 1897 789766</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>miunifyldagroltd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs font-bold text-slate-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} MI UNIFYLD AGRO LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

