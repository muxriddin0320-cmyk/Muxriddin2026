export interface ProfileData {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  profession: string[];
  bio: string;
  experienceYears: number;
  completedProjects: number;
  certificatesCount: number;
  followersCount: number;
  email: string;
  phone: string;
  telegram: string;
  location: string;
  workingHours: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  category: 'education' | 'course' | 'certificate';
}

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  category: 'networking' | 'systems' | 'security' | 'programming' | 'design' | 'marketing';
}

export interface SocialLinkItem {
  id: string;
  platform: string;
  username: string;
  url: string;
  followers?: string;
  colorClass: string;
  hoverGlow: string;
}
