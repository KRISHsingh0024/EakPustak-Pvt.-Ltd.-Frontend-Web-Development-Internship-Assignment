import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO } from '../../data/school';
import { SchoolLogo } from '../common/SchoolLogo';
import { PrimaryButton } from '../common/Buttons';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Site Navigation"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-dark/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Header inside drawer */}
        <div className="p-5 border-b border-brand-border flex items-center justify-between bg-slate-50">
          <SchoolLogo variant="dark" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-slate-500 hover:text-navy hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 flex-1 flex flex-col space-y-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl font-heading font-semibold text-base transition-all duration-200 ${
                  isActive
                    ? 'bg-navy text-gold shadow-sm'
                    : 'text-navy hover:bg-slate-100 hover:text-navy-secondary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-gold" />}
                </>
              )}
            </NavLink>
          ))}

          {/* Action CTA inside mobile drawer */}
          <div className="pt-6">
            <PrimaryButton
              to="/admissions"
              onClick={onClose}
              fullWidth
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Apply for Admission
            </PrimaryButton>
          </div>
        </nav>

        {/* Footer Contact Details inside drawer */}
        <div className="p-6 bg-slate-50 border-t border-brand-border space-y-3 text-xs text-brand-muted">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
            <a href={`tel:${SCHOOL_INFO.contact.phone}`} className="hover:text-navy font-medium">
              {SCHOOL_INFO.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gold flex-shrink-0" />
            <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="hover:text-navy">
              {SCHOOL_INFO.contact.email}
            </a>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <span>Academic District, Green Valley (Demo Campus)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
