import SEO from "@/components/common/SEO";
import Hero from "./Hero";
import About from "./About";
import MarqueeStrip from "./MarqueeStrip";
import FeaturedProjects from "./FeaturedProjects";
import Services from "./Services";
import ProjectExpertise from "./ProjectExpertise";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Works from "./Works";
import CTA from "./CTA";

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
      {/* <Works /> */}
      <CTA />
      </main>
    </>
  );
}
