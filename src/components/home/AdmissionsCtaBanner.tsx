import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../common/Buttons';

export const AdmissionsCtaBanner: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-navy-dark overflow-hidden">
      {/* Background Photography with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
          alt="Students studying together at EAK campus"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy/85" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl mx-auto sm:mx-0">
          <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-gold/20 text-gold-light border border-gold/40">
            Admissions Open For 2026–27
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Child's Next Chapter Starts Here
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Take the first step toward joining EAK International School. Schedule a personalized campus walkthrough, speak with our academic counselors, and explore our holistic programs.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <PrimaryButton
              to="/admissions"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Admissions
            </PrimaryButton>
            <SecondaryButton
              to="/contact"
              variant="white-outline"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
            >
              Contact Admissions Desk
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
