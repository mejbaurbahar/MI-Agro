import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';
import React, { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
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
    <div className="pt-20 pb-20">
      <Helmet>
        <title>{t('seo.contact.title')}</title>
        <meta name="description" content={t('seo.contact.desc')} />
      </Helmet>
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-24"
          >
            <h1 className="text-4xl md:text-7xl font-black text-[#003300] mb-6 uppercase tracking-tight">{t('contact.title')}</h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('contact.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="bg-slate-50 p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl md:text-2xl font-black mb-8 text-[#003300] uppercase tracking-wider">{t('contact.info')}</h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-md shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{t('contact.office')}</p>
                      <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">{t('footer.address')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-green-700 shadow-md shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{t('contact.phone')}</p>
                      <p className="text-sm md:text-base text-[#003300] font-black">+880 1817 875139</p>
                      <p className="text-sm md:text-base text-[#003300] font-black">+880 1897 789766</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-blue-800 shadow-md shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{t('contact.email')}</p>
                      <p className="text-sm md:text-base text-[#003300] font-black">miunifyldagroltd@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#003300] text-white p-6 md:p-10 rounded-2xl shadow-xl border-b-8 border-yellow-500">
                <h3 className="text-xl md:text-2xl font-black mb-8 uppercase tracking-widest">{t('contact.social')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="https://wa.me/8801817875139" className="flex items-center gap-4 bg-white/10 p-5 rounded-xl hover:bg-white/20 transition-all border border-white/10">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
                      <MessageSquare size={20} className="text-white" />
                    </div>
                    <span className="font-black uppercase text-sm">{t('contact.whatsapp')}</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 bg-white/10 p-5 rounded-xl hover:bg-white/20 transition-all border border-white/10">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                      <MessageSquare size={20} className="text-white" />
                    </div>
                    <span className="font-black uppercase text-sm">{t('contact.messenger')}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl border-t-8 border-orange-500">
              <h3 className="text-xl md:text-2xl font-black mb-8 text-[#003300] uppercase tracking-wider">{t('contact.sendMsg')}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-black text-slate-700 uppercase tracking-wider">{t('contact.form.name')}</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all text-sm font-bold" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-black text-slate-700 uppercase tracking-wider">{t('contact.form.email')}</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all text-sm font-bold" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-black text-slate-700 uppercase tracking-wider">{t('contact.form.message')}</label>
                  <textarea 
                    required
                    name="message"
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#003300]/20 focus:border-[#003300] transition-all text-sm font-bold"
                  ></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 md:py-5 rounded-md font-black shadow-[0_4px_0_rgb(194,65,12)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgb(194,65,12)] transition-all text-sm md:text-base uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      {t('contact.form.send')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
