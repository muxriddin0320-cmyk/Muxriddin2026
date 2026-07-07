import { ProfileData, StatItem, TimelineItem, SkillItem, SocialLinkItem } from './types';

export const profileData: ProfileData = {
  name: 'Muxriddin',
  lastName: "Ro'zimboyev", // Updated last name
  age: 24,
  country: "O'zbekiston",
  city: 'Namangan',
  profession: [
    'Tarmoq Administratori',
    'Kiberxavfsizlik Mutaxassisi',
    'AI Kontent Yaratuvchisi'
  ],
  bio: "Assalomu alaykum! Men Muxriddin, axborot texnologiyalari va raqamli xavfsizlik sohasida professional tajribaga ega mutaxassisman. Mening asosiy maqsadim — zamonaviy tarmoq tizimlarini loyihalash, yuqori darajadagi kiberxavfsizlikni ta'minlash hamda sun'iy intellekt imkoniyatlaridan unumli foydalangan holda kreativ kontentlar yaratishdir. Har bir loyihaga mukammallik va xavfsizlik prizmasidan yondashaman.",
  experienceYears: 4,
  completedProjects: 10,
  certificatesCount: 4,
  followersCount: 500,
  email: 'muxriddin0320@gmail.com',
  phone: '+998 (90) 123-45-67',
  telegram: 'https://t.me/MuxriddinRozimboyev',
  location: "Namangan viloyati, Chust tumani",
  workingHours: "Dushanba - Shanba: 09:00 - 18:00"
};

export const statItems: StatItem[] = [
  { id: 'exp', label: 'Yillik Tajriba', value: 4, suffix: '+' },
  { id: 'projects', label: 'Bajarilgan Loyihalar', value: 10, suffix: ' ta' },
  { id: 'certs', label: 'Sertifikatlar', value: 4, suffix: ' ta' },
  { id: 'followers', label: 'Obunachilar', value: 500, suffix: ' ta' }
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'edu-uni',
    year: '2021 - 2025',
    title: 'Kiberxavfsizlik Injiniringi',
    organization: "Oliy ta'lim muassasasi",
    description: "Tarmoq tizimlari xavfsizligi, kriptografiya, axborot xavfsizligi tizimlari va kiber-muhandislik bo'yicha oliy ma'lumot hamda amaliy ko'nikmalar.",
    category: 'education'
  },
  {
    id: 'edu-litsey',
    year: '2018 - 2020',
    title: 'Akademik litsey',
    organization: 'Akademik litsey',
    description: 'Aniq va tabiiy fanlar yo‘nalishida chuqurlashtirilgan o‘quv dasturi bo‘yicha boshlang‘ich akademik ta’lim.',
    category: 'education'
  },
  {
    id: 'cert-ccna',
    year: '2024',
    title: 'CCNA (security) (200-301)',
    organization: 'Cisco Networking Academy',
    description: "Tarmoq xavfsizligi, kiberxavfsizlik protokollari, marshrutlash va kommutatsiyani himoya qilish bo'yicha xalqaro darajadagi sertifikat va ko'nikmalar.",
    category: 'certificate'
  }
];

export const skillItems: SkillItem[] = [
  // IT & Networking (Teal/Green vibes)
  { id: 'cisco', name: 'Cisco Networking', percentage: 95, category: 'networking' },
  { id: 'win-server', name: 'Windows Server Administration', percentage: 90, category: 'systems' },
  { id: 'linux-server', name: 'Linux Server (Ubuntu/RHEL)', percentage: 92, category: 'systems' },
  { id: 'ethical-hack', name: 'Ethical Hacking', percentage: 88, category: 'security' },
  { id: 'cyber-sec', name: 'Cyber Security & Firewalls', percentage: 90, category: 'security' },
  { id: 'python', name: 'Python (Scripting & Automation)', percentage: 85, category: 'programming' },
  // Web Basics
  { id: 'html', name: 'HTML5 & Responsive Layouts', percentage: 95, category: 'programming' },
  { id: 'css', name: 'CSS3 & TailwindCSS', percentage: 90, category: 'programming' },
  { id: 'js', name: 'JavaScript (ES6+)', percentage: 82, category: 'programming' },
  // Creative & AI (Purple/Indigo vibes)
  { id: 'ai-prompt', name: 'AI Prompt Engineering & LLMs', percentage: 95, category: 'programming' },
  { id: 'video-edit', name: 'Video Editing (CapCut/Premiere)', percentage: 92, category: 'design' },
  { id: 'graphic-design', name: 'Graphic Design & UI/UX', percentage: 85, category: 'design' },
  { id: 'photoshop', name: 'Adobe Photoshop', percentage: 90, category: 'design' },
  { id: 'premiere', name: 'Adobe Premiere Pro', percentage: 86, category: 'design' },
  { id: 'capcut', name: 'CapCut Pro Desktop', percentage: 95, category: 'design' },
  { id: 'smm', name: 'Social Media Marketing (SMM)', percentage: 80, category: 'marketing' }
];

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'telegram',
    platform: 'Telegram',
    username: 'MuxriddinRozimboyev',
    url: 'https://t.me/MuxriddinRozimboyev',
    followers: '500 obunachi',
    colorClass: 'bg-[#229ED9]/10 text-[#229ED9] border-[#229ED9]/20 hover:bg-[#229ED9] hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(34,158,217,0.4)]'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    username: 'muxriddin_ruzimboyev',
    url: 'https://instagram.com/muxriddin_ruzimboyev',
    followers: '500 obunachi',
    colorClass: 'bg-gradient-to-tr from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 text-[#ee2a7b] border-[#ee2a7b]/20 hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(238,42,123,0.4)]'
  },
  {
    id: 'github',
    platform: 'GitHub',
    username: 'muxriddin0320',
    url: 'https://github.com/muxriddin0320',
    followers: '45 ta repozitoriy',
    colorClass: 'bg-[#24292e]/10 dark:bg-white/5 text-[#24292e] dark:text-white border-[#24292e]/20 dark:border-white/10 hover:bg-[#24292e] dark:hover:bg-white dark:hover:text-[#24292e] hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(36,41,46,0.4)]'
  },
  {
    id: 'email',
    platform: 'E-pochta',
    username: 'muxriddin0320@gmail.com',
    url: 'mailto:muxriddin0320@gmail.com',
    followers: 'To\'g\'ridan-to\'g\'ri aloqa',
    colorClass: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500 hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
  }
];
