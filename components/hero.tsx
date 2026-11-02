import { personalInfo, getSafeUrl } from "@/data/personal";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import {
  ArrowRight,
  CheckCircle2,
  Mail
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24 overflow-hidden bg-white border-b border-slate-200/70">
      {/* Background subtle grid and ambient glow */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[350px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left copy, Right visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Positioning, Headline, Description, CTAs, Socials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability status badge */}
            <div className="animate-hero-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold max-w-full">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Available for Freelance Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-hero-fade-up-delay-1 text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.14] break-words">
              I Build Digital Products That Solve{" "}
              <span className="text-indigo-600 underline decoration-indigo-200 decoration-wavy decoration-2 underline-offset-4">
                Real Business Problems.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="animate-hero-fade-up-delay-2 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              I&apos;m a <span className="font-semibold text-slate-900">Full Stack Developer</span> focused on building modern websites, web applications, mobile apps, and custom business systems. I turn ideas and business requirements into clean, responsive, and practical digital products.
            </p>

            {/* CTAs */}
            <div className="animate-hero-fade-up-delay-3 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 text-center min-h-[48px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-2xs hover:border-slate-300 transition-all text-center min-h-[48px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                <span>View My Work</span>
              </a>
            </div>

            {/* Small Credibility Items */}
            <div className="animate-hero-fade-up-delay-3 pt-1 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs font-semibold text-slate-700">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Stack Development</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Web &amp; Mobile Apps</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Business Solutions</span>
              </div>
            </div>

            {/* Social / Direct Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider mr-1">
                Direct Channels:
              </span>

              <a
                href={getSafeUrl.whatsapp(personalInfo.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium transition-colors border border-emerald-200/70"
                aria-label="Chat on WhatsApp"
              >
                <WhatsappIcon className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={getSafeUrl.github(personalInfo.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={getSafeUrl.linkedin(personalInfo.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={getSafeUrl.email(personalInfo.email)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Developer Visual Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Floating Badge: Top Right */}
              <div className="hidden sm:flex absolute -top-4 -right-2 z-20 animate-float-gentle bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-md items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-900">Production Ready</span>
              </div>

              {/* Main Developer Workspace Card */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-6 shadow-xl shadow-slate-200/50 space-y-4 overflow-hidden">
                
                {/* Window Frame Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono font-medium text-slate-600 truncate max-w-[130px] sm:max-w-none">
                      system-architecture.ts
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>prod: live</span>
                  </div>
                </div>

                {/* Typed Development Code Block */}
                <div className="font-mono text-xs text-slate-800 space-y-1 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200/70 leading-relaxed overflow-x-auto">
                  <div className="text-slate-500">{"// Real-World Business System Spec"}</div>
                  <div>
                    <span className="text-indigo-600 font-semibold">export const</span>{" "}
                    <span className="text-slate-900 font-semibold">EngineeredSolution</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">developer:</span>{" "}
                    <span className="text-emerald-700">&quot;Full Stack Developer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">scope:</span>{" "}
                    <span className="text-emerald-700">&quot;Web Apps, Mobile &amp; Portals&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">focus:</span>{" "}
                    <span className="text-emerald-700">&quot;Clean Code &amp; Business ROI&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">stack:</span> [
                  </div>
                  <div className="pl-8 text-indigo-700">
                    &quot;Next.js&quot;, &quot;React Native&quot;, &quot;Node.js&quot;, &quot;TypeScript&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-600">delivery:</span>{" "}
                    <span className="text-emerald-700 font-semibold">&quot;End-to-End Verified&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Capability Badges Bar */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="text-[11px] font-bold text-slate-900 truncate">Full Stack Dev</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">Next.js &amp; Node</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="text-[11px] font-bold text-slate-900 truncate">Web &amp; Mobile</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">React &amp; Mobile</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="text-[11px] font-bold text-slate-900 truncate">Solutions</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">Custom Systems</div>
                  </div>
                </div>

              </div>

              {/* Floating Badge: Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-2 z-20 animate-float-gentle-alt bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-md items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-900">Full-Cycle Delivery</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
