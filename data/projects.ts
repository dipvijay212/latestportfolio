export interface Project {
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
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
    title: "Kunal Sarees",
    slug: "kunal-sarees",
    description: "A modern wholesale saree website designed for showcasing products, generating customer inquiries and helping the business establish an online presence.",
    category: "E-commerce / Business Website",
    technologies: ["Next.js", "React", "Tailwind CSS", "MySQL", "Vercel"],
    image: "/images/kunal-sarees.svg",
    features: [
      "Product catalogue with multi-category filtering",
      "Dedicated product and collection detail pages",
      "Search engine optimization (SEO) for wholesale queries",
      "Fully responsive design across mobile and desktop",
      "Direct WhatsApp customer communication integration",
      "Admin management dashboard for inventory & categories",
      "Dynamic product data synchronization"
    ],
    liveUrl: "https://example.com/kunal-sarees",
    githubUrl: "https://github.com/YOUR_GITHUB/kunal-sarees",
    featured: true,
    overview: "Kunal Sarees needed a dedicated digital catalog and wholesale inquiry platform to replace manual photo sharing on chat apps. The platform enables buyers across regions to explore saree collections by fabric, weave, and occasion, and initiate instant bulk inquiries via WhatsApp.",
    problem: "The wholesale business was relying entirely on manual image sharing via WhatsApp and physical showroom visits. Product catalogs were disorganized, pricing updates were difficult to broadcast, and out-of-town retail buyers couldn't easily browse new arrivals.",
    solution: "Developed a performant, SEO-ready Next.js web application with a relational MySQL database. Included categorized catalog filters, rich image galleries, and a one-click WhatsApp inquiry flow with prepopulated product codes. Provided an intuitive admin dashboard for effortlessly adding new collections.",
    developmentApproach: "Built with Next.js App Router for fast server rendering and strong organic search presence. Styled with Tailwind CSS for clean responsiveness. Implemented MySQL schema modeling for categories, collections, and variants with secure admin API routes deployed seamlessly to Vercel.",
    outcome: "Streamlined the inquiry workflow for buyers, eliminated repetitive manual catalog requests, and established a professional online presence with direct WhatsApp lead capture.",
    clientType: "Traditional Wholesale Business"
  },
  {
    title: "Restaurant Ordering Platform",
    slug: "restaurant-ordering-platform",
    description: "A digital ordering and operations platform that enables customers to browse menus and order smoothly while giving restaurant staff a live order management dashboard.",
    category: "Restaurant Management / Ordering",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Socket.io"],
    image: "/images/restaurant-ordering.svg",
    features: [
      "Customer ordering with table and takeaway selection",
      "Interactive menu browsing with item modifiers & dietary tags",
      "Real-time kitchen order management display (KDS)",
      "Live business dashboard tracking daily order volume",
      "Mobile-friendly, responsive guest ordering experience",
      "Instant sound & visual notifications for incoming orders"
    ],
    liveUrl: "https://example.com/restaurant-ordering",
    githubUrl: "https://github.com/YOUR_GITHUB/restaurant-ordering-platform",
    featured: true,
    overview: "An end-to-end food ordering and kitchen dispatch platform that simplifies dining operations. Guests access an interactive digital menu from their phone, place orders, and track fulfillment status while kitchen staff process tickets in real time.",
    problem: "The restaurant experienced peak-hour order bottlenecks, handwriting errors on paper tickets, and high commission fees on third-party food delivery aggregators.",
    solution: "Created a direct digital ordering solution where customers order directly from their mobile browser. Connected the customer interface to a real-time kitchen display and management dashboard using WebSockets, reducing wait times and providing immediate ticket status updates.",
    developmentApproach: "Designed a mobile-first interface in React and Next.js. Engineered a Node.js backend with PostgreSQL for relational order, item, and category tracking, paired with Socket.io for instantaneous synchronization between guest carts and the kitchen screen.",
    outcome: "Reduced peak order turnaround times, eliminated miscommunicated kitchen tickets, and enabled the restaurant to run direct ordering without recurring platform commissions.",
    clientType: "Food & Hospitality Business"
  },
  {
    title: "VTryon",
    slug: "vtryon",
    description: "An AI-driven virtual try-on mobile application that allows users to visualize apparel and accessories seamlessly before buying.",
    category: "Mobile Application / AI",
    technologies: ["React Native", "TypeScript", "Python / FastAPI", "PyTorch / AI API", "Stripe"],
    image: "/images/vtryon.svg",
    features: [
      "React Native mobile interface for iOS & Android",
      "AI virtual try-on photo upload and pose alignment",
      "Seamless backend API integration with image processing pipelines",
      "Secure in-app token & payment processing",
      "Personalized fit history and wardrobe collection",
      "Smooth touch gestures and real-time generation feedback"
    ],
    liveUrl: "https://example.com/vtryon",
    githubUrl: "https://github.com/YOUR_GITHUB/vtryon",
    featured: true,
    overview: "VTryon is a cross-platform mobile shopping application designed to solve the e-commerce return problem by letting shoppers upload a photo and visualize how clothing items drape on their body using generative AI models.",
    problem: "Online apparel shoppers frequently hesitate to make purchases and return items due to uncertainty about how clothes will look on their specific body shape and proportions.",
    solution: "Engineered a fluid React Native mobile application connected to an AI inference microservice backend. Users take or upload a photo, select an outfit from the in-app catalog, and receive a photorealistic visualization within seconds.",
    developmentApproach: "Developed a cross-platform mobile architecture with React Native and TypeScript for consistent 60fps animations. Built asynchronous API handlers to poll AI processing queues with optimistic UI loading indicators, backed by Stripe for mobile checkout.",
    outcome: "Successfully brought generative computer vision models into an accessible mobile interface, providing an intuitive, interactive try-on experience on both iOS and Android.",
    clientType: "AI E-commerce Product"
  },
  {
    title: "Tuition Management System",
    slug: "tuition-management-system",
    description: "An all-in-one administration platform built for coaching institutes and tuition centers to automate student records, fee collection, and attendance.",
    category: "Business Management System",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "WhatsApp API"],
    image: "/images/tuition-management.svg",
    features: [
      "Comprehensive student records and profile management",
      "Batch scheduling, subject assignment, and timings",
      "Fee tracking, pending dues alerts, and receipt generation",
      "Daily attendance tracking with instant status logs",
      "Centralized administrative overview dashboard",
      "Automated WhatsApp parent notifications for fees & attendance"
    ],
    liveUrl: "https://example.com/tuition-management",
    githubUrl: "https://github.com/YOUR_GITHUB/tuition-management-system",
    featured: true,
    overview: "Coaching institutes and tuition centers often struggle with disorganized paper registers and manual payment follow-ups. This management system centralizes student enrollment, batch scheduling, fee collection, and parent communications into one intuitive dashboard.",
    problem: "The institute administrator spent hours every week manually recording paper attendance, matching bank slips with student names, and calling parents individually about overdue fees.",
    solution: "Built a centralized web portal with relational student-batch-fee data architecture. Added one-click daily attendance marking and automated WhatsApp payment reminder triggers so parents receive receipts and notifications directly on their phone.",
    developmentApproach: "Utilized Next.js App Router with Prisma ORM and PostgreSQL for clean relational integrity between students, batches, and transactions. Integrated WhatsApp Cloud API webhooks for automated messaging upon attendance logging and fee receipt generation.",
    outcome: "Replaced manual paper ledgers with an organized cloud system, ensuring zero lost fee records and significantly improving on-time fee collections through automated WhatsApp reminders.",
    clientType: "Educational & Coaching Institute"
  },
  {
    title: "Mehman",
    slug: "mehman",
    description: "A conversational order management and workflow tool empowering businesses to receive, confirm, and fulfill orders directly via WhatsApp with an integrated admin panel.",
    category: "WhatsApp Order Management",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "WhatsApp Cloud API"],
    image: "/images/mehman.svg",
    features: [
      "Conversational WhatsApp order intake flow",
      "Structured order management with lifecycle stages",
      "Admin dashboard for order confirmation & dispatch",
      "Robust backend webhook processing with retries",
      "Customer automated order confirmation & receipt delivery",
      "Real-time sync between chat conversations and database"
    ],
    liveUrl: "https://example.com/mehman",
    githubUrl: "https://github.com/YOUR_GITHUB/mehman",
    featured: true,
    overview: "Mehman is a streamlined order management tool built for local retail and food businesses where customers prefer ordering via WhatsApp. It bridges casual chat conversations into structured, trackable order tickets that staff can manage easily.",
    problem: "Businesses receiving orders on WhatsApp were losing customer details in messy chat threads, forgetting special requests, and having staff misplace delivery addresses.",
    solution: "Created a webhook-driven bot system that parses incoming WhatsApp inquiries into organized order cards on a central Kanban-style dashboard. Staff can accept, modify, and update fulfillment states with one click, which automatically alerts the customer on WhatsApp.",
    developmentApproach: "Implemented Node.js and Express webhook consumers with signature verification for WhatsApp Cloud API. Stored order records in MongoDB for flexible catalog schemas, with a Next.js admin frontend for live drag-and-drop order stage management.",
    outcome: "Eliminated lost orders during peak chat volume, standardized customer receipts, and gave staff a single source of truth for all WhatsApp-based transactions.",
    clientType: "Direct-to-Consumer & Retail"
  },
  {
    title: "LocalMart",
    slug: "localmart",
    description: "A community-focused hyperlocal marketplace app connecting local neighborhood shops with nearby residents for quick local ordering and rapid delivery.",
    category: "Hyperlocal Ordering Application",
    technologies: ["React Native", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Google Maps API"],
    image: "/images/localmart.svg",
    features: [
      "Nearby local shop listings and store profiles",
      "Categorized product browsing across groceries & daily essentials",
      "Cart and multi-item ordering workflow",
      "Location-based store discovery with radius filtering",
      "Mobile application interface with live order tracking",
      "Shopkeeper order acceptance dashboard"
    ],
    liveUrl: "https://example.com/localmart",
    githubUrl: "https://github.com/YOUR_GITHUB/localmart",
    featured: true,
    overview: "LocalMart empowers local neighborhood grocers, pharmacies, and mom-and-pop shops to offer digital ordering to nearby residents without requiring expensive enterprise e-commerce infrastructure.",
    problem: "Independent neighborhood shops were losing loyal customers to quick-commerce delivery apps because they had no convenient way for local residents to browse inventory and request deliveries.",
    solution: "Developed a cross-platform mobile marketplace app that automatically surfaces open shops within a 3km radius. Residents can browse available stock, add items to a shared cart, and track order fulfillment from their neighborhood merchant.",
    developmentApproach: "Created a React Native mobile application with GPS geolocation and Google Places API for pinpoint address detection. Designed a scalable PostgreSQL backend to manage merchant catalogs, geo-queries, and localized order dispatching.",
    outcome: "Enabled local shopkeepers to retain neighborhood customers with a modern digital ordering channel that runs smoothly on standard smartphones.",
    clientType: "Hyperlocal Retail Community"
  }
];
