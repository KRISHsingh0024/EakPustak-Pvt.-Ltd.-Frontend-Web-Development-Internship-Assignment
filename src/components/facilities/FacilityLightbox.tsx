import React, { useEffect } from 'react';
import { X, Check, Building, Users } from 'lucide-react';
import type { Facility } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface FacilityLightboxProps {
  facility: Facility | null;
  onClose: () => void;
}

export const FacilityLightbox: React.FC<FacilityLightboxProps> = ({ facility, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && facility) {
        onClose();
      }
    };

    if (facility) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [facility, onClose]);

  if (!facility) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-md"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Top Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close facility details"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-navy/70 text-white hover:bg-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-Res Image Header */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={facility.image}
            alt={facility.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-gold text-navy-dark inline-block mb-2">
              {facility.category} Space
            </span>
            <h3 id="lightbox-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              {facility.name}
            </h3>
          </div>
        </div>

        {/* Facility Details Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            {facility.description}
          </p>

          {/* Key Amenities */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
              <Building className="w-4 h-4 text-gold-dark" />
              Key Features & Infrastructure
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {facility.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Check className="w-4 h-4 text-status-success flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {facility.capacity && (
            <div className="flex items-center gap-2 text-xs text-brand-muted pt-2 border-t border-slate-100">
              <Users className="w-4 h-4 text-gold-dark" />
              <span>Campus Capacity / Utilization: <strong>{facility.capacity}</strong></span>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-brand-border flex items-center justify-between">
          <span className="text-xs text-slate-400">Press ESC to dismiss</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-navy hover:bg-navy-secondary text-white text-xs font-bold tracking-wide"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
