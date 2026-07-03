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
        "group block rounded-xl overflow-hidden bg-[#e6dfd6]",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <div
          className={cn(
            "ph w-full transition-transform duration-[900ms] ease-[cubic-bezier(.7,0,.15,1)] group-hover:scale-[1.05]",
            tall ? "aspect-[4/5]" : "aspect-[4/3.2]"
          )}
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-5 bg-[#F0EBE6]">
        <div>
          <div className="uppercase text-[13px] tracking-[0.1em] text-[#4F4742] mb-1">
            <span className="underline-lr">{project.title}</span>
          </div>
          <div className="text-[12px] text-[#7a706a]">
            {project.category} · {project.location} · {project.year}
          </div>
        </div>
        <span className="relative w-10 h-10 rounded-full border border-[#4F4742]/40 overflow-hidden flex items-center justify-center shrink-0">
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute transition-transform duration-500 ease-[cubic-bezier(.7,0,.15,1)] group-hover:translate-x-6 group-hover:-translate-y-6" />
          <ArrowUpRight className="w-4 h-4 text-[#4F4742] absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(.7,0,.15,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      </div>
    </Link>
  );
}
