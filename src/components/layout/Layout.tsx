import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-gold text-navy-dark font-bold rounded-md shadow-lg outline-none ring-2 ring-navy"
      >
        Skip to main content
      </a>

      {/* Global Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Main Header */}
      <SiteHeader />

      {/* Main Page Canvas */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Global Sophisticated Footer */}
      <SiteFooter />

      {/* Scroll restoration & back to top button */}
      <ScrollToTop />
    </div>
  );
};
