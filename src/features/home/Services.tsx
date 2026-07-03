import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";
import { LinkButton, Button } from "@/components/ui/app-button";

type Service = {
  title: string;
  desc: string;
  hours: string;
  location: string;
  full: string;
  features: string[];
  price: string;
};

const services: Service[] = [
  {
    title: "Architectural",
    desc: "Designing new buildings, extensions, and full architectural masterplans.",
    hours: "Mon–Fri · 9am to 6pm",
    location: "Dubai, UAE",
    full: "Full architectural design service from initial concept through detailed drawings and construction supervision — with a focus on light, proportion and material honesty.",
    features: ["Concept & feasibility", "Detailed drawings", "Permits & approvals", "Construction supervision"],
    price: "From €18,000",
  },
  {
    title: "Interior Design",
    desc: "Curated interiors — materiality, atmosphere, and thoughtful detail.",
    hours: "Mon–Fri · 9am to 6pm",
    location: "Dubai, UAE",
    full: "End-to-end interior design tailored to your daily rituals — space planning, palette, joinery, lighting and styling.",
    features: ["Space planning", "Materials & finishes", "Custom joinery", "Lighting & styling"],
    price: "From €12,000",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transforming existing spaces with clarity, restraint and precision.",
    hours: "Mon–Fri · 9am to 6pm",
    location: "Dubai, UAE",
    full: "Full renovation, remodeling and adaptive re-use of homes and workspaces.",
    features: ["Structural survey", "Concept redesign", "Contractor coordination", "Handover & styling"],
    price: "From €22,000",
  },
  {
    title: "3D Visualization",
    desc: "Photoreal renders and walkthroughs of your future space.",
    hours: "Mon–Fri · 9am to 6pm",
    location: "Remote",
    full: "Hyper-realistic 3D visualization and animated walkthroughs so you can experience the design before it is built.",
    features: ["Photoreal stills", "Animated walkthroughs", "Material tests", "VR-ready outputs"],
    price: "From €4,500",
  },
  {
    title: "Space Planning",
    desc: "Optimising flow, function and proportion of any interior.",
    hours: "Mon–Fri · 9am to 6pm",
    location: "Dubai, UAE",
    full: "Bespoke space-planning studies that unlock the full potential of any interior — for homes, offices and retail.",
    features: ["Zoning studies", "Furniture layouts", "Flow diagrams", "Optimisation proposals"],
    price: "From €3,000",
  },
  {
    title: "Construction Consultation",
    desc: "On-site advisory and construction quality supervision.",
    hours: "Mon–Fri · 9am to 6pm",
    location: "On-site",
    full: "Independent on-site advisory covering quality assurance, contractor coordination and technical review.",
    features: ["Site visits", "Quality assurance", "Contractor coordination", "Technical reviews"],
    price: "From €6,000",
  },
];

function Row({ s, onOpen }: { s: Service; onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="group cursor-pointer relative overflow-hidden border-b border-[#4F4742]/15 py-7 lg:py-8"
    >
      <div className="flex items-start lg:items-center gap-6 lg:gap-10 flex-col lg:flex-row px-4 lg:px-6">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(.7,0,.15,1)] pointer-events-none">
          <div className="ph w-40 h-24 lg:w-48 lg:h-28 rounded-md" />
        </div>
        <div className="flex-1 transition-transform duration-500 ease-out group-hover:lg:translate-x-52">
          <div className="uppercase text-[#4F4742]" style={{ fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.15 }}>
            {s.title}
          </div>
          <div className="mt-2 text-[13px] text-[#7a706a] max-w-lg">{s.desc}</div>
        </div>
        <span className="relative w-10 h-10 rounded-full border border-[#4F4742]/40 overflow-hidden flex items-center justify-center shrink-0">
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute transition-transform duration-500 ease-[cubic-bezier(.7,0,.15,1)] group-hover:translate-x-6 group-hover:-translate-y-6" />
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(.7,0,.15,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="services" className="bg-[#F6F2EC] py-20 lg:py-28">
      <div className="text-center max-w-3xl mx-auto mb-14 px-6">
        <SplitHeading as="h2" className="uppercase font-medium text-[#4F4742]" type="words">
          <span style={{ fontSize: "clamp(30px,5vw,60px)", lineHeight: 1.05 }}>Our services</span>
        </SplitHeading>
        <FadeIn delay={0.2} className="mt-4 uppercase text-[13px] tracking-[0.12em] text-[#7a706a]">
          Six disciplines. One considered process.
        </FadeIn>
      </div>

      <div className="border-t border-[#4F4742]/15 max-w-[1400px] mx-auto px-4 lg:px-8">
        {services.map((s) => (
          <Row key={s.title} s={s} onOpen={() => setActive(s)} />
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.7, 0, 0.15, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-3xl bg-[#F0EBE6] rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="relative h-56 ph">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-6 text-[#F0EBE6]">
                      <div className="uppercase" style={{ fontSize: 28, lineHeight: 1.1 }}>{active.title}</div>
                      <div className="mt-1 text-[12px] uppercase tracking-[0.1em] opacity-80">
                        {active.hours} · {active.location}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 text-[#4F4742]">
                    <p className="leading-relaxed">{active.full}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {active.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-[13px]">
                          <Check className="w-4 h-4 text-[#504843]" /> {f}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 uppercase text-[12px] tracking-[0.1em] opacity-70">Investment</div>
                    <div className="text-xl">{active.price}</div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <LinkButton to="/contact" variant="filled" onClick={() => setActive(null)}>
                        Design Your Space
                      </LinkButton>
                      <Button variant="light" onClick={() => setActive(null)}>
                        Close
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
