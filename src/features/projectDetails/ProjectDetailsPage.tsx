import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "@/components/common/SEO";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";
import { findProject, projects } from "@/features/projects/projectsData";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = slug ? findProject(slug) : undefined;
  if (!project) return <Navigate to="/404" replace />;

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 4);

  return (
    <>
      <SEO title={project.title} description={project.description} />

      <section className="relative h-[70vh] min-h-[440px] overflow-hidden">
        <div className="ph absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-6 lg:p-16">
          <SplitHeading as="h1" className="uppercase text-[#F0EBE6] font-medium tracking-tight leading-[1]" type="words">
            <span style={{ fontSize: "clamp(36px,6vw,80px)" }}>{project.title}</span>
          </SplitHeading>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-[13px] uppercase tracking-[0.1em] text-[#F0EBE6]/90">
            <span>{project.title}</span>
            <span>{project.services}</span>
            <span>{project.address}</span>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-12">
        <FadeIn className="ph aspect-square rounded-lg" />
        <FadeIn className="flex flex-col justify-center">
          <p className="text-[#4F4742]" style={{ fontSize: "clamp(20px,2vw,26px)", lineHeight: 1.35 }}>
            {project.description}
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <FadeIn className="ph aspect-square rounded-lg" />
          <FadeIn delay={0.1} className="ph aspect-square rounded-lg" />
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-20">
        <FadeIn>
          <h2 className="uppercase text-[#4F4742] font-medium mb-8" style={{ fontSize: "clamp(28px,4vw,46px)" }}>
            Project details
          </h2>
          <div className="border-t border-[#4F4742]/15">
            {[
              ["Project Owner", project.owner],
              ["Budget", project.budget],
              ["Services", project.services],
              ["Surface", project.surface],
              ["Address", project.address],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-2 border-b border-[#4F4742]/15 py-5 text-[#4F4742]">
                <div className="uppercase text-[13px] tracking-[0.1em] opacity-70">{k}</div>
                <div>{v}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-16 pb-24">
        <FadeIn>
          <h2 className="uppercase text-[#4F4742] font-medium mb-8" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
            Other Projects
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((o, i) => (
            <FadeIn key={o.slug} delay={i * 0.05}>
              <Link to={`/projects/${o.slug}`} className="group block">
                <div className="ph aspect-[4/3] rounded-lg overflow-hidden">
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-3 uppercase text-[12px] tracking-[0.1em] text-[#4F4742]">{o.title}</div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
