import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#021f0a]/95 apple-blur border-emerald-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-2.5'
            : 'bg-[#021f0a]/90 apple-blur border-emerald-500/15 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-11">
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <img
                  src="/products/logo.png"
                  alt="MI UNIFYLD AGRO LTD Logo"
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-tight leading-none group-hover:text-amber-300 transition-colors">
                  MI Unifyld Agro Ltd.
                </span>
                <span className="text-[10px] text-emerald-300 font-medium tracking-wide mt-0.5 hidden sm:block">
                  {language === 'bn' ? '🌿 প্রিমিয়াম এগ্রো ও লাইভস্টক ফিড' : '🌿 Premium Agro & Livestock Feed'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                      isActive
                        ? 'text-amber-300 bg-emerald-900/60 border border-emerald-400/30 shadow-xs'
                        : 'text-emerald-100 hover:text-white hover:bg-emerald-900/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Actions (Language, Cart, Direct Order) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher Pill */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-100 hover:text-white border border-emerald-500/20 transition-all text-xs font-semibold tracking-tight active:scale-95"
                aria-label="Toggle language"
              >
                <Globe size={13} className="text-emerald-300" />
                <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-100 hover:text-white border border-emerald-500/20 transition-all active:scale-95"
                aria-label="View Cart"
                title={t('cart.title')}
              >
                <ShoppingBag size={17} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Direct Order Primary Harvest Golden Pill CTA */}
              <Link
                to="/checkout"
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 px-4 py-2 rounded-full text-xs font-black tracking-tight shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>{t('order.directOrder')}</span>
                <ArrowRight size={13} className="text-slate-950" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full bg-white/[0.08] text-white border border-white/[0.1]"
                aria-label="View Cart"
              >
                <ShoppingBag size={16} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-200 bg-white/[0.08] border border-white/[0.1]"
              >
                {language === 'bn' ? 'EN' : 'বাং'}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-full text-white hover:bg-white/[0.1] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-[#021f0a]/98 apple-blur border-b border-emerald-500/20 overflow-hidden"
            >
              <div className="px-5 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-100 hover:text-white hover:bg-emerald-900/40 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 border-t border-emerald-500/20">
                  <Link
                    to="/checkout"
                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 py-3 rounded-full text-xs font-black flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>{t('order.directOrder')}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
