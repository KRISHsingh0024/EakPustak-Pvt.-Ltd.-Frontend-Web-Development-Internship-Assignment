import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, X } from 'lucide-react';
import { PrimaryButton } from '../common/Buttons';

interface AdmissionInquiryFormProps {
  onClose?: () => void;
}

interface FormData {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  grade: string;
  contactMethod: 'email' | 'phone' | 'whatsapp';
  message: string;
  consent: boolean;
}

interface FormErrors {
  parentName?: string;
  studentName?: string;
  email?: string;
  phone?: string;
  grade?: string;
  consent?: string;
}

export const AdmissionInquiryForm: React.FC<AdmissionInquiryFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: '',
    contactMethod: 'email',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent or guardian name is required.';
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.grade) {
      newErrors.grade = 'Please select the grade applying for.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please acknowledge that this is a demonstration form.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulated local submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        parentName: '',
        studentName: '',
        email: '',
        phone: '',
        grade: '',
        contactMethod: 'email',
        message: '',
        consent: false,
      });
      setErrors({});
    }, 700);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for field upon edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-border shadow-elevated p-6 sm:p-10 relative">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-xl text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
          Digital Admissions Desk
        </span>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mt-3 tracking-tight">
          Submit an Admission Enquiry
        </h3>
        <p className="text-sm text-brand-muted mt-2 leading-relaxed">
          Please provide your initial details below. Our admissions office will reach out with the prospectus and schedule a campus tour.
        </p>
      </div>

      {isSuccess ? (
        <div
          role="status"
          aria-live="polite"
          className="p-6 rounded-xl bg-status-success/10 border border-status-success/30 text-navy text-center space-y-4"
        >
          <div className="w-12 h-12 rounded-full bg-status-success text-white flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg text-navy">
              Enquiry Received Successfully!
            </h4>
            <p className="text-sm text-slate-700 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you for your interest in EAK International School.
            </p>
            <p className="text-xs text-status-success font-semibold mt-2 bg-status-success/10 py-1.5 px-3 rounded-lg inline-block">
              * Demonstration Form: No network request was made and no information has been stored.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="px-5 py-2.5 rounded-lg bg-navy hover:bg-navy-secondary text-white text-xs font-bold tracking-wide uppercase transition-colors"
            >
              Submit Another Demo Enquiry
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold tracking-wide uppercase transition-colors"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Parent Name */}
            <div>
              <label
                htmlFor="parentName"
                className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Parent / Guardian Name <span className="text-status-error">*</span>
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                aria-invalid={!!errors.parentName}
                aria-describedby={errors.parentName ? 'parentName-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                  errors.parentName
                    ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                    : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
              />
              {errors.parentName && (
                <p id="parentName-error" className="mt-1 text-xs text-status-error flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.parentName}</span>
                </p>
              )}
            </div>

            {/* Student Name */}
            <div>
              <label
                htmlFor="studentName"
                className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Student Full Name <span className="text-status-error">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="e.g. Aarav Sharma"
                aria-invalid={!!errors.studentName}
                aria-describedby={errors.studentName ? 'studentName-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                  errors.studentName
                    ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                    : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
              />
              {errors.studentName && (
                <p id="studentName-error" className="mt-1 text-xs text-status-error flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.studentName}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Parent Email Address <span className="text-status-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="parent@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                  errors.email
                    ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                    : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-status-error flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Phone Number <span className="text-status-error">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                  errors.phone
                    ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                    : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-status-error flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Grade Applying For */}
            <div>
              <label
                htmlFor="grade"
                className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Grade Applying For <span className="text-status-error">*</span>
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                aria-invalid={!!errors.grade}
                aria-describedby={errors.grade ? 'grade-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                  errors.grade
                    ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                    : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
                }`}
              >
                <option value="">Select Target Grade</option>
                <option value="Primary - Grade 1">Primary - Grade 1</option>
                <option value="Primary - Grade 2">Primary - Grade 2</option>
                <option value="Primary - Grade 3">Primary - Grade 3</option>
                <option value="Primary - Grade 4">Primary - Grade 4</option>
                <option value="Primary - Grade 5">Primary - Grade 5</option>
                <option value="Middle - Grade 6">Middle - Grade 6</option>
                <option value="Middle - Grade 7">Middle - Grade 7</option>
                <option value="Middle - Grade 8">Middle - Grade 8</option>
                <option value="Secondary - Grade 9">Secondary - Grade 9</option>
                <option value="Secondary - Grade 10">Secondary - Grade 10</option>
                <option value="Senior Secondary - Grade 11 (Science)">Senior Secondary - Grade 11 (Science)</option>
                <option value="Senior Secondary - Grade 11 (Commerce)">Senior Secondary - Grade 11 (Commerce)</option>
                <option value="Senior Secondary - Grade 11 (Humanities)">Senior Secondary - Grade 11 (Humanities)</option>
              </select>
              {errors.grade && (
                <p id="grade-error" className="mt-1 text-xs text-status-error flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.grade}</span>
                </p>
              )}
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label
                htmlFor="contactMethod"
                className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
              >
                Preferred Follow-up Channel
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm text-navy bg-slate-50/50 focus:bg-white focus:border-gold focus:outline-none transition-all"
              >
                <option value="email">Email</option>
                <option value="phone">Phone Call</option>
                <option value="whatsapp">WhatsApp Message</option>
              </select>
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Additional Notes or Questions (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Inquiring about transportation from Sector 42 and sports facilities..."
              className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:border-gold focus:outline-none transition-all resize-y"
            />
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-4 h-4 rounded text-gold focus:ring-gold border-brand-border mt-0.5"
              />
              <span className="text-xs text-slate-600 leading-normal">
                I understand this is a sample demonstration form for the EAK Pustak assignment and no real data is processed or submitted to external entities. <span className="text-status-error">*</span>
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-xs text-status-error flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <PrimaryButton
              type="submit"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              icon={
                isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )
              }
            >
              {isSubmitting ? 'Simulating Submission...' : 'Submit Admission Enquiry'}
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
};
