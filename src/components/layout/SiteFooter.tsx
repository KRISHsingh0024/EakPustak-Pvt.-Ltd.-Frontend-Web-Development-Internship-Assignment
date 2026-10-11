import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ShieldCheck, X, MapPin, Phone, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/school';

export const SiteFooter: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Demonstration Site Policy');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openModal = (title: string) => {
    setModalTitle(title);
    setPrivacyModalOpen(true);
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-[#10243A] text-white border-t border-[#193653] select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: School Branding */}
          <div className="space-y-3.5">
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-10 h-10 rounded-lg bg-[#0B1929] text-[#D6A449] border border-white/10 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white tracking-tight leading-tight">
                  EAK
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#CBD5E1] -mt-0.5 font-semibold">
                  International School
                </span>
              </div>
            </Link>

            <p className="text-xs font-semibold text-[#D6A449] tracking-wide">
              Nurturing Minds. Building Future Leaders.
            </p>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              An inspiring learning community focused on academic growth, curiosity, creativity, and character.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#CBD5E1] text-[11px] font-medium">
                Demonstration Prototype
              </span>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-1 flex items-center gap-2">
              {SCHOOL_INFO.socials.map((social) => (
                <button
                  key={social.name}
                  type="button"
                  onClick={() => openModal(`Social Link (${social.name})`)}
                  aria-label={`Visit demonstration page for ${social.name}`}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#D6A449] hover:text-[#10243A] text-[#CBD5E1] flex items-center justify-center transition-all duration-200 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A449]"
                >
                  {getSocialIcon(social.name)}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Academics */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm sm:text-base font-semibold text-white tracking-wide">
              Academics
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <Link to="/academics" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Primary Stage
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Middle School
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Secondary Education
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Senior Secondary Pathways
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Academic Calendar &amp; Circulars
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Campus */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm sm:text-base font-semibold text-white tracking-wide">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <Link to="/admissions" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Admission Guidelines
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Application Procedure
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  Campus Visit &amp; Tours
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#D6A449] transition-colors block py-0.5 text-[#D6A449] font-medium">
                  Enquire Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Explore & Contact */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm sm:text-base font-semibold text-white tracking-wide">
              Explore &amp; Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <Link to="/about" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  About Our School
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#D6A449] transition-colors block py-0.5">
                  News &amp; Events
                </Link>
              </li>
              <li className="flex items-start gap-2 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-[#D6A449] flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#D6A449] flex-shrink-0" />
                <a href={`tel:${SCHOOL_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#D6A449] flex-shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]">
          <p>© 2026 EAK International School. All rights reserved. Created for EAK Pustak Pvt. Ltd. Hiring Assignment.</p>
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
            <button
              type="button"
              onClick={() => openModal('Privacy Policy')}
              className="hover:text-[#D6A449] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => openModal('Terms of Service')}
              className="hover:text-[#D6A449] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Terms of Use
            </button>
            <button
              type="button"
              onClick={() => openModal('Demonstration Disclaimer')}
              className="hover:text-[#D6A449] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Disclaimer
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D6A449] hover:underline font-semibold ml-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6A449] px-2 py-1 rounded"
              aria-label="Back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Demonstration Policy Dialog */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1929]/80 backdrop-blur-sm"
        >
          <div className="bg-white text-[#10243A] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#10243A] rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F5E7C8] text-[#7D5700]">
                <ShieldCheck className="w-6 h-6 text-[#7D5700]" />
              </div>
              <h3 id="modal-title" className="text-xl font-bold font-heading">
                {modalTitle}
              </h3>
            </div>
            <div className="space-y-3 text-sm text-[#44474D] leading-relaxed">
              <p>
                This website is a frontend redesign prototype created for <strong>EAK International School</strong> as an evaluation assignment for <strong>EAK Pustak Pvt. Ltd.</strong>
              </p>
              <p>
                All student names, circulars, testimonials, addresses, and phone numbers are illustrative demonstration content. No personal information is gathered, stored, or processed on external servers.
              </p>
              <p>
                All forms perform client-side simulated validation and display local feedback messages.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-[#10243A] text-white font-semibold text-sm hover:bg-[#193653] transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
