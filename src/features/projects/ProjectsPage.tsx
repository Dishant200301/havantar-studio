import { useState, useMemo } from "react";
import SEO from "@/components/common/SEO";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import { cn } from "@/lib/utils";

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
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden">
        <div className="ph absolute inset-0" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative h-full flex items-center justify-center px-6">
          <SplitHeading
            as="h1"
            className="uppercase text-[#F0EBE6] font-medium tracking-tight leading-[1] text-center"
            type="words"
          >
            <span style={{ fontSize: "clamp(44px,7vw,96px)" }}>Project Portfolio</span>
          </SplitHeading>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-20">
        <FadeIn className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="uppercase text-[#4F4742] font-medium" style={{ fontSize: "clamp(28px,4vw,52px)", lineHeight: 1.05 }}>
            Projects that define space
          </h2>
          <p className="mt-4 uppercase text-[13px] tracking-[0.1em] text-[#7a706a]">
            A curated selection of residential and commercial work
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center gap-2 mb-12">
          {filters.map((v) => (
            <button
              key={v}
              onClick={() => setF(v)}
              className={cn(
                "px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.1em] transition-colors",
                f === v
                  ? "bg-[#504843] text-[#F0EBE6]"
                  : "bg-transparent text-[#4F4742] border border-[#4F4742]/30 hover:bg-[#4F4742]/5"
              )}
            >
              {v}
            </button>
          ))}
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {shown.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
