import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Shield, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Asosiy', href: '#home' },
    { name: 'Men haqimda', href: '#about' },
    { name: "Ta'lim & Bilimlar", href: '#education' },
    { name: 'Tarmoqlar', href: '#socials' },
    { name: "Bog'lanish", href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'glass-nav-dark py-3 shadow-lg shadow-black/20' 
            : 'glass-nav-light py-3 shadow-lg shadow-slate-200/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo with animations */}
          <motion.a 
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' : 'bg-orange-500/10 text-orange-600 border border-orange-500/10'
            }`}>
              <Shield className="w-5 h-5 animate-pulse" />
            </div>
            <span className={`font-mono font-bold tracking-wider text-lg ${
              isDarkMode 
                ? 'text-white group-hover:text-orange-500' 
                : 'text-slate-900 group-hover:text-orange-600'
            } transition-colors`}>
              MUXRIDDIN<span className={isDarkMode ? 'text-orange-500' : 'text-orange-600'}>.DEV</span>
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group overflow-hidden ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-orange-500 hover:bg-white/5' 
                    : 'text-slate-600 hover:text-orange-600 hover:bg-slate-100'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ y: 1 }}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  isDarkMode ? 'bg-orange-500' : 'bg-orange-600'
                }`} />
              </motion.a>
            ))}

            {/* Dark Mode Toggle in Desktop Navbar */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl ml-3 border cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'bg-slate-800/80 border-slate-700/80 text-amber-400 hover:bg-slate-700' 
                  : 'bg-white border-slate-200 text-indigo-600 hover:bg-slate-50'
              }`}
              aria-label="Theme toggle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl border cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-800/80 border-slate-700/80 text-amber-400' 
                  : 'bg-white border-slate-200 text-indigo-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border ${
                isDarkMode 
                  ? 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:text-white' 
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden ${
              isDarkMode 
                ? 'bg-slate-950/95 border-b border-slate-800/80' 
                : 'bg-white/95 border-b border-slate-200'
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isDarkMode 
                      ? 'text-slate-300 hover:bg-slate-900 hover:text-orange-500' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
