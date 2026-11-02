export interface ProcessStep {
  step: string;
  number: number;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: "Compass" | "Calendar" | "Palette" | "Code2" | "ShieldCheck" | "Rocket";
}

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    number: 1,
    title: "Discovery",
    headline: "We discuss your idea, business requirements, target users, and goals.",
    description: "We discuss your idea, business requirements, target users, and goals.",
    deliverables: [
      "Idea & business requirements",
      "Target user definition",
      "Project goals & scope boundaries"
    ],
    duration: "Step 01",
    iconName: "Compass"
  },
  {
    step: "02",
    number: 2,
    title: "Planning",
    headline: "I define the required features, technology, architecture, and development approach.",
    description: "I define the required features, technology, architecture, and development approach.",
    deliverables: [
      "Feature breakdown & roadmap",
      "System architecture & database",
      "Technology & development approach"
    ],
    duration: "Step 02",
    iconName: "Calendar"
  },
  {
    step: "03",
    number: 3,
    title: "UI/UX",
    headline: "I design the user experience and interface before turning it into a working product.",
    description: "I design the user experience and interface before turning it into a working product.",
    deliverables: [
      "Responsive layout wireframes",
      "Interface styling & tokens",
      "User flows & navigation design"
    ],
    duration: "Step 03",
    iconName: "Palette"
  },
  {
    step: "04",
    number: 4,
    title: "Development",
    headline: "I build the frontend, backend, database, APIs, and required integrations.",
    description: "I build the frontend, backend, database, APIs, and required integrations.",
    deliverables: [
      "Frontend & backend implementation",
      "Database schema & REST APIs",
      "Required third-party integrations"
    ],
    duration: "Step 04",
    iconName: "Code2"
  },
  {
    step: "05",
    number: 5,
    title: "Testing",
    headline: "I test important user flows, responsiveness, functionality, and edge cases.",
    description: "I test important user flows, responsiveness, functionality, and edge cases.",
    deliverables: [
      "Important user flows validation",
      "Cross-device responsiveness check",
      "Functionality & edge cases testing"
    ],
    duration: "Step 05",
    iconName: "ShieldCheck"
  },
  {
    step: "06",
    number: 6,
    title: "Deployment",
    headline: "I deploy the application and help prepare it for real users.",
    description: "I deploy the application and help prepare it for real users.",
    deliverables: [
      "Production deployment & hosting",
      "Domain setup & environment check",
      "Preparation for real user traffic"
    ],
    duration: "Step 06",
    iconName: "Rocket"
  }
];
