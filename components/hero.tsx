import Link from "next/link";
import { personalData } from "@/data/personal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  ArrowRight,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Smartphone,
  Cpu,
  Mail,
  ExternalLink,
  Briefcase
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white border-b border-slate-200/70">
      {/* Background subtle grid and ambient glow */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left copy, Right visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Positioning, Headline, Description, CTAs, Socials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability status badge */}
            <div className="animate-hero-fade-up inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for New Projects</span>
              <span className="text-slate-700">•</span>
              <span className="text-indigo-600 font-bold">Full Stack Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-hero-fade-up-delay-1 text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Full Stack Developer building software that helps{" "}
              <span className="text-indigo-600 underline decoration-indigo-200 decoration-wavy decoration-2 underline-offset-4">
                businesses scale.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="animate-hero-fade-up-delay-2 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-slate-900">{personalData.name}</span>. I build modern websites, web applications, mobile apps, and custom business systems that help businesses grow and operate more efficiently.
            </p>

            {/* CTAs */}
            <div className="animate-hero-fade-up-delay-3 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 text-center min-h-[48px]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-2xs hover:border-slate-300 transition-all text-center min-h-[48px]"
              >
                <span>View My Work</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-600">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider mr-1">
                Direct Channels:
              </span>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Developer Visual Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Floating Badge 1: Top Right */}
              <div className="hidden sm:flex absolute -top-4 -right-2 z-20 animate-float-gentle bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-md items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-900">35+ Systems Shipped</span>
              </div>

              {/* Main Developer Workspace Card */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xl shadow-slate-200/50 space-y-4">
                
                {/* Window Frame Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono font-medium text-slate-700">
                      system-architecture.ts
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>prod: live</span>
                  </div>
                </div>

                {/* Typed Development Code Block */}
                <div className="font-mono text-xs text-slate-800 space-y-1.5 bg-slate-50 p-4 rounded-xl border border-slate-200/70 leading-relaxed overflow-x-auto">
                  <div className="text-slate-700">// Real-World Business System Spec</div>
                  <div>
                    <span className="text-indigo-600 font-semibold">export const</span>{" "}
                    <span className="text-slate-900 font-semibold">EngineeredSolution</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-700">developer:</span>{" "}
                    <span className="text-emerald-600">&quot;Full Stack Developer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-700">scope:</span>{" "}
                    <span className="text-emerald-600">&quot;Web Apps, Mobile & Business Portals&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-700">objective:</span>{" "}
                    <span className="text-emerald-600">&quot;Drive Revenue & Efficiency&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-700">codeStandard:</span>{" "}
                    <span className="text-indigo-600">StrictTypeScript</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-700">deliveryRate:</span>{" "}
                    <span className="text-emerald-600">&quot;100% On-Time Milestones&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Real-Time Build & Pipeline Status */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                    <div className="text-[10px] font-semibold text-slate-700 uppercase">
                      Pipeline Status
                    </div>
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Build Passed (0.4s)
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                    <div className="text-[10px] font-semibold text-slate-700 uppercase">
                      Target Uptime
                    </div>
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                      <Zap className="w-3.5 h-3.5 text-indigo-600" />
                      99.9% Latency &lt;200ms
                    </div>
                  </div>
                </div>

                {/* Core Technologies Chips */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React / Native", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe API", "Docker"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                    Sprint Ready
                  </span>
                  <a
                    href="#contact"
                    className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline flex items-center gap-1"
                  >
                    Lock in your sprint &rarr;
                  </a>
                </div>

              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-3 -left-3 z-20 animate-float-gentle-alt bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-md items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-900">30-Day Launch Warranty</span>
              </div>

            </div>
          </div>

        </div>

        {/* Credibility Indicators: 3 Clean Cards Below Hero Content */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Indicator 1: Full Stack Development */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">
                  Full Stack Development
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-to-end architectures, typed REST/GraphQL APIs, scalable database schemas, and edge deployments with Next.js & TypeScript.
                </p>
              </div>
            </div>

            {/* Indicator 2: Web & Mobile Development */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">
                  Web & Mobile Development
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-converting responsive websites, modern progressive web applications, and cross-platform mobile apps built for engagement.
                </p>
              </div>
            </div>

            {/* Indicator 3: Business Solutions */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">
                  Business Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom client portals, SaaS MVPs, automated internal workflows, and payment integrations that solve real operational bottlenecks.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
