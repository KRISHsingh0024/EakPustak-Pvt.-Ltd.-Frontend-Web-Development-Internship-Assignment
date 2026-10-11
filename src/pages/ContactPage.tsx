import React, { useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  HelpCircle,
  Bus,
  HeartHandshake,
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';
import { MapPlaceholder } from '../components/contact/MapPlaceholder';
import { SCHOOL_INFO } from '../data/school';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact EAK International School';
  }, []);

  const departmentContacts = [
    {
      title: "Admissions Helpdesk",
      desc: "Prospectus enquiries, campus walkthroughs, and enrollment documentation.",
      email: "admissions@example.com",
      phone: "+91 98765 43210",
      icon: <Building className="w-5 h-5 text-gold" />,
    },
    {
      title: "General Administration",
      desc: "Official certificates, student records, and general institutional queries.",
      email: "info@example.com",
      phone: "+91 98765 43211",
      icon: <HelpCircle className="w-5 h-5 text-gold" />,
    },
    {
      title: "Transport & Logistics",
      desc: "Bus routes, pick-up scheduling, and safety fleet monitoring.",
      email: "transport@example.com",
      phone: "+91 98765 43212",
      icon: <Bus className="w-5 h-5 text-gold" />,
    },
    {
      title: "Student Health & Infirmary",
      desc: "Medical records, allergy advisories, and campus health protocols.",
      email: "infirmary@example.com",
      phone: "+91 98765 43213",
      icon: <HeartHandshake className="w-5 h-5 text-gold" />,
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Page Hero */}
      <PageHero
        title="Let's Start a Conversation"
        subtitle="Reach out to learn more about the school, admissions, campus walkthroughs, and our vibrant learning environment."
        breadcrumbItems={[{ label: 'Contact Us' }]}
        badge="Connect With EAK"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. Main Contact Section (Two-Column Layout) */}
      <section className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Cards & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
                  Campus Coordinates
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy tracking-tight mt-2.5">
                  Get in Touch
                </h2>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  We welcome families, educators, and visitors to our campus during visiting hours.
                </p>
              </div>

              {/* Core Contact Cards */}
              <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-card space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-light/40 flex items-center justify-center text-gold-dark flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy">
                      Campus Address
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted mt-0.5 leading-relaxed">
                      {SCHOOL_INFO.contact.address}
                    </p>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      * Fictional demonstration location
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-light/40 flex items-center justify-center text-gold-dark flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy">
                      Phone Lines (Demo)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      Admissions: <span className="font-semibold text-navy">{SCHOOL_INFO.contact.phone}</span>
                    </p>
                    <p className="text-xs text-brand-muted">
                      Admin: {SCHOOL_INFO.contact.phoneAlt}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-light/40 flex items-center justify-center text-gold-dark flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy">
                      Email Inquiries
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      Admissions: {SCHOOL_INFO.contact.email}
                    </p>
                    <p className="text-xs text-brand-muted">
                      General: {SCHOOL_INFO.contact.emailGeneral}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-light/40 flex items-center justify-center text-gold-dark flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy">
                      Visiting Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                      {SCHOOL_INFO.contact.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Static Map Blueprint Placeholder */}
              <MapPlaceholder />
            </div>

            {/* Right Column: Contact Form Panel (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Department Specific Contacts Grid */}
      <section className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Department Directory"
            title="Specialized Contact Desks"
            description="Connect directly with specific campus teams for timely guidance."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentContacts.map((dept, idx) => (
              <div
                key={idx}
                className="bg-brand-bg rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center mb-4 shadow-xs">
                    {dept.icon}
                  </div>
                  <h4 className="font-heading font-bold text-base text-navy mb-1.5">
                    {dept.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    {dept.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-xs space-y-1">
                  <p className="text-slate-600 font-medium">
                    Phone: <span className="text-navy font-bold">{dept.phone}</span>
                  </p>
                  <p className="text-slate-500">
                    Email: {dept.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
