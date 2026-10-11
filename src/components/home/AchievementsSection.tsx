import React from 'react';
import { Award, Trophy, CheckCircle2, Medal } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ACADEMIC_ACHIEVEMENTS } from '../../data/academics';

export const AchievementsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-gold" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-gold" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-gold" />;
      case 'Medal':
        return <Medal className="w-6 h-6 text-gold" />;
      default:
        return <Award className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-navy text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-secondary/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Milestones of Growth"
          title={
            <span>
              Academic & Co-curricular <span className="text-gold">Achievements</span>
            </span>
          }
          description="Fostering an inspiring culture of curiosity, dedicated practice, and celebratory recognition across all disciplines."
          theme="dark"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ACADEMIC_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-navy-dark/90 rounded-2xl p-6 border border-navy-secondary hover:border-gold/50 shadow-elevated transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-secondary border border-gold/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-1 group-hover:text-gold-light transition-colors">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-gold mb-2">
                  {item.title}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  {item.category}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-slate-400">
            * Benchmark recognition data presented as illustrative demonstration content.
          </p>
        </div>
      </div>
    </section>
  );
};
