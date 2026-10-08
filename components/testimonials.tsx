import { testimonialsData } from "@/data/testimonials";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by founders and product leaders worldwide.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Here is what clients say about my communication, speed of execution, and production code quality.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Star Rating & Outcome Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {item.projectOutcome}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="border-t border-slate-100 pt-5 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm shrink-0 border border-indigo-200/80">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-700">
                    {item.role} • <span className="font-medium text-slate-700">{item.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verified Rating Metric */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-2xs text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-slate-900 flex items-center gap-1">
              5.0 / 5.0 Average Rating
            </span>
            <span className="text-slate-700">•</span>
            <span>100% Client Recommendation Rate</span>
            <span className="text-slate-700">•</span>
            <span className="text-indigo-600 font-semibold">Verified Freelance Engagements</span>
          </div>
        </div>

      </div>
    </section>
  );
}
