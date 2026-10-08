import { processStepsData } from "@/data/process";
import { CheckCircle2, Clock, Sparkles, Video, GitBranch, ArrowRight } from "lucide-react";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            How I Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A battle-tested sprint process with zero surprises.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I don&apos;t disappear into a cave for months. From scoping to production deployment, our work together is structured, transparent, and driven by tangible weekly milestones.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStepsData.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-600" />
                    {item.duration}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-700 mb-3">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Deliverables:
                  </div>
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Collaboration Features */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Weekly Video Walkthroughs
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Watch 5-minute Loom walkthroughs showing actual working features instead of decoding static ticket updates.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Live Staging Deployments
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Test features on password-protected Vercel staging environments on your phone and laptop as we build.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Direct Slack / Email Sync
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Fast async responses during business hours. Quick questions get resolved in minutes, not days.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
