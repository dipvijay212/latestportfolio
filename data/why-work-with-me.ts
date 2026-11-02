export interface ValueProp {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  clientBenefit: string;
  iconName: "Target" | "Layers" | "Briefcase" | "Sparkles" | "Layout" | "CheckCircle2";
  colorTheme: {
    badge: string;
    iconBg: string;
    iconBorder: string;
    iconText: string;
    accentDot: string;
  };
}

export const whyWorkWithMeData = {
  heading: "Why Work With Me?",
  subheading:
    "Here is the practical development philosophy and commitment to real business outcomes I bring to every client project.",
};

export const valuePropsData: ValueProp[] = [
  {
    id: "business-first",
    number: "01",
    title: "Business First",
    description: "I focus on understanding the actual problem before deciding how to build the solution.",
    highlights: [
      "Understand business goals before writing code",
      "Features prioritized around real problem-solving",
      "No unnecessary complexity that slows delivery"
    ],
    clientBenefit: "Problem-First Focus",
    iconName: "Target",
    colorTheme: {
      badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
      iconBg: "bg-indigo-50/80",
      iconBorder: "border-indigo-100",
      iconText: "text-indigo-600",
      accentDot: "bg-indigo-500"
    }
  },
  {
    id: "full-stack-capability",
    number: "02",
    title: "Full Stack Capability",
    description: "I can work across the frontend, backend, database, APIs, and deployment instead of treating each part as a separate problem.",
    highlights: [
      "Frontend, backend, database, APIs and deployment",
      "Single point of communication and accountability",
      "Seamless integration between all parts of the app"
    ],
    clientBenefit: "End-to-End Ownership",
    iconName: "Layers",
    colorTheme: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
      iconBg: "bg-emerald-50/80",
      iconBorder: "border-emerald-100",
      iconText: "text-emerald-600",
      accentDot: "bg-emerald-500"
    }
  },
  {
    id: "real-world-projects",
    number: "03",
    title: "Real-World Projects",
    description: "My experience includes e-commerce platforms, business management systems, ordering platforms, dashboards, and mobile applications.",
    highlights: [
      "E-commerce & digital catalog stores",
      "Ordering platforms with real-time tracking",
      "Internal management dashboards & mobile apps"
    ],
    clientBenefit: "Practical Experience",
    iconName: "Briefcase",
    colorTheme: {
      badge: "bg-sky-50 text-sky-700 border-sky-100",
      iconBg: "bg-sky-50/80",
      iconBorder: "border-sky-100",
      iconText: "text-sky-600",
      accentDot: "bg-sky-500"
    }
  },
  {
    id: "modern-development",
    number: "04",
    title: "Modern Development",
    description: "I use modern frameworks and development practices to create maintainable and responsive applications.",
    highlights: [
      "Modern tools: Next.js, React, React Native, Node.js",
      "Strict type safety and clean component boundaries",
      "Clean, scalable code built for long-term reliability"
    ],
    clientBenefit: "Maintainable Code",
    iconName: "Sparkles",
    colorTheme: {
      badge: "bg-violet-50 text-violet-700 border-violet-100",
      iconBg: "bg-violet-50/80",
      iconBorder: "border-violet-100",
      iconText: "text-violet-600",
      accentDot: "bg-violet-500"
    }
  },
  {
    id: "user-experience",
    number: "05",
    title: "User Experience",
    description: "I care about how the final product feels to the person actually using it—not just whether the code works.",
    highlights: [
      "Intuitive navigation and clear visual hierarchy",
      "Smooth and responsive on all screen sizes",
      "Optimized load times and frictionless user flows"
    ],
    clientBenefit: "User-Centered Design",
    iconName: "Layout",
    colorTheme: {
      badge: "bg-amber-50 text-amber-700 border-amber-100",
      iconBg: "bg-amber-50/80",
      iconBorder: "border-amber-100",
      iconText: "text-amber-600",
      accentDot: "bg-amber-500"
    }
  },
  {
    id: "practical-solutions",
    number: "06",
    title: "Practical Solutions",
    description: "I prefer building solutions that are useful, understandable, and appropriate for the business rather than adding unnecessary complexity.",
    highlights: [
      "Pragmatic choices that match real business needs",
      "Straightforward architecture your team can maintain",
      "High value delivery without bloated overhead"
    ],
    clientBenefit: "Appropriate & Useful",
    iconName: "CheckCircle2",
    colorTheme: {
      badge: "bg-teal-50 text-teal-700 border-teal-100",
      iconBg: "bg-teal-50/80",
      iconBorder: "border-teal-100",
      iconText: "text-teal-600",
      accentDot: "bg-teal-500"
    }
  }
];
