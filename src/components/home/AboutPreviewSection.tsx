import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PrimaryButton } from '../common/Buttons';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-brand-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Campus / Classroom Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-brand-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating on STEM project at EAK International School"
                className="w-full h-[380px] sm:h-[440px]"
              />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-navy text-white p-5 rounded-2xl shadow-elevated border border-gold/40 max-w-[220px]">
              <span className="font-heading font-extrabold text-2xl text-gold block">
                25+ Years
              </span>
              <span className="text-xs text-slate-200 font-medium">
                Of shaping curious minds and visionary leaders
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
            <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
              About EAK International School
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              A Place Where Every Student Can Flourish
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Founded on the belief that education should cultivate the mind as well as the spirit, EAK International School offers a rigorous, inquiry-driven environment where students discover their authentic talents.
            </p>

            <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Comprehensive K–12 Framework:</strong> Seamless continuity from foundational early years to pre-university specializations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Student-Centric Pedagogy:</strong> Individual mentoring that celebrates diverse intellectual rhythms and learning styles.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Global Perspective & Ethics:</strong> Rooted in empathy, environmental responsibility, and international open-mindedness.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <PrimaryButton
                to="/about"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About EAK
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
