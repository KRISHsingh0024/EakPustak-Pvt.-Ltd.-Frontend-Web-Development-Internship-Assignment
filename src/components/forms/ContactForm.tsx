import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PrimaryButton } from '../common/Buttons';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please accept the demonstration note.';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
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

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-border shadow-elevated p-6 sm:p-10">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gold-light/40 text-navy border border-gold/40">
          Direct Inquiries
        </span>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mt-2.5 tracking-tight">
          Send Us a Message
        </h3>
        <p className="text-sm text-brand-muted mt-1.5 leading-relaxed">
          Have questions regarding curriculum, transfers, campus tours, or general information? Reach out through this message form.
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
              Message Sent (Demo)!
            </h4>
            <p className="text-sm text-slate-700 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to EAK International School.
            </p>
            <p className="text-xs text-status-success font-semibold mt-2 bg-status-success/10 py-1.5 px-3 rounded-lg inline-block">
              * Demonstration Form: No network request was dispatched.
            </p>
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="px-5 py-2.5 rounded-lg bg-navy hover:bg-navy-secondary text-white text-xs font-bold tracking-wide uppercase transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Full Name <span className="text-status-error">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Priyanshu Sharma"
              aria-invalid={!!errors.name}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                errors.name
                  ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                  : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-status-error flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Email Address <span className="text-status-error">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              aria-invalid={!!errors.email}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                errors.email
                  ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                  : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-status-error flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Subject <span className="text-status-error">*</span>
            </label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Academic Transfer Inquiry for Grade 8"
              aria-invalid={!!errors.subject}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                errors.subject
                  ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                  : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-status-error flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Message <span className="text-status-error">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your question or request here..."
              aria-invalid={!!errors.message}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all resize-y ${
                errors.message
                  ? 'border-status-error focus:ring-2 focus:ring-status-error/20'
                  : 'border-brand-border focus:border-gold focus:ring-2 focus:ring-gold/20'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-status-error flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

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
                I acknowledge that this contact form is for demonstration evaluation and no real message is sent. <span className="text-status-error">*</span>
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-xs text-status-error flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

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
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
};
