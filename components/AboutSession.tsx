"use client";

const ABOUT_CARDS = [
  {
    icon: "📈",
    title: "Understand Why Claude is Trending",
    desc: "Discover why professionals and businesses are rapidly adopting Claude, and what makes it one of the most talked about AI tools today.",
  },
  {
    icon: "🔄",
    title: "Learn What Makes Claude Different",
    desc: "Explore how Claude stands apart from other AI tools through stronger reasoning, longer context handling, better writing quality, and practical workflows.",
  },
  {
    icon: "⚡",
    title: "Use Claude More Efficiently",
    desc: "Master time saving prompts, smart commands, and hidden productivity hacks to get better outputs in less time.",
  },
  {
    icon: "💼",
    title: "Apply Claude Across Careers",
    desc: "Learn how Claude can support tasks in Finance, HR, Marketing, Sales, and everyday business operations.",
  },
];

export default function AboutSession() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-black text-gray-900 mb-9">
          About the <span className="text-blue-900">Session</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {ABOUT_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4 items-start"
            >
              {/* Icon */}
              <div className="bg-blue-50 rounded-lg p-2 text-xl shrink-0">
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-extrabold text-gray-900 mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}