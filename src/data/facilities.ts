import type { Facility } from '../types';

export const FACILITIES_DATA: Facility[] = [
  {
    id: "smart-classrooms",
    name: "Smart Interactive Classrooms",
    category: "learning",
    description: "Ergonomically designed learning spaces outfitted with interactive digital displays, high-speed connectivity, climate control, and flexible modular seating for collaboration.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    features: [
      "75\" 4K interactive touch panels",
      "Ergonomic acoustic furniture",
      "Natural daylight-optimized architecture",
      "Digital lecture capture & notes sharing"
    ],
    capacity: "25–30 students per room"
  },
  {
    id: "science-labs",
    name: "Advanced Science Laboratories",
    category: "learning",
    description: "Specialized, modern laboratories for Physics, Chemistry, and Biology equipped with industry-grade apparatus, safety ventilation, eyewash stations, and digital sensors.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Dedicated Physics, Chemistry & Bio wings",
      "Fume hoods and central safety showers",
      "High-precision digital microscopes",
      "Sensor-based data collection interfaces"
    ],
    capacity: "40 workstations"
  },
  {
    id: "library",
    name: "Central Library & Media Center",
    category: "learning",
    description: "A tranquil, two-story knowledge sanctuary housing over 25,000 print volumes, curated global periodicals, silent reading pods, and access to international digital research repositories.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Over 25,000 catalogued volumes",
      "Subscriptions to JSTOR & digital journals",
      "Quiet cubicles and group discussion pods",
      "Primary storytelling amphitheatres"
    ],
    capacity: "150 seated readers"
  },
  {
    id: "tech-labs",
    name: "Computer & Robotics Innovation Hub",
    category: "learning",
    description: "Equipped with high-performance workstations, 3D printing equipment, IoT microcontrollers, LEGO Mindstorms robotics kits, and dedicated gigabit fiber networking.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Dual-monitor developer workstations",
      "Rapid prototyping 3D printers & CNC tools",
      "Arduino & Raspberry Pi robotics kits",
      "Isolated cyber-security sandbox network"
    ],
    capacity: "45 stations"
  },
  {
    id: "sports-complex",
    name: "Multi-Sport Athletics Complex",
    category: "sports",
    description: "Comprehensive athletic facilities featuring an all-weather FIFA-regulation football pitch, synthetic 400m running track, indoor wooden-court basketball arena, and Olympic-size swimming pool.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80",
    features: [
      "FIFA-standard turf football stadium",
      "Indoor badminton & squash courts",
      "Temperature-controlled 25m swimming pool",
      "Dedicated martial arts & fitness studio"
    ],
    capacity: "500 spectator grandstand"
  },
  {
    id: "auditorium",
    name: "Grand Performing Arts Auditorium",
    category: "arts",
    description: "A world-class 800-seat theater featuring professional theatrical acoustics, automated stage rigging, surround audio, and intelligent lighting for dramatic productions and conferences.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
    features: [
      "800 tiered plush acoustic seats",
      "State-of-the-art DMX stage illumination",
      "Green rooms and backstage rehearsal space",
      "High-definition live broadcast cameras"
    ],
    capacity: "800 seats"
  },
  {
    id: "cafeteria",
    name: "Nutrition & Dining Commons",
    category: "support",
    description: "A bright, hygienic dining hall serving balanced, chef-prepared hot meals supervised by certified pediatric nutritionists, catering to vegetarian and allergen-aware dietary needs.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Nutritionist-designed balanced daily menus",
      "Strict HACCP food hygiene protocols",
      "Allergen-conscious meal preparations",
      "Composting & zero-food-waste initiatives"
    ],
    capacity: "350 diners per seating"
  },
  {
    id: "medical-center",
    name: "Student Health & Wellness Infirmary",
    category: "support",
    description: "A modern, fully equipped medical clinic staffed by certified pediatric nurses during school hours, with tie-ups to premier tertiary multi-specialty hospitals for emergency care.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Registered nursing staff on campus",
      "Observation recovery beds & basic diagnostics",
      "Emergency oxygen & AED defibrillators",
      "Annual comprehensive student health screenings"
    ],
    capacity: "8 recovery beds"
  },
  {
    id: "transportation",
    name: "Safe Transportation Fleet",
    category: "support",
    description: "Air-conditioned GPS-enabled school buses covering major residential sectors with certified drivers, female bus attendants on every route, and emergency safety equipment.",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Fleet of modern GPS-monitored buses",
      "CCTV surveillance & speed governors",
      "Verified female attendants on board",
      "Real-time route notification system"
    ],
    capacity: "Comprehensive district coverage"
  }
];

export const CAMPUS_WELLBEING_PILLARS = [
  {
    title: "Holistic Safety & Access Control",
    description: "24/7 manned security, RFID campus entry turnstiles, and 300+ CCTV cameras ensuring complete peace of mind for parents.",
    icon: "Shield"
  },
  {
    title: "Mental Wellness & Counseling",
    description: "Dedicated child psychologists providing confidential emotional guidance, peer bonding sessions, and stress-resilience workshops.",
    icon: "Heart"
  },
  {
    title: "Eco-Conscious Green Architecture",
    description: "Solar-paneled rooftops, rainwater harvesting cisterns, expansive tree canopies, and organic student vegetable gardens.",
    icon: "Leaf"
  },
  {
    title: "Inclusive Physical Access",
    description: "Ramp access, braille tactile pathways, and elevators across all academic wings ensuring universal accessibility for every child.",
    icon: "CheckCircle"
  }
];
