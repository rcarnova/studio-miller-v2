import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { ArrowRight, Play } from "lucide-react";

export function CaseCard({ project, index = 0 }: { project: Project; index?: number }) {
  const thumb = project.videoId
    ? `https://i.ytimg.com/vi/${project.videoId}/maxresdefault.jpg`
    : project.image ?? null;
  const isVideo = !!project.videoId;

  return (
    <article
      className="reveal group flex flex-col"
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <Link to={`/lavori/${project.slug}`} className="block">
        <div className="aspect-[16/10] w-full bg-secondary overflow-hidden flex items-center justify-center relative">
          {thumb ? (
            <>
              <img
                src={thumb}
                alt={`${project.client} — ${project.title}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full ${isVideo ? "object-cover" : "object-contain p-6"} ${project.slug === "caritas-fibrilla" ? "-rotate-45" : ""} transition-transform duration-700 group-hover:scale-[1.03]`}
              />
              {isVideo && (
                <>
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/30 transition-colors duration-500" />
                  <span
                    aria-hidden
                    className="relative z-10 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110"
                  >
                    <Play size={26} className="ml-1" fill="currentColor" />
                  </span>
                </>
              )}
            </>
          ) : (
            <span className="font-display font-bold text-3xl md:text-5xl text-foreground/15 px-6 text-center">
              {project.client}
            </span>
          )}
          {!thumb && (
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.04] transition-colors duration-500" />
          )}
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
