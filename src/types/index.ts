export interface NavItem {
  label: string;
  href: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  grades: string;
  tagline: string;
  description: string;
  focusPoints: string[];
  image: string;
  curriculumHighlights?: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: 'learning' | 'sports' | 'arts' | 'support';
  description: string;
  image: string;
  features: string[];
  capacity?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Notice' | 'Academic' | 'Campus News' | 'Circular';
  date: string;
  formattedDate: string;
  summary: string;
  content: string;
  image: string;
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Sports' | 'Academic' | 'Community' | 'Arts';
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  summary: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  metric: string;
  icon: string;
}
