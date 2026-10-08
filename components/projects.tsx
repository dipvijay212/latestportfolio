import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { GithubIcon } from "@/components/icons";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  FolderKanban
} from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Featured Real-World Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A selection of production websites, custom business tools, and mobile applications engineered to solve specific operational problems and drive business growth.
          </p>
        </div>

        {/* Large Featured Projects List with Alternating Layouts */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.slug}
                className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  
                  {/* Screenshot / Project Visual Frame */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:col-start-6" : ""
                    }`}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm group-hover:border-indigo-300 transition-colors"
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={project.image}
                          alt={`${project.title} Preview Screenshot`}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Project Details */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isReversed ? "lg:col-start-1" : ""
                    }`}
                  >
                    
                    {/* Category Badge & Project Number */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-700">
                        0{index + 1} / 0{projectsData.length}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features Quick Bullets */}
                    <div className="space-y-1.5 pt-1">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-700 leading-normal"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: View Project & External Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600">
            Need a custom solution similar to any of these projects?{" "}
            <a
              href="#contact"
              className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline inline-flex items-center gap-1 ml-1"
            >
              Let&apos;s discuss your requirements &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
