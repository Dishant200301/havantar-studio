import type { ReactNode } from "react";
import SEO from "@/components/common/SEO";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalLayout({ title, updated, children }: Props) {
  return (
    <>
      <SEO title={title} description={`${title} for HavAntar Studio.`} />
      <section className="px-6 lg:px-16 py-24 max-w-4xl mx-auto">
        <SplitHeading as="h1" className="uppercase font-medium text-[#4F4742]" type="words">
          <span style={{ fontSize: "clamp(34px,5vw,64px)", lineHeight: 1.05 }}>{title}</span>
        </SplitHeading>
        <FadeIn className="mt-3 uppercase text-[12px] tracking-[0.12em] text-[#7a706a]">
          Last updated: {updated}
        </FadeIn>
        <FadeIn className="mt-10 space-y-6 text-[#4F4742] leading-relaxed">
          {children}
        </FadeIn>
      </section>
    </>
  );
}
