import React from 'react';
import { Breadcrumbs, type BreadcrumbItem } from '../common/Breadcrumbs';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage?: string;
  badge?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumbItems,
  backgroundImage = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
  badge,
  children,
}) => {
  return (
    <div className="relative bg-navy overflow-hidden">
      {/* Background Photography with Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/95 to-navy/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Hero Content Canvas */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Breadcrumbs Navigation */}
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbItems} variant="dark" />
          </div>

          {badge && (
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-navy-secondary text-gold-light border border-gold/40">
              {badge}
            </span>
          )}

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-6 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>

      {/* Decorative Bottom Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-80" />
    </div>
  );
};
