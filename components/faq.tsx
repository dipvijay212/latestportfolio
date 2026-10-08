"use client";

import { useState } from "react";
import { faqData, FAQItem } from "@/data/faq";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-timeline");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything you need to know before we get started.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Straightforward answers about pricing, turnaround timelines, communication, and post-launch support.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200 shadow-2xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-indigo-50 text-indigo-600" : "text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/70">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 text-center max-w-2xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">
            Have a project requirement not addressed here?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600">
            Send me a direct message with your project outline, and I will get back to you with a clear answer within 24 hours.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all"
            >
              <span>Ask Me Directly</span>
              &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
