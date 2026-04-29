"use client";

const SCHEDULE = [
  { time: "11:00 AM", topic: "Introduction to Claude & why it's trending globally" },
  { time: "11:15 AM", topic: "Claude vs Other AI Tools: Key differences explained" },
  { time: "11:45 AM", topic: "Hands-on tips, prompts & productivity workflows" },
  { time: "12:10 PM", topic: "Real use cases across Finance, HR, Marketing & Sales" },
];

export default function SessionSchedule() {
  return (
    <section className="bg-gray-50 px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-black text-gray-900 mb-7">
          Session <span className="text-blue-900">Schedule</span>
        </h2>

        {/* Gradient Card */}
        <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 rounded-2xl p-7 border border-indigo-200">
          
          <div className="flex flex-col gap-3">
            {SCHEDULE.map((item) => (
              <div
                key={item.time}
                className="bg-white rounded-lg px-5 py-4 flex items-center gap-5"
              >
                {/* Time */}
                <span className="bg-gray-100 border border-gray-200 rounded-md px-3 py-1 text-xs font-bold text-gray-700 whitespace-nowrap">
                  {item.time}
                </span>

                {/* Topic */}
                <span className="text-sm text-gray-900 font-medium">
                  {item.topic}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}