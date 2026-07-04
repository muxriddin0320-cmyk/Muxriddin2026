import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Phone, Mail, Send, MapPin, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { profileData } from '../data';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactDetails = [
    { label: 'Telefon raqam', value: profileData.phone, href: `tel:${profileData.phone.replace(/\s+/g, '')}`, icon: <Phone className="w-5 h-5" /> },
    { label: 'Telegram', value: '@muxriddin_t', href: profileData.telegram, icon: <Send className="w-5 h-5 rotate-315" /> },
    { label: 'E-pochta', value: profileData.email, href: `mailto:${profileData.email}`, icon: <Mail className="w-5 h-5" /> },
    { label: 'Manzil', value: profileData.location, href: '#', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Ish vaqti', value: profileData.workingHours, href: '#', icon: <Clock className="w-5 h-5" /> },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Ismingizni kiriting';
    if (!formData.phone.trim()) newErrors.phone = 'Telefon raqamingizni kiriting';
    if (!formData.email.trim()) {
      newErrors.email = 'E-pochtani kiriting';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'To\'g\'ri e-pochta kiriting';
    }
    if (!formData.message.trim()) newErrors.message = 'Xabar matnini kiriting';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clear form
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`font-mono text-xs tracking-widest uppercase mb-2 ${
              isDarkMode ? 'text-orange-500' : 'text-orange-600'
            }`}
          >
            04 . MEN BILAN BOG'LANISH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Aloqa o'rnatish
          </motion.h2>
          <div className={`w-16 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-orange-500' : 'bg-orange-600'
          }`} />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Google Map */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Quick Contacts Block */}
            <div className={`p-6 sm:p-8 rounded-3xl border flex-grow ${
              isDarkMode 
                ? 'glass-card-dark border-slate-800' 
                : 'glass-card-light border-slate-100 shadow-xl shadow-slate-100/40'
            }`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <span className={`w-1.5 h-6 rounded-full ${
                  isDarkMode ? 'bg-orange-500' : 'bg-orange-600'
                }`} />
                Aloqa ma'lumotlari
              </h3>

              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <a 
                    key={index} 
                    href={detail.href}
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-2xl border transition-all ${
                      isDarkMode 
                        ? 'border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:border-orange-500/30' 
                        : 'border-slate-100 bg-slate-50 hover:bg-slate-100 hover:border-orange-500/20 shadow-sm'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${
                      isDarkMode ? 'bg-slate-950 text-orange-500' : 'bg-white text-orange-600 shadow-sm'
                    }`}>
                      {detail.icon}
                    </div>
                    <div>
                      <div className={`text-[10px] font-mono tracking-wider uppercase ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {detail.label}
                      </div>
                      <div className={`text-xs sm:text-sm font-semibold truncate ${
                        isDarkMode ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        {detail.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className={`rounded-3xl overflow-hidden h-64 border p-1 ${
              isDarkMode 
                ? 'glass-card-dark border-slate-800' 
                : 'glass-card-light border-slate-100 shadow-xl shadow-slate-100/40'
            }`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47915.939211326465!2d69.21319119642407!3d41.352427848695024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb1f173c2e74275%3A0x600f796bf85cbda2!2sYunusabad%20District%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full rounded-2xl border-0 opacity-80 hover:opacity-100 transition-opacity"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toshkent, Yunusobod Google Map"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Success State */}
          <motion.div 
            className="lg:col-span-7 flex"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className={`p-6 sm:p-8 rounded-3xl border w-full flex flex-col justify-center relative overflow-hidden ${
              isDarkMode 
                ? 'glass-card-dark border-slate-800' 
                : 'glass-card-light border-slate-100 shadow-xl shadow-slate-100/40'
            }`}>
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5 h-full flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        <span className={`w-1.5 h-6 rounded-full ${
                          isDarkMode ? 'bg-orange-500' : 'bg-orange-600'
                        }`} />
                        Xabar yo'llash
                      </h3>
                      <p className={`text-xs mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Menga loyiha takliflari yoki har qanday savollar bo'yicha to'g'ridan-to'g'ri shu yerdan yozishingiz mumkin.
                      </p>
                    </div>

                    <div className="space-y-4 flex-grow">
                      {/* Name input */}
                      <div className="relative">
                        <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          Ism-sharifingiz
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                            errors.name 
                              ? 'border-red-500/50 bg-red-500/5 text-red-500' 
                              : isDarkMode 
                                ? 'bg-slate-950/80 border-slate-800 text-slate-200 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10' 
                                : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-orange-600/30 focus:ring-2 focus:ring-orange-600/10'
                          }`}
                          placeholder="Muxriddinbek"
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                            <AlertTriangle className="w-3 h-3" /> {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Phone & Email container */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone input */}
                        <div className="relative">
                          <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Telefon raqamingiz
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                              errors.phone 
                                ? 'border-red-500/50 bg-red-500/5 text-red-500' 
                                : isDarkMode 
                                  ? 'bg-slate-950/80 border-slate-800 text-slate-200 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10' 
                                  : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-orange-600/30 focus:ring-2 focus:ring-orange-600/10'
                            }`}
                            placeholder="+998 (90) 123-45-67"
                          />
                          {errors.phone && (
                            <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                              <AlertTriangle className="w-3 h-3" /> {errors.phone}
                            </span>
                          )}
                        </div>

                        {/* Email input */}
                        <div className="relative">
                          <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            E-pochta manzilingiz
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                              errors.email 
                                ? 'border-red-500/50 bg-red-500/5 text-red-500' 
                                : isDarkMode 
                                  ? 'bg-slate-950/80 border-slate-800 text-slate-200 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10' 
                                  : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-orange-600/30 focus:ring-2 focus:ring-orange-600/10'
                            }`}
                            placeholder="example@mail.com"
                          />
                          {errors.email && (
                            <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                              <AlertTriangle className="w-3 h-3" /> {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Message input */}
                      <div className="relative">
                        <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          Xabaringiz
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className={`w-full px-4 py-3 rounded-xl text-sm border outline-none resize-none transition-all ${
                            errors.message 
                              ? 'border-red-500/50 bg-red-500/5 text-red-500' 
                              : isDarkMode 
                                ? 'bg-slate-950/80 border-slate-800 text-slate-200 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10' 
                                : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-orange-600/30 focus:ring-2 focus:ring-orange-600/10'
                          }`}
                          placeholder="Xabar matni..."
                        />
                        {errors.message && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                            <AlertTriangle className="w-3 h-3" /> {errors.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <motion.button
                        id="submit-form-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-2xl font-bold tracking-wide transition-all shadow-lg text-sm cursor-pointer flex items-center justify-center gap-2 ${
                          isSubmitting 
                            ? 'bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700/50' 
                            : isDarkMode 
                              ? 'bg-orange-500 hover:bg-orange-600 text-black glow-orange hover:shadow-orange-400/25 hover:shadow-xl' 
                              : 'bg-orange-600 hover:bg-orange-500 text-white hover:shadow-orange-600/20 hover:shadow-xl'
                        }`}
                        whileHover={!isSubmitting ? { y: -2 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Xabar yuborilmoqda...
                          </>
                        ) : (
                          <>
                            <span>Xabarni yuborish</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>

                  </motion.form>
                ) : (
                  // Elegant Success Message Animation Card
                  <motion.div 
                    key="success-container"
                    className="text-center py-10 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Animated custom green check ring */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-400/30 animate-spin"
                        style={{ animationDuration: '20s' }}
                      />
                      <motion.div 
                        className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 shadow-lg shadow-emerald-500/10"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle className="w-12 h-12" />
                      </motion.div>
                    </div>

                    <h4 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      Katta Rahmat!
                    </h4>
                    
                    <p className={`text-sm max-w-sm mb-6 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                      Sizning xabaringiz muvaffaqiyatli qabul qilindi. Tez orada siz bilan ko'rsatilgan aloqa vositalari orqali bog'lanaman.
                    </p>

                    <motion.button
                      onClick={() => setIsSuccess(false)}
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isDarkMode 
                          ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:border-orange-500/30' 
                          : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Yangi xabar yozish
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
