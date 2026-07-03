import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tiles = [
  { size: "w-56 h-72", top: "10%", left: "8%", depth: 0.3 },
  { size: "w-72 h-56", top: "25%", left: "55%", depth: 0.6 },
  { size: "w-60 h-80", top: "55%", left: "12%", depth: 0.45 },
  { size: "w-80 h-60", top: "70%", left: "62%", depth: 0.7 },
  { size: "w-52 h-52", top: "40%", left: "38%", depth: 0.9 },
  { size: "w-64 h-44", top: "85%", left: "30%", depth: 0.5 },
];

export default function Works() {
  const secRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".work-tile");
      items.forEach((el) => {
        const d = parseFloat(el.dataset.depth || "0.5");
        gsap.to(el, {
          xPercent: -60 * d,
          yPercent: -80 * d,
          ease: "none",
          scrollTrigger: {
            trigger: secRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
      gsap.to(".works-bg-text", {
        xPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: secRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={secRef}
      className="relative bg-[#F0EBE6] overflow-hidden"
      style={{ height: "140vh", perspective: "1200px" }}
    >
      <div
        className="works-bg-text absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ willChange: "transform" }}
      >
        <span
          className="text-[#4F4742]/10 font-medium"
          style={{ fontFamily: "'Times New Roman', serif", fontSize: "clamp(200px,32vw,540px)", lineHeight: 1 }}
        >
          WORKS
        </span>
      </div>
      <div className="absolute inset-0">
        {tiles.map((t, i) => (
          <div
            key={i}
            className={`work-tile ph rounded-xl absolute ${t.size}`}
            data-depth={t.depth}
            style={{ top: t.top, left: t.left, willChange: "transform" }}
          />
        ))}
      </div>
    </section>
  );
}
