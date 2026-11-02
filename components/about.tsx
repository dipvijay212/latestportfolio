import { aboutData, aboutHighlights } from "@/data/about";
import {
  Clock,
  Layers,
  GraduationCap,
  Target,
  ArrowRight,
  CheckCircle2,
  Code2
} from "lucide-react";

export function About() {
  const getHighlightIcon = (title: string) => {
    switch (title) {
      case "1+ Year Experience":
        return <Clock className="w-5 h-5 text-indigo-600" />;
      case "Full Stack":
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case "BCA":
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case "Freelance Focused":
        return <Target className="w-5 h-5 text-indigo-600" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            {aboutData.heading}
          </h2>
        </div>

        {/* Main Content Grid: Narrative on Left, Highlights Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-5">
              {aboutData.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
                >
                  {para}
                </p>
              ))}

              {/* Direct Next Step */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors group cursor-pointer"
                >
                  <span>Discuss Your Project Requirements</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct developer collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Personal Details / Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Key Credentials &amp; Focus
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {aboutHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="group rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-2xs hover:shadow-xs hover:border-indigo-200 transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getHighlightIcon(highlight.title)}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance Callout */}
            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200/70 text-xs text-slate-600 leading-relaxed flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>End-to-End Ownership:</strong> From database design to production hosting, every piece of the stack is built with quality and maintainability.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
