"use client";

import Link from "next/link";
import { valuePropsData, whyWorkWithMeData, ValueProp } from "@/data/why-work-with-me";
import {
  Target,
  Layers,
  Sparkles,
  Layout,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Briefcase
} from "lucide-react";

export function WhyWorkWithMe() {
  const getIcon = (iconName: ValueProp["iconName"]) => {
    const iconClass = "w-6 h-6 transition-transform duration-300 group-hover:scale-105";
    switch (iconName) {
      case "Target":
        return <Target className={`${iconClass} text-indigo-600`} />;
      case "Layers":
        return <Layers className={`${iconClass} text-emerald-600`} />;
      case "Briefcase":
        return <Briefcase className={`${iconClass} text-sky-600`} />;
      case "Sparkles":
        return <Sparkles className={`${iconClass} text-violet-600`} />;
      case "Layout":
        return <Layout className={`${iconClass} text-amber-600`} />;
      case "CheckCircle2":
        return <CheckCircle2 className={`${iconClass} text-teal-600`} />;
      default:
        return <Target className={`${iconClass} text-indigo-600`} />;
    }
  };

  return (
    <section id="why-work-with-me" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Value &amp; Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {whyWorkWithMeData.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {whyWorkWithMeData.subheading}
          </p>
        </div>

        {/* 6 Visually Strong Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {valuePropsData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Principle Identifier */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center p-2.5 shadow-2xs ${item.colorTheme.iconBg} ${item.colorTheme.iconBorder}`}
                  >
                    {getIcon(item.iconName)}
                  </div>

                  <span
                    className={`text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md border ${item.colorTheme.badge}`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2.5">
                  {item.number} — {item.title}
                </h3>

                {/* Grounded Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Execution Highlights */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs text-slate-700 flex items-start gap-2 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Client Benefit Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${item.colorTheme.accentDot}`}
                  />
                  <span>{item.clientBenefit}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-600 uppercase tracking-wider font-medium">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* High-Converting CTA Banner */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl border border-slate-800">
          {/* Subtle Background Accent Gradient */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Zap className="w-3.5 h-3.5" />
                <span>Let&apos;s Build Together</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to bring your project to life?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need a new full-stack application, an MVP built quickly, or improvements to your existing codebase, let&apos;s discuss your requirements with clear timelines and realistic deliverables.
              </p>

              {/* Value Reassurance Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <div className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Direct developer collaboration</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Quick response within 24h</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>No agency markups</span>
                </div>
              </div>
            </div>

            {/* Actions with Required CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Let&apos;s Build Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm sm:text-base border border-slate-700 transition-all duration-200 hover:-translate-y-0.5 text-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
