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
    description: "Fast, modern, and responsive websites engineered to establish brand credibility and turn visitors into paying clients.",
    included: [
      "Custom responsive design (mobile, tablet, desktop)",
      "SEO best practices for higher Google visibility",
      "Lead generation contact & consultation forms",
      "High-speed loading with 95+ Core Web Vitals"
    ],
    iconName: "Globe"
  },
  {
    id: "full-stack-web-apps",
    name: "Full Stack Web Applications",
    description: "Complete, scalable web platforms built from the ground up to solve complex business operations and handle user workflows.",
    included: [
      "End-to-end database, backend, and frontend",
      "Secure user authentication & role management",
      "Interactive customer portals & member areas",
      "Zero-downtime cloud hosting & maintenance setup"
    ],
    iconName: "Layers"
  },
  {
    id: "ecommerce-development",
    name: "E-commerce Development",
    description: "High-converting online shopping platforms with frictionless checkout experiences that maximize your store's sales.",
    included: [
      "Streamlined product catalogs & category filtering",
      "Secure payment processing (Stripe, PayPal, UPI)",
      "Automated order confirmation & customer invoices",
      "Mobile-optimized one-click checkout flows"
    ],
    iconName: "ShoppingCart"
  },
  {
    id: "react-nextjs-development",
    name: "React / Next.js Development",
    description: "Lightning-fast, dynamic web experiences that give your business enterprise-grade performance and instant page navigation.",
    included: [
      "Instant page transitions with zero sluggishness",
      "Server-side rendering for superior search rankings",
      "Modular, maintainable code for easy future updates",
      "Pixel-perfect translation from your Figma designs"
    ],
    iconName: "Code2"
  },
  {
    id: "react-native-mobile-apps",
    name: "React Native Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android that put your business directly into your customers' pockets.",
    included: [
      "Single codebase running seamlessly on iOS & Android",
      "Smooth native gestures and responsive mobile UI",
      "Push notifications & offline usability",
      "App Store & Google Play readiness assistance"
    ],
    iconName: "Smartphone"
  },
  {
    id: "admin-dashboards",
    name: "Admin Dashboards",
    description: "Intuitive command centers that give your team total real-time clarity over sales, metrics, user accounts, and operations.",
    included: [
      "Real-time visual charts & operational KPIs",
      "Customer data tables with instant search & filters",
      "Role-based permissions & audit logging",
      "One-click CSV/PDF report and data exports"
    ],
    iconName: "LayoutDashboard"
  },
  {
    id: "backend-api-development",
    name: "Backend API Development",
    description: "Reliable, secure server systems that handle your business data, protect sensitive information, and connect external services.",
    included: [
      "High-speed, type-safe API endpoints",
      "Secure database design with automated backups",
      "Third-party service integrations & payment gateways",
      "Resilient error handling and webhook listeners"
    ],
    iconName: "Server"
  },
  {
    id: "business-automation",
    name: "Business Automation",
    description: "Custom digital workflows that connect your software tools, eliminate repetitive manual data entry, and save your team hours.",
    included: [
      "Automated client onboarding & email sequences",
      "CRM, spreadsheet, and accounting tool syncing",
      "Custom internal bots & notification webhooks",
      "Reduced human error and faster turnaround cycles"
    ],
    iconName: "Zap"
  }
];
