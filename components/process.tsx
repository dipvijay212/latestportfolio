"use client";

import { useState, useEffect, useRef } from "react";
import { processStepsData, ProcessStep } from "@/data/process";
import {
  Compass,
  Calendar,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Clock,
  Video,
  GitBranch,
  MessageSquare,
  Sparkles
} from "lucide-react";

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle scroll animation trigger using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getStepIcon = (iconName: ProcessStep["iconName"], className = "w-5 h-5") => {
    switch (iconName) {
      case "Compass":
        return <Compass className={className} />;
      case "Calendar":
        return <Calendar className={className} />;
      case "Palette":
        return <Palette className={className} />;
      case "Code2":
        return <Code2 className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Rocket":
        return <Rocket className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white border-b border-slate-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Development Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            How I Work: A Clear, 6-Step Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial discovery to launch day, every project follows a transparent, predictable roadmap. No guesswork, no disappearing acts—just structured milestones and continuous collaboration.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. DESKTOP HORIZONTAL TIMELINE (Visible on lg screens)  */}
        {/* ======================================================== */}
        <div className="hidden lg:block mb-16">
          
          {/* Horizontal Timeline Connector Track */}
          <div className="relative mb-10 px-6">
            {/* Background Line */}
            <div className="absolute top-6 left-12 right-12 h-0.5 bg-slate-200 z-0" />
            
            {/* Animated Active Progress Line */}
            <div
              className="absolute top-6 left-12 h-0.5 bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 z-0 transition-all duration-1000 ease-out"
              style={{
                width: isVisible
                  ? `${((activeStep - 1) / (processStepsData.length - 1)) * 100}%`
                  : "0%"
              }}
            />

            {/* 6 Step Nodes */}
            <div className="grid grid-cols-6 relative z-10">
              {processStepsData.map((step) => {
                const isActive = activeStep === step.number;
                const isPassed = activeStep >= step.number;

                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStep(step.number)}
                    onMouseEnter={() => setActiveStep(step.number)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-hidden"
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                        isActive
                          ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-110 ring-4 ring-indigo-100"
                          : isPassed
                          ? "bg-indigo-600 text-white border-2 border-indigo-600"
                          : "bg-white border-2 border-slate-300 text-slate-600 group-hover:border-indigo-400 group-hover:text-indigo-600"
                      }`}
                    >
                      {getStepIcon(step.iconName, "w-5 h-5")}
                    </div>

                    {/* Step Label */}
                    <div className="mt-3 text-center">
                      <span className="text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider block">
                        Step {step.step}
                      </span>
                      <span
                        className={`text-xs font-bold transition-colors ${
                          isActive
                            ? "text-indigo-600"
                            : "text-slate-800 group-hover:text-slate-900"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6 Step Horizontal Cards Grid */}
          <div className="grid grid-cols-6 gap-3.5 xl:gap-4">
            {processStepsData.map((step, idx) => {
              const isActive = activeStep === step.number;

              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveStep(step.number)}
                  className={`relative rounded-2xl border bg-white p-4 xl:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-indigo-500 shadow-lg shadow-indigo-500/10 -translate-y-2 ring-1 ring-indigo-500/30"
                      : "border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: `${idx * 90}ms`
                  }}
                >
                  <div>
                    {/* Top Pill Badges */}
                    <div className="flex items-center justify-between gap-1 mb-3">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive
                            ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {step.step}
                      </span>
                      <span className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-1.5 py-0.5 rounded-md">
                        {step.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-base font-bold transition-colors mb-2.5 ${
                        isActive ? "text-indigo-600" : "text-slate-900"
                      }`}
                    >
                      {step.step} — {step.title}
                    </h3>

                    {/* Client-Friendly Explanation */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Bullet List */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-600 font-semibold mb-1">
                      Deliverables:
                    </div>
                    {step.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-tight"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MOBILE & TABLET VERTICAL TIMELINE (< lg screens)     */}
        {/* ======================================================== */}
        <div className="lg:hidden mb-16">
          <div className="relative pl-6 sm:pl-8">
            
            {/* Continuous Vertical Connecting Line */}
            <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-400 to-emerald-500 -translate-x-1/2 z-0" />

            {/* Vertical Steps List */}
            <div className="space-y-8 sm:space-y-10">
              {processStepsData.map((step, idx) => (
                <div
                  key={step.step}
                  className={`relative flex items-start gap-4 sm:gap-6 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  {/* Step Node Circle */}
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-indigo-600 text-indigo-600 font-bold flex items-center justify-center shrink-0 z-10 shadow-sm mt-0.5">
                    {getStepIcon(step.iconName, "w-5 h-5")}
                  </div>

                  {/* Step Card Content */}
                  <div className="flex-grow min-w-0 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
                    
                    {/* Top Badge & Duration */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                        Step {step.step}
                      </span>
                      <span className="text-xs font-medium text-slate-600 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md">
                        <Clock className="w-3 h-3 text-slate-600" />
                        {step.duration}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.step} — {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-semibold">
                        Key Deliverables:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Client Collaboration & Transparency Pillars */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Weekly Video Walkthroughs
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                5-minute screen recordings demoing working features at each sprint milestone, so you see actual progress.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Live Staging Previews
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Test new screens and features on your phone and laptop using secure staging links throughout development.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Direct Communication
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Direct async sync via Slack or email. Clear answers and fast turnaround without communication lag.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
