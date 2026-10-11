import React from 'react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { SCHOOL_INFO } from '../../data/school';
import { SecondaryButton } from '../common/Buttons';

interface PrincipalMessageSectionProps {
  isFull?: boolean;
}

export const PrincipalMessageSection: React.FC<PrincipalMessageSectionProps> = ({ isFull = false }) => {
  const { principal } = SCHOOL_INFO;

  return (
    <section className="py-16 sm:py-20 bg-brand-bg">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-brand-border shadow-card overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Principal Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-brand-border">
                <ImageWithFallback
                  src={principal.image}
                  alt={`Portrait of ${principal.name}, ${principal.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-40" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-heading font-bold text-lg text-navy">
                  {principal.name}
                </h4>
                <p className="text-xs font-semibold text-gold-dark">
                  {principal.credentials}
                </p>
                <p className="text-xs text-brand-muted">
                  {principal.title}
                </p>
              </div>
            </div>

            {/* Right Column: Narrative Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gold-light/50 border border-gold/40 flex items-center justify-center text-gold-dark">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-navy bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  A Message From Our Principal
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                Every Child Has the Potential to Shine
              </h2>

              <div className="text-brand-muted text-sm sm:text-base leading-relaxed space-y-4">
                {isFull ? (
                  principal.fullMessage.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <>
                    <p className="italic font-medium text-slate-700 text-base sm:text-lg border-l-4 border-gold pl-4 py-1">
                      "{principal.shortMessage}"
                    </p>
                    <p>
                      At EAK International School, our vision is anchored in the conviction that schools should be dynamic hubs of inspiration, where intellectual exploration harmonizes with empathy, integrity, and resilience.
                    </p>
                    <p>
                      We empower every learner to pursue questions beyond standard syllabi, question assumptions constructively, and develop the moral compass needed to lead positive transformation.
                    </p>
                  </>
                )}
              </div>

              {/* Signature treatment */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="signature-font text-2xl sm:text-3xl text-navy block font-semibold">
                    {principal.name}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Head of School (Sample Leadership Profile)
                  </span>
                </div>

                {!isFull && (
                  <SecondaryButton to="/about#principal" size="sm">
                    Read Full Letter
                  </SecondaryButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
