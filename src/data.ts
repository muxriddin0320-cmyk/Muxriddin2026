import { ProfileData, StatItem, TimelineItem, SkillItem, SocialLinkItem } from './types';

export const profileData: ProfileData = {
  name: 'Muxriddinbek',
  lastName: 'Tursunov', // A natural, professional Uzbek last name
  age: 22,
  country: "O'zbekiston",
  city: 'Toshkent',
  profession: [
    'Tarmoq Administratori',
    'Kiberxavfsizlik Mutaxassisi',
    'AI Kontent Yaratuvchisi'
  ],
  bio: "Assalomu alaykum! Men Muxriddinbek, axborot texnologiyalari va raqamli xavfsizlik sohasida professional tajribaga ega mutaxassisman. Mening asosiy maqsadim — zamonaviy tarmoq tizimlarini loyihalash, yuqori darajadagi kiberxavfsizlikni ta'minlash hamda sun'iy intellekt imkoniyatlaridan unumli foydalangan holda kreativ kontentlar yaratishdir. Har bir loyihaga mukammallik va xavfsizlik prizmasidan yondashaman.",
  experienceYears: 4,
  completedProjects: 48,
  certificatesCount: 15,
  followersCount: 12500,
  email: 'muxriddin0320@gmail.com',
  phone: '+998 (90) 123-45-67',
  telegram: 'https://t.me/muxriddin_t',
  location: "Toshkent shahri, Yunusobod tumani",
  workingHours: "Dushanba - Shanba: 09:00 - 18:00"
};

export const statItems: StatItem[] = [
  { id: 'exp', label: 'Yillik Tajriba', value: 4, suffix: '+' },
  { id: 'projects', label: 'Bajarilgan Loyihalar', value: 48, suffix: '+' },
  { id: 'certs', label: 'Sertifikatlar', value: 15, suffix: '' },
  { id: 'followers', label: 'Obunachilar', value: 12.5, suffix: 'K+' }
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'edu-uni',
    year: '2022 - 2026',
    title: 'Kompyuter Injiniringi (Kiberxavfsizlik)',
    organization: 'Toshkent Axborot Texnologiyalari Universiteti (TATU)',
    description: "Tarmoq tizimlari muhandisligi, kriptografiya, axborot xavfsizligi protokollari va tizimli boshqaruv bo'yicha oliy ma'lumot va amaliy ko'nikmalar.",
    category: 'education'
  },
  {
    id: 'edu-coll',
    year: '2020 - 2022',
    title: 'Axborot Texnologiyalari Texnikumi',
    organization: 'IT Texnikum',
    description: 'Kompyuter tarmoqlari, dasturlash asoslari va texnik xizmat ko‘rsatish yo‘nalishida boshlang‘ich professional ta’lim.',
    category: 'education'
  },
  {
    id: 'cert-ccna',
    year: '2024',
    title: 'Cisco Certified Network Associate (CCNA 200-301)',
    organization: 'Cisco Networking Academy',
    description: "Yo'naltirish va almashtirish (routing & switching), IP-manzillash, tarmoq xavfsizligi asoslari va tarmoq infratuzilmasini sozlash bo'yicha xalqaro sertifikat.",
    category: 'certificate'
  },
  {
    id: 'course-sec',
    year: '2025',
    title: 'Ethical Hacking & Penetration Testing',
    organization: 'Cyber Security Academy',
    description: "Tarmoqlar va tizimlardagi zaifliklarni aniqlash (pentesting), veb-ilovalarni buzib kirishdan himoya qilish hamda ijtimoiy muhandislik hujumlariga qarshi kurashish.",
    category: 'course'
  },
  {
    id: 'course-linux',
    year: '2025',
    title: 'Red Hat Certified System Administrator (RHCSA)',
    organization: 'Linux Professional Institute',
    description: "Linux (RHEL) operatsion tizimini chuqur boshqarish, foydalanuvchilar xavfsizligi, tarmoq xizmatlarini sozlash va avtomatlashtirish.",
    category: 'course'
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
    username: '@muxriddin_t',
    url: 'https://t.me/muxriddin_t',
    followers: '4.8K obunachi',
    colorClass: 'bg-[#229ED9]/10 text-[#229ED9] border-[#229ED9]/20 hover:bg-[#229ED9] hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(34,158,217,0.4)]'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    username: '@muxriddin_dev',
    url: 'https://instagram.com/muxriddin_dev',
    followers: '5.2K obunachi',
    colorClass: 'bg-gradient-to-tr from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 text-[#ee2a7b] border-[#ee2a7b]/20 hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(238,42,123,0.4)]'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    username: 'Muxriddin Tech',
    url: 'https://youtube.com',
    followers: '1.2K obunachi',
    colorClass: 'bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 hover:bg-[#FF0000] hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]'
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    username: '@muxriddin.ai',
    url: 'https://tiktok.com',
    followers: '2.5K obunachi',
    colorClass: 'bg-[#000000]/10 dark:bg-white/10 text-black dark:text-white border-black/20 dark:border-white/20 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
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
    id: 'linkedin',
    platform: 'LinkedIn',
    username: 'Muxriddinbek Tursunov',
    url: 'https://linkedin.com',
    followers: '500+ aloqalar',
    colorClass: 'bg-[#0077b5]/10 text-[#0077b5] border-[#0077b5]/20 hover:bg-[#0077b5] hover:text-white',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(0,119,181,0.4)]'
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
