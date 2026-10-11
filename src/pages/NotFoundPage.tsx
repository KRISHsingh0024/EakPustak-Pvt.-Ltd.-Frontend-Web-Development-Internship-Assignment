import React, { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../components/common/Buttons';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | EAK International School';
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-brand-bg">
      <div className="max-w-md w-full bg-white rounded-3xl border border-brand-border p-8 sm:p-10 shadow-elevated text-center">
        <div className="w-20 h-20 rounded-2xl bg-gold-light/50 border border-gold/40 flex items-center justify-center mx-auto text-gold-dark mb-6">
          <span className="font-heading font-extrabold text-3xl text-navy">
            404
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-brand-muted leading-relaxed">
          The page you are looking for may have been moved, renamed, or does not exist.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PrimaryButton to="/" icon={<Home className="w-4 h-4" />}>
            Return Home
          </PrimaryButton>
          <SecondaryButton to="/contact" icon={<ArrowLeft className="w-4 h-4" />}>
            Contact Helpdesk
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};
