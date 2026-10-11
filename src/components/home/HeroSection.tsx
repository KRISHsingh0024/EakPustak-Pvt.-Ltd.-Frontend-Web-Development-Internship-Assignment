import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Play, School, ArrowRight, ShieldCheck, Award, Building2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const campusHeroImage = `${import.meta.env.BASE_URL}images/campus_hero_highres.jpg`;

  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#0B1929]">
      {/* 1. Campus Photographic Background */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-right lg:bg-center"
        style={{
          backgroundImage: `url('${campusHeroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Modern architectural international school campus with glass atriums and landscaped quads under crisp radiant morning sunlight"
      />

      {/* 2. Professional Multi-stop Gradient Overlay: dark left for text, brighter right for campus */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, rgba(8, 24, 40, 0.92) 0%, rgba(8, 24, 40, 0.82) 36%, rgba(8, 24, 40, 0.45) 62%, rgba(8, 24, 40, 0.08) 100%)`,
        }}
      />

      {/* Subtle Vertical Gradient for mobile & tablet contrast reinforcement */}
      <div
        className="absolute inset-0 z-10 pointer-events-none lg:hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(8, 24, 40, 0.88) 0%, rgba(8, 24, 40, 0.65) 50%, rgba(8, 24, 40, 0.92) 100%)`,
        }}
      />

      {/* Ambient Luxury Glow Accent */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#D6A449]/10 blur-3xl pointer-events-none z-10" />

      {/* 3. Hero Content Container (Z-20) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="max-w-[720px] flex flex-col items-start text-left">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#10243A]/80 backdrop-blur-md border border-white/20 shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#D6A449] animate-pulse flex-shrink-0" />
            <span className="text-white text-xs sm:text-[12.5px] uppercase tracking-[0.08em] font-semibold">
              Welcome to EAK International School
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] text-white tracking-tight leading-[1.12] font-bold font-heading max-w-[700px] mb-4 sm:mb-5">
            Nurturing Minds.<br />
            <span className="text-[#D6A449]">Building Future Leaders.</span>
          </h1>

          {/* Supporting Text (max-w around 560px) */}
          <p className="text-[#F1F5F9] text-sm sm:text-base lg:text-[17px] max-w-[560px] leading-relaxed mb-7 font-normal">
            An inspiring learning community where curiosity, academic excellence, and character development prepare students for a rapidly changing world.
          </p>

          {/* CTA Buttons Row - Clear Hierarchy */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            {/* Primary Button: Explore Admissions (Solid Gold) */}
            <Link
              to="/admissions"
              className="min-h-[48px] h-12 px-6 sm:px-7 rounded-lg bg-[#D6A449] hover:bg-[#C29038] text-[#10243A] font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Admissions</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            {/* Secondary Button: Discover Our School */}
            <Link
              to="/about"
              className="min-h-[48px] h-12 px-5 sm:px-6 rounded-lg bg-[#10243A]/30 hover:bg-white/15 backdrop-blur-sm text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 border border-white/50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A449]"
            >
              <School className="w-4 h-4 text-[#D6A449]" />
              <span>Discover Our School</span>
            </Link>

            {/* Tertiary Action: Virtual Tour (Visually quieter with play accent) */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="min-h-[44px] h-11 px-3 sm:px-4 rounded-lg text-white/90 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A449]"
            >
              <span className="w-6 h-6 rounded-full bg-[#10243A]/70 border border-white/20 flex items-center justify-center text-[#D6A449]">
                <Play className="w-3 h-3 ml-0.5 fill-current" />
              </span>
              <span>Virtual Tour</span>
            </button>
          </div>

          {/* Trust Indicators Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 text-[#F1F5F9] text-xs sm:text-[13.5px] font-medium border-t border-white/15 w-full max-w-[640px]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D6A449] flex-shrink-0" />
              <span>Holistic Learning</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:inline" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D6A449] flex-shrink-0" />
              <span>Dedicated Educators</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:inline" />
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#D6A449] flex-shrink-0" />
              <span>Modern Learning Spaces</span>
            </div>
          </div>

        </div>
      </div>

      {/* Virtual Tour Interactive Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1929]/85 backdrop-blur-md"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-[#10243A]">
            <button
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close video preview"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#10243A] rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#F5E7C8] text-[#10243A] text-xs font-bold uppercase tracking-wide">
                Virtual Campus Experience
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 text-[#10243A]">
              Welcome to the EAK Interactive Campus
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0B1929] mb-4 border border-[#E3E8ED]">
              <img
                src={campusHeroImage}
                alt="EAK Campus Panoramic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B1929]/40 flex flex-col items-center justify-center text-white p-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D6A449] text-[#10243A] flex items-center justify-center mb-3 shadow-lg">
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </div>
                <p className="font-semibold text-sm">Interactive Virtual Walkthrough Demonstration</p>
                <p className="text-xs text-slate-200 mt-1 max-w-md">
                  In a production installation, this embeds a 360-degree tour or school documentary. For campus visits in person, connect with our admissions team.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-[#64748B]">Demonstration video preview</span>
              <Link
                to="/admissions"
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-[#D6A449] hover:bg-[#C29038] text-[#10243A] font-bold text-xs"
              >
                Schedule On-Campus Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
