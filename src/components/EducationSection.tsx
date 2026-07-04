import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Award, BookOpen, Check, Server, Shield, Video, Code } from 'lucide-react';
import { timelineItems, skillItems } from '../data';

interface EducationSectionProps {
  isDarkMode: boolean;
}

// Single Skill Progress Bar Component
const SkillBar: React.FC<{ name: string; percentage: number; colorClass: string; barBg: string; isDarkMode: boolean }> = ({ 
  name, 
  percentage, 
  colorClass, 
  barBg,
  isDarkMode 
}) => {
  const barRef = useRef(null);
  const isBarInView = useInView(barRef, { once: true, amount: 0.2 });

  return (
    <div className="space-y-2" ref={barRef}>
      <div className="flex justify-between items-center">
        <span className={`text-sm font-semibold tracking-wide ${
          isDarkMode ? 'text-slate-200' : 'text-slate-700'
        }`}>
          {name}
        </span>
        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
          isDarkMode ? 'bg-slate-800 text-orange-500' : 'bg-slate-100 text-orange-600'
        }`}>
          {percentage}%
        </span>
      </div>
      
      {/* Progress track */}
      <div className={`h-2.5 w-full rounded-full overflow-hidden ${
        isDarkMode ? 'bg-slate-800/80' : 'bg-slate-100'
      }`}>
        <motion.div 
          className={`h-full rounded-full ${colorClass}`}
          initial={{ width: 0 }}
          animate={isBarInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export const EducationSection: React.FC<EducationSectionProps> = ({ isDarkMode }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Group timeline items
  const educationTimeline = timelineItems.filter(item => item.category === 'education');
  const trainingTimeline = timelineItems.filter(item => item.category !== 'education');

  const getTimelineIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'certificate':
        return <Award className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  // Group skills into logical categories
  const networkingSkills = skillItems.filter(s => s.category === 'networking' || s.category === 'systems');
  const securitySkills = skillItems.filter(s => s.category === 'security' || s.category === 'programming');
  const designAndSmm = skillItems.filter(s => s.category === 'design' || s.category === 'marketing');

  return (
    <section 
      id="education" 
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
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
            02 . TA'LIM VA BILIMLARIM
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            O'quv yo'li va Professional ko'nikmalar
          </motion.h2>
          <div className={`w-16 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-orange-500' : 'bg-orange-600'
          }`} />
        </div>

        {/* Grid layout: Timeline on left, Skills on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Academic History */}
            <div>
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <GraduationCap className={isDarkMode ? 'text-orange-500' : 'text-orange-600'} />
                Akademik Ma'lumot
              </h3>

              <div className="relative border-l pl-6 ml-3 space-y-8 border-slate-200 dark:border-slate-800">
                {educationTimeline.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {/* Node point */}
                    <div className={`absolute -left-[31px] top-1.5 p-1 rounded-full border shadow-sm ${
                      isDarkMode 
                        ? 'bg-slate-950 border-orange-500/50 text-orange-500 glow-orange' 
                        : 'bg-white border-orange-600 text-orange-600'
                    }`}>
                      {getTimelineIcon(item.category)}
                    </div>

                    <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                      isDarkMode 
                        ? 'glass-card-dark border-slate-800/80 hover:border-slate-700' 
                        : 'glass-card-light border-slate-100/80 shadow-md shadow-slate-100/20 hover:border-slate-200'
                    }`}>
                      <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md inline-block mb-2 ${
                        isDarkMode ? 'bg-orange-500/10 text-orange-500' : 'bg-orange-50 text-orange-600'
                      }`}>
                        {item.year}
                      </span>
                      <h4 className={`text-base font-bold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs font-medium mb-3 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {item.organization}
                      </p>
                      <p className={`text-xs leading-relaxed ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Courses & Certifications */}
            <div>
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Award className={isDarkMode ? 'text-amber-500' : 'text-amber-600'} />
                Sertifikatlar va Kurslar
              </h3>

              <div className="relative border-l pl-6 ml-3 space-y-8 border-slate-200 dark:border-slate-800">
                {trainingTimeline.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (idx + 2) * 0.1 }}
                  >
                    {/* Node point */}
                    <div className={`absolute -left-[31px] top-1.5 p-1 rounded-full border shadow-sm ${
                      isDarkMode 
                        ? 'bg-slate-950 border-amber-500/50 text-amber-500 glow-amber' 
                        : 'bg-white border-amber-600 text-amber-600'
                    }`}>
                      {getTimelineIcon(item.category)}
                    </div>

                    <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                      isDarkMode 
                        ? 'glass-card-dark border-slate-800/80 hover:border-slate-700' 
                        : 'glass-card-light border-slate-100/80 shadow-md shadow-slate-100/20 hover:border-slate-200'
                    }`}>
                      <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md inline-block mb-2 ${
                        isDarkMode ? 'bg-amber-500/10 text-amber-500' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {item.year}
                      </span>
                      <h4 className={`text-base font-bold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs font-medium mb-3 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {item.organization}
                      </p>
                      <p className={`text-xs leading-relaxed ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills Progress Bars */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDarkMode 
                ? 'glass-card-dark border-slate-800' 
                : 'glass-card-light border-slate-100 shadow-xl shadow-slate-100/40'
            }`}>
              
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Server className={isDarkMode ? 'text-orange-500' : 'text-orange-600'} />
                Tarmoq va Server Boshqaruvi
              </h3>

              <div className="space-y-5">
                {networkingSkills.map((skill) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    percentage={skill.percentage}
                    colorClass={isDarkMode ? 'bg-gradient-to-r from-orange-600 to-amber-500' : 'bg-gradient-to-r from-orange-600 to-amber-500'}
                    barBg={isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDarkMode 
                ? 'glass-card-dark border-slate-800' 
                : 'glass-card-light border-slate-100 shadow-xl shadow-slate-100/40'
            }`}>
              
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Shield className={isDarkMode ? 'text-amber-500' : 'text-amber-600'} />
                Kiberxavfsizlik va Dasturlash
              </h3>

              <div className="space-y-5">
                {securitySkills.map((skill) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    percentage={skill.percentage}
                    colorClass="bg-gradient-to-r from-orange-500 to-amber-400"
                    barBg={isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDarkMode 
                ? 'glass-card-dark border-slate-800' 
                : 'glass-card-light border-slate-100 shadow-xl shadow-slate-100/40'
            }`}>
              
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? 'text-red-500' : 'text-red-600'} `}>
                <Video className={isDarkMode ? 'text-red-500' : 'text-red-600'} />
                Kontent Kreativligi, Dizayn & SMM
              </h3>

              <div className="space-y-5">
                {designAndSmm.map((skill) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    percentage={skill.percentage}
                    colorClass="bg-gradient-to-r from-orange-500 to-red-500"
                    barBg={isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
