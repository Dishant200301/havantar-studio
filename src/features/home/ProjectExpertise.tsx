import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";

type Card = { num: string; title: string; desc: string; slug: string };
const cards: Card[] = [
  { num: "16+", title: "Commercial Projects Done", desc: "Offices, retail and hospitality environments.", slug: "modern-co-working-space" },
  { num: "35+", title: "Residential Design", desc: "Villas, penthouses and family residences.", slug: "luxury-villa" },
];

export default function ProjectExpertise() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [inside, setInside] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - rect.left - 24}px, ${e.clientY - rect.top - 24}px)`;
      }
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="bg-[#F6F2EC] py-20 lg:py-28 px-6 lg:px-16">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SplitHeading as="h2" className="uppercase font-medium text-[#4F4742]" type="words">
          <span style={{ fontSize: "clamp(30px,5vw,60px)", lineHeight: 1.05 }}>Project expertise</span>
        </SplitHeading>
        <FadeIn delay={0.2} className="mt-4 uppercase text-[13px] tracking-[0.12em] text-[#7a706a]">
          Two disciplines, delivered with equal precision
        </FadeIn>
      </div>

      <div
        ref={wrapRef}
        onMouseEnter={() => setInside(true)}
        onMouseLeave={() => setInside(false)}
        className={`relative grid lg:grid-cols-2 gap-6 ${inside ? "lg:hide-cursor" : ""}`}
      >
        <div
          ref={cursorRef}
          className={`hidden lg:flex pointer-events-none absolute top-0 left-0 z-30 w-12 h-12 rounded-full bg-[#F0EBE6] text-[#4F4742] items-center justify-center uppercase text-[10px] tracking-[0.15em] transition-opacity duration-200 ${inside ? "opacity-100" : "opacity-0"}`}
        >
          View
        </div>

        {cards.map((c) => (
          <FadeIn key={c.slug}>
            <Link
              to={`/projects/${c.slug}`}
              className="group relative block h-[440px] lg:h-[520px] rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 ph transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 group-hover:from-black/80 transition-colors duration-500" />
              {/* Default bottom-left */}
              <div className="absolute bottom-6 left-6 text-[#F0EBE6] transition-all duration-500 group-hover:translate-y-16 group-hover:opacity-0">
                <div className="uppercase" style={{ fontSize: 22, lineHeight: 1.1 }}>{c.title}</div>
                <div className="text-[13px] opacity-80 mt-1">{c.desc}</div>
              </div>
              {/* Hover centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#F0EBE6] opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="font-medium" style={{ fontSize: "clamp(80px,10vw,140px)", lineHeight: 1 }}>{c.num}</div>
                <div className="uppercase mt-2" style={{ fontSize: 22, lineHeight: 1.2 }}>{c.title}</div>
                <span className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/25 text-[13px] uppercase tracking-[0.1em]">
                  View project <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
