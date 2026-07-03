import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "./projectsData";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  tall?: boolean;
  className?: string;
};

export default function ProjectCard({ project, tall, className }: Props) {
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
            "w-full object-cover h-[380px] sm:h-[480px] lg:h-[520px] xl:h-[550px] transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,0.3,1)] group-hover:scale-[1.04]",
          )}
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-medium text-[18px] md:text-[24px] leading-[23px] md:leading-[31px] text-[#4F4742] uppercase transition-colors duration-300">
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-400 after:ease-[cubic-bezier(.7,0,.3,1)] group-hover:after:origin-left group-hover:after:scale-x-100">
              {project.title}
            </span>
          </h3>
          <div className="mt-1 font-display font-medium text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-[#57504B]">
            <div>{project.category} Architecture</div>
            <div>{project.location}, {project.year}</div>
          </div>
        </div>
        <span className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#4F4742]/40 overflow-hidden flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#504843] group-hover:border-transparent group-hover:text-white text-[#4F4742]">
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 absolute transition-transform duration-500 ease-[cubic-bezier(.16,1,0.3,1)] group-hover:translate-x-6 group-hover:-translate-y-6" />
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      </div>
    </Link>
  );
}
