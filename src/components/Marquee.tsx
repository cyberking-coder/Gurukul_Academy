const ITEMS = [
  "Maths",
  "Science",
  "Class 9 & 10",
  "Class 11 & 12",
  "PCM",
  "NEET",
  "JEE",
  "Crash Courses",
  "Personal Mentoring",
  "Board Excellence",
  "Small Batches",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-white/10 bg-gold py-4 overflow-hidden -rotate-1 scale-[1.02]">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center px-6 shrink-0">
            <span className="font-heading text-ink font-semibold text-lg md:text-xl whitespace-nowrap">
              {item}
            </span>
            <span className="mx-6 text-ink/40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
