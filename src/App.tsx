import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Cpu, Check } from 'lucide-react';

// Subcomponents
import { ParticleBg } from './components/ParticleBg';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { FloatingControls } from './components/FloatingControls';
import { Footer } from './components/Footer';

export default function App() {
  // Defaulting to Premium Obsidian Dark Mode as requested for cyber/tech vibes
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  // Sync dark mode class with HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.className = 'dark-mode-scrollbar';
    } else {
      root.classList.remove('dark');
      root.className = 'light-mode-scrollbar';
    }
  }, [isDarkMode]);

  // Premium loading screen simulation (counts 0 to 100 with tech steps)
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear realistic loading step increments
      const increment = Math.floor(Math.random() * 15) + 5;
      current += increment;
      
      if (current >= 100) {
        setLoadPercentage(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      } else {
        setLoadPercentage(current);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-500 overflow-x-hidden ${
      isDarkMode 
        ? 'bg-[#050505] text-slate-100 selection:bg-orange-500/30 selection:text-orange-400' 
        : 'bg-[#f8fafc] text-slate-800 selection:bg-orange-600/20 selection:text-orange-600'
    }`}>
      
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            id="loading-screen"
            className="fixed inset-0 w-full h-full z-50 flex flex-col items-center justify-center bg-[#050505]"
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Cyber load grid decorative elements */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

            <div className="relative flex flex-col items-center">
              {/* Pulsing Cyber Shield Logo */}
              <motion.div 
                className="relative mb-8 p-6 bg-orange-500/5 rounded-full border border-orange-500/20 glow-orange"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <ShieldAlert className="w-14 h-14 text-orange-500 animate-pulse" />
                <motion.div 
                  className="absolute inset-0 rounded-full border border-dashed border-orange-500/40 animate-spin" 
                  style={{ animationDuration: '10s' }}
                />
              </motion.div>

              {/* Loader percentage */}
              <h2 className="text-2xl font-mono font-bold tracking-wider text-white mb-2">
                MUXRIDDIN<span className="text-orange-500">.DEV</span>
              </h2>

              <p className="text-xs font-mono tracking-widest text-orange-500/60 uppercase mb-6 animate-pulse">
                TARMOQ INFRASTUKTURASI SOZLANMOQDA...
              </p>

              {/* Tech progress track */}
              <div className="w-64 h-1.5 rounded-full bg-slate-900 overflow-hidden border border-white/5 shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 rounded-full transition-all duration-150"
                  style={{ width: `${loadPercentage}%` }}
                />
              </div>

              {/* Progress info text */}
              <span className="mt-3 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                Yuklanmoqda: {loadPercentage}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Workspace (loaded when loading finishes) */}
      {!isLoading && (
        <div className="relative w-full min-h-screen">
          
          {/* Constellation Network Particle Overlay */}
          <ParticleBg isDarkMode={isDarkMode} />

          {/* Sticky Header Navigation */}
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          {/* Core Applet Content Layout */}
          <main className="relative w-full">
            <HomeSection isDarkMode={isDarkMode} />
            
            <div className="max-w-7xl mx-auto">
              <AboutSection isDarkMode={isDarkMode} />
              <EducationSection isDarkMode={isDarkMode} />
              <SocialSection isDarkMode={isDarkMode} />
              <ContactSection isDarkMode={isDarkMode} />
            </div>
          </main>

          {/* Layout Footer */}
          <Footer isDarkMode={isDarkMode} />

          {/* Floating Actions Panel */}
          <FloatingControls isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        </div>
      )}

    </div>
  );
}
