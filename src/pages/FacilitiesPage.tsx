import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Eye, ShieldCheck, Building, Heart, Leaf, Accessibility } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PrimaryButton, SecondaryButton } from '../components/common/Buttons';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { FacilityLightbox } from '../components/facilities/FacilityLightbox';
import { FACILITIES_DATA, CAMPUS_WELLBEING_PILLARS } from '../data/facilities';
import type { Facility } from '../types';

export const FacilitiesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Campus Facilities | EAK International School';
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'learning', label: 'Learning & Labs' },
    { id: 'sports', label: 'Sports & Athletics' },
    { id: 'arts', label: 'Arts & Auditorium' },
    { id: 'support', label: 'Wellbeing & Services' },
  ];

  const filteredFacilities =
    activeCategory === 'all'
      ? FACILITIES_DATA
      : FACILITIES_DATA.filter((f: Facility) => f.category === activeCategory);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <ShieldCheck className="w-6 h-6 text-gold" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-gold" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-gold" />;
      case 'CheckCircle':
        return <Accessibility className="w-6 h-6 text-gold" />;
      default:
        return <Building className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Page Hero */}
      <PageHero
        title="Spaces Designed for Discovery"
        subtitle="Explore the purpose-built learning spaces, laboratory suites, and athletic grounds envisioned for the EAK community."
        breadcrumbItems={[{ label: 'Facilities' }]}
        badge="World-Class Campus"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Interactive Category Filter Bar */}
      <section className="bg-white border-b border-brand-border py-4 sticky top-[69px] sm:top-[77px] z-30 shadow-xs">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive
                      ? 'bg-navy text-gold shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                  {isActive && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-gold text-navy-dark text-[10px]">
                      {filteredFacilities.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Facilities Grid */}
      <section className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((fac: Facility) => (
              <div
                key={fac.id}
                className="bg-white rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <ImageWithFallback
                      src={fac.image}
                      alt={fac.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white uppercase tracking-wider bg-navy/80 px-2.5 py-1 rounded">
                      {fac.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedFacility(fac)}
                      aria-label={`View expanded details for ${fac.name}`}
                      className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-navy shadow-sm transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-extrabold text-xl text-navy mb-2 group-hover:text-gold-dark transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3 mb-4">
                      {fac.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {fac.features.slice(0, 3).map((feat: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-status-success flex-shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedFacility(fac)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-gold-light/40 border border-slate-200 hover:border-gold/40 text-xs font-heading font-bold text-navy flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Infrastructure Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-brand-muted">
              * Proposed campus facilities portfolio presented as illustrative demo content.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Student Wellbeing & Campus Safety Pillars */}
      <section className="py-16 sm:py-20 bg-navy text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Wellbeing"
            title={
              <span>
                Safety, Inclusion & <span className="text-gold">Student Wellbeing</span>
              </span>
            }
            description="A secure and nurturing sanctuary where student mental health, physical safety, and inclusive access are prioritized."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMPUS_WELLBEING_PILLARS.map((pil, idx: number) => (
              <div
                key={idx}
                className="bg-navy-dark/90 rounded-2xl p-6 border border-navy-secondary text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-secondary border border-gold/30 flex items-center justify-center mb-4">
                    {getPillarIcon(pil.icon)}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">
                    {pil.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pil.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Facilities CTA Banner */}
      <section className="py-16 sm:py-20 bg-brand-bg text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            See How Our Spaces Support Student Growth
          </h2>
          <p className="mt-4 text-base text-brand-muted leading-relaxed">
            Experience our classrooms, research laboratories, and sports grounds in person. We invite you to schedule a guided walkthrough.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <PrimaryButton to="/admissions" icon={<ArrowRight className="w-4 h-4" />}>
              Enquire About Admissions
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Schedule Campus Visit
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <FacilityLightbox
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />
    </div>
  );
};
