"use client";

import { useState } from "react";
import { personalData, getSafeUrl } from "@/data/personal";
import {
  Mail,
  Copy,
  Check,
  Send,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  AlertCircle,
  RefreshCw
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

const PROJECT_TYPE_OPTIONS = [
  "Website",
  "Web Application",
  "E-commerce",
  "Mobile App",
  "Admin Dashboard",
  "Backend/API",
  "Other"
] as const;

const BUDGET_OPTIONS = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet"
] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Web Application",
    budget: "₹25,000 – ₹50,000",
    message: ""
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const handleCopyEmail = () => {
    const emailToCopy =
      personalData.email && !personalData.email.includes("YOUR_")
        ? personalData.email
        : "hello@dipvijay.dev";
    navigator.clipboard.writeText(emailToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe what you are looking to build.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters describing your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Frontend simulation - easy to connect to Resend / Formspree / API route later
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitted(true);
    } catch {
      setSubmitError("Failed to submit inquiry. Please try again or reach out directly on WhatsApp or Email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "Web Application",
      budget: "₹25,000 – ₹50,000",
      message: ""
    });
    setErrors({});
    setSubmitted(false);
    setSubmitError(null);
  };

  // Generate dynamic pre-filled WhatsApp message based on current input
  const generateWhatsAppUrl = () => {
    const rawDigits = personalData.whatsapp ? personalData.whatsapp.replace(/[^0-9]/g, "") : "";
    const cleanPhone = rawDigits.length >= 7 ? rawDigits : "";

    const inquiryParts: string[] = ["Hi Dipvijay, I would like to discuss a project:"];
    if (formData.name.trim()) inquiryParts.push(`*Name:* ${formData.name.trim()}`);
    if (formData.email.trim()) inquiryParts.push(`*Email:* ${formData.email.trim()}`);
    if (formData.phone.trim()) inquiryParts.push(`*Phone:* ${formData.phone.trim()}`);
    if (formData.projectType) inquiryParts.push(`*Project Type:* ${formData.projectType}`);
    if (formData.budget) inquiryParts.push(`*Budget:* ${formData.budget}`);
    if (formData.message.trim()) inquiryParts.push(`*Details:* ${formData.message.trim()}`);

    const message =
      inquiryParts.length > 1
        ? inquiryParts.join("\n")
        : "Hi Dipvijay, I have a project inquiry and would like to discuss it with you.";

    return cleanPhone
      ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tell me what you&apos;re building, what problem you&apos;re trying to solve, and what you need help with.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Contact Options & Direct Channels           */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Prefer to connect directly? Feel free to reach out via WhatsApp, email, or social profiles.
              </p>

              {/* 1. WhatsApp Option */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl border border-emerald-200/90 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 min-w-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <WhatsappIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                      WhatsApp
                    </div>
                    <div className="text-sm font-bold text-slate-900 truncate">
                      {personalData.whatsapp && !personalData.whatsapp.includes("YOUR_")
                        ? personalData.whatsapp
                        : "Chat directly on WhatsApp"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
                  <span>Chat Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* 2. Email Option */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:border-slate-300 transition-all duration-200 min-w-0">
                <a
                  href={getSafeUrl.email(personalData.email)}
                  className="flex items-center gap-3 overflow-hidden mr-2 min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </div>
                    <div className="text-sm font-bold text-slate-900 truncate">
                      {personalData.email && !personalData.email.includes("YOUR_")
                        ? personalData.email
                        : "Direct Project Email"}
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* 3. LinkedIn Option */}
              <a
                href={getSafeUrl.linkedin(personalData.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-100/60 hover:border-slate-300 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      LinkedIn
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      Connect on LinkedIn
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* 4. GitHub Option */}
              <a
                href={getSafeUrl.github(personalData.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-100/60 hover:border-slate-300 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      GitHub
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      View Open Source Code
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Availability & Reassurance Box */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                <Clock className="w-3.5 h-3.5" />
                <span>Availability & Turnaround</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Fast, Direct Communication
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                I take on a limited number of client projects simultaneously to ensure direct attention, rapid responses, and clean code quality.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Response within 24 hours guaranteed</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Project Inquiry Form                       */}
          {/* ======================================================== */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-xs min-h-[580px] flex flex-col justify-between">
              
              {submitted ? (
                /* Success State */
                <div className="py-10 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-4 border-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Project Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. I have received your details for a{" "}
                    <strong className="text-slate-900">{formData.projectType}</strong> project. I will review your requirements and respond to{" "}
                    <strong className="text-slate-900">{formData.email}</strong> within 24 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-all"
                    >
                      <WhatsappIcon className="w-4 h-4 text-white" />
                      <span>Continue Conversation on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Fill out the fields below for a structured proposal and timeline breakdown.
                    </p>
                  </div>

                  {/* Submission Error Alert */}
                  {submitError && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 transition-all ${
                          errors.name
                            ? "border-rose-300 focus:ring-rose-500/20"
                            : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-rose-600 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="you@company.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 transition-all ${
                          errors.email
                            ? "border-rose-300 focus:ring-rose-500/20"
                            : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-600 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone / WhatsApp & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Phone / WhatsApp <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-project-type"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Project Type
                      </label>
                      <select
                        id="inquiry-project-type"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                      >
                        {PROJECT_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Budget Range */}
                  <div>
                    <label
                      htmlFor="inquiry-budget"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Budget Range
                    </label>
                    <select
                      id="inquiry-budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:bg-white focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                    >
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Project Description */}
                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Project Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me what you're building, what problem you're trying to solve, and what you need help with."
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 transition-all resize-y ${
                        errors.message
                          ? "border-rose-300 focus:ring-rose-500/20"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-600 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Primary Form Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Pre-filled WhatsApp CTA Button */}
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-sm transition-all duration-200 shrink-0"
                      title="Open WhatsApp with your current inquiry details"
                    >
                      <WhatsappIcon className="w-4 h-4 text-emerald-600" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center leading-normal">
                    I respect your privacy. No spam or marketing emails—only direct project correspondence.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
