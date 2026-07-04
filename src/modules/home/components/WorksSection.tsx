import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/modules/core/data/projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const secRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const [dimensions, setDimensions] = useState({
    cardWidth: 320,
    cardHeight: 230,
    radius: 360,
    perspective: 1400,
  });

  // Handle responsiveness and dynamic scaling
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        // Mobile
        setDimensions({
          cardWidth: 170,
          cardHeight: 122,
          radius: 195,
          perspective: 900,
        });
      } else if (w < 1024) {
        // Tablet
        setDimensions({
          cardWidth: 240,
          cardHeight: 172,
          radius: 270,
          perspective: 1100,
        });
      } else {
        // Desktop
        setDimensions({
          cardWidth: 320,
          cardHeight: 230,
          radius: 360,
          perspective: 1400,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Synchronize ref array with the exact project length
    cardsRef.current = cardsRef.current.slice(0, projects.length);

    const sec = secRef.current;
    const cylinder = cylinderRef.current;
    const bgText = bgTextRef.current;
    const cards = cardsRef.current;
    const radius = dimensions.radius;

    if (!sec || !cylinder) return;

    // Helper to calculate and apply 3D positioning and styling
    const updateCardStyles = (currentRotation: number) => {
      cards.forEach((card, index) => {
        if (!card) return;

        // Cumulative angle in world 3D space
        const cardAngle = (index * 360) / projects.length + currentRotation;
        const angleRad = (cardAngle * Math.PI) / 180;
        const cosVal = Math.cos(angleRad);

        // Alignment factor (closer to 1.0 means more aligned to camera face)
        const factor = Math.max(0, cosVal);
        const activeFactor = Math.pow(factor, 3.0); // cubic focus falloff

        // Interpolations
        const scale = 0.85 + 0.15 * activeFactor;
        const brightness = 0.35 + 0.65 * activeFactor;
        // background cards opacity fades to 0.2, front faces at 1.0
        const opacity = 0.2 + 0.8 * Math.max(0, (cosVal + 1) / 2);
        const zIndex = Math.round((cosVal + 1) * 100);

        // Apply styles directly to the elements for maximum hardware accelerated rendering performance
        card.style.transform = `rotateY(${(index * 360) / projects.length}deg) translateZ(${radius}px) scale(${scale})`;
        card.style.filter = `brightness(${brightness}) contrast(1.05)`;
        card.style.opacity = `${opacity}`;
        card.style.zIndex = `${zIndex}`;
      });
    };

    // Apply initial layout state
    updateCardStyles(0);

    const ctx = gsap.context(() => {
      // Background large typography scroll motion (Commented out)
      /*
      gsap.fromTo(
        bgText,
        { y: "30vh", rotate: -180, opacity: 0.01 },
        {
          y: "-30vh",
          rotate: 180,
          opacity: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: "+=300%",
            scrub: 0.5,
          },
        },
      );
      */

      // Straight 3D cylinder rotation
      gsap.fromTo(
        cylinder,
        { rotationX: 0, rotationY: 0 },
        {
          rotationX: 0,
          rotationY: -360,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: "+=300%",
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const currentRotation = self.progress * -360;
              updateCardStyles(currentRotation);
            },
          },
        },
      );
    }, secRef);

    return () => ctx.revert();
  }, [dimensions]);

  return (
    <section
      ref={secRef}
      className="works-section relative bg-[#090807] overflow-hidden w-full h-screen"
    >
      {/* Backdrop Typography (Commented out) */}
      {/* <div
        ref={bgTextRef}
        className="works-bg-text absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ willChange: "transform" }}
      >
        <span
          className="text-[#f0ebe6] font-medium tracking-widest text-center"
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "clamp(180px, 32vw, 540px)",
            lineHeight: 1,
          }}
        >
          WORKS
        </span>
      </div> */}

      {/* 3D Scene Viewport */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          perspective: `${dimensions.perspective}px`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Straight Cylinder container */}
        <div
          ref={cylinderRef}
          className="relative flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(0deg)",
            width: `${dimensions.cardWidth}px`,
            height: `${dimensions.cardHeight}px`,
          }}
        >
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              id={`work-card-${p.slug}`}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="work-card absolute overflow-hidden rounded-lg bg-[#121110] shadow-2xl border border-white/5 pointer-events-auto"
              style={{
                width: `${dimensions.cardWidth}px`,
                height: `${dimensions.cardHeight}px`,
                transformStyle: "preserve-3d",
                willChange: "transform, filter, opacity",
                transition: "border-color 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              {/* Inner wrapper with zoom on hover */}
              <div className="w-full h-full relative overflow-hidden group">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  loading="lazy"
                />
                {/* Contrast overlay */}
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}