import type { NavItem, Statistic, WhyChooseItem } from '../types';

export const SCHOOL_INFO = {
  name: "EAK International School",
  shortName: "EAK",
  tagline: "Nurturing Minds. Building Future Leaders.",
  description: "An inspiring learning community where curiosity, character, and academic excellence prepare students for a changing world.",
  vision: "To empower students to become compassionate, critical thinkers and lifelong learners who contribute positively to a diverse, interconnected world.",
  mission: "To provide an enriching, inclusive educational experience that harmonizes academic rigor, creative exploration, personal character, and global responsibility.",
  establishedYear: 2001,
  academicSession: "2026–27",
  affiliationNote: "Demonstration balanced international K–12 curriculum framework.",
  isDemoNotice: "Note: All statistics, staff details, notices, dates, and contact information are fictional demonstration content for EAK Pustak Pvt. Ltd. assignment.",
  
  contact: {
    address: "Plot 12, Academic District, Green Valley, Demo City, 110001",
    phone: "+91 98765 43210",
    phoneAlt: "+91 98765 43211",
    email: "admissions@example.com",
    emailGeneral: "info@example.com",
    officeHours: "Monday – Friday: 8:00 AM – 4:00 PM | Saturday: 8:00 AM – 1:00 PM",
    officeHoursShort: "Mon–Sat, 8:00 AM – 4:00 PM",
  },

  socials: [
    { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { name: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  ],

  principal: {
    name: "Dr. Neha Kapoor",
    credentials: "M.Ed., Ph.D. in Educational Leadership",
    title: "Principal & Head of School",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    shortMessage: "At EAK, we believe education transcends textbooks. Our mission is to ignite curiosity, instill enduring values, and foster the courage to lead with empathy and intellect.",
    fullMessage: `Welcome to EAK International School. In today's dynamic global landscape, education must be more than the mere acquisition of facts; it must be an empowering journey of intellectual discovery, ethical grounding, and creative expression.

At EAK, every child is recognized as a unique individual endowed with immense latent potential. Our educators do not simply teach; they mentor, question, and inspire. From our hands-on primary classrooms to the rigorous inquiry of our senior secondary programs, we nurture thinkers who are resilient, empathetic, and forward-looking.

We warmly invite you to walk through our campus, experience our collaborative spirit, and discover how our community can partner with you in shaping your child's future.`,
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "News & Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const SCHOOL_STATS: Statistic[] = [
  {
    id: "stat-1",
    value: "25+",
    label: "Years of Excellence",
    description: "Nurturing generations of curious, responsible young scholars.",
    icon: "Award"
  },
  {
    id: "stat-2",
    value: "5,000+",
    label: "Students Guided",
    description: "Thriving alumni community pursuing diverse global pathways.",
    icon: "Users"
  },
  {
    id: "stat-3",
    value: "120+",
    label: "Expert Faculty",
    description: "Passionate mentors with specialized pedagogy training.",
    icon: "GraduationCap"
  },
  {
    id: "stat-4",
    value: "98%",
    label: "University Placements",
    description: "Progress indicator into leading colleges and universities.",
    icon: "TrendingUp"
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "why-1",
    title: "Academic Excellence",
    description: "A structured, progressive curriculum emphasizing conceptual depth, inquiry, and critical inquiry over rote memorization.",
    icon: "BookOpen"
  },
  {
    id: "why-2",
    title: "Well-Equipped Facilities",
    description: "State-of-the-art smart classrooms, advanced STEM laboratories, digital creative labs, and expansive libraries designed for hands-on discovery.",
    icon: "Building2"
  },
  {
    id: "why-3",
    title: "Safe & Supportive Environment",
    description: "A secure, inclusive campus culture that places student mental wellbeing, individual dignity, and pastoral care at its core.",
    icon: "ShieldCheck"
  },
  {
    id: "why-4",
    title: "Co-curricular Growth",
    description: "Diverse opportunities spanning competitive athletics, performing arts, robotics, debating, and civic leadership clubs.",
    icon: "Sparkles"
  },
  {
    id: "why-5",
    title: "Values & Character",
    description: "A deliberate ethos rooted in integrity, empathy, environmental consciousness, and global citizenship.",
    icon: "HeartHandshake"
  }
];

export const CORE_VALUES = [
  { title: "Integrity", description: "Doing the right thing with honesty, fairness, and accountability.", icon: "Shield" },
  { title: "Respect", description: "Valuing diverse voices, human dignity, and mutual empathy.", icon: "Heart" },
  { title: "Curiosity", description: "Fostering the thirst to ask questions, explore, and innovate.", icon: "Compass" },
  { title: "Empathy", description: "Understanding others' perspectives and acting with active kindness.", icon: "Users" },
  { title: "Excellence", description: "Striving for personal best in thought, action, and perseverance.", icon: "Award" },
  { title: "Collaboration", description: "Working together harmoniously across teams to solve meaningful challenges.", icon: "Share2" },
];
