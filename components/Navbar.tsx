// "use client";

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
//       <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-3">
        
//         {/* Logo */}
//         <span className="font-black text-2xl text-slate-800 tracking-tight font-serif">
//           IIDE
//         </span>

//         {/* Center Pills (hidden on small screens) */}
//         <div className="hidden md:flex items-center gap-2 flex-wrap">
//           {[
//             { e: "📅", t: "2nd May (Saturday)" },
//             { e: "🕐", t: "11:00 AM - 12:30 PM" },
//             { e: "💻", t: "Online Via Zoom" },
//           ].map((p) => (
//             <span
//               key={p.t}
//               className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 font-medium"
//             >
//               {p.e} {p.t}
//             </span>
//           ))}

//           <span className="text-xs font-semibold text-gray-700">
//             💸 Registration Fees:{" "}
//             <s className="text-gray-400">₹999</s>{" "}
//             <span className="text-red-500 font-extrabold">FREE</span>
//           </span>
//         </div>

//         {/* CTA */}
//         <a
//           href="#register"
//           className="bg-blue-900 text-white px-5 py-2 rounded-lg font-bold text-sm whitespace-nowrap hover:bg-blue-800 transition"
//         >
//           Secure Your Spot
//         </a>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-3">
        
        {/* Logo */}
        <span className="font-black text-2xl text-slate-800 font-serif">
          IIDE
        </span>

        {/* Center Info (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2 flex-wrap">
          {[
            "📅 2nd May (Saturday)",
            "🕐 11:00 AM - 12:30 PM",
            "💻 Online Via Zoom",
          ].map((item) => (
            <span
              key={item}
              className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
            >
              {item}
            </span>
          ))}

          <span className="text-xs font-semibold text-gray-700">
            ₹ <s className="text-gray-400">999</s>{" "}
            <span className="text-red-500 font-bold">FREE</span>
          </span>
        </div>

        {/* CTA */}
        <a
          href="#hero-cta"
          className="bg-blue-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-800 transition"
        >
          Secure Your Spot
        </a>

      </div>
    </nav>
  );
}