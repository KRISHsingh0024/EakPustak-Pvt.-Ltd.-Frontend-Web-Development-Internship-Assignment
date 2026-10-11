import React from 'react';
import { Link } from 'react-router-dom';

interface SchoolLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg ${className}`}
      aria-label="EAK International School - Return to Homepage"
    >
      {/* School Crest Icon */}
      <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-navy flex items-center justify-center shadow-md border border-gold/40 group-hover:border-gold transition-colors">
        <svg
          viewBox="0 0 32 32"
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shield Outline */}
          <path d="M16 3L26 7V16C26 22 21 27 16 29C11 27 6 22 6 16V7L16 3Z" fill="#10243A" />
          {/* Open Book / Torch Motif */}
          <path d="M11 14C13.5 13 16 14 16 14C16 14 18.5 13 21 14V21C18.5 20 16 21 16 21C16 21 13.5 20 11 21V14Z" stroke="#D6A449" strokeWidth="1.5" />
          <line x1="16" y1="14" x2="16" y2="21" stroke="#D6A449" strokeWidth="1.5" />
          <circle cx="16" cy="10" r="1.5" fill="#D6A449" stroke="none" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-extrabold text-xl sm:text-2xl tracking-tight leading-none transition-colors ${
            isDark ? 'text-navy group-hover:text-navy-secondary' : 'text-white group-hover:text-gold-light'
          }`}
        >
          EAK
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase transition-colors ${
              isDark ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            International School
          </span>
        )}
      </div>
    </Link>
  );
};
