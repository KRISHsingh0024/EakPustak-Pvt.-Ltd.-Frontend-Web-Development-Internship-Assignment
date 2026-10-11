# EAK International School — Website Redesign

A complete, production-quality, fully responsive multi-page school website frontend built for **EAK Pustak Pvt. Ltd.** frontend hiring evaluation.

---

## 🌟 Overview

**EAK International School** is a modern K–12 institution embodying the motto:
> **“Nurturing Minds. Building Future Leaders.”**
> *“An inspiring learning community where curiosity, character, and academic excellence prepare students for a changing world.”*

This frontend application implements all seven required pages, adhering to the brand design system featuring deep navy (`#10243A`, `#0B1929`), warm white (`#FBFAF7`), and muted gold accents (`#D6A449`).

---

## 🚀 Implemented Pages & Routes

1. **Home (`/`)**
   - Top Announcement Bar with admission session badge and helpdesk contacts.
   - Sticky Navigation Header with school crest, active indicator, gold "Apply Now" CTA, and quick site search modal.
   - Panoramic Photographic Hero Section with custom navy gradient overlays and school badge.
   - Interactive "Watch Virtual Tour" modal.
   - Docked dark-navy statistics strip (`25+ Years`, `5000+ Students`, `120+ Faculty`, `98% Placements`).
   - "Why Choose EAK?" 5-pillar cards.
   - "About EAK" editorial feature with experience badge.
   - Academic Programs overview cards leading to grade sections.
   - World-Class Facilities 4-card preview with details.
   - Academic & Co-curricular Recognition milestones.
   - Principal's Message featuring Dr. Neha Kapoor.
   - Latest News & Notices + Upcoming Events with calendar date badges.
   - Student & Parent Testimonials with star ratings.
   - Full-width Admissions CTA banner.
   - Sophisticated 4-column dark navy footer with demonstration policy modal.

2. **About Us (`/about`)**
   - Panoramic hero with breadcrumb navigation.
   - Sticky quick-jump sub-navigation (`Our Story`, `Vision & Mission`, `Principal's Message`, `Our Campus`, `Milestones`).
   - Editorial founding story and educational philosophy.
   - Vision, Mission, and 6 core character values (`Integrity`, `Respect`, `Curiosity`, `Empathy`, `Excellence`, `Collaboration`).
   - Comprehensive letter from the Principal.
   - 6-item photographic campus environment grid.
   - Key milestone indicators and admissions call-to-action.

3. **Academics (`/academics`)**
   - 4 comprehensive academic program cards (`Primary Grades 1–5`, `Middle Grades 6–8`, `Secondary Grades 9–10`, `Senior Secondary Grades 11–12`) with detailed focus areas and curriculum tags.
   - Balanced curriculum framework across 6 multidisciplinary categories.
   - 6 teaching methodologies (`Inquiry-Based`, `Experiential Projects`, `Collaborative`, `Technology-Enhanced`, `Personalized Mentoring`, `Critical Thinking`).
   - 4-card co-curricular activities grid (`Sports`, `Music & Performing Arts`, `Visual Arts`, `Clubs & Societies`).
   - Academic recognition metrics.

4. **Admissions (`/admissions`)**
   - Welcoming admissions hero with jump links.
   - 5-step numbered interactive process timeline (`Enquiry`, `Application`, `Interaction / Assessment`, `Selection`, `Enrollment`).
   - Age and grade eligibility criteria table.
   - Required documentation checklist.
   - Illustrative sample session dates and milestones.
   - **Interactive Admission Enquiry Form**:
     - Client-side validation (names, valid email, phone number, grade selection, demo consent).
     - Simulated submission state (loader spinner).
     - Accessible success banner explaining demonstration nature.
   - **Interactive FAQ Accordion** with keyboard navigation (`Enter`/`Space`), `aria-expanded` support, and smooth expansion.

5. **Facilities (`/facilities`)**
   - Categorized campus facilities catalog (`All`, `Learning & Labs`, `Sports & Athletics`, `Arts & Auditorium`, `Wellbeing & Services`).
   - 9 detailed facility cards with photography and amenity checklists.
   - **Interactive Facility Lightbox Modal**: Click any card to inspect high-resolution photography, description, key amenities, and capacity specs.
   - Campus wellbeing and safety pillars.

6. **News & Events (`/events`)**
   - Featured circular banner with quick "Read Full Notice" modal.
   - **Real-Time Live Search**: Case-insensitive filtering across titles and summaries with one-click clear button.
   - **Category Filter Pills** (`All`, `Notice`, `Academic`, `Campus News`, `Circular`).
   - Client-side **Load More** pagination.
   - **Interactive Notice Detail Modal** displaying full circular content.
   - Upcoming events schedule with calendar date blocks.

7. **Contact Us (`/contact`)**
   - Campus coordinates, phone desk, email addresses, and visiting hours.
   - **Interactive Static Campus Map Blueprint** with pin affordance and coordinates (no external paid API required).
   - **Contact Form** with client-side validation, inline errors, and simulated submission feedback.
   - Specialized department directory (`Admissions`, `Admin`, `Transport`, `Infirmary`).

