import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { WhyWorkWithMe } from "@/components/why-work-with-me";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Featured Projects Case Studies */}
        <Projects />

        {/* 6. Tech Stack & Engineering Tools */}
        <TechStack />

        {/* 7. Why Work With Me (Freelancer Advantages) */}
        <WhyWorkWithMe />

        {/* 8. How I Work (4-Step Sprint Process) */}
        <Process />

        {/* 9. Verified Client Testimonials */}
        <Testimonials />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Interactive Contact & Project Inquiry */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
