import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { socialLinks } from '../data';

interface SocialSectionProps {
  isDarkMode: boolean;
}

// Brand SVG Icons for pixel-perfect brand fidelity
const BrandIcon: React.FC<{ platform: string; className?: string }> = ({ platform, className = "w-6 h-6" }) => {
  switch (platform.toLowerCase()) {
    case 'telegram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.31-.49.85-.75 3.33-1.45 5.55-2.41 6.67-2.87 3.18-1.3 3.84-1.53 4.27-1.53.09 0 .31.02.45.14.11.09.15.22.16.33-.01.07-.01.15-.02.22z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.43-.64-.67-.07 3.32-.02 6.64-.04 9.96-.05 1.51-.51 3.06-1.57 4.18-1.18 1.25-2.91 1.95-4.63 2.13-1.95.21-4.04-.21-5.63-1.43-1.84-1.39-2.73-3.77-2.31-6.07.33-1.87 1.48-3.59 3.19-4.39 1.11-.53 2.37-.69 3.59-.51v4.07c-.77-.24-1.63-.12-2.31.29-.79.47-1.28 1.39-1.28 2.33-.03 1.15.63 2.29 1.66 2.8 1.14.59 2.6.43 3.56-.39.69-.58.99-1.52.95-2.4-.04-4.14-.02-8.28-.03-12.42z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
  }
};

export const SocialSection: React.FC<SocialSectionProps> = ({ isDarkMode }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Custom action label in Uzbek based on social platform
  const getActionLabel = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'e-pochta':
        return 'Xabar yozish';
      case 'github':
        return 'Loyiha ko\'rish';
      default:
        return 'Obuna bo\'lish';
    }
  };

  return (
    <section 
      id="socials" 
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
            03 . IJTIMOIY TARMOQLAR
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Mening Tarmoqdagi Sahifalarim
          </motion.h2>
          <p className={`max-w-md mx-auto mt-3 text-xs sm:text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Mening faoliyatimni kuzatib borish va foydali ma'lumotlar olish uchun quyidagi tarmoqlarga obuna bo'ling.
          </p>
          <div className={`w-16 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-orange-500' : 'bg-orange-600'
          }`} />
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-3xl p-6 border transition-all duration-300 ${link.colorClass} ${link.hoverGlow} ${
                isDarkMode 
                  ? 'glass-card-dark border-slate-800' 
                  : 'glass-card-light border-slate-100 shadow-lg shadow-slate-100/30'
              }`}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col h-full justify-between gap-5">
                <div className="flex items-center justify-between">
                  {/* Brand Icon wrapper */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                    <BrandIcon platform={link.id} className="w-7 h-7" />
                  </div>
                  
                  {/* Micro branding status */}
                  <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-md ${
                    isDarkMode ? 'bg-white/5 text-slate-400' : 'bg-slate-100/50 text-slate-500'
                  }`}>
                    {link.platform}
                  </span>
                </div>

                {/* Username & Subtitle */}
                <div>
                  <h4 className={`text-lg font-bold truncate tracking-tight mb-1 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {link.username}
                  </h4>
                  <p className={`text-xs font-medium ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {link.followers}
                  </p>
                </div>

                {/* Custom Brand CTA Button inside the card */}
                <div className="pt-2">
                  <div className={`w-full py-2.5 rounded-xl text-center text-xs font-semibold tracking-wide border transition-all flex items-center justify-center gap-1.5 ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/5 text-slate-300 group-hover:bg-white group-hover:text-slate-950' 
                      : 'bg-slate-50 border-slate-100 text-slate-700'
                  }`}>
                    <span>{getActionLabel(link.platform)}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
