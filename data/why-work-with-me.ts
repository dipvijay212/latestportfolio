export interface ValueProp {
  id: string;
  title: string;
  headline: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  iconName: string;
}

export const valuePropsData: ValueProp[] = [
  {
    id: "direct-access",
    title: "Direct Senior Engineering",
    headline: "No middlemen, account managers, or bloated agency overhead.",
    description: "You work directly with the developer building your software. Discussions lead directly to code, decisions are made fast, and technical questions get solved instantly without games of telephone.",
    metric: "100%",
    metricLabel: "Direct Engineer Access",
    iconName: "UserCheck"
  },
  {
    id: "business-first",
    title: "Business & Outcome Focused",
    headline: "I build software to solve business problems and generate revenue.",
    description: "Great code is worthless if it doesn't solve customer needs. I prioritize user retention, speed to market, conversion rates, and scalable foundations over trendy complexity.",
    metric: "35+",
    metricLabel: "Shipped Projects",
    iconName: "Target"
  },
  {
    id: "code-quality",
    title: "Production-Grade Clean Code",
    headline: "Strict TypeScript, maintainable components, and zero spaghetti code.",
    description: "Every file follows modern best practices. When your internal engineering team or another developer takes over, they will praise the structure, clear types, and modular layout instead of struggling to read it.",
    metric: "95+",
    metricLabel: "Lighthouse Performance",
    iconName: "Code"
  },
  {
    id: "reliable-delivery",
    title: "Reliable Milestones & Speed",
    headline: "Realistic estimates, transparent sprints, and on-time launches.",
    description: "No ghosting or missed deadlines. You receive scheduled updates, continuous staging deploys, and an accurate roadmap from kickoff to launch day.",
    metric: "98%",
    metricLabel: "On-Time Milestone Rate",
    iconName: "Clock"
  },
  {
    id: "modern-stack",
    title: "Modern Tech Ecosystem",
    headline: "Built with Next.js App Router, React 19, TypeScript, and Tailwind CSS.",
    description: "Leveraging cutting-edge server components, edge routing, and lightning-fast asset loading for instant page loads and lower infrastructure hosting costs.",
    metric: "<200ms",
    metricLabel: "Target Latency",
    iconName: "Zap"
  },
  {
    id: "warranty-support",
    title: "Post-Launch Warranty",
    headline: "Complete peace of mind with 30-day bug warranty included.",
    description: "My involvement doesn't end when the final invoice is paid. I provide 30 days of complimentary bug fixes and configuration support to make sure your launch is rock-solid.",
    metric: "30-Day",
    metricLabel: "Complimentary Warranty",
    iconName: "Shield"
  }
];
