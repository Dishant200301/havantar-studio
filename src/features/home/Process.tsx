import { Search, Box, Lightbulb, CheckCircle2 } from "lucide-react";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We Begin By Understanding Your Goals, Requirements, And Design Vision.",
    tag: "RESEARCH",
    Icon: Search,
    image: "/images/home/process/process-1.webp"
  },
  {
    n: "02",
    title: "Concept Development",
    desc: "Our Team Develops Layouts, Ideas, And Creative Design Directions.",
    tag: "IDEATION",
    Icon: Box,
    image: "/images/home/process/process-2.webp"
  },
  {
    n: "03",
    title: "Design Development",
    desc: "Our Team Prepares Detailed Drawings, Specifications, And Finishes.",
    tag: "MODELLING",
    Icon: Lightbulb,
    image: "/images/home/process/process-3.webp"
  },
  {
    n: "04",
    title: "Execution",
    desc: "We Guide Implementation To Ensure The Final Result Reflects The Original Design Vision.",
    tag: "DELIVERY",
    Icon: CheckCircle2,
    image: "/images/home/process/process-4.webp"
  },
];

export default function Process() {
  return (
    <section className="py-10 lg:py-10 px-4 lg:px-6 xl:px-8 max-w-[1600px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SplitHeading as="h2" className="uppercase text-[#4F4742] font-medium text-[24px] leading-[26px] md:text-[30px] md:leading-[36px] lg:text-[40px] lg:leading-[52px] tracking-[-0.4px]" type="words">
                  Clear Design Process
        </SplitHeading>
        <FadeIn delay={0.2} className="xl:max-w-lg mx-auto uppercase mt-4 text-[12px] leading-[14px] tracking-[-0.3px] md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[21px] text-muted-foreground">
                  A COLLABORATIVE APPROACH FROM CONCEPT TO COMPLETION
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 max-w-[1500px] mx-auto">
        {steps.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.08} className="w-full">
            <div className="group relative h-[330px] sm:h-[330px] lg:h-[330px] overflow-hidden cursor-pointer shadow-sm bg-[#4C443F] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-md">
              {/* Base background image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-60"
              />
              
              {/* Default dark overlay gradient with backdrop blur at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[110px] bg-linear-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[3.75px] transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />

              {/* Hover Backdrop Blur Overlay */}
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[2.75px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />

              {/* Hover Background Image (slides up from bottom to center) */}
              <img
                src="/images/home/process/hover-image.svg"
                alt=""
                className="absolute top-1/2 left-1/2 w-4/5 h-4/5 object-contain pointer-events-none transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-1/2 translate-y-[60%] opacity-0 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-35"
              />

              {/* Unified Icon Container: transitions from top-right to center-top on hover */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#f0ebe6]  backdrop-blur-md rounded-[10px] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 group-hover:top-[38%] group-hover:right-[calc(50%-24px)] group-hover:w-12 group-hover:h-12">
                <s.Icon className="w-8 h-8 text-[#4C443F] group-hover:text-[#4C443F] transition-colors duration-700" strokeWidth={1.5} />
              </div>

              {/* Default Bottom Content (slides down and fades out on hover) */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-12 group-hover:opacity-0 z-10">
                <h3 className="uppercase font-medium font-inter tracking-tight" style={{ fontSize: "20px", lineHeight: "24px" }}>
                  {s.title}
                </h3>
                <p className="text-[12px] opacity-80 mt-2 leading-relaxed tracking-[-0.24px] font-inter font-light">
                  {s.desc}
                </p>
              </div>

              {/* Hover Centered Title (slides up and fades in) */}
              <div className="absolute top-[58%] left-6 right-6 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
                <h3 className="uppercase text-[#F0EBE6] font-medium font-inter tracking-tight px-4" style={{ fontSize: "24px", lineHeight: "29px" }}>
                  {s.title}
                </h3>
              </div>

              {/* Hover Uppercase Tag (top-right, slides up/fades in) */}
              <div className="absolute top-4 right-4 text-[16px] font-normal text-white/90 uppercase font-inter opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none">
                {s.tag}
              </div>

              {/* Step number bottom-left: slides up and fades in */}
              <div className="absolute bottom-6 left-6 text-[#E2DACF] font-inter text-[14px] font-light transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none">
                {s.n}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

