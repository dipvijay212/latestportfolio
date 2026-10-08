import { valuePropsData } from "@/data/why-work-with-me";
import {
  UserCheck,
  Target,
  Code,
  Clock,
  Zap,
  Shield,
  Check,
  X
} from "lucide-react";

export function WhyWorkWithMe() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-indigo-600" />;
      case "Target":
        return <Target className="w-5 h-5 text-indigo-600" />;
      case "Code":
        return <Code className="w-5 h-5 text-indigo-600" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-indigo-600" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-indigo-600" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-indigo-600" />;
      default:
        return <UserCheck className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Why Work With Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Senior-level engineering without agency bloat or communication lag.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hiring a freelancer should give you agility and peace of mind, not extra management headaches. Here is what makes our partnership different.
          </p>
        </div>

        {/* 6 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {valuePropsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  {item.metric && (
                    <div className="text-right">
                      <div className="text-sm font-bold text-slate-900">
                        {item.metric}
                      </div>
                      <div className="text-[10px] text-slate-700 font-medium">
                        {item.metricLabel}
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-700 mb-3">
                  {item.headline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Comparison Table: Traditional Agency vs Working With Me */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              The Reality: Typical Agency vs. Dedicated Independent Engineer
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              See why high-growth startups and founders choose working directly with a solo technical partner.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700">
                  <th className="py-3 px-4 font-semibold uppercase tracking-wider text-[11px]">
                    Aspect
                  </th>
                  <th className="py-3 px-4 font-semibold uppercase tracking-wider text-[11px] text-slate-700">
                    Traditional Agency
                  </th>
                  <th className="py-3 px-4 font-semibold uppercase tracking-wider text-[11px] text-indigo-600 bg-indigo-50/60 rounded-t-xl">
                    Working With Me (Freelance Partner)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-900">
                    Who writes your code?
                  </td>
                  <td className="py-4 px-4 text-slate-700 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    Often junior devs or outsourced subcontractors
                  </td>
                  <td className="py-4 px-4 font-medium text-indigo-900 bg-indigo-50/30">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Senior developer directly (100% of the work)
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-medium text-slate-900">
                    Communication
                  </td>
                  <td className="py-4 px-4 text-slate-700 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    Filtered through account managers and ticket queues
                  </td>
                  <td className="py-4 px-4 font-medium text-indigo-900 bg-indigo-50/30">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Direct Slack/email access to your builder daily
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-medium text-slate-900">
                    Pricing & Overhead
                  </td>
                  <td className="py-4 px-4 text-slate-700 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    High agency markups to cover account executives and office rent
                  </td>
                  <td className="py-4 px-4 font-medium text-indigo-900 bg-indigo-50/30">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Transparent milestone-based pricing with zero fluff
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-medium text-slate-900">
                    Turnaround Speed
                  </td>
                  <td className="py-4 px-4 text-slate-700 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    Slow internal approval chains (2-4 months minimum)
                  </td>
                  <td className="py-4 px-4 font-medium text-indigo-900 bg-indigo-50/30 rounded-b-xl">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Rapid 2–5 week sprints with weekly staging deployments
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
