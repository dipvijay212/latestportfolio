import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import { personalData } from "@/data/personal";
import { GithubIcon } from "@/components/icons";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ShieldCheck,
  Code2,
  Terminal,
  Zap,
  Briefcase
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study by ${personalData.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-2xs transition-all"
          >
            <span>Let&apos;s Work Together</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Project Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            {project.category}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Featured Visual Screenshot */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-5 shadow-sm overflow-hidden">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src={project.image}
              alt={`${project.title} Interface Screenshot`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* 2-Column Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Detailed Case Study Narrative */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Project Overview */}
            <section className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                Project Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* 2. Problem & Solution */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-2.5">
                <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                  The Problem
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Business Bottlenecks
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-xs space-y-2.5">
                <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  The Solution
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Engineered Implementation
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* 3. Key Features */}
            <section className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                Key Features Delivered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-800 leading-normal flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Development Approach */}
            <section className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-600" />
                Development Approach & Architecture
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.developmentApproach}
              </p>
            </section>

            {/* 5. Results & Outcome */}
            <section className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-6 sm:p-8 shadow-xs space-y-3">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Real-World Impact
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Functional Business Outcome
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.outcome}
              </p>
            </section>

          </div>

          {/* Right Column: Project Metadata & Contact Box */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-slate-100 text-slate-800 border border-slate-200/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Context Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-3 text-xs">
              <div className="text-slate-700 font-bold uppercase tracking-wider">
                Client Sector
              </div>
              <div className="text-sm font-bold text-slate-900">
                {project.clientType}
              </div>
              <div className="pt-2 border-t border-slate-100 text-slate-600 leading-relaxed">
                Delivered with clean architecture, mobile ergonomics, and direct communication.
              </div>
            </div>

            {/* Need a similar system CTA */}
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 shadow-xs space-y-4 text-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Need a similar system?
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  I can build and customize a solution tailored to your exact business workflow.
                </p>
              </div>
              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Pagination / Other Projects */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:underline"
          >
            <span>Start a Project &rarr;</span>
          </Link>
        </div>

      </main>
    </div>
  );
}
