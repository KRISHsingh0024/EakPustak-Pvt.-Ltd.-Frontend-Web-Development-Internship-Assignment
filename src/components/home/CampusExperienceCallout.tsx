import React from 'react';
import { Link } from 'react-router-dom';

interface CampusExperienceCalloutProps {
  onOpenVirtualTour?: () => void;
}

export const CampusExperienceCallout: React.FC<CampusExperienceCalloutProps> = ({ onOpenVirtualTour }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="relative rounded-2xl overflow-hidden bg-primary text-on-primary shadow-2xl border border-navy-secondary">
        {/* Ambient Visual Background Accent */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none" />

        {/* Decorative Graphic Inset */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 hidden lg:block overflow-hidden pointer-events-none">
          <svg className="w-full h-full text-secondary-container fill-current" viewBox="0 0 400 400">
            <circle cx="200" cy="200" fill="none" r="160" stroke="currentColor" strokeDasharray="8 8" strokeWidth="2" />
            <circle cx="200" cy="200" fill="none" r="120" stroke="currentColor" strokeWidth="1.5" />
            <polygon fill="none" points="200,40 230,160 350,160 250,230 290,350 200,280 110,350 150,230 50,160 170,160" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container text-secondary-container font-label-sm text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">pin_drop</span>
              <span>Private Campus Visits Available</span>
            </div>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-on-primary tracking-tight font-bold">
              Experience EAK Firsthand
            </h2>
            <p className="font-body-lg text-sm sm:text-base text-on-primary-container leading-relaxed">
              Take a curated walk through our academic quads, interactive laboratories, and Olympic-grade athletic pavilions with our admissions deans.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
            <Link
              to="/admissions"
              className="h-12 px-7 rounded-xl bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-sm font-semibold inline-flex items-center justify-center gap-2.5 shadow-lg shadow-black/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Schedule a Campus Visit</span>
            </Link>

            {onOpenVirtualTour ? (
              <button
                type="button"
                onClick={onOpenVirtualTour}
                className="h-12 px-6 rounded-xl bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-sm inline-flex items-center justify-center gap-2 transition-colors border border-white/20 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary-container">videocam</span>
                <span>Virtual Tour</span>
              </button>
            ) : (
              <Link
                to="/facilities"
                className="h-12 px-6 rounded-xl bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-sm inline-flex items-center justify-center gap-2 transition-colors border border-white/20 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary-container">videocam</span>
                <span>Virtual Tour</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
