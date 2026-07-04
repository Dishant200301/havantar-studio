import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SplitHeading from "@/modules/core/components/SplitHeading";
import FadeIn from "@/modules/core/components/FadeIn";
import ProjectCard from "@/modules/projects/components/ProjectCard";
import { projects } from "@/modules/core/data/projectsData";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section id="projects-featured" className="py-20 lg:py-20 px-4 sm:px-4 lg:px-6 xl:px-8 mx-auto max-w-[1600px]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SplitHeading as="h2" className="uppercase text-[#4F4742] font-medium text-[24px] leading-[26px] md:text-[30px] md:leading-[36px] lg:text-[40px] lg:leading-[52px] tracking-[-0.4px]" type="words">
          Featured projects
        </SplitHeading>
        <FadeIn delay={0.2} className="xl:max-w-md mx-auto uppercase mt-4 text-[12px] leading-[14px] tracking-[-0.3px] md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[21px] text-muted-foreground">
          A selection of recent work, spanning residential and commercial
        </FadeIn>
      </div>

      <motion.div layout className="grid grid-cols-1 xl:grid-cols-3 gap-2 sm:gap-4 md:gap-6 items-start ">
        <AnimatePresence mode="popLayout">
          {featured.map((p, i) => (
            <motion.div
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <ProjectCard 
                project={p} 
                compact={true} 
                imageClassName="h-[380px] sm:h-[480px] lg:h-[520px] xl:h-[550px] w-full"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <FadeIn delay={0.4} className="text-center mt-14">
        <Link
          to="/projects"
          className="underline-lr inline-block uppercase text-[16px] text-[#4F4742]"
        >
          View more projects
        </Link>
      </FadeIn>
    </section>
  );
}
