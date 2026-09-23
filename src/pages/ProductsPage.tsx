import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Eye, ShoppingBag, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductsPage() {
  const { category } = useParams<{ category: string }>();
  const { t, language } = useLanguage();
  const { addToCart, formatPrice } = useCart();
  const navigate = useNavigate();

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  const titleKey = category === 'poultry' ? 'products.poultry'
    : category === 'sonali' ? 'products.sonali'
    : category === 'cattle' ? 'products.cattle'
    : 'products.title';

  const handleDirectOrder = (product: typeof products[0]) => {
    addToCart(product, 1);
    navigate('/checkout');
  };

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
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between product-card"
                data-product-id={product.id}
                itemScope
                itemType="https://schema.org/Product"
              >
                <div>
                  <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <img
                      src={`/products/${product.id}.png`}
                      alt={product[language].name}
                      width={400}
                      height={400}
                      itemProp="image"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                        {product[language].phase}
                      </span>
                    </div>
                  </Link>
                  
                  <div className="p-7">
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <div>
                        <h3 itemProp="name" className="text-xl font-black text-slate-900 mb-1 leading-snug product-title">
                          {product[language].name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {product[language].duration}
                        </p>
                      </div>
                      <div className="text-right shrink-0" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                          {t('products.price')}
                        </p>
                        <p className="text-base sm:text-lg font-black text-orange-600 price-tag">
                          {product.price ? (
                            <span itemProp="price" content={String(product.price)}>
                              {formatPrice(product.price)}
                            </span>
                          ) : (
                            t('products.callForPrice')
                          )}
                        </p>
                        {product.price && (
                          <span className="text-[10px] text-slate-400 font-semibold block">
                            {product[language].bagSize}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p itemProp="description" className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-6 leading-relaxed">
                      {product[language].tagline}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0">
                  <div className="flex gap-2.5">
                    <button 
                      onClick={() => addToCart(product, 1)}
                      aria-label="Add to cart"
                      data-action="cart"
                      className="add-to-cart-btn flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                    >
                      <ShoppingBag size={15} />
                      <span>{t('order.addToCart')}</span>
                    </button>
                    <button 
                      onClick={() => handleDirectOrder(product)}
                      aria-label="Buy now"
                      className="buy-now-btn flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/20 transition-all active:scale-[0.98]"
                    >
                      <Zap size={15} />
                      <span>{t('order.directOrder')}</span>
                    </button>
                  </div>

                  <Link 
                    to={`/product/${product.id}`}
                    className="w-full mt-3 text-center text-xs font-semibold text-slate-500 hover:text-orange-600 py-1 flex items-center justify-center gap-1 transition-colors"
                  >
                    <Eye size={13} />
                    <span>{t('products.viewDetails')}</span>
                  </Link>
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
