import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

export default function ProductsPage() {
  const { category } = useParams<{ category: string }>();
  const { t, language } = useLanguage();

  const filteredProducts = products.filter(p => p.category === category);
  
  const titleKey = category === 'poultry' ? 'products.poultry' : 'products.cattle';

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{`${t(titleKey)} | MI UNIFYLD AGRO LTD`}</title>
        <meta name="description" content={t('products.desc')} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            {t(titleKey)}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('products.desc')}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <img 
                    src={product.id === 'starter' 
                      ? "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600"
                      : product.id === 'grower'
                      ? "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=600"
                      : product.id === 'sweet-bran'
                      ? "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600"
                      : "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=600"
                    } 
                    alt={product[language].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                      {product[language].phase}
                    </span>
                  </div>
                </Link>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-1">{product[language].name}</h3>
                      <p className="text-sm text-slate-500 font-medium">{product[language].duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{t('products.price')}</p>
                      <p className="text-lg font-black text-orange-500">{t('products.callUs')}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm line-clamp-2 mb-8 leading-relaxed">
                    {product[language].tagline}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={`/product/${product.id}`}
                      className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
                    >
                      <Eye size={16} />
                      {t('products.viewDetails')}
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-orange-500 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all"
                    >
                      <Phone size={16} />
                      {t('products.addToCart')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-xl">{t('details.notFound')}</p>
            <Link to="/" className="text-orange-500 font-bold mt-4 inline-block">{t('404.back')}</Link>
          </div>
        )}
      </div>
    </div>
  );
}
