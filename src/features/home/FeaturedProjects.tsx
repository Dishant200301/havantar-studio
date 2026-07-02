import { Link } from "react-router-dom";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";
import ProjectCard from "@/features/projects/ProjectCard";
import { projects } from "@/features/projects/projectsData";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section id="projects-featured" className="bg-[#F6F2EC] py-20 lg:py-28 px-6 lg:px-16">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SplitHeading as="h2" className="uppercase font-medium text-[#4F4742]" type="words">
          <span style={{ fontSize: "clamp(30px,5vw,60px)", lineHeight: 1.05 }}>Featured projects</span>
        </SplitHeading>
        <FadeIn delay={0.2} className="mt-4 uppercase text-[13px] tracking-[0.12em] text-[#7a706a]">
          A selection of recent work, spanning residential and commercial
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {featured.map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.08} className={i === 1 ? "lg:-mt-6" : ""}>
            <ProjectCard project={p} tall={i === 1} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="text-center mt-14">
        <Link
          to="/projects"
          className="underline-lr inline-block uppercase text-[13px] tracking-[0.18em] text-[#4F4742]"
        >
          View more projects
        </Link>
      </FadeIn>
    </section>
  );
}
