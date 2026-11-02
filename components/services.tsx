import { servicesList } from "@/data/services";
import {
  Globe,
  Layers,
  ShoppingCart,
  Code2,
  LayoutDashboard,
  Server,
  Zap,
  Check,
  ArrowRight
} from "lucide-react";

export function Services() {
  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110";
    switch (iconName) {
      case "Globe":
        return <Globe className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "ShoppingCart":
        return <ShoppingCart className={iconClass} />;
      case "Code2":
        return <Code2 className={iconClass} />;
      case "LayoutDashboard":
        return <LayoutDashboard className={iconClass} />;
      case "Server":
        return <Server className={iconClass} />;
      case "Zap":
        return <Zap className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  const primaryServices = servicesList.slice(0, 6);
  const featuredService = servicesList[6];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Services &amp; Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Client-Focused Development Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I build modern, dependable software tailored to what your business actually needs—from client-facing websites to custom internal systems and automated workflows.
          </p>
        </div>

        {/* Services Grid: 6 Primary Cards in 3-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50/80 border border-indigo-100/90 flex items-center justify-center group-hover:bg-indigo-600/10 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2.5">
                  {service.name}
                </h3>

                {/* Client-Centric Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* What is Included Checklist */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-4">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    What&apos;s Included:
                  </div>
                  {service.included.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700 leading-normal"
                    >
                      <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Inquiry Link */}
              <div className="pt-4 border-t border-slate-100/80 mt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors"
                >
                  <span>Discuss this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* 7th Service: Business Automation as a wide feature banner */}
          {featuredService && (
            <div
              key={featuredService.id}
              className="md:col-span-2 lg:col-span-3 group relative rounded-2xl border border-slate-200/90 bg-linear-to-r from-white via-indigo-50/20 to-white p-6 sm:p-8 shadow-2xs hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50/80 border border-indigo-100/90 flex items-center justify-center group-hover:bg-indigo-600/10 transition-colors shrink-0">
                      {getServiceIcon(featuredService.iconName)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded mr-2">
                        07
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Operational Efficiency
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {featuredService.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {featuredService.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {featuredService.included.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700 leading-normal"
                      >
                        <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:border-l lg:border-slate-200 lg:pl-8 flex flex-col justify-center shrink-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-95 text-center"
                  >
                    <span>Discuss Automation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-[11px] text-slate-500 text-center mt-2">
                    Save hours of repetitive work
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-16 rounded-3xl border border-slate-200/90 bg-linear-to-r from-slate-50 via-white to-indigo-50/30 p-5 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you need a full application built from scratch or want to enhance your existing business workflow, let&apos;s connect for a straightforward feasibility chat.
            </p>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
