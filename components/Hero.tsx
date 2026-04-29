"use client";

import { useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";

const REG_END = new Date(Date.now() + 10 * 3600000 + 14 * 60000 + 15000);

const COUNTRIES = [
  { code: "+91", name: "India 🇮🇳" },
  { code: "+1", name: "USA 🇺🇸" },
  { code: "+44", name: "UK 🇬🇧" },
  { code: "+971", name: "UAE 🇦🇪" },
  { code: "+61", name: "Australia 🇦🇺" },
];

export default function Hero() {
  const reg = useCountdown(REG_END);

  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(COUNTRIES[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT */}
        <div>
          <span className="text-2xl font-black text-slate-800 mb-5 block">
            IIDE
          </span>

          <span className="bg-blue-900 text-white text-[11px] font-extrabold tracking-widest px-3 py-1 rounded mb-4 inline-block uppercase">
            Online Session
          </span>

          <h1 className="text-4xl font-black text-blue-900 leading-tight mb-4">
            Supercharge Your Productivity with Claude
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6 max-w-lg">
            Learn how to use one of today&apos;s fastest growing tools to work
            smarter, save time, and stay ahead professionally.
          </p>

          <div className="flex flex-wrap items-center gap-4 bg-white border rounded-xl p-4 mb-5">
            {[
              "📅 2nd May (Saturday)",
              "🕐 11:00 AM - 12:30 PM",
              "💻 Online Via Zoom",
            ].map((t) => (
              <span key={t} className="text-sm text-gray-700 font-medium">
                {t}
              </span>
            ))}
            <span className="text-sm font-semibold">
              ₹ <s className="text-gray-400 font-normal">999</s>{" "}
              <span className="text-blue-900 font-extrabold">FREE</span>
            </span>
          </div>

          <p className="text-sm font-bold text-gray-900 mb-1">
            Registration ends in:{" "}
            {String(reg.h).padStart(2, "0")}h :{" "}
            {String(reg.m).padStart(2, "0")}m :{" "}
            {String(reg.s).padStart(2, "0")}s
          </p>

          <p className="text-sm font-bold text-red-500 mb-6">
            500+ Learners Already Registered!
          </p>

          {/* CTA */}
          <a
            href="#hero-cta"
            id="hero-cta"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
          >
            Secure Your Spot
          </a>
        </div>

        {/* RIGHT FORM */}
        <div id="register" className="bg-white rounded-2xl p-7 shadow-lg">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-blue-900 text-lg font-extrabold mb-2">
                You&apos;re Registered!
              </h3>
              <p className="text-gray-500 text-sm">
                Check your WhatsApp for the Zoom link.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg text-black font-extrabold text-center mb-5">
                Reserve Your Spot
              </h2>

              {/* PHONE INPUT */}
              <div className="relative mb-4">
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>

                <div className="flex border rounded-lg overflow-hidden">
                  
                  {/* Country dropdown */}
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1 px-3 border-r text-sm text-gray-700 bg-gray-50"
                  >
                    {selected.code} ▾
                  </button>

                  {/* Input */}
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Enter phone number"
                    className="flex-1 px-3 py-3 text-sm text-black outline-none"
                  />
                </div>

                {/* Dropdown list */}
                {open && (
                  <div className="absolute top-full left-0 w-44 bg-white border rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg z-50">
                    {COUNTRIES.map((c) => (
                      <div
                        key={c.code}
                        onClick={() => {
                          setSelected(c);
                          setOpen(false);
                        }}
                        className="px-3 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
                      >
                        {c.name} ({c.code})
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 mb-5">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-blue-900"
                />

                <span className="text-xs text-gray-500 leading-relaxed">
                  I agree to IIDE&apos;s{" "}
                  <a href="#" className="text-blue-900">T&amp;C</a> and{" "}
                  <a href="#" className="text-blue-900">Privacy Policy</a>.
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading || !agreed}
                className={`w-full py-3 rounded-lg font-bold text-white ${
                  loading || !agreed
                    ? "bg-blue-900 opacity-70 cursor-not-allowed"
                    : "bg-blue-900 hover:bg-blue-800"
                }`}
              >
                {loading ? "Registering..." : "Register Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}