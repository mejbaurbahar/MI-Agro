/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/ProductsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import CartDrawer from './components/CartDrawer';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';
import { Toaster } from 'sonner';
import { ShoppingBag } from 'lucide-react';

function FloatingCartButton() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all border border-orange-400/40"
      title="Shopping Cart"
    >
      <div className="relative">
        <ShoppingBag size={22} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md">
            {totalItems}
          </span>
        )}
      </div>
      <span className="font-bold text-xs uppercase tracking-wider hidden sm:inline">
        Cart
      </span>
    </button>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <Toaster position="top-center" richColors />
            <CartDrawer />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/products/:category" element={<ProductsPage />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />

              <FloatingCartButton />
              
              {/* Floating Contact Buttons */}
              <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
                <a
                  href="https://wa.me/8801817875139"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                  title="WhatsApp Us"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 invert" alt="WhatsApp" />
                </a>
                <a
                  href="https://m.me/unifyldagro" // Placeholder
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                  title="Messenger Us"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" className="w-8 h-8" alt="Messenger" />
                </a>
              </div>
            </div>
          </Router>
        </CartProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