8. **404 Not Found (`*`)**
   - Polished branded 404 error page with quick links to return home or contact helpdesk.

---

## 🛠️ Technology Stack

- **React 19** (Functional components, hooks)
- **Vite 8** (Lightning-fast dev server and bundle tooling)
- **TypeScript** (Strict type safety, typed interfaces for all school data)
- **Tailwind CSS 3.4** (Custom design tokens for navy, gold, typography, and container scales)
- **React Router 7** (Client-side routing with automatic scroll restoration)
- **Lucide React** (Consistent modern iconography)

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the project directory
cd EAKPUSTAK_ASSIGNMENT

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

---

## 📁 Project Architecture

```
src/
├── types/
│   └── index.ts                 # TypeScript interfaces for school entities
├── data/
│   ├── school.ts                # School metadata, statistics, why choose items, values
│   ├── academics.ts             # 4 programs, curriculum topics, methodologies, achievements
│   ├── facilities.ts            # 9 facilities with amenity checklists, wellbeing pillars
│   ├── news.ts                  # News, circulars, and notices dataset
│   ├── events.ts                # Upcoming school events with calendar dates
│   ├── testimonials.ts          # Parent, student, and alumni testimonials
│   └── faqs.ts                  # Admissions and campus life FAQs
├── components/
│   ├── common/
│   │   ├── SchoolLogo.tsx       # Brand crest SVG & typography
│   │   ├── Buttons.tsx          # Polymorphic PrimaryButton & SecondaryButton
│   │   ├── SectionHeading.tsx   # Reusable section heading with eyebrow & theme support
│   │   ├── Breadcrumbs.tsx      # Accessible breadcrumb trail
│   │   ├── ImageWithFallback.tsx# Image loader with shimmer & graceful fallback
│   │   └── ScrollToTop.tsx      # Scroll restoration & floating back-to-top button
│   ├── layout/
│   │   ├── AnnouncementBar.tsx  # Top admissions notification bar
│   │   ├── SiteHeader.tsx       # Sticky navbar with search dialog & mobile trigger
│   │   ├── MobileNavigation.tsx # Accessible drawer with focus management
│   │   ├── PageHero.tsx         # Panoramic photographic hero for subpages
│   │   ├── SiteFooter.tsx       # 4-column navy footer & demo policy modal
│   │   └── Layout.tsx           # Global layout wrapper with skip-to-content link
│   ├── home/
│   │   ├── HeroSection.tsx      # Hero with campus exterior, CTA buttons & docked stats
│   │   ├── WhyChooseSection.tsx # 5 feature cards
│   │   ├── AboutPreviewSection.tsx # Editorial 2-column feature
│   │   ├── AcademicProgramsPreview.tsx # 4 grade program cards
│   │   ├── FacilitiesPreview.tsx# 4-card photographic preview
│   │   ├── AchievementsSection.tsx # Milestone metric cards
│   │   ├── PrincipalMessageSection.tsx # Editorial letter with portrait
│   │   ├── NewsAndEventsSection.tsx # Latest news + calendar events preview
│   │   ├── TestimonialsSection.tsx # Review cards with star ratings
│   │   └── AdmissionsCtaBanner.tsx # Full-width conversion banner
│   ├── forms/
│   │   ├── AdmissionInquiryForm.tsx # Validation, submitting state & demo feedback
│   │   └── ContactForm.tsx      # Direct message form with feedback
│   ├── ui/
│   │   └── FAQAccordion.tsx     # Accessible accordion with keyboard support
│   ├── facilities/
│   │   └── FacilityLightbox.tsx # Modal lightbox for facility specifications
│   ├── events/
│   │   └── NewsDetailModal.tsx  # Full notice reader modal
│   └── contact/
│       └── MapPlaceholder.tsx   # Static designed campus blueprint & pin
├── pages/
│   ├── HomePage.tsx             # Primary landing page
│   ├── AboutPage.tsx            # Heritage, vision & values, campus grid
│   ├── AcademicsPage.tsx        # Curriculum, programs & methodologies
│   ├── AdmissionsPage.tsx       # Timeline, checklist, inquiry form & FAQs
│   ├── FacilitiesPage.tsx       # Categorized facility catalog & specs
│   ├── EventsPage.tsx           # Searchable circulars & events calendar
│   ├── ContactPage.tsx          # Coordinates, departments & contact form
│   └── NotFoundPage.tsx         # 404 error page
├── App.tsx                      # Router and route definitions
├── main.tsx                     # React root mount
└── styles/
    └── index.css                # Tailwind directives & design tokens
```

---

## ℹ️ Demonstration Disclaimer

This project is a frontend hiring assessment demonstration created for **EAK Pustak Pvt. Ltd.** All statistics, staff profiles, testimonials, dates, phone numbers, and circulars are fictional demonstration content. No real network calls or personal data processing occur.
