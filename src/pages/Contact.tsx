import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';
import React, { useState } from 'react';
import { trackMetaLead, trackMetaContact } from '../utils/metaPixel';

export default function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        toast.success(t('contact.success') || 'Message sent successfully!');
        trackMetaLead('Contact_Form', {
          name: data.name,
          phone: data.phone,
          email: data.email,
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(t('contact.error') || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#fbfbfd]">
      <Helmet>
        <title>{t('seo.contact.title')}</title>
        <meta name="description" content={t('seo.contact.desc')} />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
            {language === 'bn' ? 'সরাসরি যোগাযোগ' : 'Direct Contact'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/70 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                {t('contact.info')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t('contact.office')}</p>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{t('footer.address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t('contact.phone')}</p>
                    <p className="text-xs sm:text-sm text-slate-900 font-semibold">+880 1817 875139</p>
                    <p className="text-xs sm:text-sm text-slate-900 font-semibold mt-0.5">+880 1897 789766</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-emerald-600 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t('contact.email')}</p>
                    <a href="mailto:info@miunifyldagroltd.com" className="block text-xs sm:text-sm text-slate-900 hover:text-emerald-700 font-semibold transition-colors">
                      info@miunifyldagroltd.com
                    </a>
                    <a href="mailto:md@miunifyldagroltd.com" className="block text-xs sm:text-sm text-slate-900 hover:text-emerald-700 font-semibold transition-colors mt-0.5">
                      md@miunifyldagroltd.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Messaging Channels */}
            <div className="bg-slate-950 text-white p-7 sm:p-9 rounded-3xl border border-white/[0.08] shadow-xl">
              <h3 className="text-base font-bold mb-4 tracking-tight">
                {t('contact.social')}
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {language === 'bn' 
                  ? 'সরাসরি দ্রুত রেসপন্সের জন্য আমাদের হোয়াটসঅ্যাপ বা ফেসবুক মেসেঞ্জারে টেক্সট পাঠান।' 
                  : 'For fastest response, reach out directly through WhatsApp or Messenger.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/8801817875139"
                  className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-full font-bold text-xs transition-colors active:scale-95 shadow-sm"
                >
                  <MessageSquare size={16} />
                  <span>{t('contact.whatsapp')}</span>
                </a>

                <a
                  href="https://www.facebook.com/messages/t/61594281573717"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackMetaContact('Facebook_Messenger_Contact_Page')}
                  className="flex items-center justify-center gap-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white py-3 px-4 rounded-full font-bold text-xs transition-colors active:scale-95 shadow-sm"
                >
                  <MessageSquare size={16} />
                  <span>{language === 'bn' ? 'ফেসবুকে মেসেজ দিন' : 'Chat via Facebook'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/70 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {t('contact.sendMsg')}
            </h2>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
              {language === 'bn' ? 'নিচের ফর্মটি পূরণ করে পাঠান, আমাদের প্রতিনিধি ২৪ ঘণ্টার মধ্যে যোগাযোগ করবেন।' : 'Fill out the form below and our agricultural team will get back to you.'}
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t('contact.form.name')}</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder={language === 'bn' ? 'আপনার নাম' : 'Your full name'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t('contact.form.email')}</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t('contact.form.message')}</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder={language === 'bn' ? 'আপনার জিজ্ঞাসা বা অর্ডার সংক্রান্ত তথ্য লিখুন...' : 'Write your inquiry or farm requirements...'}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all font-medium"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white rounded-full font-bold text-xs tracking-tight shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{t('contact.form.send')}</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
