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

  // Opens chat directly in Facebook (works for all users logged into facebook.com without separate messenger login)
  const handleFacebookChatClick = () => {
    trackMetaContact('Facebook_Messages_Web', { path: location.pathname });
    window.open(`https://www.facebook.com/messages/t/${FB_PAGE_ID}`, '_blank', 'noopener,noreferrer');
  };

  // Opens directly in Messenger app or m.me
  const handleMessengerAppClick = () => {
    trackMetaContact('Facebook_Messenger_App', { path: location.pathname });
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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-3 w-80 md:w-96 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden text-slate-800"
          >
            {/* Header - Apple Dark Frosted Glass */}
            <div className="bg-slate-950/95 backdrop-blur-xl p-4 text-white relative flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <Sparkles size={16} className="text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight tracking-tight">
                    {language === 'bn' ? 'এমআই এগ্রো কাস্টমার হেল্প' : 'MI Agro Advisory'}
                  </h4>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1.5 mt-0.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {language === 'bn' ? 'অনলাইন সাপোর্ট সক্রিয়' : 'Online & Ready to Help'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsDismissed(true);
                }}
                className="text-white/60 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3 bg-white/70">
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {language === 'bn'
                  ? 'খামারের জন্য সঠিক ফিড নির্বাচনে সহায়তা চান, বা সরাসরি অর্ডার করতে চান? আমাদের সাথে কথা বলুন:'
                  : 'Need guidance choosing the right feed for your farm, or ready to place an order? Contact us directly:'}
              </p>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* Facebook Chat - Opens directly in Facebook using active login session */}
                <div className="space-y-1">
                  <button
                    onClick={handleFacebookChatClick}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white py-2.5 px-4 rounded-2xl font-bold text-xs shadow-sm transition-all hover:scale-[1.01]"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>
                      {language === 'bn' ? 'ফেসবুক থেকে সরাসরি মেসেজ' : 'Chat via Facebook Login'}
                    </span>
                  </button>

                  <div className="flex items-center justify-between px-1 text-[10px] text-slate-500">
                    <span>{language === 'bn' ? 'লগইন করা ফেসবুক থেকে চ্যাট' : 'Uses active FB login'}</span>
                    <button
                      onClick={handleMessengerAppClick}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {language === 'bn' ? 'মেসেঞ্জার অ্যাপে খুলুন' : 'Open in Messenger App'}
                    </button>
                  </div>
                </div>

                {/* WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-2xl font-semibold text-xs shadow-sm transition-all hover:scale-[1.01]"
                >
                  <MessageSquare size={16} />
                  <span>
                    {language === 'bn' ? 'হোয়াটসঅ্যাপে মেসেজ পাঠান' : 'Chat on WhatsApp'}
                  </span>
                </button>

                {/* Direct Phone Call */}
                <button
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white py-2.5 px-4 rounded-2xl font-semibold text-xs transition-all hover:scale-[1.01]"
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
