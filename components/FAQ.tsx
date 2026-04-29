"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Q: Do I need prior marketing or AI experience?",
    a: "No prior experience is needed. This session is designed for beginners and professionals alike.",
  },
  {
    q: "Q: Is this session really free?",
    a: "Yes, 100% free. The original value is ₹999 but we are offering it at no cost for a limited time.",
  },
  {
    q: "Q: How will this help in my career?",
    a: "You will gain practical AI skills that can be applied in any industry, making you more productive and competitive.",
  },
  {
    q: "Q: Can I ask questions during the session?",
    a: "Yes! There will be a live Q&A segment at the end where you can ask the host directly.",
  },
  {
    q: "Q: Will I get a recording?",
    a: "Registered participants will receive a recording link within 24 hours after the session.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Eyebrow */}
        <p className="text-sm font-bold text-blue-900 mb-2">
          Everything you need to know
        </p>

        <h2 className="text-3xl font-black text-gray-900 mb-8">
          Frequently Asked{" "}
          <span className="text-blue-900">Questions</span>
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-sm font-medium text-gray-900"
              >
                {faq.q}

                <span
                  className={`text-xl text-gray-400 transition-transform ${
                    open === i ? "rotate-90" : ""
                  }`}
                >
                  ›
                </span>
              </button>

              {/* Answer */}
              {open === i && (
                <div className="px-6 pb-5 pt-3 border-t text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}