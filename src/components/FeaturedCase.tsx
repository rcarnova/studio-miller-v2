import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import type { Project } from "@/data/projects";

export function FeaturedCase({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const reverse = index % 2 === 1;
  const thumb = project.videoId
    ? `https://i.ytimg.com/vi/${project.videoId}/maxresdefault.jpg`
    : project.image ?? null;
  const isVideo = !!project.videoId;

  return (
    <article className="reveal group">
      {/* Eyebrow row */}
      <div className={`flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-8 md:mb-12 ${reverse ? "md:justify-end md:text-right" : ""}`}>
        <span className="font-display font-bold text-primary text-lg md:text-xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow text-primary">{project.tag}</span>
        <span className="text-xs text-muted-foreground tracking-wide">
          {project.client} · {project.year}
        </span>
      </div>

      {/* Visual — full width, large */}
      <Link to={`/lavori/${project.slug}`} className="block">
        <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-secondary overflow-hidden relative">
          {thumb ? (
            <>
              <img
                src={thumb}
                alt={`${project.client} — ${project.title}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full ${isVideo || project.slug === "caritas-fibrilla" || project.slug === "villa-cingoli-rebranding" || project.slug === "pisani-italian-dream" ? "object-cover" : "object-contain p-8 md:p-16"} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]`}
              />
              {isVideo && (
                <>
                  <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/25 transition-colors duration-500" />
                  <span
                    aria-hidden
                    className="absolute inset-0 m-auto inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform duration-500 group-hover:scale-110"
                  >
                    <Play size={36} className="ml-1" fill="currentColor" />
                  </span>
                </>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-bold text-5xl md:text-8xl text-foreground/15 px-8 text-center transition-transform duration-700 group-hover:scale-[1.02]">
                {project.client}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Text block — narrow, editorial */}
      <div className={`mt-10 md:mt-14 grid md:grid-cols-12 gap-8 ${reverse ? "md:[direction:rtl]" : ""}`}>
        <div className={`md:col-span-7 lg:col-span-6 ${reverse ? "md:[direction:ltr]" : ""}`}>
          <Link to={`/lavori/${project.slug}`}>
            <h3 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.02] hover:text-primary transition-colors duration-500">
              {project.title}
            </h3>
          </Link>
        </div>
        <div className={`md:col-span-5 lg:col-span-5 lg:col-start-8 space-y-5 ${reverse ? "md:[direction:ltr]" : ""}`}>
          <p className="text-lg text-foreground/75 leading-relaxed">
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
      </div>
    </article>
  );
}
