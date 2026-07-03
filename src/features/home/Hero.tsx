import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/app-button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(imgRef.current, { scale: 1.15 });
        gsap.set([leftRef.current, rightRef.current], { opacity: 0, xPercent: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: false,
          },
        });
        tl.to(imgRef.current, { scale: 1, ease: "none" }, 0)
          .to(contentRef.current, { yPercent: -20, ease: "none" }, 0)
          .to(imgRef.current, { scale: 0.8, ease: "none" }, 0.5)
          .to(leftRef.current, { opacity: 1, xPercent: -8, ease: "none" }, 0.5)
          .to(rightRef.current, { opacity: 1, xPercent: 8, ease: "none" }, 0.5);
      }, wrapRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <div ref={wrapRef} className="relative lg:h-[calc(90vh+40vh)]">
        <div className="lg:sticky lg:top-[68px] lg:h-[90vh]">
          <div className="relative flex items-stretch justify-center gap-2 p-[6px] h-[90vh]">
            <div ref={leftRef} className="hidden lg:block ph rounded-xl w-1/4 self-stretch" />
            <div
              ref={imgRef}
              className="relative flex-1 ph rounded-xl overflow-hidden origin-center"
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div
                ref={contentRef}
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14"
              >
                <div className="grid md:grid-cols-2 gap-8 items-end">
                  <h1
                    className="font-normal text-[#F0EBE6]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(38px,7vw,80px)",
                      lineHeight: 1.1,
                    }}
                  >
                    Where Architecture Meets Experience
                  </h1>
                  <div className="flex flex-col gap-6 md:items-end md:text-right">
                    <p className="text-[#F0EBE6]/90 max-w-md" style={{ fontSize: 16, lineHeight: "21px" }}>
                      Based in Dubai, we design residential and commercial spaces that elevate how people live, work, and interact with their environment.
                    </p>
                    <div className="flex gap-3">
                      <Button variant="light">View Projects</Button>
                      <Button variant="glass">Book Consultation</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={rightRef} className="hidden lg:block ph rounded-xl w-1/4 self-stretch" />
          </div>
        </div>
      </div>
      <div className="border-t border-[#4F4742]/15 mx-6" />
    </>
  );
}
