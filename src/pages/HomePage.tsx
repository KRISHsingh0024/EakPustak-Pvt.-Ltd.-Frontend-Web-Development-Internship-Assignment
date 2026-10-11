import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsStrip } from '../components/home/StatsStrip';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { CampusExperienceCallout } from '../components/home/CampusExperienceCallout';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { AcademicProgramsPreview } from '../components/home/AcademicProgramsPreview';
import { FacilitiesPreview } from '../components/home/FacilitiesPreview';
import { AchievementsSection } from '../components/home/AchievementsSection';
import { PrincipalMessageSection } from '../components/home/PrincipalMessageSection';
import { NewsAndEventsSection } from '../components/home/NewsAndEventsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { AdmissionsCtaBanner } from '../components/home/AdmissionsCtaBanner';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'EAK International School | Home';
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section from Google Stitch */}
      <HeroSection />

      {/* 2. Elevated Statistics Ribbon Strip directly under Hero */}
      <StatsStrip />

      {/* 3. The EAK Difference: Why Choose EAK? */}
      <WhyChooseSection />

      {/* 4. Experience EAK Firsthand Campus Callout */}
      <CampusExperienceCallout />

      {/* 5. About the School Preview */}
      <AboutPreviewSection />

      {/* 6. Academic Programs Preview */}
      <AcademicProgramsPreview />

      {/* 7. Facilities Preview */}
      <FacilitiesPreview />

      {/* 8. Achievements & Student Development */}
      <AchievementsSection />

      {/* 9. Principal's Message */}
      <PrincipalMessageSection />

      {/* 10. Latest News & Upcoming Events */}
      <NewsAndEventsSection />

      {/* 11. Student & Parent Testimonials */}
      <TestimonialsSection />

      {/* 12. Admissions Call-to-Action Banner */}
      <AdmissionsCtaBanner />
    </div>
  );
};
