import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { FeaturedCase } from "@/components/FeaturedCase";
import { projects } from "@/data/projects";

const HERO = "L'identità è la strategia.".split(" ");

const Index = () => {
  useReveal();
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-16 md:pt-28 pb-24 md:pb-40 min-h-[88vh] flex flex-col justify-center">
        <p className="eyebrow mb-8 reveal">STUDIO MILLER — BRANDING</p>

        <h1 className="font-display font-bold text-foreground tracking-tightest leading-[0.95] text-[14vw] md:text-[7.5vw] lg:text-[6.5rem] xl:text-[7.5rem] max-w-[18ch]">
          {HERO.map((w, i) => (
            <span key={i} className="reveal-word mr-[0.18em]" style={{ transitionDelay: `${i * 140}ms` }}>
              {w}
            </span>
          ))}
        </h1>

        <p className="reveal mt-10 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed" style={{ transitionDelay: "600ms" }}>
          Costruiamo brand che sanno chi sono. Strategie di contenuto e narrativa per aziende che
          vogliono essere riconoscibili.
        </p>

        <div className="reveal mt-10" style={{ transitionDelay: "750ms" }}>
          <Link
            to="/lavori"
            className="inline-flex items-center gap-3 border border-primary text-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.14em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
          >
            Vedi i lavori <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* LAVORI SELEZIONATI */}
      <section className="py-24 md:py-40 border-t border-border">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-20 md:mb-32 reveal">
            <div>
              <p className="eyebrow mb-4">Lavori selezionati</p>
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tightest leading-tight max-w-2xl">
                Tre progetti, una sola convinzione.
              </h2>
            </div>
            <Link to="/lavori" className="hidden md:inline-flex text-sm font-medium link-underline shrink-0">
              Tutti i progetti →
            </Link>
          </div>

          <div className="space-y-32 md:space-y-48">
            {featured.map((p, i) => (
              <FeaturedCase key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="mt-24 md:hidden reveal">
            <Link to="/lavori" className="text-sm font-medium link-underline text-primary">
              Tutti i progetti →
            </Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-ink text-background py-28 md:py-40">
        <div className="container-editorial">
          <blockquote className="reveal max-w-5xl font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tightest">
            Il brand non è la comunicazione.<br />
            Il brand è la promessa che la comunicazione mantiene.
          </blockquote>
          <p className="reveal eyebrow mt-10 text-background/60" style={{ transitionDelay: "150ms" }}>
            — Studio Miller
          </p>
        </div>
      </section>

      {/* SERVIZI PREVIEW */}
      <section className="container-editorial py-24 md:py-32">
        <p className="eyebrow mb-14 reveal">Cosa facciamo</p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            { t: "Brand Strategy", d: "Dall'analisi alla piattaforma di marca." },
            { t: "Corporate Storytelling", d: "Narrativa che traduce la strategia in comunicazione." },
            { t: "Content & Video", d: "Produzione editoriale e video per campagne digitali." },
          ].map((s, i) => (
            <div key={s.t} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tightest leading-tight">
                {s.t}
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal">
          <Link to="/servizi" className="text-primary font-medium link-underline">
            Tutti i servizi →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
