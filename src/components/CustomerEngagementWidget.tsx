import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Phone, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { trackMetaContact } from '../utils/metaPixel';

const FB_PAGE_ID = '61594281573717';
const HOTLINE_NUMBER = '+8801817875139';

export default function CustomerEngagementWidget() {
  const { language } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoPrompted, setHasAutoPrompted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Auto-nudge visitors browsing products or spending time on site
  useEffect(() => {
    if (hasAutoPrompted || isDismissed) return;

    const isProductPage = location.pathname.includes('/product');
    const delay = isProductPage ? 4000 : 10000;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoPrompted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, hasAutoPrompted, isDismissed]);

  const handleMessengerClick = () => {
    trackMetaContact('Facebook_Messenger', { path: location.pathname });
    window.open(`https://m.me/${FB_PAGE_ID}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      language === 'bn'
        ? 'আসসালামু আলাইকুম, আমি MI UNIFYLD AGRO LTD-এর ফিড পণ্য সম্পর্কে জানতে চাচ্ছি।'
        : 'Hello, I want to inquire about MI UNIFYLD AGRO LTD feed products.'
    );
    trackMetaContact('WhatsApp', { path: location.pathname });
    window.open(`https://wa.me/8801817875139?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleCallClick = () => {
    trackMetaContact('Hotline_Call', { path: location.pathname });
    window.location.href = `tel:${HOTLINE_NUMBER}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end print:hidden">
      {/* Expanded Prompt Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-3 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#003300] to-[#004d00] p-4 text-white relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={18} className="text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">
                    {language === 'bn' ? 'এমআই এগ্রো কাস্টমার হেল্প' : 'MI Agro Customer Help'}
                  </h4>
                  <p className="text-[11px] text-green-200 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {language === 'bn' ? 'অনলাইন সাপোর্ট চালু আছে' : 'Online & Ready to Help'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsDismissed(true);
                }}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3 bg-slate-50/50">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {language === 'bn'
                  ? 'খামারের জন্য সঠিক ফিড নির্বাচনে সহায়তা চান, বা সরাসরি অর্ডার করতে চান? আমাদের সাথে কথা বলুন:'
                  : 'Need guidance choosing the right feed for your farm, or ready to place an order? Contact us directly:'}
              </p>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* Facebook Messenger */}
                <button
                  onClick={handleMessengerClick}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#0084FF] hover:bg-[#0073e6] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.914 1.455 5.518 3.735 7.152V22l3.447-1.892c.905.251 1.865.388 2.818.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.002 12.443l-2.557-2.727-4.993 2.727 5.49-5.83 2.62 2.728 4.93-2.728-5.49 5.83z" />
                  </svg>
                  <span>
                    {language === 'bn' ? 'ফেসবুক মেসেঞ্জারে চ্যাট করুন' : 'Chat on Facebook Messenger'}
                  </span>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-4 rounded-xl font-bold text-xs shadow-sm transition-all hover:scale-[1.02]"
                >
                  <MessageSquare size={16} />
                  <span>
                    {language === 'bn' ? 'হোয়াটসঅ্যাপে মেসেজ পাঠান' : 'Chat on WhatsApp'}
                  </span>
                </button>

                {/* Direct Phone Call */}
                <button
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white py-2 px-4 rounded-xl font-bold text-xs transition-all hover:scale-[1.02]"
                >
                  <Phone size={15} />
                  <span>
                    {language === 'bn' ? 'সরাসরি কল: ০১8১৭ ৮৭৫১৩৯' : 'Direct Call: 01817875139'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3.5 rounded-full shadow-2xl hover:shadow-orange-500/40 flex items-center justify-center border-2 border-white focus:outline-none"
        aria-label="Contact Customer Support"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}
