export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  included: string[];
  iconName: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "website-development",
    name: "Website Development",
    description: "Modern, responsive websites designed to represent your business professionally and provide a smooth experience across mobile, tablet, and desktop.",
    included: [
      "Professional presentation tailored to your business identity",
      "Seamless responsiveness across mobile, tablet, and desktop",
      "Fast page loading speeds and search engine optimization (SEO)",
      "Lead generation contact forms and direct WhatsApp integration"
    ],
    iconName: "Globe"
  },
  {
    id: "full-stack-web-apps",
    name: "Full Stack Web Applications",
    description: "Complete web applications with frontend, backend APIs, databases, authentication, dashboards, and the functionality your business needs.",
    included: [
      "Custom frontend user interfaces and workflows",
      "Secure user authentication and role management",
      "Structured database modeling and backend APIs",
      "Production-ready deployment and cloud setup"
    ],
    iconName: "Layers"
  },
  {
    id: "ecommerce-development",
    name: "E-commerce Development",
    description: "Product-focused online stores with responsive interfaces, product management, categories, customer flows, and business-friendly management features.",
    included: [
      "Intuitive product showcases with category filtering",
      "Frictionless customer ordering and checkout flows",
      "Catalog, inventory, and pricing management",
      "WhatsApp ordering and payment gateway integration"
    ],
    iconName: "ShoppingCart"
  },
  {
    id: "react-nextjs-development",
    name: "React / Next.js Development",
    description: "Fast and modern web applications built with React and Next.js, with a focus on performance, scalability, SEO, and user experience.",
    included: [
      "Lightning-fast page transitions and interactive interfaces",
      "Server-side rendering for strong organic search rankings",
      "Clean, scalable codebase designed for long-term maintainability",
      "High Core Web Vitals scores and smooth user experience"
    ],
    iconName: "Code2"
  },
  {
    id: "admin-dashboards",
    name: "Admin Dashboards",
    description: "Custom dashboards that help businesses manage products, orders, customers, payments, inventory, and other daily operations from one place.",
    included: [
      "Centralized oversight of orders, customers, and inventory",
      "Real-time operational metrics and clear visual stats",
      "Fast filtering, search, and bulk record management",
      "One-click reports and structured data exports"
    ],
    iconName: "LayoutDashboard"
  },
  {
    id: "backend-api-development",
    name: "Backend & API Development",
    description: "Secure and structured backend systems with REST APIs, database integration, authentication, and the business logic required by your application.",
    included: [
      "Reliable REST APIs connecting web and mobile applications",
      "Secure relational and cloud database integration",
      "Role-based access control and data security standards",
      "Third-party API integrations and webhook listeners"
    ],
    iconName: "Server"
  },
  {
    id: "business-automation",
    name: "Business Automation",
    description: "Digital solutions that reduce repetitive manual work and help businesses manage their operations more efficiently.",
    included: [
      "Automated notifications, alerts, and client follow-ups",
      "Elimination of manual, error-prone data entry",
      "Synchronization between forms, databases, and spreadsheets",
      "Streamlined daily business operations and team time savings"
    ],
    iconName: "Zap"
  }
];
