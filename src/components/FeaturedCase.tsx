import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import type { Project } from "@/data/projects";
import { MoondinoAnimation } from "@/components/MoondinoAnimation";

export function FeaturedCase({
  project,
  index = 0,
  size = "large",
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
    ? "object-contain p-12 md:p-16 bg-background"
    : `object-cover ${project.objectPosition ?? "object-center"}`;

  if (size === "small") {
    return (
      <article className="reveal group flex flex-col">
        <Link to={`/lavori/${project.slug}`} className="block">
          <div className={`aspect-[4/3] w-full ${project.containerBg ?? "bg-secondary"} overflow-hidden relative`}>
            {project.slug === "moondino-brand-identity" ? (
              <MoondinoAnimation />
            ) : thumb ? (
              <>
                <img
                  src={thumb}
                  alt={`${project.client}, ${project.title}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full ${imgClass} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]`}
                />
                {isVideo && (
                  <>
                    <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/25 transition-colors duration-500" />
                    <span
                      aria-hidden
                      className="absolute inset-0 m-auto inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110"
                    >
                      <Play size={22} className="ml-1" fill="currentColor" />
                    </span>
                  </>
                )}
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-bold text-3xl text-foreground/15 px-6 text-center">
                  {project.client}
                </span>
              </div>
            )}
          </div>
        </Link>
        <div className="mt-6 flex flex-col flex-1">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-display font-bold text-primary text-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="eyebrow text-xs text-primary">{project.tag}</span>
          </div>
          <Link to={`/lavori/${project.slug}`}>
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tightest leading-tight hover:text-primary transition-colors duration-500">
              {project.title}
            </h3>
          </Link>
          <p className="mt-3 text-sm text-foreground/60">{project.client} · {project.year}</p>
          <Link
            to={`/lavori/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary link-underline mt-4"
          >
            Leggi il caso <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="reveal group">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-8 md:mb-12">
        <span className="font-display font-bold text-primary text-lg md:text-xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow text-primary">{project.tag}</span>
        <span className="text-xs text-muted-foreground tracking-wide">
          {project.client} · {project.year}
        </span>
      </div>

      <Link to={`/lavori/${project.slug}`} className="block">
        <div className={`aspect-[16/9] md:aspect-[21/9] w-full ${project.containerBg ?? "bg-secondary"} overflow-hidden relative`}>
          {project.slug === "moondino-brand-identity" ? (
            <MoondinoAnimation />
          ) : thumb ? (
            <>
              <img
                src={thumb}
                alt={`${project.client}, ${project.title}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full ${imgClass} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]`}
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
              <span className="font-display font-bold text-5xl md:text-8xl text-foreground/15 px-8 text-center">
                {project.client}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 lg:col-span-6">
          <Link to={`/lavori/${project.slug}`}>
            <h3 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.02] hover:text-primary transition-colors duration-500">
              {project.title}
            </h3>
          </Link>
        </div>
        <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 space-y-5">
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
