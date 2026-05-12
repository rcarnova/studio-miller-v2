import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { ArrowRight, Play } from "lucide-react";
import { MoondinoAnimation } from "@/components/MoondinoAnimation";

export function CaseCard({
  project,
  index = 0,
  size = "small",
}: {
  project: Project;
  index?: number;
  size?: "large" | "small";
}) {
  const thumb = project.image
    ? project.image
    : project.videoId
    ? `https://i.ytimg.com/vi/${project.videoId}/maxresdefault.jpg`
    : null;
  const isVideo = !!project.videoId;
  const useContain = !!project.useContain;
  const imgClass = useContain
    ? "object-contain p-8 bg-background"
    : `object-cover ${project.objectPosition ?? "object-center"}`;

  return (
    <article
      className="reveal group flex flex-col"
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <Link to={`/lavori/${project.slug}`} className="block">
        <div
          className={`${
            size === "large" ? "aspect-[21/9]" : "aspect-[4/3]"
          } w-full bg-secondary overflow-hidden flex items-center justify-center relative`}
        >
          {project.slug === "moondino-brand-identity" ? (
            <MoondinoAnimation />
          ) : thumb ? (
            <>
              <img
                src={thumb}
                alt={`${project.client} — ${project.title}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full ${imgClass} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]`}
              />
              {isVideo && (
                <>
                  <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/25 transition-colors duration-500" />
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
          {!thumb && project.slug !== "moondino-brand-identity" && (
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.04] transition-colors duration-500" />
          )}
        </div>
      </Link>

      <div className="mt-6 space-y-3">
        <p className="eyebrow text-primary">{project.tag}</p>
        <p className="text-sm text-muted-foreground">{project.client}</p>
        <Link to={`/lavori/${project.slug}`}>
          <h3
            className={`font-display font-bold ${
              size === "large" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            } leading-tight tracking-tightest hover:text-primary transition-colors duration-500`}
          >
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
