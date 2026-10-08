export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Scope Blueprint",
    subtitle: "Understanding your vision and setting crystal clear boundaries",
    description: "We start with a focused kickoff call to clarify your core objectives, target users, and key features. I distill this into an actionable sprint breakdown with fixed milestones and zero guesswork.",
    deliverables: [
      "Target feature list & technical scope doc",
      "Architecture & database schema plan",
      "Milestone timeline & guaranteed delivery date"
    ],
    duration: "2-3 Days"
  },
  {
    step: "02",
    title: "Design Translation & Core Architecture",
    subtitle: "Setting up solid foundations and clickable wireframes",
    description: "I set up the production Next.js repository, configure design tokens with Tailwind CSS, establish authentication and database models, and build out early interactive staging routes.",
    deliverables: [
      "Staging environment URL for live previews",
      "Foundational database models & API schemas",
      "Initial component design system"
    ],
    duration: "Week 1"
  },
  {
    step: "03",
    title: "Iterative Build & Weekly Previews",
    subtitle: "High-velocity development with complete transparency",
    description: "Every feature is built with clean TypeScript and modular components. You receive weekly video walk-throughs and staging links to test real functionality as each sprint wraps up.",
    deliverables: [
      "Continuous staging deployments",
      "Weekly milestone progress reports",
      "Direct async Slack or email check-ins"
    ],
    duration: "Weeks 2-4"
  },
  {
    step: "04",
    title: "QA, Production Launch & Handoff",
    subtitle: "Polishing to perfection, deploying live, and full code handover",
    description: "We run comprehensive cross-device tests, optimize Core Web Vitals, configure custom domains and SSL, and hand over 100% intellectual property with full documentation and a 30-day warranty.",
    deliverables: [
      "Production deployment with zero downtime",
      "Codebase documentation & recorded walkthrough",
      "30-day post-launch warranty & bug-fix guarantee"
    ],
    duration: "Launch Week"
  }
];
