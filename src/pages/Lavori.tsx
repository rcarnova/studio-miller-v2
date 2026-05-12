import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { CaseCard } from "@/components/CaseCard";
import { projects, sectors } from "@/data/projects";
import { SEO } from "@/components/SEO";

const Lavori = () => {
  const [filter, setFilter] = useState<(typeof sectors)[number]>("Tutti");
  useReveal(undefined, filter);

  const filtered = useMemo(
    () => (filter === "Tutti" ? projects : projects.filter((p) => p.sector === filter)),
    [filter]
  );

  return (
    <>
      <SEO
        title="Lavori — Studio Miller"
        description="Casi studio di branding, visual identity, content strategy e web design. Scopri come Studio Miller ha trasformato l'identità di brand di aziende e organizzazioni."
        path="/lavori"
      />
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-8 reveal">Portfolio</p>
        <h1 className="reveal font-display font-black text-foreground tracking-tightest leading-[0.88] text-[16vw] md:text-[11vw] lg:text-[9rem]">
          Lavori
        </h1>
        <p className="reveal mt-10 max-w-2xl text-lg text-foreground/75 leading-relaxed">
          Progetti di brand strategy, storytelling e contenuto. Settori diversi, stesso punto di partenza: capire chi sei prima di decidere come comunicarlo.
        </p>
      </section>

      <section className="container-editorial pb-12">
        <div className="reveal flex flex-wrap gap-x-10 gap-y-3 border-y border-border py-5">
          {sectors.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                filter === s ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="space-y-0">
          {filtered.map((project, i) => {
            const patternIndex = i % 6;
            const isLarge = patternIndex === 0 || patternIndex === 3;
            const isSecondOfPair = patternIndex === 2 || patternIndex === 5;

            if (isSecondOfPair) return null;

            if (isLarge) {
              return (
                <div key={project.slug} className="border-t border-border py-20 md:py-28">
                  <CaseCard project={project} index={i} size="large" />
                </div>
              );
            }

            const nextProject = filtered[i + 1];
            return (
              <div key={project.slug} className="border-t border-border py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16">
                <CaseCard project={project} index={i} size="small" />
                {nextProject && <CaseCard project={nextProject} index={i + 1} size="small" />}
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-20">Nessun progetto in questo settore.</p>
        )}
      </section>
    </>
  );
};

export default Lavori;
