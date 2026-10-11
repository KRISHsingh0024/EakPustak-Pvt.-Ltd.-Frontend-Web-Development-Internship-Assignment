import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { SecondaryButton } from '../common/Buttons';
import { FACILITIES_DATA } from '../../data/facilities';

export const FacilitiesPreview: React.FC = () => {
  // Show 4 premier facilities on the home page
  const featuredFacilities = FACILITIES_DATA.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-brand-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Campus Infrastructure"
            title="Spaces That Inspire Discovery"
            description="Purpose-built learning spaces and physical resources designed to nurture curiosity, collaboration, and athletic excellence."
            align="left"
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <SecondaryButton
              to="/facilities"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Facilities
            </SecondaryButton>
          </div>
        </div>

        {/* 4-Card Photographic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFacilities.map((fac) => (
            <Link
              key={fac.id}
              to="/facilities"
              className="group bg-white rounded-2xl overflow-hidden border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white uppercase tracking-wider bg-navy/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {fac.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy group-hover:text-gold-dark transition-colors mb-2">
                    {fac.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-navy group-hover:text-gold-dark">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
