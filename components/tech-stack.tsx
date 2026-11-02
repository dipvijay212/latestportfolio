"use client";

import { useState } from "react";
import {
  techGroupsData,
  allTechItems,
  TechCategory,
  TechItem,
} from "@/data/tech-stack";
import { TechIcon } from "@/components/tech-icons";
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  GitBranch,
  ArrowRight,
  Code2,
} from "lucide-react";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory | "All">("All");

  const filterTabs: { id: TechCategory | "All"; label: string; count: number; icon: React.ReactNode }[] = [
    {
      id: "All",
      label: "All Technologies",
      count: allTechItems.length,
      icon: <Layers className="w-3.5 h-3.5" />,
    },
    {
      id: "Frontend",
      label: "Frontend",
      count: techGroupsData.find((g) => g.category === "Frontend")?.items.length ?? 0,
      icon: <Layout className="w-3.5 h-3.5" />,
    },
    {
      id: "Backend",
      label: "Backend",
      count: techGroupsData.find((g) => g.category === "Backend")?.items.length ?? 0,
      icon: <Server className="w-3.5 h-3.5" />,
    },
    {
      id: "Mobile",
      label: "Mobile",
      count: techGroupsData.find((g) => g.category === "Mobile")?.items.length ?? 0,
      icon: <Smartphone className="w-3.5 h-3.5" />,
    },
    {
      id: "Database",
      label: "Database",
      count: techGroupsData.find((g) => g.category === "Database")?.items.length ?? 0,
      icon: <Database className="w-3.5 h-3.5" />,
    },
    {
      id: "Tools & Deployment",
      label: "Tools & Deployment",
      count: techGroupsData.find((g) => g.category === "Tools & Deployment")?.items.length ?? 0,
      icon: <GitBranch className="w-3.5 h-3.5" />,
    },
  ];

  const getCategoryIcon = (category: TechCategory) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-4 h-4 text-indigo-600" />;
      case "Backend":
        return <Server className="w-4 h-4 text-emerald-600" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4 text-sky-600" />;
      case "Database":
        return <Database className="w-4 h-4 text-amber-600" />;
      case "Tools & Deployment":
        return <GitBranch className="w-4 h-4 text-rose-600" />;
    }
  };

  const getCategoryBadgeClass = (category: TechCategory) => {
    switch (category) {
      case "Frontend":
        return "bg-indigo-50/90 text-indigo-700 border-indigo-100";
      case "Backend":
        return "bg-emerald-50/90 text-emerald-700 border-emerald-100";
      case "Mobile":
        return "bg-sky-50/90 text-sky-700 border-sky-100";
      case "Database":
        return "bg-amber-50/90 text-amber-700 border-amber-100";
      case "Tools & Deployment":
        return "bg-rose-50/90 text-rose-700 border-rose-100";
    }
  };

  const getCategoryDotClass = (category: TechCategory) => {
    switch (category) {
      case "Frontend":
        return "bg-indigo-500";
      case "Backend":
        return "bg-emerald-500";
      case "Mobile":
        return "bg-sky-500";
      case "Database":
        return "bg-amber-500";
      case "Tools & Deployment":
        return "bg-rose-500";
    }
  };

  // Render a clean technology card
  const renderCard = (tech: TechItem) => {
    return (
      <div
        key={tech.name}
        className="group relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
      >
        <div>
          {/* Card Top: Logo / Icon & Category Badge */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:bg-slate-100/80 transition-all duration-200 shrink-0">
              <TechIcon name={tech.name} className="w-6 h-6" />
            </div>

            <span
              className={`text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md border ${getCategoryBadgeClass(
                tech.category
              )}`}
            >
              {tech.category}
            </span>
          </div>

          {/* Technology Name */}
          <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {tech.name}
          </h4>

          {/* Practical Role */}
          <p className="text-xs font-semibold text-slate-700 mt-1 mb-2 leading-snug">
            {tech.role}
          </p>

          {/* Practical Focus & Applied Capability (No fake ratings or percentages) */}
          <p className="text-xs text-slate-500 leading-relaxed">
            {tech.focus}
          </p>
        </div>

        {/* Card Footer: Real-world Application Context */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
          <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium truncate">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${getCategoryDotClass(
                tech.category
              )}`}
            />
            <span className="truncate">{tech.practicalUse}</span>
          </span>
          <span className="text-[10px] font-mono font-medium text-slate-600 uppercase tracking-wider shrink-0 pl-2">
            Active
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            The Technologies I Actually Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A practical toolkit spanning responsive user interfaces, structured backend APIs, mobile development, and automated cloud deployments. Selected for maintainability, type safety, and real-world reliability.
          </p>
        </div>

        {/* Category Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-slate-200/80">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                    isActive
                      ? "bg-slate-800 text-slate-200"
                      : "bg-white text-slate-600 border border-slate-200/70"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content View: When "All" is active, display organized by category blocks */}
        {activeCategory === "All" ? (
          <div className="space-y-14 sm:space-y-16">
            {techGroupsData.map((group) => (
              <div key={group.category} className="space-y-6">
                
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {group.category}
                    </h3>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {group.items.length} {group.items.length === 1 ? "item" : "technologies"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                    {group.description}
                  </p>
                </div>

                {/* Cards Grid */}
                {group.category === "Mobile" ? (
                  // Balanced layout for Mobile (1 item + Architecture Context Card)
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {group.items.map((tech) => renderCard(tech))}

                    {/* Mobile Companion Architecture Card */}
                    <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/40 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sky-700 font-semibold text-xs uppercase tracking-wider mb-2">
                          <Code2 className="w-4 h-4" />
                          <span>Mobile Architecture</span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mb-1">
                          Cross-Platform Efficiency
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Building Android & iOS apps with React Native CLI ensures direct access to native device APIs, camera/storage hardware, and performance without duplicating client logic.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-sky-100 text-[11px] text-sky-700 font-medium flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 shrink-0" />
                        <span>iOS & Android Single Codebase</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {group.items.map((tech) => renderCard(tech))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Filtered Single Category View */
          <div>
            {(() => {
              const selectedGroup = techGroupsData.find(
                (g) => g.category === activeCategory
              );
              if (!selectedGroup) return null;

              return (
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200/80 gap-3">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                          {getCategoryIcon(selectedGroup.category)}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {selectedGroup.category} Architecture
                        </h3>
                        <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                          {selectedGroup.items.length} {selectedGroup.items.length === 1 ? "item" : "technologies"}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 max-w-2xl">
                        {selectedGroup.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveCategory("All")}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 self-start sm:self-auto cursor-pointer"
                    >
                      <span>View all 16 technologies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Cards Grid */}
                  {selectedGroup.category === "Mobile" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {selectedGroup.items.map((tech) => renderCard(tech))}
                      
                      <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/40 p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-sky-700 font-semibold text-xs uppercase tracking-wider mb-2">
                            <Code2 className="w-4 h-4" />
                            <span>Mobile Architecture</span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 mb-1">
                            Cross-Platform Efficiency
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Building Android & iOS apps with React Native CLI ensures direct access to native device APIs, camera/storage hardware, and performance without duplicating client logic.
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-sky-100 text-[11px] text-sky-700 font-medium flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5 shrink-0" />
                          <span>iOS & Android Single Codebase</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {selectedGroup.items.map((tech) => renderCard(tech))}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Stack Integration & Engineering Standards Callout */}
        <div className="mt-16 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
              Practical Engineering Philosophy
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Built for reliability, not resume padding
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Every tool in this stack is actively utilized in production workflows. Instead of superficial percentages or theoretical familiarity, each component fulfills a distinct operational role in delivering client applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-slate-800">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/30">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Type Safety First
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  TypeScript interfaces link database schemas to client components, catching errors before runtime.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Structured Schemas
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Relational tables with MySQL, Supabase, and Sequelize ensure zero data corruption under load.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5 border border-sky-500/30">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Continuous Delivery
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Git branch workflows with automated Vercel deployments deliver instant previews and zero-downtime rollouts.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
