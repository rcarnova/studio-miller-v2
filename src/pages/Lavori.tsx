import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { CaseCard } from "@/components/CaseCard";
import { projects, sectors } from "@/data/projects";

const Lavori = () => {
  const [filter, setFilter] = useState<(typeof sectors)[number]>("Tutti");
  useReveal();

  const filtered = useMemo(
    () => (filter === "Tutti" ? projects : projects.filter((p) => p.sector === filter)),
    [filter]
  );

  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-8 reveal">Portfolio</p>
        <h1 className="reveal font-display font-bold text-foreground tracking-tightest leading-[0.95] text-[16vw] md:text-[10vw] lg:text-[8rem]">
          Lavori
        </h1>
        <p className="reveal mt-10 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          Una selezione di progetti di brand strategy, storytelling e contenuto per aziende del
          manifatturiero, food, ITC e moda.
        </p>
      </section>

      <section className="container-editorial pb-12">
        <div className="reveal flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-5">
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
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-28">
          {filtered.map((p, i) => (
            <CaseCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-20">Nessun progetto in questo settore.</p>
        )}
      </section>
    </>
  );
};

export default Lavori;
