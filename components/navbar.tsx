"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#tech-stack" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to Content for Screen Readers & Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-indigo-600 focus:text-white focus:rounded-xl focus:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-400 font-semibold text-xs tracking-wide"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
            : "bg-white/70 backdrop-blur-xs border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Personal Brand */}
            <Link
              href="#"
              className="group flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90 min-w-0"
              aria-label={`${personalData.name} - Home`}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm tracking-tight shadow-sm group-hover:bg-indigo-600 transition-colors shrink-0">
                DV
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight leading-snug truncate">
                  {personalData.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-600 leading-none hidden sm:block">
                  Freelance Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Availability pill & CTA (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for hire</span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu toggle (Small screens) */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-xs"
              >
                Hire Me
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile dropdown sheet */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for freelance projects</span>
            </div>
            
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
