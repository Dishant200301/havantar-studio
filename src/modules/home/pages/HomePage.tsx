import SEO from "@/modules/core/components/SEO";
import Hero from "@/modules/home/components/HeroSection";
import About from "@/modules/home/components/AboutSection";
import MarqueeStrip from "@/modules/home/components/MarqueeStripSection";
import FeaturedProjects from "@/modules/home/components/FeaturedProjectsSection";
import Services from "@/modules/home/components/ServicesSection";
import ProjectExpertise from "@/modules/home/components/ProjectExpertiseSection";
import Process from "@/modules/home/components/ProcessSection";
import Testimonials from "@/modules/home/components/TestimonialsSection";
import Works from "@/modules/home/components/WorksSection";
import CTA from "@/modules/home/components/CTASection";

export default function Home() {
  return (
    <>
      <SEO title="Architecture & Interior Design Studio" />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <MarqueeStrip />
        <FeaturedProjects />
        <Services />
        <ProjectExpertise />
        <Process />
        <Testimonials />
        <Works />
        <CTA />
      </main>
    </>
  );
}
