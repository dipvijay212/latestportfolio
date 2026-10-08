import { techStackData } from "@/data/tech-stack";
import { Cpu, CheckCircle2, Shield, Zap, Sparkles } from "lucide-react";

export function TechStack() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Technologies & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A modern, production-hardened engineering stack.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I don&apos;t chase fragile JavaScript fads. Every tool in my stack is chosen because it allows for rapid development, maintainable type safety, and minimal ongoing cloud infrastructure cost.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStackData.map((categoryGroup, index) => (
            <div
              key={categoryGroup.category}
              className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs text-slate-700 mt-0.5">
                    {categoryGroup.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  0{index + 1}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-50/70 hover:bg-indigo-50/30 border border-slate-200/60 hover:border-indigo-200 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-slate-900">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-normal">
                      {skill.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Principles Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Strict TypeScript
              </div>
              <p className="text-xs text-slate-700 mt-1 leading-normal">
                End-to-end type safety prevents runtime exceptions before they reach users.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Edge-Ready Architecture
              </div>
              <p className="text-xs text-slate-700 mt-1 leading-normal">
                Optimized Next.js caching reduces database queries and slashes server bills.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Clean Documentation
              </div>
              <p className="text-xs text-slate-700 mt-1 leading-normal">
                Full setup guides and code comments make future handoffs friction-free.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
