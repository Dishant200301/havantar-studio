import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowUpRight, Clock, MapPin } from "lucide-react";
import SplitHeading from "@/modules/core/components/SplitHeading";
import FadeIn from "@/modules/core/components/FadeIn";
import { LinkButton } from "@/modules/core/components/ui/app-button";

import { services, type Service } from "@/modules/home/data/servicesData";

function Row({ s, onOpen }: { s: Service; onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="group cursor-pointer relative overflow-hidden border-b border-[#9b9490] py-6 lg:py-0"
    >
      {/* Laptop view structure */}
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:pl-0 lg:pr-6 lg:gap-10 py-6 lg:py-12 relative w-full">
        {/* Hover image: slides from left to right */}
        <div className="absolute left-0 top-0 bottom-0 w-72 overflow-hidden opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
        </div>

        {/* Text Container: shifts right to clear the image */}
        <div className="flex-1 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[320px]">
          <div className="uppercase text-[#453E3A] group-hover:text-[#67615c] font-normal tracking-[-0.4px]" style={{ fontSize: "30.9px", lineHeight: "44px" }}>
            {s.title}
          </div>
          <div className="mt-2 text-[16.3px] leading-[23px] tracking-[-0.3px] text-[#453E3A] group-hover:text-[#67615c] max-w-xl">
            {s.desc}
          </div>
        </div>

        {/* Double-arrow button on right */}
        <div className="relative w-8 h-8 rounded-full border border-[#4F4742] overflow-hidden flex items-center justify-center shrink-0">
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-6 group-hover:-translate-y-6" />
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
      </div>

      {/* Tablet & Mobile stacked view structure */}
      <div className="flex flex-col lg:hidden gap-3 px-2 py-4">
        {/* Arrow button top-left */}
        <div className="relative w-8 h-8 rounded-full border border-[#4F4742] overflow-hidden flex items-center justify-center shrink-0 self-start">
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-6 group-hover:-translate-y-6 group-active:translate-x-6 group-active:-translate-y-6" />
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-active:translate-x-0 group-active:translate-y-0" />
        </div>

        {/* Title */}
        <div className="uppercase text-[#453E3A] font-normal tracking-[-0.4px] text-[20px] leading-[28px] md:text-[26px] md:leading-[36px]">
          {s.title}
        </div>

        {/* Description */}
        <div className="text-[13px] leading-[18px] md:text-[15px] md:leading-[21px] tracking-[-0.3px] text-[#453E3A]">
          {s.desc}
        </div>
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
    <section id="services" className="py-20 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-14 px-6">
        <SplitHeading as="h2" className="uppercase text-[#4F4742] font-medium text-[24px] leading-[26px] md:text-[30px] md:leading-[36px] lg:text-[40px] lg:leading-[52px] tracking-[-0.4px]" type="words">
          Our services
        </SplitHeading>
        <FadeIn delay={0.2} className="xl:max-w-md mx-auto uppercase mt-4 text-[12px] leading-[14px] tracking-[-0.3px] md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[21px] text-muted-foreground">
          END-TO-END DESIGN SERVICES FROM CONCEPT TO COMPLETION
        </FadeIn>
      </div>

      <div className=" max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8">
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
                className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-md bg-[#F0EBE6] rounded-[10px] p-[8px] flex flex-col max-h-[90vh] shadow-2xl"
                >
                  {/* Modal Header Image */}
                  <div className="relative h-40 sm:h-60 w-full rounded-[10px] overflow-hidden shrink-0">
                    <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />
                    
                    <button
                      onClick={() => setActive(null)}
                      className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="uppercase text-[18px] sm:text-[24px] font-medium leading-[22px] sm:leading-[26px] tracking-tight font-inter">
                        {active.modalTitle}
                      </h3>
                      <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1.5 text-[#f0ebe6] text-[12px] sm:text-[14px] font-normal font-inter leading-[15px] sm:leading-[17px]">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0ebe6]" />
                          <span>{active.hours}</span>
                        </div>
                        <span className="hidden sm:inline text-[#cccccc]">|</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0ebe6]" />
                          <span>{active.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="px-2 py-4 overflow-y-auto flex-1 flex flex-col gap-4 sm:gap-5 text-[#453E3A]">
                    <p className="font-inter font-medium text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-[#453E3A]">
                      {active.full}
                    </p>
                    
                    <div className="flex flex-col gap-3">
                      <h4 className="font-inter font-medium text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] text-[#453E3A] uppercase tracking-wider">
                        Includes
                      </h4>
                      <div className="flex flex-col gap-2">
                        {active.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3 font-inter font-normal text-[12px] sm:text-[13px] leading-[15px] sm:leading-[16px] text-[#453E3A]">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#453E3A] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="mt-auto p-2 rounded-lg flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 shrink-0">
                    <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start px-1 sm:px-0">
                      <span className="font-inter font-normal text-[11px] sm:text-[12px] leading-[13px] sm:leading-[14px] text-[#453E3A] tracking-wider">Starting From</span>
                      <span className="font-inter font-medium text-[14px] sm:text-[16px] leading-[17px] sm:leading-[19px] text-[#453E3A] mt-0.5">{active.price}</span>
                    </div>
                    <LinkButton
                      to="/contact"
                      variant="light"
                      className="bg-white text-[#453E3A] text-[13px] font-normal px-4 py-2.5 rounded-full shrink-0 w-full sm:w-auto text-center"
                      onClick={() => setActive(null)}
                    >
                      DESIGN YOUR SPACE
                    </LinkButton>
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

