const items = [
  "150+ Projects Completed",
  "12+ Years Experience",
  "Award Winning Designs",
  "100% Client Satisfaction",
];

export default function MarqueeStrip() {
  const track = [...items, ...items, ...items, ...items];
  return (
    <section className="border-y border-[#4F4742]/15 py-6 overflow-hidden bg-[#F0EBE6]">
      <div className="flex whitespace-nowrap animate-marquee">
        {track.map((t, i) => (
          <span
            key={i}
            className="uppercase text-[#4F4742] px-10"
            style={{ fontSize: 23, lineHeight: "31px", fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
