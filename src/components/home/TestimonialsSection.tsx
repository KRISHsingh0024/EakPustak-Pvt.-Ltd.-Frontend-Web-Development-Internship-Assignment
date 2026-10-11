import React from 'react';
import { Quote, Star } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { TESTIMONIALS_DATA } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-brand-bg">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Community Perspectives"
          title="Families Are Part of Our Community"
          description="Hear what our parents, senior scholars, and alumni value most about their collaborative educational journey with us."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-light/40 flex items-center justify-center text-gold-dark">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gold/40 flex-shrink-0">
                  <ImageWithFallback
                    src={test.avatar}
                    alt={test.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-navy">
                    {test.author}
                  </h4>
                  <p className="text-xs text-brand-muted">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-slate-400">
            * Demonstration parent and student reviews crafted for assignment presentation.
          </p>
        </div>
      </div>
    </section>
  );
};
