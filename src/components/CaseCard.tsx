import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { ArrowRight, Play } from "lucide-react";

function MoondinoAnimation() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ background: "#1E324A" }}
    >
      <style>{`
        @keyframes moonSlide {
          0% { transform: translateX(-100%) translateY(20%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%) translateY(-20%); opacity: 0; }
        }
        @keyframes textReveal {
          0%, 15% { opacity: 0; transform: translateY(12px); }
          25%, 75% { opacity: 1; transform: translateY(0); }
          85%, 100% { opacity: 0; transform: translateY(-12px); }
        }
        @keyframes lineGrow {
          0%, 20% { width: 0; }
          40%, 80% { width: 100%; }
          100% { width: 0; }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.08; }
        }
        .mn-moon {
          animation: moonSlide 6s ease-in-out infinite;
        }
        .mn-title {
          animation: textReveal 6s ease-in-out infinite;
        }
        .mn-subtitle {
          animation: textReveal 6s ease-in-out infinite;
          animation-delay: 0.3s;
        }
        .mn-line {
          animation: lineGrow 6s ease-in-out infinite;
        }
        .mn-grid {
          animation: gridPulse 6s ease-in-out infinite;
        }
      `}</style>

      {/* Grid background */}
      <div className="mn-grid absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(#F3CF45 1px, transparent 1px), linear-gradient(90deg, #F3CF45 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Moon */}
      <div className="mn-moon absolute"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, #F3CF45, #E7CD65)",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          boxShadow: "0 0 60px rgba(243,207,69,0.3)"
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
        <div className="mn-line h-px bg-yellow-400" style={{ width: 0 }} />
        <p className="mn-title font-display font-black text-white tracking-widest uppercase text-center"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "0.15em" }}>
          MOONDINO
        </p>
        <p className="mn-subtitle font-sans text-yellow-400 uppercase tracking-widest text-center"
          style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)", letterSpacing: "0.3em" }}>
          IL ROBOT DA RISAIA
        </p>
        <div className="mn-line h-px bg-yellow-400" style={{ width: 0 }} />
      </div>
    </div>
  );
}

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
  const useContain = project.slug === "eudaimon-felicita-lavoro";
  const imgClass = useContain ? "object-contain p-8 bg-background" : "object-cover";

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
                className={`absolute inset-0 w-full h-full ${imgClass} transition-transform duration-700 group-hover:scale-[1.03]`}
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
            } leading-tight tracking-tightest hover:text-primary transition-colors`}
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
