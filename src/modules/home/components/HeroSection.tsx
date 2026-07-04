import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkButton } from "@/modules/core/components/ui/app-button";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const innerImgRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        // Initial setup for scroll scale and slide animation
        gsap.set(imgRef.current, {
          xPercent: -50,
          yPercent: -50,
          width: "100%",
          height: "100%",
          borderRadius: "10px"
        });
        if (innerImgRef.current) {
          gsap.set(innerImgRef.current, {
            scale: 1.1
          });
        }
        gsap.set(leftRef.current, {
          xPercent: -50,
          yPercent: -50,
          x: "-60vw",
          opacity: 0,
          scale: 0.9
        });
        gsap.set(rightRef.current, {
          xPercent: -50,
          yPercent: -50,
          x: "60vw",
          opacity: 0,
          scale: 0.9
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 68px",
            end: "+=100%",
            scrub: 1.1,
            pin: true,
          },
        });

        // Content fades and slides down early
        tl.to(contentRef.current, {
          y: 150,
          opacity: 0,
          duration: 0.25,
          ease: "power2.inOut",
        }, 0);

        // Center card scales down
        tl.to(imgRef.current, {
          width: "55vw",
          height: "31.3vw",
          borderRadius: "10px",
          duration: 1.0,
          ease: "power2.inOut",
        }, 0);

        // Inner image parallax zoom out
        if (innerImgRef.current) {
          tl.to(innerImgRef.current, {
            scale: 1.0,
            duration: 1.0,
            ease: "power2.inOut",
          }, 0);
        }

        // Left/Right side images slide in smoothly
        tl.to(leftRef.current, {
          x: "-38.5vw",
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.inOut",
        }, 0.2)
        .to(rightRef.current, {
          x: "38.5vw",
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.inOut",
        }, 0.2);
      }, wrapRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <div ref={wrapRef} className="relative w-full lg:h-[calc(100vh-68px)] p-[12px] box-border bg-bg">
        {/* Sticky viewport frame on desktop, static height block on mobile/tablet */}
        <div className="relative w-full h-[80vh] sm:h-[85vh] lg:h-full lg:overflow-hidden flex items-center justify-center rounded-[10px]">
          
          {/* Left Side Image (Desktop only) */}
          <div
            ref={leftRef}
            className="absolute top-1/2 left-1/2 w-[250px] h-[350px] lg:w-[18vw] lg:h-[25vw] rounded-[10px] overflow-hidden hidden lg:block"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src="/images/home/hero/hero_left_image.webp"
              alt="Cozy lounge daybed design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Main Card (All devices) */}
          <div
            ref={imgRef}
            className="relative lg:absolute lg:top-1/2 lg:left-1/2 w-full h-full lg:z-10 rounded-[10px] overflow-hidden origin-center"
            style={{ willChange: "width, height, transform" }}
          >
            <img
              ref={innerImgRef}
              src="/images/home/hero/hero_center_image.webp"
              alt="Luxury living room panels and sofa"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/10" />

            {/* Main Content inside Center Card */}
            <div
              ref={contentRef}
              className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14 text-[#F0EBE6]"
            >
              <div className="w-full max-w-[1600px] mx-auto flex flex-col">
                <div className="grid lg:grid-cols-2 xl:grid-cols-[1.3fr_0.7fr] gap-8 items-end w-full">
                  {/* Heading (left-aligned) */}
                  <div>
                    <h1
                      className="font-normal text-[#F0EBE6] text-[36px] sm:text-[54px] lg:text-[46px] xl:text-[62px] 2xl:text-[80px] leading-[42px] sm:leading-[60px] lg:leading-[52px] xl:leading-[70px] 2xl:leading-[88px] tracking-[-1.5px] sm:tracking-[-2.2px] lg:tracking-[-2px] xl:tracking-[-2.6px] 2xl:tracking-[-3.2px]"
                      style={{ fontFamily: '"Inter Display", "Inter Display Placeholder", "Inter", sans-serif' }}
                    >
                      Where Architecture <br className="hidden lg:inline" /> Meets Experience
                    </h1>
                  </div>

                  {/* Description and Buttons (right-aligned on large screens) */}
                  <div className="flex flex-col gap-6 lg:items-start lg:ml-auto max-w-[441px] w-full">
                    <p
                      className="text-[#F0EBE6] max-w-[441px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[21px] tracking-[-0.3px]"
                      style={{ fontFamily: '"Inter Display", "Inter Display Placeholder", "Inter", sans-serif' }}
                    >
                      Based in Dubai, we design residential and commercial spaces that elevate how people live, work, and interact with their environment
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <LinkButton
                        to="/projects"
                        variant="light"
                        className="px-5 py-3 font-inter font-normal tracking-[-0.2px] text-[#4F4742] text-[15px] uppercase rounded-full"
                      >
                        View Projects
                      </LinkButton>
                      <LinkButton
                        to="/contact"
                        variant="glass"
                        className="px-5 py-3 font-inter font-normal tracking-[-0.2px] text-[#F0EBE6] text-[15px] uppercase rounded-full bg-[#4F4742]/80"
                      >
                        Book Consultation
                      </LinkButton>
                    </div>
                  </div>
                </div>

                {/* Bottom Horizontal Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: "linear" }}
                  className="w-full h-px bg-[#F0EBE6] mt-8 opacity-45 origin-center"
                />
              </div>
            </div>
          </div>

          {/* Right Side Image (Desktop only) */}
          <div
            ref={rightRef}
            className="absolute top-1/2 left-1/2 w-[250px] h-[350px] lg:w-[18vw] lg:h-[25vw] rounded-[10px] overflow-hidden hidden lg:block"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src="/images/home/hero/hero_right_image.webp"
              alt="Striped armchair design set"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </>
  );
}
