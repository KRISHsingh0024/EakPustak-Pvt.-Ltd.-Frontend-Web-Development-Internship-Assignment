import React from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/school';

export const MapPlaceholder: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-slate-100 shadow-card min-h-[300px] flex flex-col justify-between">
      {/* Visual map stylized background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10243A_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Decorative Road / Campus Vectors */}
      <svg className="absolute inset-0 w-full h-full stroke-slate-300" fill="none">
        <path d="M-100 150 Q 200 80, 500 200 T 900 120" strokeWidth="8" strokeDasharray="6 6" />
        <path d="M150 -50 L 250 400" strokeWidth="12" />
        <path d="M50 250 L 500 250" strokeWidth="10" />
        <circle cx="250" cy="250" r="45" fill="#D6A449" fillOpacity="0.15" stroke="#D6A449" strokeWidth="2" />
      </svg>

      {/* Map Header Notice */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-navy text-xs font-bold border border-slate-200 shadow-sm flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-gold-dark" />
          Campus Map Blueprint (Demo)
        </span>
        <span className="text-[11px] font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded">
          Coordinates: 28.5355° N, 77.3910° E
        </span>
      </div>

      {/* Centered Campus Location Pin */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center my-auto">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-navy text-gold flex items-center justify-center shadow-elevated border-2 border-gold animate-bounce">
            <MapPin className="w-7 h-7" />
          </div>
          <div className="absolute -bottom-2 w-8 h-2 bg-black/20 rounded-full blur-xs" />
        </div>
        <div className="mt-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-card border border-brand-border max-w-sm">
          <h4 className="font-heading font-bold text-base text-navy">
            EAK International School Campus
          </h4>
          <p className="text-xs text-brand-muted mt-1">
            {SCHOOL_INFO.contact.address}
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-navy-secondary">
            <Navigation className="w-3.5 h-3.5 text-gold-dark" />
            <span>North Gate Entrance for Visitors & Admissions</span>
          </div>
        </div>
      </div>

      {/* Bottom disclaimer footer */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm px-4 py-2.5 border-t border-brand-border text-center">
        <p className="text-[11px] text-slate-500">
          * Static designed location map placeholder. No external tracking or paid API required.
        </p>
      </div>
    </div>
  );
};
