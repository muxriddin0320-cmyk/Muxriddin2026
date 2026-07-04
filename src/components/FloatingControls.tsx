import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sun, Moon } from 'lucide-react';
import { profileData } from '../data';

interface FloatingControlsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Custom Brand Icons
  const telegramIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.31-.49.85-.75 3.33-1.45 5.55-2.41 6.67-2.87 3.18-1.3 3.84-1.53 4.27-1.53.09 0 .31.02.45.14.11.09.15.22.16.33-.01.07-.01.15-.02.22z"/>
    </svg>
  );

  const instagramIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      
      {/* Floating Telegram and Instagram Quicklinks */}
      <motion.a
        href={profileData.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3.5 rounded-full border shadow-xl flex items-center justify-center transition-all bg-[#229ED9] text-white hover:bg-[#208ebe] glow-orange cursor-pointer`}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        title="Telegram orqali bog'lanish"
      >
        {telegramIcon}
      </motion.a>

      <motion.a
        href="https://instagram.com/muxriddin_dev"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full border shadow-xl flex items-center justify-center transition-all bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:opacity-95 cursor-pointer"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        title="Instagram orqali kuzatish"
      >
        {instagramIcon}
      </motion.a>

      {/* Floating Theme Toggle (for mobile and bottom view parity) */}
      <motion.button
        onClick={toggleDarkMode}
        className={`p-3.5 rounded-full border shadow-xl flex items-center justify-center transition-all cursor-pointer ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
            : 'bg-white border-slate-200 text-orange-600 hover:bg-slate-50 shadow-slate-100'
        }`}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        title={isDarkMode ? "Yorug' rejimga o'tish" : "Tungi rejimga o'tish"}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            transition={{ duration: 0.25 }}
            className={`p-3.5 rounded-full border shadow-xl flex items-center justify-center transition-all cursor-pointer ${
              isDarkMode 
                ? 'bg-slate-950 border-orange-500/30 text-orange-500 hover:bg-slate-900 glow-orange' 
                : 'bg-orange-500 border-orange-500 text-black hover:bg-orange-600 hover:shadow-orange-500/20'
            }`}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            title="Yuqoriga qaytish"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};
