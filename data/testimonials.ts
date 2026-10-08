export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  projectOutcome: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Apex Analytics",
    quote: "Working with YOUR_NAME was a breath of fresh air compared to traditional agencies. They delivered our entire SaaS analytics MVP in just 4 weeks, with cleaner code than our full-time engineers had anticipated. Communication was daily and crystal clear.",
    projectOutcome: "Delivered 4-week SaaS MVP on time",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Bloom Commerce",
    quote: "Our e-commerce store was suffering from sluggish load times and poor mobile conversions. YOUR_NAME rebuilt our frontend on Next.js, boosting our Core Web Vitals to 98+ and directly increasing our mobile checkout conversion by 34%. Outstanding work.",
    projectOutcome: "34% increase in mobile conversions",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "David Kim",
    role: "Technical Co-Founder",
    company: "SyncPulse",
    quote: "From initial sprint planning to production deploy, YOUR_NAME brought senior-level engineering discipline. They didn't just write code—they challenged our assumptions and prevented several architectural mistakes before they cost us money.",
    projectOutcome: "Architected scalable client portal",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Sophia Martinez",
    role: "Director of Operations",
    company: "VentureScale Labs",
    quote: "If you need a reliable developer who respects deadlines, writes maintainable TypeScript, and needs zero hand-holding, hire YOUR_NAME. We have already booked them for our next two product rollouts.",
    projectOutcome: "Zero-defect sprint delivery",
    rating: 5
  }
];
