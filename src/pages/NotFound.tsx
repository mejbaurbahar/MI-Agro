import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <h1 className="text-9xl font-black text-slate-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('404.title')}</h2>
        <p className="text-slate-600 mb-8">
          {t('404.desc')}
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-orange-600 transition-all"
        >
          <Home size={20} />
          {t('404.back')}
        </Link>
      </motion.div>
    </div>
  );
}
