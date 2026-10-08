export interface TechCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
    icon?: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Frontend & UI",
    description: "Modern, responsive, and accessible user interfaces built for speed.",
    skills: [
      { name: "React 19 / 18", level: "Expert", highlight: "Server Components, Hooks, Custom State" },
      { name: "Next.js (App Router)", level: "Expert", highlight: "SSR, SSG, Turbopack, Edge Runtime" },
      { name: "TypeScript", level: "Expert", highlight: "Strict typing, generics, API schemas" },
      { name: "Tailwind CSS", level: "Expert", highlight: "Design systems, responsive tokens, fluid UI" },
      { name: "HTML5 / Semantic a11y", level: "Expert", highlight: "Accessibility standards, SEO structure" },
      { name: "State Management", level: "Advanced", highlight: "Zustand, React Query / TanStack, Redux" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Robust server logic, resilient APIs, and transactional integrity.",
    skills: [
      { name: "Node.js & Express", level: "Advanced", highlight: "REST endpoints, async queues, middleware" },
      { name: "Next.js Route Handlers", level: "Expert", highlight: "Server Actions, secure webhook endpoints" },
      { name: "REST & GraphQL APIs", level: "Advanced", highlight: "Schema design, rate limiting, caching" },
      { name: "Authentication", level: "Advanced", highlight: "NextAuth / Auth.js, Clerk, Supabase Auth, JWT" },
      { name: "Payment Gateways", level: "Advanced", highlight: "Stripe Subscriptions, LemonSqueezy, Webhooks" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Scalable data schemas, query optimization, and secure persistent storage.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: "Relational modeling, indexing, foreign keys" },
      { name: "Supabase & Neon", level: "Advanced", highlight: "Serverless Postgres, real-time subscriptions" },
      { name: "Prisma & Drizzle ORM", level: "Advanced", highlight: "Type-safe database migrations & queries" },
      { name: "MongoDB", level: "Proficient", highlight: "Document models, aggregation pipelines" },
      { name: "Redis / Upstash", level: "Advanced", highlight: "Caching layer, rate limiting, session storage" }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    description: "Automated delivery pipelines, continuous testing, and resilient deployments.",
    skills: [
      { name: "Vercel & AWS", level: "Advanced", highlight: "Edge deployments, serverless functions, S3" },
      { name: "Git & GitHub Actions", level: "Expert", highlight: "CI/CD pipelines, code reviews, trunk workflow" },
      { name: "Docker", level: "Proficient", highlight: "Containerized local environments & microservices" },
      { name: "Figma to Code", level: "Expert", highlight: "1:1 pixel accuracy, token mapping" },
      { name: "Performance & SEO", level: "Expert", highlight: "Lighthouse 95+, Core Web Vitals, metadata" }
    ]
  }
];
