export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Tools & Deployment";

export interface TechItem {
  name: string;
  category: TechCategory;
  role: string;
  focus: string;
  practicalUse: string;
}

export interface TechGroup {
  category: TechCategory;
  tagline: string;
  description: string;
  items: TechItem[];
}

export const techGroupsData: TechGroup[] = [
  {
    category: "Frontend",
    tagline: "User Interfaces & Client Architecture",
    description: "Building responsive, accessible, and high-performance interfaces with component-driven state.",
    items: [
      {
        name: "React",
        category: "Frontend",
        role: "Component-driven user interfaces",
        focus: "Modular architecture, hooks, lifecycle management, and reusability.",
        practicalUse: "Web apps & dynamic dashboards"
      },
      {
        name: "Next.js",
        category: "Frontend",
        role: "Full-stack React framework & App Router",
        focus: "Server-side rendering (SSR), static site generation (SSG), and route handlers.",
        practicalUse: "SEO platforms & full-stack apps"
      },
      {
        name: "JavaScript",
        category: "Frontend",
        role: "Core web programming language",
        focus: "ES6+ modern syntax, asynchronous control flow, and DOM event handling.",
        practicalUse: "Core logic, algorithms & scripts"
      },
      {
        name: "TypeScript",
        category: "Frontend",
        role: "Static typing & code reliability",
        focus: "Strict type definitions, interfaces, API data contracts, and refactoring.",
        practicalUse: "Type contracts & bug prevention"
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        role: "Utility-first design systems",
        focus: "Rapid, responsive layouts, design token customization, and clean UI styling.",
        practicalUse: "Responsive layouts & design tokens"
      },
      {
        name: "Redux Toolkit",
        category: "Frontend",
        role: "Predictable global state management",
        focus: "Centralized application state, store slices, reducers, and UI synchronization.",
        practicalUse: "Multi-step flows & complex state"
      }
    ]
  },
  {
    category: "Backend",
    tagline: "Server Logic & API Engineering",
    description: "Designing fast, secure server logic, route controllers, and clean request pipelines.",
    items: [
      {
        name: "Node.js",
        category: "Backend",
        role: "JavaScript runtime environment",
        focus: "Asynchronous I/O execution, server processes, and backend application services.",
        practicalUse: "Server runtimes & background tasks"
      },
      {
        name: "Express.js",
        category: "Backend",
        role: "Minimalist server framework",
        focus: "Modular HTTP routing, custom request middleware, and endpoint handling.",
        practicalUse: "Microservices & REST endpoints"
      },
      {
        name: "REST APIs",
        category: "Backend",
        role: "Structured data exchange endpoints",
        focus: "CRUD operations, HTTP status codes, payload validation, and client integration.",
        practicalUse: "Client-server data contracts"
      }
    ]
  },
  {
    category: "Mobile",
    tagline: "Cross-Platform Application Development",
    description: "Engineering native mobile applications with shared codebases and device tooling.",
    items: [
      {
        name: "React Native CLI",
        category: "Mobile",
        role: "Native mobile development for iOS & Android",
        focus: "Native device tooling, cross-platform UI components, and mobile app architecture.",
        practicalUse: "iOS & Android mobile apps"
      }
    ]
  },
  {
    category: "Database",
    tagline: "Data Modeling & Storage Solutions",
    description: "Managing structured schemas, transactional integrity, and scalable cloud databases.",
    items: [
      {
        name: "MySQL",
        category: "Database",
        role: "Relational database management system",
        focus: "Relational table schemas, foreign key constraints, indexing, and SQL queries.",
        practicalUse: "Structured relational databases"
      },
      {
        name: "Supabase",
        category: "Database",
        role: "Backend-as-a-service & PostgreSQL platform",
        focus: "Managed PostgreSQL, user authentication, instant APIs, and storage buckets.",
        practicalUse: "Postgres, auth & real-time DB"
      },
      {
        name: "Sequelize",
        category: "Database",
        role: "Node.js Object-Relational Mapper (ORM)",
        focus: "Database schema migrations, model definitions, validations, and table associations.",
        practicalUse: "Database models & migrations"
      }
    ]
  },
  {
    category: "Tools & Deployment",
    tagline: "Version Control & Cloud Delivery",
    description: "Maintaining clean code history, collaborative workflows, and automated deployment pipelines.",
    items: [
      {
        name: "Git",
        category: "Tools & Deployment",
        role: "Distributed version control system",
        focus: "Branching strategies, commit history, merge conflict resolution, and code tracking.",
        practicalUse: "Branch workflows & code tracking"
      },
      {
        name: "GitHub",
        category: "Tools & Deployment",
        role: "Code hosting & collaborative platform",
        focus: "Repository management, pull requests, code reviews, and issue tracking.",
        practicalUse: "Version control & team reviews"
      },
      {
        name: "Vercel",
        category: "Tools & Deployment",
        role: "Cloud hosting & edge deployment platform",
        focus: "Continuous integration from Git, preview builds, custom domains, and edge delivery.",
        practicalUse: "CI/CD & instant edge hosting"
      }
    ]
  }
];

// Flattened helper array of all 16 tools
export const allTechItems: TechItem[] = techGroupsData.flatMap(
  (group) => group.items
);
