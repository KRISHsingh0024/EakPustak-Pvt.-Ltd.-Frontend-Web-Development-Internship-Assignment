import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Compass, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ACADEMIC_PROGRAMS } from '../../data/academics';

export const AcademicProgramsPreview: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'primary':
        return <BookOpen className="w-6 h-6 text-gold" />;
      case 'middle':
        return <Compass className="w-6 h-6 text-gold" />;
      case 'secondary':
        return <Award className="w-6 h-6 text-gold" />;
      case 'senior-secondary':
        return <GraduationCap className="w-6 h-6 text-gold" />;
      default:
        return <BookOpen className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-brand-bg">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Pathways"
          title="Learning at Every Stage"
          description="Our academic journey supports students as their interests, confidence, and abilities grow through purposeful, structured learning."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Grade Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getIcon(prog.id)}
                  </div>
                  <span className="text-xs font-bold text-navy-secondary bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {prog.grades}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-navy mb-1 group-hover:text-navy-secondary transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs font-semibold text-gold-dark mb-3">
                  {prog.tagline}
                </p>

                <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                  {prog.description}
                </p>
              </div>

              {/* Action Link to Academics */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to={`/academics#${prog.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold-dark transition-colors group-hover:gap-2"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
