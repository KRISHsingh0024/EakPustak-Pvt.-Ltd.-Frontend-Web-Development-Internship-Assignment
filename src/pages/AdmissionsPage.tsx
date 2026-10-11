import React, { useState, useEffect } from 'react';
import {
  FileText,
  UserCheck,
  CheckCircle,
  Sparkles,
  AlertCircle,
  ArrowRight,
  ClipboardList,
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { SecondaryButton } from '../components/common/Buttons';
import { AdmissionInquiryForm } from '../components/forms/AdmissionInquiryForm';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { FAQS_DATA } from '../data/faqs';

export const AdmissionsPage: React.FC = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Admissions | EAK International School';

    if (window.location.hash === '#enquiry' || window.location.hash === '#enquiry-modal') {
      setEnquiryModalOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setEnquiryModalOpen(false);
      }
    };

    if (enquiryModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [enquiryModalOpen]);

  const scrollToEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  const scrollToProcess = () => {
    const el = document.getElementById('process-timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      num: "01",
      title: "Online / In-Person Enquiry",
      desc: "Submit your basic details online or visit the campus Admissions Helpdesk to receive the prospectus.",
      icon: <ClipboardList className="w-5 h-5 text-gold" />,
    },
    {
      num: "02",
      title: "Registration & Application",
      desc: "Fill in the formal application form accompanied by essential demographic and academic credentials.",
      icon: <FileText className="w-5 h-5 text-gold" />,
    },
    {
      num: "03",
      title: "Interaction / Assessment",
      desc: "Informal, welcoming interaction for primary grades; baseline diagnostic review for middle/senior grades.",
      icon: <UserCheck className="w-5 h-5 text-gold" />,
    },
    {
      num: "04",
      title: "Provisional Offer",
      desc: "Review by Admissions Committee followed by formal communication of provisional admission offer.",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
    },
    {
      num: "05",
      title: "Enrollment & Orientation",
      desc: "Verification of original documents, fee completion, and student kit handover ahead of orientation day.",
      icon: <CheckCircle className="w-5 h-5 text-gold" />,
    },
  ];

  const eligibilityGuidelines = [
    { grade: "Primary (Grades 1 – 5)", age: "Age 6+ as of March 31 of academic year", req: "Foundational readiness; friendly teacher interaction" },
    { grade: "Middle School (Grades 6 – 8)", age: "Age 11+ as of March 31 of academic year", req: "Previous grade report card; baseline literacy & numeracy check" },
    { grade: "Secondary (Grades 9 – 10)", age: "Age 14+ as of March 31 of academic year", req: "Academic clearance from recognized school board" },
    { grade: "Senior Secondary (Grades 11 – 12)", age: "Age 16+ as of March 31 of academic year", req: "Grade 10 Board marksheet & stream eligibility benchmark" },
  ];

  const documentChecklist = [
    "Official Birth Certificate issued by Municipal Authority",
    "Previous 2 academic years' official report cards / progress transcripts",
    "Recent passport-sized color photographs (4 of student, 2 of each parent)",
    "Government-issued identity & address proof of parents / guardians",
    "Transfer Certificate (TC) from recognized institution (at final enrollment)",
    "Immunization & medical clearance record by certified pediatrician",
  ];

  return (
    <div className="space-y-0">
      {/* 1. Page Hero */}
      <PageHero
        title="Begin Your EAK Journey"
        subtitle="Explore the admission process and learn how to take the next step toward joining our vibrant learning community."
        breadcrumbItems={[{ label: 'Admissions' }]}
        badge="Session 2026–27"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
      >
        <button
          type="button"
          id="start-enquiry-hero-btn"
          onClick={() => setEnquiryModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-heading font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-200 active:scale-95 cursor-pointer relative z-20"
        >
          <span>Start an Enquiry</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={scrollToProcess}
          className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-200"
        >
          View Admission Steps
        </button>
      </PageHero>

      {/* 2. Admission Process 5-Step Timeline */}
      <section id="process-timeline" className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Step-by-Step Guide"
            title="The 5-Step Admission Journey"
            description="A transparent, welcoming process designed to ensure alignment between family aspirations and school values."
            align="center"
          />

          {/* Timeline Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {steps.map((st, idx) => (
              <div
                key={st.num}
                className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-extrabold text-2xl text-gold-dark">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shadow-xs">
                      {st.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-base text-navy mb-2 group-hover:text-navy-secondary transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-slate-400">
                  <span>Step {idx + 1} of 5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Eligibility Criteria & Required Documents Two-Column Grid */}
      <section className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Eligibility Criteria (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
                  Admissions Criteria
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy tracking-tight mt-2.5">
                  Age & Grade Eligibility
                </h3>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  The following age criteria apply as general guidance for the academic session 2026–27.
                </p>
              </div>

              <div className="space-y-3.5">
                {eligibilityGuidelines.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-brand-border bg-brand-bg space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-sm text-navy">
                        {item.grade}
                      </h4>
                      <span className="text-xs font-semibold text-gold-dark bg-gold-light/40 px-2 py-0.5 rounded">
                        {item.age}
                      </span>
                    </div>
                    <p className="text-xs text-brand-muted">
                      <strong>Prerequisite:</strong> {item.req}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Important Notice:</strong> Grade eligibility and age cut-offs are subject to final school verification and relevant regulatory guidelines.
                </span>
              </div>
            </div>

            {/* Right: Required Documents Checklist (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
                  Documentation Checklist
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy tracking-tight mt-2.5">
                  Required Documents
                </h3>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  Parents are requested to organize self-attested photocopies of the following records for the application review.
                </p>
              </div>

              <div className="bg-brand-bg rounded-2xl p-6 border border-brand-border shadow-xs space-y-3">
                {documentChecklist.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2 bg-white rounded-xl border border-slate-100">
                    <CheckCircle className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-normal">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-navy text-white text-xs space-y-2">
                <span className="font-bold text-gold-light block uppercase tracking-wider">
                  Sample Documentation Notice:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  This checklist serves as illustrative institutional guidance. Original certificates are required only for physical verification during the final enrollment step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Important Dates & Milestones (Clearly Marked Sample Dates) */}
      <section className="py-14 sm:py-16 bg-brand-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block">
                  Illustrative Timeline
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mt-1">
                  Key Admission Milestones (Sample Session 2026–27)
                </h3>
              </div>
              <span className="text-xs text-brand-muted bg-slate-100 px-3 py-1 rounded-full self-start md:self-auto">
                * Illustrative sample dates
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <span className="text-xs font-semibold text-gold-dark block">Stage 1</span>
                <h4 className="font-heading font-bold text-sm text-navy mt-1">Enquiry Window</h4>
                <p className="text-xs text-brand-muted mt-1">Open Now — Rolling Basis</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <span className="text-xs font-semibold text-gold-dark block">Stage 2</span>
                <h4 className="font-heading font-bold text-sm text-navy mt-1">Application Review</h4>
                <p className="text-xs text-brand-muted mt-1">Within 3 business days of submission</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <span className="text-xs font-semibold text-gold-dark block">Stage 3</span>
                <h4 className="font-heading font-bold text-sm text-navy mt-1">Interaction Schedule</h4>
                <p className="text-xs text-brand-muted mt-1">Communicated directly to families</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                <span className="text-xs font-semibold text-gold-dark block">Stage 4</span>
                <h4 className="font-heading font-bold text-sm text-navy mt-1">Enrollment Confirmation</h4>
                <p className="text-xs text-brand-muted mt-1">Within 7 days of provisional offer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Admission Enquiry Form (High Priority Conversion Form) */}
      <section id="enquiry-form" className="py-16 sm:py-20 bg-white border-y border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdmissionInquiryForm />
        </div>
      </section>

      {/* 6. Frequently Asked Questions (Accordion) */}
      <section id="faqs" className="py-16 sm:py-20 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Admissions Frequently Asked Questions"
            description="Find direct answers to common queries regarding admissions, grade placements, fees, and campus life."
            align="center"
          />

          <FAQAccordion items={FAQS_DATA} />
        </div>
      </section>

      {/* 7. Final Admissions CTA */}
      <section className="py-16 sm:py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have Questions About Admissions?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
            Our admissions counselors are on campus six days a week to welcome you and assist with each step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToEnquiry}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-heading font-bold px-6 py-3 rounded-xl transition-all"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <SecondaryButton to="/contact" variant="white-outline">
              Contact School Office
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* 8. Popout Enquiry Card Modal */}
      {enquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-enquiry-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1929]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setEnquiryModalOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-2xl my-auto animate-in zoom-in-95 duration-200">
            <AdmissionInquiryForm onClose={() => setEnquiryModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
