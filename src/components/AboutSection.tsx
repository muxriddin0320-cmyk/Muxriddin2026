import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { User, MapPin, Calendar, Briefcase, Award, Users, Code, CheckCircle } from 'lucide-react';
import { profileData, statItems } from '../data';

interface AboutSectionProps {
  isDarkMode: boolean;
}

// Simple Animated Counter Component
const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix: string; label: string; icon: React.ReactNode; isDarkMode: boolean }> = ({ 
  target, 
  duration = 1500, 
  suffix, 
  label, 
  icon,
  isDarkMode 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const isDecimal = !Number.isInteger(end);
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out quadratic
      const easeProgress = progress * (2 - progress);
      const currentVal = start + (end - start) * easeProgress;
      
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div 
      ref={ref}
      className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 ${
        isDarkMode 
          ? 'glass-card-dark border-slate-800 hover:border-orange-500/30 hover:shadow-orange-950/20 hover:shadow-xl' 
          : 'glass-card-light border-slate-100 hover:border-orange-600/20 hover:shadow-orange-100/50 hover:shadow-xl'
      }`}
    >
      <div className={`p-3 rounded-xl mb-3 ${
        isDarkMode 
          ? 'bg-orange-500/10 text-orange-500' 
          : 'bg-orange-50 text-orange-600'
      }`}>
        {icon}
      </div>
      <div className={`text-2xl sm:text-3xl font-mono font-bold tracking-tight mb-1 ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {count}
        <span className={isDarkMode ? 'text-orange-500' : 'text-orange-600'}>{suffix}</span>
      </div>
      <div className={`text-xs font-medium ${
        isDarkMode ? 'text-slate-400' : 'text-slate-500'
      }`}>
        {label}
      </div>
    </div>
  );
};

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.15 });

  const infoDetails = [
    { label: 'To\'liq Ism-sharif', value: `${profileData.name} ${profileData.lastName}`, icon: <User className="w-4 h-4" /> },
    { label: 'Yosh', value: `${profileData.age} da`, icon: <Calendar className="w-4 h-4" /> },
    { label: 'Mamlakat', value: profileData.country, icon: <MapPin className="w-4 h-4" /> },
    { label: 'Shahar', value: profileData.city, icon: <MapPin className="w-4 h-4" /> },
    { label: 'Sohasi', value: 'Tarmoq & Kiberxavfsizlik', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Tajriba', value: `${profileData.experienceYears} yildan ortiq`, icon: <Award className="w-4 h-4" /> },
  ];

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'exp':
        return <Briefcase className="w-6 h-6" />;
      case 'projects':
        return <CheckCircle className="w-6 h-6" />;
      case 'certs':
        return <Award className="w-6 h-6" />;
      case 'followers':
        return <Users className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`font-mono text-xs tracking-widest uppercase mb-2 ${
              isDarkMode ? 'text-orange-500' : 'text-orange-600'
            }`}
          >
            01 . MEN HAQIMDA
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Men haqimda qisqacha ma'lumot
          </motion.h2>
          <div className={`w-16 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-orange-500' : 'bg-orange-600'
          }`} />
        </div>

        {/* Main Columns Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Metadata Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className={`p-6 sm:p-8 rounded-3xl border ${
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
                Shaxsiy ma'lumotlar
              </h3>
              
              <div className="space-y-4">
                {infoDetails.map((detail, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between pb-3.5 border-b last:border-0 last:pb-0 ${
                      isDarkMode ? 'border-slate-800/80' : 'border-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${
                        isDarkMode ? 'bg-slate-900/60 text-orange-500' : 'bg-slate-50 text-orange-600'
                      }`}>
                        {detail.icon}
                      </div>
                      <span className={`text-xs sm:text-sm font-medium ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {detail.label}
                      </span>
                    </div>
                    <span className={`text-xs sm:text-sm font-semibold text-right ${
                      isDarkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography & Counter Grid */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Bio Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDarkMode 
                ? 'glass-card-dark border-slate-800' 
                : 'glass-card-light border-slate-100 shadow-xl shadow-slate-100/40'
            }`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <span className={`w-1.5 h-6 rounded-full ${
                  isDarkMode ? 'bg-amber-500' : 'bg-amber-600'
                }`} />
                Tarjimai hol
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {profileData.bio}
              </p>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {statItems.map((stat) => (
                <AnimatedCounter
                  key={stat.id}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  icon={getStatIcon(stat.id)}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
