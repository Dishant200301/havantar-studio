import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/common/SEO";
import FadeIn from "@/components/common/FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import { cn } from "@/lib/utils";
import MarqueeStrip from "../home/MarqueeStrip";
import CTA from "../home/CTA";
import ContactPage from "../contact/ContactPage";

const filters = ["All", "Residential", "Commercial"] as const;

export default function ProjectsPage() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const shown = useMemo(
    () => (f === "All" ? projects : projects.filter((p) => p.category === f)),
    [f]
  );
  return (
    <>
      <SEO title="Projects" description="Selected work by HavAntar Studio — residential and commercial architecture and interior design." />

      {/* Banner */}
      <section className="relative h-[88vh] min-h-[380px] overflow-hidden rounded-lg mx-[12px] mb-[12px] lg:mx-[12px] lg:my-[8px]">
        <div className="absolute inset-0">
          <img
            src="/images/project/hero.webp"
            className="w-full h-full object-cover"
            alt="Project Portfolio Hero"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center px-6">
          <FadeIn>
            <h1 className="uppercase text-[#F0EBE6] font-normal tracking-[-0.4px] leading-none text-center text-[36px] sm:text-[56px] md:text-[76px] lg:text-[80px]">
              PROJECT PORTFOLIO
            </h1>
          </FadeIn>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "linear" }}
          style={{ originX: 0.5 }}
          className="absolute bottom-16 left-10 right-10 border-b border-[#F0EBE6]"
        />
      </section>

      <MarqueeStrip/>

      <section className="px-4 lg:px-6 xl:px-8 py-20 max-w-[1600px] mx-auto">
        <FadeIn className="text-center lg:max-w-2xl mx-auto mb-10">
          <h2 className="uppercase text-[#4F4742] font-medium text-[24px] leading-[26px] md:text-[30px] md:leading-[36px] lg:text-[40px] lg:leading-[52px] tracking-[-0.4px]">
            Projects that define space
          </h2>
          <p className="uppercase mt-4 text-[12px] leading-[14px] tracking-[-0.3px] md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[21px] text-muted-foreground">
            Explore our portfolio of architectural projects crafted with precision, purpose, and attention to detail.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center lg:justify-start mb-10 max-w-full">
          <div className="inline-flex items-center p-1 bg-white rounded-md gap-0.5 sm:gap-1 max-w-full">
            {filters.map((v) => (
              <button
                key={v}
                onClick={() => setF(v)}
                className={cn(
                  "px-3.5 py-1 text-[13px] leading-[18px] sm:px-6 sm:py-1.5 sm:text-[16px] sm:leading-[21px] font-medium font-display uppercase transition-all duration-300 cursor-pointer select-none whitespace-nowrap",
                  f === v
                    ? "bg-[#504843] text-white rounded-sm"
                    : "bg-transparent text-[#4F4742]/55 hover:text-[#4F4742]"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="grid lg:grid-cols-2 gap-6 md:gap-6">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <CTA/>
      <ContactPage/>
    </>
  );
}
