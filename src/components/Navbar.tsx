import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/#products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'bn' ? 'en' : 'bn');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#003300]/95 backdrop-blur-md shadow-lg py-2' : 'bg-[#003300]/80 py-4'} border-b border-yellow-500/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600 via-yellow-500 to-green-400 rounded-full blur-[1px]" />
              <div className="relative bg-white w-10 h-10 rounded-full flex items-center justify-center text-[#003300] font-black text-2xl shadow-inner">
                U
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none text-white tracking-tight">MI UNIFYLD</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-yellow-500 font-bold">Agro Ltd</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-yellow-500 ${location.pathname === link.path ? 'text-yellow-500' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-xs font-black text-white hover:text-yellow-500 transition-colors bg-white/10 px-3 py-1.5 rounded-lg border border-white/20"
              >
                <Globe size={14} />
                {language === 'bn' ? 'EN' : 'বাংলা'}
              </button>

              <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-md text-sm font-black shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all border border-orange-400/50">
                {t('nav.quote')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-bold text-white bg-white/10 px-2 py-1 rounded-md border border-white/20"
            >
              <Globe size={14} />
              {language === 'bn' ? 'EN' : 'বাংলা'}
            </button>
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-500 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:+8801817875139" className="flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-xl font-bold">
                  <Phone size={20} /> {t('nav.callNow')}
                </a>
                <a href="mailto:miunifyldagroltd@gmail.com" className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold">
                  <Mail size={20} /> {t('nav.emailUs')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


