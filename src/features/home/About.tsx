import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-[#F6F2EC] py-20 lg:py-32 px-6 lg:px-16">
      <div className="grid lg:grid-cols-3 gap-8 items-center max-w-[1400px] mx-auto">
        <FadeIn className="order-2 lg:order-1">
          <div className="ph aspect-square rounded-md overflow-hidden group">
            <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
          </div>
        </FadeIn>
        <div className="order-1 lg:order-2 text-center">
          <SplitHeading
            as="h2"
            className="uppercase font-medium text-[#4F4742] tracking-tight"
            type="words"
          >
            <span style={{ fontSize: "clamp(28px,4.5vw,60px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Designing timeless spaces with purpose
            </span>
          </SplitHeading>
          <FadeIn delay={0.2} className="mt-6 max-w-[480px] mx-auto">
            <p className="uppercase text-[13px] tracking-[0.08em] leading-[1.7] text-[#7a706a]">
              A studio rooted in craft, quiet materiality and thoughtful proportion — designing residential and commercial spaces that endure.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.3} className="order-3">
          <div className="ph aspect-square rounded-md overflow-hidden group">
            <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
