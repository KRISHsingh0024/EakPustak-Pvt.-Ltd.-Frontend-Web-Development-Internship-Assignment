import type { AcademicProgram, AchievementItem } from '../types';

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "primary",
    title: "Primary School",
    grades: "Grades 1 – 5",
    tagline: "Building Strong Foundations with Curiosity & Joy",
    description: "The primary years ignite the natural wonder of children through activity-based learning, foundational literacy, and experiential play.",
    focusPoints: [
      "Foundational language, literacy, and structured phonics",
      "Experiential numeracy and mathematical thinking",
      "Inquiry-led environmental and social discovery",
      "Creative expressions through visual art, drama, and vocal music",
      "Motor skill development, physical games, and peer empathy"
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    curriculumHighlights: ["Theme-based modules", "Hands-on discovery kits", "Bilingual reading corners", "Introductory coding & robotics"]
  },
  {
    id: "middle",
    title: "Middle School",
    grades: "Grades 6 – 8",
    tagline: "Exploring, Questioning & Developing Critical Thinking",
    description: "Transitioning students toward conceptual rigor, scientific inquiry, collaborative problem solving, and self-directed study habits.",
    focusPoints: [
      "Conceptual depth across Mathematics, Sciences, and Social Studies",
      "Laboratory-based scientific experiments and observational journals",
      "Collaborative project-based learning and interdisciplinary seminars",
      "Computational thinking, algorithms, and digital safety",
      "Leadership roles in student council, house leagues, and clubs"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    curriculumHighlights: ["Integrated STEM labs", "Public speaking forums", "Field study excursions", "Second language proficiency"]
  },
  {
    id: "secondary",
    title: "Secondary School",
    grades: "Grades 9 – 10",
    tagline: "Subject Mastery & Academic Analytical Rigor",
    description: "Equipping young scholars with deep analytical capabilities, examination readiness, and structured scientific reasoning.",
    focusPoints: [
      "Rigorous subject mastery across core sciences and humanities",
      "Advanced problem-solving, data interpretation, and case studies",
      "Structured examination technique and time-management mentoring",
      "Research methodologies, paper writing, and formal debates",
      "Personalized academic counseling and milestone assessments"
    ],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    curriculumHighlights: ["Comprehensive lab practicals", "Model United Nations", "Olympiad preparation", "Career interest diagnostics"]
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary",
    grades: "Grades 11 – 12",
    tagline: "Specialized Pathways to University & Global Leadership",
    description: "Empowering senior learners with specialized academic streams, independent thesis research, university admissions guidance, and real-world internships.",
    focusPoints: [
      "Differentiated academic streams: Science, Commerce, and Humanities",
      "Independent research projects and university-standard papers",
      "Comprehensive entrance preparation, portfolio building, and SAT/NEET/JEE guidance",
      "Internship opportunities, industry speaker series, and innovation incubators",
      "Global citizenship, ethical philosophy, and community service projects"
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    curriculumHighlights: ["Advanced placement electives", "Dedicated college counseling", "Capstone thesis showcase", "Alumni mentorship network"]
  }
];

export const CURRICULUM_CATEGORIES = [
  {
    title: "STEM & Natural Sciences",
    description: "Physics, Chemistry, Biology, and Environmental Systems taught through hands-on empirical experimentation.",
    icon: "Atom",
    topics: ["Experimental Physics", "Organic & Analytical Chemistry", "Cellular Biology", "Environmental Ecology"]
  },
  {
    title: "Languages & Humanities",
    description: "Developing articulate writers, reflective readers, and culturally nuanced communicators.",
    icon: "BookOpen",
    topics: ["World Literature", "Rhetoric & Debate", "History & Geopolitics", "Economics & Governance"]
  },
  {
    title: "Computing & Digital Innovation",
    description: "Cultivating digital creators through programming, algorithmic design, and artificial intelligence ethics.",
    icon: "Code",
    topics: ["Python & JavaScript", "Data Science Foundations", "Robotics & Microcontrollers", "Cyberethics"]
  },
  {
    title: "Arts & Creative Expression",
    description: "Unlocking individual imagination through studio visual arts, theater, and vocal & instrumental music.",
    icon: "Palette",
    topics: ["Studio Painting & Sculpture", "Dramatic Theater", "Classical & Contemporary Music", "Digital Media Design"]
  },
  {
    title: "Physical Education & Athletics",
    description: "Building physical fitness, mental endurance, sportsmanship, and lifelong wellness habits.",
    icon: "Trophy",
    topics: ["Track & Field Athletics", "Team Sports (Football, Basketball)", "Yoga & Mindfulness", "Swimming & Martial Arts"]
  },
  {
    title: "Life Skills & Leadership",
    description: "Equipping young leaders with financial literacy, emotional intelligence, and civic responsibility.",
    icon: "Compass",
    topics: ["Financial Literacy", "Public Speaking", "Community Service", "Conflict Resolution"]
  }
];

export const TEACHING_METHODOLOGIES = [
  {
    title: "Inquiry-Based Learning",
    description: "Students learn by questioning, investigating real-world phenomena, and formulating hypotheses rather than passively receiving facts.",
    icon: "HelpCircle"
  },
  {
    title: "Experiential Projects",
    description: "Term-length projects connect classroom theory with tangible societal challenges, building practical grit and innovation.",
    icon: "Briefcase"
  },
  {
    title: "Collaborative Classrooms",
    description: "Peer-to-peer discourse, structured team debates, and group laboratory investigations foster deep communicative intelligence.",
    icon: "Users"
  },
  {
    title: "Technology-Enhanced Classrooms",
    description: "Interactive smart displays, digital simulations, and cloud learning resources provide rich multimedia comprehension.",
    icon: "Monitor"
  },
  {
    title: "Personalized Academic Mentoring",
    description: "Regular 1-on-1 advisor sessions track student growth, address learning gaps early, and nurture individual talents.",
    icon: "UserCheck"
  },
  {
    title: "Critical Thinking & Metacognition",
    description: "Students are taught to dissect arguments, evaluate evidence, and reflect upon their own learning methodologies.",
    icon: "Brain"
  }
];

export const CO_CURRICULAR_ACTIVITIES = [
  {
    title: "Athletics & Sports League",
    description: "Championship football turf, indoor basketball arena, semi-Olympic pool, tennis courts, and track athletics.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    badge: "Sports"
  },
  {
    title: "Music & Performing Arts",
    description: "Acoustically engineered music studios, Western and classical instruments, choral ensemble, and annual musicals.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    badge: "Performing Arts"
  },
  {
    title: "Visual Arts & Sculpture Studio",
    description: "Sunlit ateliers for watercolor, oil painting, ceramics, pottery wheels, sculpture, and graphic illustration.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
    badge: "Visual Arts"
  },
  {
    title: "Clubs & Student Societies",
    description: "Model UN, Robotics & Drone Club, Debate Guild, Eco Warriors, Astronomy Society, and Math Olympiad Squad.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    badge: "Societies"
  }
];

export const ACADEMIC_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Awards Won",
    metric: "250+",
    category: "Academic & Co-Curricular",
    description: "Honors earned across regional and national academic and cultural showcases (illustrative demo).",
    icon: "Award"
  },
  {
    id: "ach-2",
    title: "Competitions",
    metric: "50+",
    category: "Inter-School Participation",
    description: "Annual invitations to prestigious science, debating, and mathematical competitions.",
    icon: "Trophy"
  },
  {
    id: "ach-3",
    title: "Pass Rate",
    metric: "100%",
    category: "Board Exam Clearance",
    description: "Consistent record of first-division achievements across senior cohorts.",
    icon: "CheckCircle2"
  },
  {
    id: "ach-4",
    title: "National Delegates",
    metric: "20+",
    category: "Youth Summits & Sports",
    description: "Students representing the school at state and national level Olympiads and leagues.",
    icon: "Medal"
  }
];
