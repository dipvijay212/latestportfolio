import { personalData } from "@/data/personal";
import {
  Code2,
  Zap,
  Target,
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Briefcase,
  GraduationCap,
  Clock,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function About() {
  const capabilities = [
    {
      title: "Frontend Development",
      description: "Modern, responsive UIs built with React, Next.js, and Tailwind CSS that load fast on all devices.",
      icon: Layout,
    },
    {
      title: "Backend Development",
      description: "Scalable server architectures, type-safe route handlers, business logic, and authentication.",
      icon: Server,
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile apps providing responsive, native-like interactions for iOS and Android.",
      icon: Smartphone,
    },
    {
      title: "Database & API Development",
      description: "Relational and document data modeling, Prisma/SQL queries, and reliable third-party API webhooks.",
      icon: Database,
    },
    {
      title: "Deployment & Cloud",
      description: "Production releases on Vercel and cloud platforms, custom domains, automated CI/CD, and monitoring.",
      icon: Cloud,
    },
    {
      title: "Business Systems",
      description: "Custom internal dashboards, client portals, and automated workflows that streamline operations.",
      icon: Briefcase,
    },
  ];

  const philosophies = [
    {
      title: "Clean & Maintainable Code",
      description:
        "Writing modular, well-typed TypeScript with clear component boundaries so your codebase stays easy to update and scale.",
      icon: Code2,
    },
    {
      title: "Performance & User Experience",
      description:
        "Optimizing page load speeds, Core Web Vitals, and mobile responsiveness so users stay engaged and conversions stay high.",
      icon: Zap,
    },
    {
      title: "Business-Focused Solutions",
      description:
        "Focusing on features that solve real workflow bottlenecks or generate revenue, rather than building unnecessary complexity.",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            About My Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Building Digital Products That Solve Real Business Problems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I work with businesses to turn ideas and requirements into working digital products. Rather than building theoretical demo projects, my focus is delivering dependable software that helps companies operate efficiently.
          </p>
        </div>

        {/* Split Layout: Left Narrative & Philosophy, Right Profile & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Background Context & 3 Core Principles */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Professional Background Story */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                A Practical, Hands-On Engineer
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I am <span className="font-semibold text-slate-900">{personalData.name}</span>, a Full Stack Developer with around 1 year of professional development experience, currently pursuing a Bachelor of Computer Applications (BCA) degree.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                I handle full-cycle application development — from user interface design and responsive frontend logic to secure backend APIs, database design, and cloud deployment. When you work with me, you get a dedicated technical partner who takes ownership of delivering complete, production-ready solutions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-medium">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span>Pursuing BCA Degree</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-medium">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span>~1 Year Professional Experience</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Full-Cycle: UI to Deployment</span>
                </div>
              </div>
            </div>

            {/* Development Philosophy Header */}
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                My Development Philosophy
              </div>

              {/* 3 Philosophy Cards */}
              <div className="space-y-3.5">
                {philosophies.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-2xs hover:border-indigo-200 hover:shadow-xs transition-all flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Overview & 6 Capability Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Profile Summary Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  Full Stack Engineer
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {personalData.name}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Web, Mobile & Custom Business Systems
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full sm:w-auto text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 sm:border-0 sm:bg-transparent sm:p-0">
                  <div className="text-base font-bold text-slate-900">~1 Year</div>
                  <div className="text-[11px] text-slate-700">Pro Experience</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 sm:border-0 sm:bg-transparent sm:p-0">
                  <div className="text-base font-bold text-indigo-600">BCA</div>
                  <div className="text-[11px] text-slate-700">Computer Science</div>
                </div>
              </div>
            </div>

            {/* Capability Cards Grid (6 cards) */}
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Core Capabilities
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:shadow-xs hover:border-indigo-200 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                          {cap.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Assurance Note */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 leading-relaxed flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>
                <strong>Direct Delivery:</strong> You deal directly with me at every stage — no account managers, outsourced code, or hidden handoffs.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
