import { personalData, getSafeUrl } from "@/data/personal";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand & Persona Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-tight">
                DV
              </div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                {personalData.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Freelance Full-Stack Developer &amp; Product Engineer building scalable web applications and SaaS MVPs with Next.js, React, and TypeScript.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Accepting freelance inquiries for upcoming sprints</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors focus-visible:outline-hidden focus-visible:underline">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-indigo-600 transition-colors focus-visible:outline-hidden focus-visible:underline">
                Services
              </a>
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors focus-visible:outline-hidden focus-visible:underline">
                Featured Projects
              </a>
              <a href="#tech-stack" className="text-slate-600 hover:text-indigo-600 transition-colors focus-visible:outline-hidden focus-visible:underline">
                Tech Stack
              </a>
              <a href="#process" className="text-slate-600 hover:text-indigo-600 transition-colors focus-visible:outline-hidden focus-visible:underline">
                How I Work
              </a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors focus-visible:outline-hidden focus-visible:underline">
                Contact &amp; Inquiry
              </a>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Get in Touch
            </div>
            <div className="space-y-1.5 text-sm">
              <div>
                <a
                  href={getSafeUrl.email(personalData.email)}
                  className="font-mono text-xs text-slate-700 hover:text-indigo-600 block transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  {personalData.email && !personalData.email.includes("YOUR_")
                    ? personalData.email
                    : "hello@dipvijay.dev"}
                </a>
              </div>
              <div className="font-mono text-xs text-slate-700">
                {personalData.phone && !personalData.phone.includes("YOUR_")
                  ? personalData.phone
                  : "+91 98765 43210"}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={getSafeUrl.whatsapp(personalData.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 flex items-center justify-center transition-colors border border-emerald-200/60 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="Chat on WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-600" />
              </a>

              <a
                href={getSafeUrl.github(personalData.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={getSafeUrl.linkedin(personalData.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={getSafeUrl.email(personalData.email)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved. Personal Freelancer Portfolio.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline">
              Engineered with Next.js, TypeScript &amp; Tailwind CSS
            </span>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
