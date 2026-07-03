import { Lightbulb, PencilRuler, Hammer, KeySquare } from "lucide-react";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";

const steps = [
  { n: "01", title: "Discovery", desc: "Understanding your brief, site and aspirations.", Icon: Lightbulb },
  { n: "02", title: "Design", desc: "Concept, materials and detailed drawings.", Icon: PencilRuler },
  { n: "03", title: "Build", desc: "Coordinating contractors with precision.", Icon: Hammer },
  { n: "04", title: "Handover", desc: "Styling, final walkthrough and delivery.", Icon: KeySquare },
];

export default function Process() {
  return (
    <section className="bg-[#F6F2EC] py-20 lg:py-28 px-6 lg:px-16">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SplitHeading as="h2" className="uppercase font-medium text-[#4F4742]" type="words">
          <span style={{ fontSize: "clamp(30px,5vw,60px)", lineHeight: 1.05 }}>Clear design process</span>
        </SplitHeading>
        <FadeIn delay={0.2} className="mt-4 uppercase text-[13px] tracking-[0.12em] text-[#7a706a]">
          Four stages from first sketch to final key
        </FadeIn>
      </div>

      <div className="group/all grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.08}>
            <div className="relative h-[420px] lg:h-[480px] rounded-xl overflow-hidden">
              {/* base image */}
              <div className="absolute inset-0 ph transition-transform duration-700 group-hover/all:scale-105" />
              {/* secondary image sliding bottom→top */}
              <div className="absolute inset-0 ph translate-y-full group-hover/all:translate-y-0 transition-transform duration-[900ms] ease-[cubic-bezier(.7,0,.15,1)]" style={{ background: "linear-gradient(135deg,#c9bfae,#e6ddcf)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Top-right icon → center on hover */}
              <div className="absolute top-4 right-4 w-11 h-11 bg-white/25 backdrop-blur-md rounded-lg flex items-center justify-center transition-all duration-500 group-hover/all:top-1/2 group-hover/all:right-1/2 group-hover/all:translate-x-1/2 group-hover/all:-translate-y-[calc(50%+20px)]">
                <s.Icon className="w-5 h-5 text-[#F0EBE6]" />
              </div>
              {/* Centered heading (on hover) */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-[#F0EBE6] opacity-0 translate-y-6 group-hover/all:opacity-100 group-hover/all:translate-y-6 transition-all duration-500">
                <div className="uppercase" style={{ fontSize: 22, lineHeight: 1.1 }}>{s.title}</div>
              </div>

              {/* Step number bottom-left, moves up on hover */}
              <div className="absolute bottom-6 left-6 text-[#F0EBE6]/90 uppercase text-[13px] tracking-[0.15em] transition-transform duration-500 group-hover/all:-translate-y-6">
                Step {s.n}
              </div>

              {/* Default bottom title/desc — slides out */}
              <div className="absolute bottom-6 left-6 right-6 text-[#F0EBE6] transition-all duration-500 group-hover/all:translate-y-16 group-hover/all:opacity-0" style={{ marginTop: 24 }}>
                <div className="uppercase mt-4" style={{ fontSize: 20, lineHeight: 1.15 }}>{s.title}</div>
                <div className="text-[13px] opacity-80 mt-1">{s.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
