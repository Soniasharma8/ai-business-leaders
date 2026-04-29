"use client";

const SPEAKER_POINTS = [
  "AI Programs Head at IIDE, leading AI curriculum and skill-building programs",
  "Founder at Adamant, a consulting practice for Founders & CXOs building their personal brands",
  "Former Head of Culture Transformation, Communications, PR & Schbang Academy at Schbang",
  "Ex-Founder at Felicity, a creative branding agency",
  "Trained over 5,000+ students and professionals at top institutions and companies like NMIMS, Sun Pharma, Britannia, and Simpolo",
];

export default function Speaker() {
  return (
    <section className="bg-blue-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-black text-white mb-7">
            Meet Your Host - Anshul Sharma
          </h2>

          <ul className="flex flex-col gap-4">
            {SPEAKER_POINTS.map((point) => (
              <li key={point} className="flex gap-3 items-start">
                
                <span className="text-blue-300 mt-1">✓</span>

                <span className="text-blue-100 text-sm leading-relaxed">
                  {point}
                </span>

              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-4xl p-11">

          {/* Image Placeholder */}
          <div className="h-44 bg-gray-100 rounded-xl flex items-center justify-center text-6xl">
            <img src="\images\image1.png" alt="" />
          </div>

        </div>
      </div>
    </section>
  );
}