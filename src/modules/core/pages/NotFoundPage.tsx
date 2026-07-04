import { Link } from "react-router-dom";
import SEO from "@/modules/core/components/SEO";
import FadeIn from "@/modules/core/components/FadeIn";
import { LinkButton } from "@/modules/core/components/ui/app-button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/modules/core/components/ui/accordion";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for doesn't exist." />
      <section className="min-h-[90vh] w-full bg-[#F0EBE6] text-[#4F4742] flex flex-col items-center justify-center px-6 text-center py-16">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          {/* 404 Giant Number */}
          <FadeIn delay={0.1} y={40}>
            <div className="font-bold text-[#4F4742]/10 tracking-tighter leading-none select-none" style={{ fontSize: "clamp(120px, 20vw, 240px)" }}>
              404
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.2} y={30}>
            <h1 className="mt-4 uppercase font-medium tracking-wider text-[20px] md:text-[24px]">
              Page Not Found
            </h1>
          </FadeIn>

          {/* Paragraph */}
          <FadeIn delay={0.3} y={20}>
            <p className="mt-4 text-[14px] leading-relaxed text-[#4F4742]/80 max-w-sm">
              The page you are looking for has moved, been renamed, or no longer exists.
            </p>
          </FadeIn>

          {/* Back to Home Button */}
          <FadeIn delay={0.5} y={10}>
            <div className="mt-10">
              <LinkButton to="/" variant="filled">
                Back to Home
              </LinkButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
