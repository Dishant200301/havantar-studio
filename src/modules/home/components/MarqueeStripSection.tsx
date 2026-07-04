const items = [
  "Award winning designs",
  "100% Client satisfaction",
  "150+ Projects Completed",
  "12+ Years Experience",
];

export default function MarqueeStrip() {
  const track = [...items, ...items, ...items, ...items];
  return (
    <section className="py-4 overflow-hidden">
      <div className="flex whitespace-nowrap items-center gap-6 animate-[marquee_10s_linear_infinite]">
        {track.map((t, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="uppercase text-[#4F4742] text-[12px] lg:text-[22px] leading-[16px] lg:leading-[31px] font-normal tracking-[-0.3px] font-inter">
              {t}
            </span>
            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full border-[1.5px] border-[#4F4742] shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
