import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalData } from "@/data/personal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${personalData.name} | Freelance Full-Stack Developer & Product Engineer`,
  description: `Freelancer portfolio of ${personalData.name}. I design and build production-grade web applications, SaaS MVPs, and modern frontend systems with Next.js, React, and TypeScript.`,
  keywords: [
    "Freelance Developer",
    "Full-Stack Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "SaaS MVP Developer",
    "Tailwind CSS",
    "Web Application Development",
    "Software Contractor"
  ],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: `${personalData.name} | Freelance Full-Stack Developer`,
    description: `I build fast, scalable, and high-converting web applications and SaaS MVPs. Let's work together on your next project.`,
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | Freelance Full-Stack Developer`,
    description: `I build fast, scalable web apps and SaaS MVPs for startups.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
