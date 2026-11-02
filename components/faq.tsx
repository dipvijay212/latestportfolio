"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { faqData } from "@/data/faq";
import {
  ChevronDown,
  HelpCircle,
  MessageSquare,
  ArrowRight
} from "lucide-react";

export function FAQ() {
  // Only one FAQ item open at a time (first item open by default)
  const [openId, setOpenId] = useState<string | null>("faq-project-types");
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleFAQ = (id: string) => {
    setOpenId((currentOpenId) => (currentOpenId === id ? null : id));
  };

  // Keyboard navigation support (Arrow keys, Home, End)
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % faqData.length;
      buttonRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + faqData.length) % faqData.length;
      buttonRefs.current[prevIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttonRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttonRefs.current[faqData.length - 1]?.focus();
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Common Questions From Clients
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct, straightforward answers about project scope, full-stack capabilities, mobile development, timelines, and post-launch support.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions Accordion">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            const contentId = `faq-content-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-200/90 bg-indigo-50/20 shadow-sm"
                    : "border-slate-200/80 bg-white hover:border-slate-300 shadow-2xs"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 text-left">
                      <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                        {item.number}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-indigo-600 text-white rotate-180 shadow-2xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* Smooth Animated Height Accordion Panel */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/90 sm:pl-14">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center max-w-2xl mx-auto space-y-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-2xs">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900">
            Have a specific requirement or question not listed here?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Send me a direct message with your project details or technical questions, and I will get back to you with a direct answer within 24 hours.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all hover:-translate-y-0.5"
            >
              <span>Ask Me Directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
