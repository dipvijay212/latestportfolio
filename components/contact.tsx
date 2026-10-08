"use client";

import { useState } from "react";
import { personalData } from "@/data/personal";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "SaaS MVP",
    budget: "$2,500 - $5,000",
    timeline: "2-4 Weeks",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Start a Project
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let&apos;s build your next high-impact product together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a project in mind, need an MVP launched, or want to discuss a dedicated technical sprint? Fill out the brief form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Booking Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Direct Contact Details
                </h3>
                <p className="text-xs text-slate-600">
                  No gatekeepers. You will be connected directly with {personalData.name}.
                </p>
              </div>

              {/* Email with copy button */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-700">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-4 h-4 text-indigo-600" /> Direct Email
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Primary Channel
                  </span>
                </div>
                
                <div className="flex items-center justify-between gap-2 pt-1">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="font-mono text-sm font-bold text-slate-900 hover:text-indigo-600 truncate"
                  >
                    {personalData.email}
                  </a>
                  
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-600" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-600 font-medium">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Phone placeholder */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <Phone className="w-4 h-4 text-indigo-600" /> Direct Phone / WhatsApp
                </div>
                <div className="font-mono text-sm font-bold text-slate-900 pt-1">
                  {personalData.phone}
                </div>
              </div>

              {/* Response Time & Guarantee Badges */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Guaranteed Fast Response</div>
                    <div className="text-slate-700">Replies within 24 business hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Client Confidentiality</div>
                    <div className="text-slate-700">NDAs happily signed upon request</div>
                  </div>
                </div>
              </div>

              {/* Social profiles */}
              <div className="border-t border-slate-100 pt-5">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Connect & Verify
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>. I have received your project details and will review them and reply to <span className="font-semibold text-slate-900">{formData.email}</span> within 24 hours with next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "SaaS MVP",
                        budget: "$2,500 - $5,000",
                        timeline: "2-4 Weeks",
                        message: ""
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-600">
                      Tell me about your idea, timeline, and goals. I will get back to you with an honest feasibility estimate.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["SaaS MVP", "Full-Stack App", "Frontend / UI", "Code Audit"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            formData.projectType === type
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                              : "bg-slate-50/80 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="block text-xs font-bold text-slate-700">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="< $2,500">&lt; $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="timeline" className="block text-xs font-bold text-slate-700">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Ready Immediately">Ready immediately</option>
                        <option value="2-4 Weeks">Within 2-4 weeks</option>
                        <option value="1-2 Months">Within 1-2 months</option>
                        <option value="Flexible">Flexible discovery</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700">
                      Project Details / Brief *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to build, any existing designs/code, and your main goal..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-700 text-center mt-2.5">
                      🔒 No spam. Your information is kept strictly private.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
