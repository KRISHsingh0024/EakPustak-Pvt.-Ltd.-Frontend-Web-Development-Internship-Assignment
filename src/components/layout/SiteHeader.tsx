import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { NAV_ITEMS } from '../../data/school';
import { MobileNavigation } from './MobileNavigation';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchModalOpen(false);
      navigate(`/events?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 border-b border-[#E3E8ED] ${
          isScrolled ? 'shadow-[0_4px_20px_-2px_rgba(16,36,58,0.08)] py-1.5' : 'py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Left: School Logo & Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="EAK International School Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#10243A] text-[#D6A449] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="material-symbols-outlined text-[24px] sm:text-[26px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl text-[#10243A] tracking-tight leading-tight font-bold">
                EAK
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#64748B] -mt-0.5 font-semibold">
                International School
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Bar */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-[13px] xl:text-sm whitespace-nowrap transition-colors relative font-medium ${
                    isActive
                      ? 'text-[#10243A] font-bold border-b-2 border-[#D6A449]'
                      : 'text-[#172435] hover:text-[#B98428]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Apply Now CTA, Quick Search, Mobile Trigger */}
          <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <Link
              to="/admissions"
              className="h-10 sm:h-11 px-4 xl:px-6 rounded-lg bg-[#D6A449] hover:bg-[#C29038] text-[#10243A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10243A]"
            >
              Apply Now
            </Link>

            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search school website"
              className="w-9 h-9 rounded-full bg-[#F4F7FA] hover:bg-[#E3E8ED] text-[#10243A] flex items-center justify-center transition-colors border border-[#E3E8ED] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A449]"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile navigation menu"
              className="lg:hidden p-2 rounded-lg text-[#10243A] hover:bg-[#F4F7FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A449]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Quick Search Dialog Modal */}
      {searchModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-navy-dark/75 backdrop-blur-sm"
        >
          <div
            className="fixed inset-0"
            onClick={() => setSearchModalOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl p-6 z-10 border border-brand-border">
            <button
              type="button"
              onClick={() => setSearchModalOpen(false)}
              aria-label="Close search dialog"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold font-heading text-navy mb-3">
              Search EAK International School
            </h3>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search academics, notices, admissions, facilities..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-brand-muted">
                <span>Quick jumps:</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSearchModalOpen(false);
                      navigate('/admissions');
                    }}
                    className="hover:text-gold-dark underline"
                  >
                    Admissions
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchModalOpen(false);
                      navigate('/facilities');
                    }}
                    className="hover:text-gold-dark underline"
                  >
                    Facilities
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchModalOpen(false);
                      navigate('/events');
                    }}
                    className="hover:text-gold-dark underline"
                  >
                    Circulars
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-navy hover:bg-navy-secondary text-white text-xs font-bold"
                >
                  Search Site
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
