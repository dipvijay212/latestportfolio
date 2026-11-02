export interface ProjectScreenshot {
  url: string;
  caption: string;
  description?: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  screenshots?: ProjectScreenshot[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  developmentApproach: string;
  outcome: string;
  clientType: string;
}

export const projectsData: Project[] = [
  {
    title: "KS — Kunal Sarees",
    slug: "kunal-sarees",
    description: "A production wholesale saree e-commerce website designed to showcase ethnic wear collections, drive organic search discoverability through dynamic SEO, and capture customer orders directly via WhatsApp without requiring an online payment gateway.",
    category: "E-commerce / Business Website",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "Dynamic SEO",
      "WhatsApp API",
      "Vercel"
    ],
    image: "/images/ks-hero.png",
    screenshots: [
      {
        url: "/images/ks-hero.png",
        caption: "Homepage & Brand Hero",
        description: "B2B wholesale hero presentation with direct inquiry channels and clean ethnic brand aesthetics."
      },
      {
        url: "/images/ks-sarees.png",
        caption: "Catalogue & Multi-Filter Engine",
        description: "Multi-category filter sidebar allowing boutique owners and retail buyers to quickly search by fabric, weave, and collection."
      },
      {
        url: "/images/ks-newarrivals.png",
        caption: "Seasonal New Arrivals",
        description: "Dedicated new arrivals collection showcasing fresh inventory with per-piece wholesale pricing and direct WhatsApp ordering."
      }
    ],
    features: [
      "Saree product catalogue with dedicated individual product pages",
      "Category and collection-based browsing with dynamic sorting",
      "High-resolution product images, fabric details, and wholesale pricing",
      "Instant search and multi-criteria filtering to find relevant designs",
      "Frictionless checkout flow collecting buyer details before WhatsApp handoff",
      "Admin-side product and category management dashboard",
      "Dynamic SEO metadata, canonical URLs, sitemaps, and structured data",
      "Cloudinary-hosted and optimized product media delivery",
      "Fully responsive interface optimized for mobile and desktop screens"
    ],
    liveUrl: "https://www.kunalsarees.in",
    featured: true,
    overview: "KS — Kunal Sarees is a wholesale fashion and ethnic wear brand specializing in wholesale textiles. The production web platform was built to transition the business from manual chat-based catalog sharing to an organized, high-visibility digital storefront where retailers and bulk buyers across India can explore collections and place orders seamlessly.",
    problem: "The traditional saree wholesale business relied on physical showroom visits and manual image sharing over chat apps. Without an organized digital catalog, buyers couldn't easily discover new arrivals, products weren't indexed by search engines, and collecting structured customer details for orders was slow and repetitive.",
    solution: "Engineered a fast, SEO-optimized Next.js web application with Tailwind CSS and Cloudinary image hosting. Designed a complete catalog browsing experience with filters, rich product pages, structured sitemaps, an admin management panel, and a smart checkout flow that gathers customer details before routing the order into a pre-filled WhatsApp message.",
    developmentApproach: "Built with Next.js App Router, React, and TypeScript for fast server rendering, type safety, and optimal Core Web Vitals. Implemented dynamic OpenGraph tags, canonical links, and JSON-LD schema for strong organic search rankings. Deployed on Vercel with Cloudinary handling media delivery, backed by a separate dedicated backend architecture for administrative workflows.",
    outcome: "Successfully launched the business online with search-engine-indexed product discovery, eliminated manual catalog distribution bottlenecks, and created a smooth WhatsApp-based sales channel with zero payment gateway processing fees.",
    clientType: "Fashion, Ethnic Wear & Wholesale Textiles"
  },
  {
    title: "Jewellery Design Studio",
    slug: "jewellery-design",
    description: "A modern jewellery brand and e-commerce web interface redesigned with a premium visual identity, refined typography, structured content hierarchy, and elevated product presentation.",
    category: "UI/UX Design / E-commerce / Brand Website",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Layouts"
    ],
    image: "/images/jewellary-hero.png",
    screenshots: [
      {
        url: "/images/jewellary-hero.png",
        caption: "Luxury Hero Section",
        description: "Redesigned hero section establishing a high-end first impression with refined typography, brand storytelling, and prominent calls-to-action."
      },
      {
        url: "/images/jewellary-category.png",
        caption: "Curated Category Showcase",
        description: "Modernized collection cards highlighting key jewellery categories with clean visual hierarchy and balanced spacing."
      },
      {
        url: "/images/jewellary-products.png",
        caption: "Premium Product Cards & Presentation",
        description: "Elevated product grid featuring clear pricing, craftsmanship highlights, and responsive card layouts."
      }
    ],
    features: [
      "Premium jewellery-inspired visual identity and luxury aesthetic",
      "Redesigned hero section crafted to make an impactful first impression",
      "Modern content sections engineered with clear visual hierarchy",
      "Enhanced product cards and refined collection presentation",
      "Smooth product hover effects and fluid micro-interactions",
      "Refined typography, intentional whitespace, and balanced section composition",
      "Fully responsive layouts optimized across mobile, tablet, and desktop"
    ],
    featured: true,
    overview: "Jewellery Design Studio is a brand and e-commerce website concept focused on presenting luxury jewellery and accessories. The work centered on improving the website's digital presence—redesigning the hero section, optimizing content layouts, and enhancing product cards with clear visual hierarchy and smooth micro-interactions to create a polished, high-end browsing experience.",
    problem: "The original jewellery website lacked a cohesive luxury feel, featuring disorganized content sections and basic product cards that failed to communicate the fine craftsmanship and high value of the jewellery collections, resulting in reduced visitor engagement.",
    solution: "Revamped the digital storefront with a luxury-inspired aesthetic: engineered an impactful hero section that sets a strong first impression, restructured content sections for intuitive browsing, redesigned product cards with balanced spacing and refined typography, and ensured seamless responsiveness across all screen sizes.",
    developmentApproach: "Built with Next.js and React using TypeScript, styled with Tailwind CSS for clean, responsive layouts. Focused on UI/UX best practices, typography scales, high Core Web Vitals, and smooth CSS hover transitions that accentuate fine jewelry details without overloading performance.",
    outcome: "Significantly improved brand perception, established clear visual hierarchy across collections, made catalog browsing smoother and more engaging for prospective customers, and created a scalable UI foundation for future e-commerce capabilities.",
    clientType: "Jewellery & Luxury Accessories"
  }
];
