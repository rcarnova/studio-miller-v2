import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { SEO } from "@/components/SEO";
import { projects } from "@/data/projects";
import risoPackagingFlat from "@/assets/riso-nuovo/riso_packaging_flat.webp";
import risoLogoCover from "@/assets/riso-nuovo/riso_logo_cover.webp";
import risoPackaging3d from "@/assets/riso-nuovo/riso_packaging_3d.webp";
import risoBrandSystem from "@/assets/riso-nuovo/riso_brand_system.webp";

const SLUG = "riso-nuovo-venuto-dalla-luna";

const RisoNuovo = () => {
  useReveal();

  const idx = projects.findIndex((p) => p.slug === SLUG);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <SEO
        title="Il Riso Nuovo — Venuto dalla luna · Studio Miller"
        description="Packaging e brand identity per Il Riso Nuovo di Moondino. Sistema visivo completo su tre formati: barattolo, busta stand-up, box."
        image={risoPackagingFlat}
        type="article"
        path={`/lavori/${SLUG}`}
      />

      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <Link to="/lavori" className="eyebrow inline-flex items-center gap-2 mb-10 hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Torna ai lavori
        </Link>
        <p className="reveal eyebrow text-primary mb-6">Packaging · Brand Identity · Visual Design</p>
        <h1 className="reveal font-display font-bold tracking-tightest leading-[0.95] text-[12vw] md:text-[7vw] lg:text-[6rem] max-w-[16ch]">
          Il Riso Nuovo — Venuto dalla luna
        </h1>
        <p className="reveal mt-6 text-sm text-muted-foreground">2020 · Moondino — Il Riso Nuovo</p>
      </section>

      <section className="container-editorial pb-16">
        <div className="reveal aspect-video w-full bg-secondary overflow-hidden">
          <img
            src={risoPackagingFlat}
            alt="Il Riso Nuovo — packaging flat"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <article className="container-editorial pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow sticky top-28">Caso studio</p>
        </div>
        <div className="lg:col-span-8 space-y-16">
          <div className="reveal">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tightest mb-6">La sfida</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              Moondino aveva già un'identità forte — il robot da risaia, la tecnologia, il riso coltivato senza chimica. La sfida era trasferire tutto questo su un prodotto consumer: Il Riso Nuovo. Un packaging che doveva funzionare sullo scaffale, raccontare una storia e restare coerente con il brand madre.
            </p>
          </div>
          <div className="reveal">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tightest mb-6">L'approccio</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              Il sistema visivo costruisce un dialogo tra passato e futuro: l'8 come simbolo grafico centrale — numero della varietà Carnaroli superfino — riempito con la texture del riso. La mondina illustrata richiama la tradizione delle risaie vercellesi, il Duomo di Vercelli la storia del territorio, il robot Moondino il futuro. Tre formati packaging (barattolo, busta stand-up, box) con un sistema cromatico vibrante: blu notte, rosso, giallo oro, avorio.
            </p>
          </div>
        </div>
      </article>

      <section className="container-editorial pb-16">
        <div className="reveal aspect-video w-full bg-secondary overflow-hidden">
          <img
            src={risoLogoCover}
            alt="Il Riso Nuovo — logo e brand identity"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <article className="container-editorial pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow sticky top-28">Risultato</p>
        </div>
        <div className="lg:col-span-8">
          <div className="reveal">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tightest mb-6">Il risultato</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              Brand identity completa con sistema visivo applicato su tre formati. Il packaging Il Riso Nuovo è oggi il prodotto consumer di punta della filiera Moondino — il riso per una nuova generazione.
            </p>
          </div>
        </div>
      </article>

      <section className="container-editorial pb-16">
        <div className="reveal aspect-video w-full bg-secondary overflow-hidden">
          <img
            src={risoPackaging3d}
            alt="Il Riso Nuovo — packaging 3D"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="reveal aspect-video w-full bg-secondary overflow-hidden">
          <img
            src={risoBrandSystem}
            alt="Il Riso Nuovo — brand system"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <nav className="border-t border-border">
        <div className="container-editorial py-10 flex flex-col md:flex-row justify-between gap-6">
          <Link to={`/lavori/${prev.slug}`} className="group">
            <p className="eyebrow mb-2 inline-flex items-center gap-2"><ArrowLeft size={12} /> Progetto precedente</p>
            <p className="font-display font-bold text-xl md:text-2xl tracking-tightest group-hover:text-primary transition-colors">
              {prev.client}
            </p>
          </Link>
          <Link to={`/lavori/${next.slug}`} className="group md:text-right">
            <p className="eyebrow mb-2 inline-flex items-center gap-2 md:justify-end">Progetto successivo <ArrowRight size={12} /></p>
            <p className="font-display font-bold text-xl md:text-2xl tracking-tightest group-hover:text-primary transition-colors">
              {next.client}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default RisoNuovo;
