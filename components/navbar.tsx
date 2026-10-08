"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-white/60 backdrop-blur-xs border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <Link
            href="#"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:bg-indigo-600 transition-colors">
              YN
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-base tracking-tight leading-snug">
                {personalData.name}
              </span>
              <span className="text-[11px] font-medium text-slate-700 leading-none">
                Freelance Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Availability pill & CTA */}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
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
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-5 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for freelance projects</span>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-all"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
