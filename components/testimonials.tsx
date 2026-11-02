import { testimonialsData } from "@/data/testimonials";
import Link from "next/link";
import {
  Quote,
  CheckCircle2,
  ShieldCheck,
  Users,
  ArrowRight,
  Sparkles,
  Lock
} from "lucide-react";

export function Testimonials() {
  const hasRealTestimonials = testimonialsData.length > 0;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {hasRealTestimonials
              ? "Verified Client Reviews & Testimonials"
              : "Client References Available Upon Request"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {hasRealTestimonials
              ? "Feedback from founders and product teams regarding communication, development velocity, and code quality."
              : "I prioritize 100% transparency. Rather than displaying manufactured reviews, genuine client references and recorded walkthroughs are available directly upon project inquiry."}
          </p>
        </div>

        {/* If Real Testimonials Exist, Render Real Cards */}
        {hasRealTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-8 h-8 text-indigo-200" />
                    {item.projectOutcome && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {item.projectOutcome}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

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
                    <div className="text-xs text-slate-600">
                      {item.role} • <span className="font-medium text-slate-700">{item.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Transparent, Honest Client Feedback & References Box (No Fake Reviews) */
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Card 1: Verified Code & Live Projects */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-8 lg:p-9 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 shadow-2xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Verified Production Work
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Every featured project in this portfolio represents real development work. During our discovery call, you are welcome to inspect repository architecture, test live preview environments, and verify development standards directly.
                  </p>

                  <ul className="space-y-2.5 border-t border-slate-100 pt-5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Live interactive staging deployments available to test</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Structured, type-safe codebases with clean git history</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Zero fabricated reviews or synthetic marketing claims</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Direct Client References */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-8 lg:p-9 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-2xs">
                    <Users className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Direct Peer & Client References
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Planning a critical product release or custom web application? I can connect you with previous project collaborators or share recorded walkthroughs demonstrating project communication, milestone velocity, and delivery reliability.
                  </p>

                  <ul className="space-y-2.5 border-t border-slate-100 pt-5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Peer discussions on communication and technical speed</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Screen-recorded sprint walkthroughs showing working features</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Full transparency before you commit to any engagement</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Callout */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Honest Engineering Policy</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Want to verify my code quality and delivery standards?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Let’s schedule a quick 15-minute introductory call. I’ll walk you through relevant live projects and answer any technical questions.
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 shrink-0"
              >
                <span>Request References & Discuss</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
