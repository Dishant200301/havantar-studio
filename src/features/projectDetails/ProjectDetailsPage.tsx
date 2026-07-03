import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";
import SplitHeading from "@/components/common/SplitHeading";
import FadeIn from "@/components/common/FadeIn";
import { findProject, projects } from "@/features/projects/projectsData";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = slug ? findProject(slug) : undefined;
  if (!project) return <Navigate to="/404" replace />;

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 4);

  const subtitle = project.subtitle || project.description;
  const subdescription = project.subdescription || project.description;
  const detailImages = project.detailImages || [
    project.image,
    project.image,
    project.image,
    project.image,
    project.image,
  ];

  return (
    <>
      <SEO title={project.title} description={project.description} />

      <section className="relative h-[88vh] min-h-[380px] overflow-hidden rounded-lg mx-[12px] mb-[12px] lg:mx-[12px] lg:my-[8px]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
        <div className="relative max-w-[1600px] mx-auto h-full flex flex-col justify-end py-4 px-2 md:p-6 lg:p-10">
          <SplitHeading as="h1" className="text-[#F0EBE6] font-normal tracking-tight text-[32px] leading-[35px] md:text-[56px] md:leading-[62px] pb-2 text-center lg:text-left" type="words">
            {project.title}
          </SplitHeading>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "linear" }}
            style={{ originX: 0.5 }}
            className="w-full border-t border-[#F0EBE6]/30 mt-6"
          />
          <div className="w-full pt-4 flex items-start justify-between text-[12px] md:text-[16px] font-display text-[#F0EBE6]/90">
            <span>{project.title}</span>
            <div className="flex flex-col items-end text-right md:flex-row md:items-center md:gap-12">
              <span>{project.category} Architecture</span>
              <span>{project.address}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-6 xl:px-8 py-4 lg:py-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-10 lg:gap-y-4 items-start">
          {/* Text block - Top on mobile/tablet, right column row 1 on desktop */}
          <FadeIn className="lg:col-start-2 lg:row-start-1 w-full">
            <h2 className="text-[#4F4742] text-[22px] sm:text-[26px] md:text-[30px] leading-[28px] sm:leading-[32px] md:leading-[42px] font-normal tracking-tight mb-4 font-display">
              {subtitle}
            </h2>
            <p className="text-[#57504B] text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-display font-medium">
              {subdescription}
            </p>
          </FadeIn>

          {/* Vertical image - Middle on mobile/tablet, left column row 1 & 2 on desktop */}
          <FadeIn className="lg:col-start-1 lg:row-start-2 lg:row-span-2 w-full xl:w-[350px] bg-[#e6dfd6] overflow-hidden">
            <img
              src={detailImages[0]}
              alt={`${project.title} Vertical View`}
              className="w-full object-cover h-[300px] sm:h-[400px] xl:h-[480px]"
            />
          </FadeIn>

          {/* Horizontal image - Bottom on mobile/tablet, right column row 2 on desktop */}
          <FadeIn className="lg:col-start-2 lg:row-start-2 w-full bg-[#e6dfd6] overflow-hidden">
            <img
              src={detailImages[1]}
              alt={`${project.title} Horizontal View`}
              className="w-full object-cover h-[300px] sm:h-[400px] lg:h-[600px]"
            />
          </FadeIn>
        </div>
      </section>

      <section className="px-4 lg:px-6 xl:px-8 pb-10 lg:pb-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <FadeIn className="w-full bg-[#e6dfd6] overflow-hidden">
            <img
              src={detailImages[2]}
              alt={`${project.title} Detail 1`}
              className="w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[560px]"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="w-full bg-[#e6dfd6] overflow-hidden">
            <img
              src={detailImages[3]}
              alt={`${project.title} Detail 2`}
              className="w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[560px]"
            />
          </FadeIn>
          <FadeIn delay={0.2} className="w-full bg-[#e6dfd6] overflow-hidden">
            <img
              src={detailImages[4]}
              alt={`${project.title} Detail 3`}
              className="w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[560px]"
            />
          </FadeIn>
        </div>
      </section>

      <section className="px-4 lg:px-6 xl:px-8 pb-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 xl:gap-20 items-start">
          <FadeIn>
            <h2 className="text-[#4F4742] font-normal text-[28px] md:text-[36px] lg:text-[44px] leading-[32px] md:leading-[40px] lg:leading-[48px] font-display">
              Project details
            </h2>
          </FadeIn>
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[#4F4742] text-[15px] md:text-[16px] leading-[18px] md:leading-[19px] font-display font-normal">
              {project.description}
            </p>
            <div className="border-t border-[#6f6863] pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-[#4F4742]">
              <div>
                <div className="uppercase text-[14px] md:text-[16px] tracking-widest text-[#4F4742]/90 mb-2 font-display font-normal leading-[18px] md:leading-[22px]">Project Owners</div>
                <div className="text-[17px] md:text-[20px] font-display font-normal leading-[22px] md:leading-[26px] text-[#4F4742]">{project.owner}</div>
              </div>
              <div>
                <div className="uppercase text-[14px] md:text-[16px] tracking-widest text-[#4F4742]/90 mb-2 font-display font-normal leading-[18px] md:leading-[22px]">Budget</div>
                <div className="text-[17px] md:text-[20px] font-display font-normal leading-[22px] md:leading-[26px] text-[#4F4742]">{project.budget}</div>
              </div>
              <div>
                <div className="uppercase text-[14px] md:text-[16px] tracking-widest text-[#4F4742]/90 mb-2 font-display font-normal leading-[18px] md:leading-[22px]">Services</div>
                <div className="text-[17px] md:text-[20px] font-display font-normal leading-[22px] md:leading-[26px] text-[#4F4742]">{project.services}</div>
              </div>
              <div>
                <div className="uppercase text-[14px] md:text-[16px] tracking-widest text-[#4F4742]/90 mb-2 font-display font-normal leading-[18px] md:leading-[22px]">Surface</div>
                <div className="text-[17px] md:text-[20px] font-display font-normal leading-[22px] md:leading-[26px] text-[#4F4742]">{project.surface}</div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <div className="uppercase text-[14px] md:text-[16px] tracking-widest text-[#4F4742]/90 mb-2 font-display font-normal leading-[18px] md:leading-[22px]">Address</div>
                <div className="text-[17px] md:text-[20px] font-display font-normal leading-[22px] md:leading-[26px] text-[#4F4742]">{project.address}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 lg:px-6 xl:px-8 pb-24 max-w-[1600px] mx-auto">
        <FadeIn>
          <h2 className="text-[#4F4742] font-normal mb-8 text-[28px] md:text-[36px] lg:text-[44px] leading-[32px] md:leading-[40px] lg:leading-[48px] font-display">
            Other Project
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((o, i) => (
            <FadeIn key={o.slug} delay={i * 0.05}>
              <Link to={`/projects/${o.slug}`} className="group block">
                <div className="aspect-16/12 xl:aspect-16/10 rounded-md overflow-hidden bg-[#e6dfd6] mb-3">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="font-display font-medium text-[15px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#57504B] transition-colors duration-300 group-hover:text-[#4F4742]">
                  {o.title}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
