import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";

type Card = { 
  num: string; 
  title: string; 
  desc: string; 
  hoverTitle: string; 
  slug: string; 
  image: string; 
};

const cards: Card[] = [
  { 
    num: "16+", 
    title: "Commercial Design", 
    desc: "FUNCTIONAL AND VISUALLY COMPELLING SPACES FOR OFFICES, RETAIL STORES, HOSPITALITY, AND BUSINESSES.", 
    hoverTitle: "COMMERCIAL PROJECTS DONE", 
    slug: "modern-co-working-space", 
    image: "/images/home/about/about_image-1.webp" 
  },
  { 
    num: "35+", 
    title: "Residential Design", 
    desc: "THOUGHTFULLY DESIGNED HOMES INCLUDING VILLAS, APARTMENTS, AND PRIVATE RESIDENCES.", 
    hoverTitle: "RESIDENTIAL PROJECTS DONE", 
    slug: "luxury-villa", 
    image: "/images/home/about/about_image-2.webp" 
  },
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
        const w = cursorRef.current.offsetWidth || 140;
        const h = cursorRef.current.offsetHeight || 38;
        cursorRef.current.style.transform = `translate(${e.clientX - rect.left - w / 2}px, ${e.clientY - rect.top - h / 2}px)`;
      }
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-4 lg:px-6 xl:px-8 mx-auto max-w-[1600px]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SplitHeading as="h2" className="uppercase text-[#4F4742] font-medium text-[24px] leading-[26px] md:text-[30px] md:leading-[36px] lg:text-[40px] lg:leading-[52px] tracking-[-0.4px]" type="words">
          Project expertise
        </SplitHeading>
        <FadeIn delay={0.2} className="uppercase mt-4 text-[12px] leading-[14px] tracking-[-0.3px] md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[21px] text-muted-foreground">
          Two disciplines, delivered with equal precision
        </FadeIn>
      </div>

      <div
        ref={wrapRef}
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Custom cursor styled as a backdrop-blur pill button */}
        <div
          ref={cursorRef}
          className={`hidden lg:flex pointer-events-none absolute top-0 left-0 z-30 items-center justify-center gap-1.5 px-4 py-2 rounded-[14px] bg-white/15 backdrop-blur-md text-[16px] font-display text-[#F0EBE6] font-medium transition-opacity duration-200 ${inside ? "opacity-100" : "opacity-0"}`}
        >
          View Project <ArrowUpRight className="w-5 h-5" />
        </div>

        {cards.map((c) => (
          <FadeIn key={c.slug}>
            <Link
              to={`/projects/${c.slug}`}
              onMouseEnter={() => setInside(true)}
              onMouseLeave={() => setInside(false)}
              className="group relative block h-[440px] lg:h-[520px] overflow-hidden lg:hide-cursor"
            >
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/60 transition-all duration-500" />
              
              {/* Default bottom-left (Fades & translates out to bottom on hover) */}
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-[#F0EBE6] transition-all duration-500 group-hover:translate-y-16 group-hover:opacity-0">
                <h3 className="font-display font-medium text-[24px] sm:text-[28px] md:text-[32px] leading-tight uppercase tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] opacity-80 uppercase leading-relaxed max-w-sm">
                  {c.desc}
                </p>
              </div>

              {/* Hover content (Slides down from top to center) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#F0EBE6] pointer-events-none">
                {/* Number & Title */}
                <div className="opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[750ms] ease-[cubic-bezier(0.25,1,0.5,1)] delay-[50ms]">
                  <div className="font-display font-medium text-[60px] sm:text-[80px] md:text-[100px] leading-[70px] sm:leading-[90px] md:leading-[110px] text-white">
                    {c.num}
                  </div>
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] font-display uppercase mt-3 font-medium text-white">
                    {c.hoverTitle}
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
