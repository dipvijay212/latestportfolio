import { servicesList, ServiceItem } from "@/data/services";
import {
  Globe,
  Layers,
  ShoppingCart,
  Code2,
  Smartphone,
  LayoutDashboard,
  Server,
  Zap,
  Check,
  ArrowRight,
  Sparkles
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
      case "Smartphone":
        return <Smartphone className={iconClass} />;
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

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Services & Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything You Need to Build & Scale Your Digital Presence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I partner directly with founders and businesses to engineer custom digital solutions that solve real operational bottlenecks, attract customers, and drive revenue.
          </p>
        </div>

        {/* 8 Services Grid: Desktop (4 cols), Tablet (2 cols), Mobile (1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
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
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
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

              {/* Card Footer: Subtle Inquiry Link */}
              <div className="pt-4 border-t border-slate-100/80 mt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors"
                >
                  <span>Inquire for your project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-16 rounded-3xl border border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-indigo-50/30 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you need a full application built from scratch or want to enhance your existing business workflow, let&apos;s connect for a straightforward feasibility chat.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
