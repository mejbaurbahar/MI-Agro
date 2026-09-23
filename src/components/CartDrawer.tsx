import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate, Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    totalItems, 
    subtotal, 
    formatPrice 
  } = useCart();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 max-w-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900 leading-tight">
                    {t('cart.title')}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500">
                    {totalItems} {t('cart.items')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                    <ShoppingBag size={36} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {t('cart.empty')}
                    </h3>
                    <p className="text-xs text-slate-500 max-w-xs">
                      {language === 'bn' 
                        ? 'আমাদের প্রিমিয়াম পোল্ট্রি ও ক্যাটল ফিড পণ্য দেখে কার্টে যুক্ত করুন।' 
                        : 'Explore our premium poultry & cattle feed lineup and add items to your cart.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/products/all');
                    }}
                    className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
                  >
                    {t('checkout.viewProducts')}
                  </button>
                </div>
              ) : (
                items.map((item) => {
                  const productContent = item.product[language];
                  const unitPrice = item.product.price;
                  const itemTotal = unitPrice ? unitPrice * item.quantity : null;

                  return (
                    <div key={item.product.id} className="py-4 first:pt-0 last:pb-0 flex gap-3.5">
                      <Link
                        to={`/product/${item.product.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60 block"
                      >
                        <img
                          src={`/products/${item.product.id}.png`}
                          alt={productContent.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </Link>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <Link
                              to={`/product/${item.product.id}`}
                              onClick={() => setIsCartOpen(false)}
                              className="font-bold text-sm text-slate-900 hover:text-orange-600 line-clamp-1 leading-snug"
                            >
                              {productContent.name}
                            </Link>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-slate-400 hover:text-red-600 transition-colors p-1"
                              title={t('cart.remove')}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium">
                            {productContent.bagSize}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-8 text-center text-xs font-bold text-slate-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          {/* Line price */}
                          <div className="text-right">
                            <p className="text-xs font-black text-slate-900">
                              {itemTotal !== null ? formatPrice(itemTotal) : t('products.callForPrice')}
                            </p>
                            {unitPrice && item.quantity > 1 && (
                              <p className="text-[10px] text-slate-400 font-medium">
                                ({formatPrice(unitPrice)} × {item.quantity})
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Drawer Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold text-slate-600">
                    {t('cart.subtotal')}
                  </span>
                  <span className="text-xl font-black text-slate-900">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 leading-tight">
                  {language === 'bn'
                    ? 'ডেলিভারি চার্জ ও পেমেন্ট: ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে পরিশোধ)।'
                    : 'Payment method: Cash on Delivery upon receiving your order.'}
                </p>

                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleCheckout}
                    aria-label="Proceed to Checkout"
                    className="checkout-btn w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <span>{t('cart.checkout')}</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-xs transition-colors"
                  >
                    {t('cart.continue')}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
