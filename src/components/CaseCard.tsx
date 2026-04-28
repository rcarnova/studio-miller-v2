import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function CaseCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article
      className="reveal group flex flex-col"
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <Link to={`/lavori/${project.slug}`} className="block">
        <div className="aspect-[16/10] w-full bg-secondary overflow-hidden flex items-center justify-center relative">
          <span className="font-display font-bold text-3xl md:text-5xl text-foreground/15 px-6 text-center">
            {project.client}
          </span>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.04] transition-colors duration-500" />
        </div>
      </Link>

      <div className="mt-6 space-y-3">
        <p className="eyebrow text-primary">{project.tag}</p>
        <p className="text-sm text-muted-foreground">{project.client}</p>
        <Link to={`/lavori/${project.slug}`}>
          <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight tracking-tightest hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-base text-foreground/75 leading-relaxed max-w-xl">
          {project.description}
        </p>
        {project.result && (
          <p className="text-sm text-foreground/60 italic">→ {project.result}</p>
        )}
        <Link
          to={`/lavori/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary link-underline pt-2"
        >
          Leggi il caso <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
