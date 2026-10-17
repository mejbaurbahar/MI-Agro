import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products, getProductImage } from '../data/products';
import { trackMetaViewContent } from '../utils/metaPixel';

export default function ProductsPage() {
  const { category = 'all' } = useParams<{ category: string }>();
  const { t, language } = useLanguage();
  const { addToCart, formatPrice } = useCart();
  const navigate = useNavigate();

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  const titleKey = category === 'poultry' ? 'products.poultry'
    : category === 'sonali' ? 'products.sonali'
    : category === 'cattle' ? 'products.cattle'
    : category === 'food' ? 'products.food'
    : 'products.title';

  const categories = [
    { id: 'all', label: language === 'bn' ? 'সব পণ্য' : 'All Products' },
    { id: 'poultry', label: language === 'bn' ? 'পোল্ট্রি' : 'Poultry' },
    { id: 'sonali', label: language === 'bn' ? 'সোনালী' : 'Sonali' },
    { id: 'cattle', label: language === 'bn' ? 'ক্যাটল' : 'Cattle' },
    { id: 'food', label: language === 'bn' ? 'ফুড ও বেভারেজ' : 'Food & Beverage' },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#fbfbfd] min-h-screen">
      <Helmet>
        <title>{`${t(titleKey)} | MI UNIFYLD AGRO LTD`}</title>
        <meta name="description" content={t('products.desc')} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Editorial Header */}
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
            {language === 'bn' ? 'পণ্য তালিকা' : 'Product Lineup'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t(titleKey)}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t('products.desc')}
          </p>

          {/* iOS Segmented Control Bar */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-slate-200/60 border border-slate-300/40 max-w-full overflow-x-auto scrollbar-none">
            {categories.map((c) => {
              const active = (category === c.id) || (!category && c.id === 'all');
              return (
                <Link
                  key={c.id}
                  to={c.id === 'all' ? '/products/all' : `/products/${c.id}`}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all whitespace-nowrap ${
                    active
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between product-card"
                data-product-id={product.id}
                itemScope
                itemType="https://schema.org/Product"
              >
                <div>
                  {/* Studio Image Stage */}
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => trackMetaViewContent({ id: product.id, name: product.en.name, price: product.price, category: product.category })}
                    className="relative aspect-[4/5] bg-gradient-to-b from-slate-50/60 to-slate-100/30 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-6 block"
                  >
                    <img
                      src={getProductImage(product)}
                      alt={product[language].name}
                      width={400}
                      height={400}
                      itemProp="image"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 apple-blur text-slate-800 px-3 py-1 rounded-full text-[10px] font-semibold tracking-tight shadow-xs border border-slate-200/60">
                        {product[language].phase}
                      </span>
                    </div>
                  </Link>

                  {/* Product Title & Duration */}
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex-1">
                      <h3 itemProp="name" className="text-base font-bold text-slate-900 leading-snug product-title">
                        {product[language].name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {product[language].duration}
                      </p>
                    </div>

                    <div className="text-right shrink-0" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <p className="text-base font-bold text-slate-900 price-tag">
                        {product.price ? (
                          <span itemProp="price" content={String(product.price)}>
                            {formatPrice(product.price)}
                          </span>
                        ) : (
                          t('products.callForPrice')
                        )}
                      </p>
                      {product.price && (
                        <span className="text-[10px] text-slate-400 font-medium block">
                          {product[language].bagSize}
                        </span>
                      )}
                    </div>
                  </div>

                  <p itemProp="description" className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-6">
                    {product[language].tagline}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => addToCart(product, 1)}
                    aria-label="Add to cart"
                    data-action="cart"
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                  >
                    <ShoppingBag size={14} />
                    <span>{t('order.addToCart')}</span>
                  </button>

                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      navigate('/checkout');
                    }}
                    aria-label="Buy now"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
                  >
                    <span>{t('order.directOrder')}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/60 p-12 max-w-lg mx-auto">
            <p className="text-slate-500 text-base mb-4">{t('details.notFound')}</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold"
            >
              <span>{t('404.back')}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
