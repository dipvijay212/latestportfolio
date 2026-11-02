export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: "Services" | "Full-Stack" | "Mobile" | "Process" | "Support";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-project-types",
    number: "01",
    question: "What type of projects do you develop?",
    answer: "I develop responsive web applications, SaaS MVPs, business management dashboards, client portals, and cross-platform mobile apps. Whether you need an application built from the ground up or new features added to an existing platform, I focus on building clean, high-performance systems with real business utility.",
    category: "Services"
  },
  {
    id: "faq-frontend-backend",
    number: "02",
    question: "Can you build both frontend and backend?",
    answer: "Yes, I provide complete full-stack development. On the frontend, I work with React, Next.js, TypeScript, and Tailwind CSS to build fast, accessible interfaces. On the backend, I engineer modular Node.js and Express.js servers, design structured REST APIs, and manage databases like MySQL, Supabase, and Sequelize.",
    category: "Full-Stack"
  },
  {
    id: "faq-mobile-apps",
    number: "03",
    question: "Can you build mobile applications?",
    answer: "Yes, I build mobile applications using React Native CLI for both Android and iOS. This allows you to launch cross-platform mobile experiences with shared TypeScript business logic, native device feature access (camera, local storage, native modules), and cost-effective maintenance.",
    category: "Mobile"
  },
  {
    id: "faq-existing-projects",
    number: "04",
    question: "Can you work with an existing project?",
    answer: "Yes, absolutely. I frequently take on existing codebases to fix bugs, refactor unmaintainable code, integrate new features, or optimize performance. Before starting, I conduct a code audit to understand your current architecture and propose the cleanest implementation strategy.",
    category: "Services"
  },
  {
    id: "faq-deployment",
    number: "05",
    question: "Can you deploy the application?",
    answer: "Yes, I handle complete deployment setup. This includes configuring cloud hosting on platforms like Vercel, linking custom domains and SSL certificates, configuring environment variables, setting up database connections, and verifying production stability before handing over the project.",
    category: "Full-Stack"
  },
  {
    id: "faq-process",
    number: "06",
    question: "How does the development process work?",
    answer: "I follow a structured 6-step sprint workflow: Discovery (understanding goals) → Planning (defining features and stack) → UI/UX (screen layout & user flows) → Development (frontend, backend & database build) → Testing (cross-device verification) → Deployment (production launch). You receive regular staging preview links and updates throughout.",
    category: "Process"
  },
  {
    id: "faq-timeline",
    number: "07",
    question: "How long does a project take?",
    answer: "Timelines depend on project scope and complexity. A focused landing page or small tool usually takes 1 to 2 weeks, while a full-stack web application, MVP, or mobile app typically takes 3 to 6 weeks. Every project receives an exact milestone roadmap before development begins.",
    category: "Process"
  },
  {
    id: "faq-support",
    number: "08",
    question: "Do you provide post-launch support?",
    answer: "Yes. Every launch includes a dedicated post-launch support window to address any unexpected issues, fix edge-case bugs, and ensure smooth production operation. I am also available for ongoing maintenance and incremental feature additions as your user base grows.",
    category: "Support"
  },
  {
    id: "faq-third-party-apis",
    number: "09",
    question: "Can you integrate third-party APIs?",
    answer: "Yes, I regularly integrate external APIs and third-party services—including payment gateways (like Razorpay and Stripe), authentication providers, email/SMS services, cloud databases, and AI or analytics services—using secure server-side routes.",
    category: "Full-Stack"
  },
  {
    id: "faq-start-project",
    number: "10",
    question: "How can I start a project?",
    answer: "Getting started is straightforward. You can submit your project outline through the contact form below or reach out directly by email. We will schedule a quick conversation to discuss your goals, scope, and timeline, followed by a clear, fixed-price or sprint proposal.",
    category: "Services"
  }
];
