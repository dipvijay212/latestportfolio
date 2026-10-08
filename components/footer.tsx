import { personalData } from "@/data/personal";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

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
                YN
              </div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                {personalData.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Freelance Full-Stack Developer & Product Engineer building scalable web applications and SaaS MVPs with Next.js, React, and TypeScript.
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
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Services
              </a>
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Featured Projects
              </a>
              <a href="#process" className="text-slate-600 hover:text-indigo-600 transition-colors">
                How I Work
              </a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Contact & Inquiry
              </a>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Get in Touch
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <a
                  href={`mailto:${personalData.email}`}
                  className="font-mono text-xs text-slate-700 hover:text-indigo-600 block transition-colors"
                >
                  {personalData.email}
                </a>
              </div>
              <div className="font-mono text-xs text-slate-700">
                {personalData.phone}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved. Personal Freelancer Portfolio.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-700">
              Designed for performance & client conversion
            </span>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
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
