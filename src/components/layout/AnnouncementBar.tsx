import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../../data/school';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Campus Announcement"
      className="w-full bg-[#10243A] text-white py-2 px-4 sm:px-6 select-none border-b border-[#193653] text-[13px] relative z-50 min-h-[36px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 font-sans tracking-wide">
        {/* Left: Admissions Announcement with pulsing gold indicator */}
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="w-2 h-2 rounded-full bg-[#D6A449] animate-pulse flex-shrink-0" />
          <span className="font-medium text-white">
            Admissions Open for Academic Session 2026–27
          </span>
          <span className="hidden sm:inline text-white/50">|</span>
          <Link
            to="/admissions"
            className="text-[#D6A449] hover:text-[#F5E7C8] hover:underline inline-flex items-center gap-1 transition-colors font-semibold ml-1"
          >
            <span>Enquire Today</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        </div>

        {/* Right: Phone & Email Contacts (Desktop / Tablet) */}
        <div className="hidden sm:flex items-center gap-5 text-white/90 text-xs font-normal">
          <a
            href={`tel:${SCHOOL_INFO.contact.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[14px] text-[#D6A449]">call</span>
            <span>{SCHOOL_INFO.contact.phone}</span>
          </a>
          <a
            href={`mailto:${SCHOOL_INFO.contact.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[14px] text-[#D6A449]">mail</span>
            <span>{SCHOOL_INFO.contact.email}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
