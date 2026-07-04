import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/modules/core/data/projectsData";
import { cn } from "@/modules/core/lib/utils";

type Props = {
  project: Project;
  tall?: boolean;
  className?: string;
  imageClassName?: string;
  compact?: boolean;
};

export default function ProjectCard({ project, tall, className, imageClassName, compact }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        "group block w-full mx-auto lg:max-w-none lg:mx-0",
        className
      )}
    >
      <div className="relative overflow-hidden mb-4 bg-[#e6dfd6]">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full object-cover transition-transform duration-900 ease-[cubic-bezier(.16,1,0.3,1)] group-hover:scale-[1.04]",
            imageClassName || "aspect-3/3"
          )}
        />
      </div>
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div>
          <h3 className={cn(
            "font-display font-medium text-[#4F4742] uppercase transition-colors duration-300",
            compact 
              ? "text-[11px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[13px] sm:leading-[20px] md:leading-[26px] lg:leading-[31px]"
              : "text-[18px] md:text-[24px] leading-[23px] md:leading-[31px]"
          )}>
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-400 after:ease-[cubic-bezier(.7,0,.3,1)] group-hover:after:origin-left group-hover:after:scale-x-100">
              {project.title}
            </span>
          </h3>
          <div className={cn(
            "mt-1 font-display font-medium text-[#57504B]",
            compact
              ? "text-[9px] sm:text-[11px] md:text-[13px] lg:text-[16px] leading-[12px] sm:leading-[16px] md:leading-[20px] lg:leading-[26px]"
              : "text-[14px] md:text-[16px] leading-[22px] md:leading-[26px]"
          )}>
            <div>{project.category} Architecture</div>
            <div>{project.location}, {project.year}</div>
          </div>
        </div>
        <span className={cn(
          "relative rounded-full border border-[#4F4742]/40 overflow-hidden flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#504843] group-hover:border-transparent group-hover:text-white text-[#4F4742]",
          compact
            ? "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            : "w-8 h-8 md:w-10 md:h-10"
        )}>
          <ArrowUpRight className={cn(
            "absolute transition-transform duration-500 ease-[cubic-bezier(.16,1,0.3,1)] group-hover:translate-x-6 group-hover:-translate-y-6",
            compact ? "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" : "w-4 h-4 md:w-5 md:h-5"
          )} />
          <ArrowUpRight className={cn(
            "absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0",
            compact ? "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" : "w-4 h-4 md:w-5 md:h-5"
          )} />
        </span>
      </div>
    </Link>
  );
}
