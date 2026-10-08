export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Billing" | "Process" | "Tech" | "Timeline";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-timeline",
    question: "What is your typical turnaround time for a project?",
    answer: "Most custom web applications and SaaS MVPs are completed within 3 to 6 weeks, depending on project complexity. Smaller scopes, landing page conversions, or performance tune-ups typically take 1 to 2 weeks. Every project receives an exact milestone roadmap before we begin.",
    category: "Timeline"
  },
  {
    id: "faq-pricing",
    question: "How do you structure your pricing (fixed-price or hourly)?",
    answer: "I primarily work on transparent, fixed-scope milestone pricing. This means you know the exact investment and deliverables upfront with zero surprise billing. For ongoing product development or advisory retainers, I offer dedicated weekly or monthly sprints.",
    category: "Billing"
  },
  {
    id: "faq-communication",
    question: "How will we communicate during the project?",
    answer: "You get direct access to me—no account managers or middle layers. We typically communicate via a shared Slack channel or async email updates, with weekly video check-ins and interactive staging previews so you can test real progress at every step.",
    category: "Process"
  },
  {
    id: "faq-existing-code",
    question: "Can you work with my existing codebase or design files?",
    answer: "Absolutely. I regularly take over existing React/Next.js/TypeScript codebases, conduct structural audits, eliminate bugs, and add requested features. If you already have Figma designs, I translate them with 100% pixel precision.",
    category: "Tech"
  },
  {
    id: "faq-prep",
    question: "What do I need ready before we can start?",
    answer: "A clear idea of the core problem your product solves, any existing wireframes/Figma designs, and reference examples of sites or products you admire. Even if your requirements are still rough, we can run a quick discovery call to refine the MVP scope.",
    category: "Process"
  },
  {
    id: "faq-support",
    question: "Do you provide post-launch support and warranty?",
    answer: "Yes! Every project includes a 14 to 30-day post-launch warranty period where any bug fixes or adjustments related to the agreed scope are resolved at no extra charge. Long-term maintenance retainers are also available if you need ongoing feature development.",
    category: "Billing"
  }
];
