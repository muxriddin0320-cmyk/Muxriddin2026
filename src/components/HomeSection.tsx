import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Terminal, ShieldAlert, Cpu } from 'lucide-react';
import { profileData } from '../data';
import profilePhoto from '../assets/images/profile_photo_1783160724965.jpg';

interface HomeSectionProps {
  isDarkMode: boolean;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ isDarkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const professions = profileData.profession;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDelay = 2000;

  // Typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const fullText = professions[professionIndex];
      
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex + 1 === fullText.length) {
          // Pause on complete word
          timer = setTimeout(() => setIsDeleting(true), pauseDelay);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setProfessionIndex(prev => (prev + 1) % professions.length);
        }
      }

      timer = setTimeout(
        handleTyping, 
        isDeleting ? deletingSpeed : typingSpeed
      );
    };

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, professionIndex, professions]);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = aboutSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Decorative ambient glass blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <div className="flex flex-col items-center">
          
          {/* Profile Photo Wrapper */}
          <motion.div 
            id="profile-photo-container"
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Outer animated cyber rings */}
            <div className={`absolute -inset-4 rounded-full border border-dashed animate-spin ${
              isDarkMode ? 'border-orange-500/30' : 'border-orange-600/20'
            }`} style={{ animationDuration: '40s' }} />
            
            <div className={`absolute -inset-2 rounded-full border border-dashed animate-spin ${
              isDarkMode ? 'border-amber-500/30' : 'border-amber-600/20'
            }`} style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

            {/* Profile Avatar */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1.5 overflow-hidden shadow-2xl bg-slate-900/40 border border-white/10">
              <img 
                id="profile-img"
                src={profilePhoto} 
                alt="Muxriddinbek Tursunov" 
                className="w-full h-full object-cover rounded-full object-top transform hover:scale-105 transition-transform duration-500 referrerpolicy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating details badge (Age & Status) */}
            <motion.div 
              className={`absolute -bottom-3 -right-3 px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-lg flex items-center gap-1.5 ${
                isDarkMode 
                  ? 'bg-slate-900/90 text-orange-500 border-orange-500/30 glow-orange' 
                  : 'bg-white text-orange-600 border-orange-200 shadow-slate-200/50'
              }`}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {profileData.age} yosh • Faol
            </motion.div>

            {/* Micro Cybernetic Decoration */}
            <motion.div 
              className={`absolute -top-3 -left-3 p-2 rounded-xl text-xs border shadow-lg ${
                isDarkMode 
                  ? 'bg-slate-900/90 text-amber-400 border-orange-500/30' 
                  : 'bg-white text-orange-600 border-orange-100'
              }`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
            </motion.div>
          </motion.div>

          {/* Intro tags / greetings */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mb-4 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest uppercase border inline-flex items-center gap-2 ${
              isDarkMode 
                ? 'bg-orange-500/5 border-orange-500/20 text-orange-500' 
                : 'bg-orange-50 border-orange-100 text-orange-600'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Salom, xush kelibsiz!
          </motion.div>

          {/* Full Name */}
          <motion.h1 
            id="user-fullname"
            className={`text-4xl sm:text-6xl font-bold tracking-tight mb-4 ${
              isDarkMode 
                ? 'text-white' 
                : 'text-slate-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {profileData.name}{' '}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              isDarkMode 
                ? 'from-orange-500 via-amber-400 to-red-400' 
                : 'from-orange-600 via-amber-600 to-red-600'
            }`}>
              {profileData.lastName}
            </span>
          </motion.h1>

          {/* Profession typing animation */}
          <motion.div 
            className="h-10 sm:h-12 flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className={`text-lg sm:text-2xl font-mono tracking-wide ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I am a:{' '}
              <span className={`font-bold typing-caret pb-1 border-b-2 ${
                isDarkMode 
                  ? 'text-orange-500 border-orange-500/40 glow-text-orange' 
                  : 'text-orange-600 border-orange-600/30'
              }`}>
                {currentText}
              </span>
            </p>
          </motion.div>

          {/* Short Introduction */}
          <motion.p 
            id="short-intro"
            className={`max-w-xl text-sm sm:text-base mb-10 leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {profileData.bio}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button 
              id="men-haqimda-btn"
              onClick={handleScrollDown}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold cursor-pointer shadow-lg flex items-center justify-center gap-2 transition-all group ${
                isDarkMode 
                  ? 'bg-orange-500 hover:bg-orange-600 text-black shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] glow-orange' 
                  : 'bg-orange-600 hover:bg-orange-500 text-white hover:shadow-orange-200'
              }`}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              <span>⬇ Men haqimda</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>

            <motion.a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold border flex items-center justify-center gap-2 transition-all ${
                isDarkMode 
                  ? 'bg-slate-900/40 border-slate-700 hover:bg-slate-800 text-slate-200' 
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm shadow-slate-100'
              }`}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              Bog'lanish
            </motion.a>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div 
            className="absolute bottom-6 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hidden sm:flex"
            onClick={handleScrollDown}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <span className={`text-[10px] font-mono uppercase tracking-widest ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Pastga aylantiring
            </span>
            <div className={`w-1 h-8 rounded-full ${
              isDarkMode ? 'bg-gradient-to-b from-orange-500 to-transparent' : 'bg-gradient-to-b from-orange-600 to-transparent'
            }`} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
