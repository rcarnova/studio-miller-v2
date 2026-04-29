import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

const LavoroDettaglio = () => {
  const { slug } = useParams();
  useReveal();

  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/lavori" replace />;
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <Link to="/lavori" className="eyebrow inline-flex items-center gap-2 mb-10 hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Torna ai lavori
        </Link>

        <p className="reveal eyebrow text-primary mb-6">{p.tag}</p>
        <h1 className="reveal font-display font-bold tracking-tightest leading-[0.95] text-[12vw] md:text-[7vw] lg:text-[6rem] max-w-[16ch]">
          {p.client}
        </h1>
        <p className="reveal mt-8 text-2xl md:text-3xl font-display tracking-tightest text-foreground/70 max-w-3xl">
          {p.title}
        </p>
        <p className="reveal mt-6 text-sm text-muted-foreground">{p.year} · {p.sector}</p>
      </section>

      <section className="container-editorial pb-16">
        {p.videoId ? (
          <div className="reveal aspect-video w-full bg-ink overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${p.videoId}?rel=0`}
              title={`${p.client} — ${p.title}`}
              className="w-full h-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : p.image ? (
          <div className="reveal aspect-[16/9] w-full bg-secondary overflow-hidden flex items-center justify-center">
            <img
              src={p.image}
              alt={`${p.client} — ${p.title}`}
              loading="lazy"
              className={`w-full h-full object-contain p-8 md:p-16 ${p.slug === "caritas-fibrilla" ? "-rotate-45" : ""}`}
            />
          </div>
        ) : (
          <div className="reveal aspect-[16/8] w-full bg-secondary flex items-center justify-center">
            <span className="font-display font-bold text-4xl md:text-7xl text-foreground/15 text-center px-6">
              {p.client}
            </span>
          </div>
        )}
      </section>

      {p.detail && (
        <article className="container-editorial pb-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow sticky top-28">Caso studio</p>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div className="reveal">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tightest mb-6">La sfida</h2>
              <p className="text-lg leading-relaxed text-foreground/80">{p.detail.challenge}</p>
            </div>

            <div className="reveal">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tightest mb-6">L'approccio</h2>
              <p className="text-lg leading-relaxed text-foreground/80">{p.detail.approach}</p>
            </div>

            {p.detail.quote && (
              <blockquote className="reveal border-l-2 border-primary pl-8 py-4">
                <p className="font-display italic text-2xl md:text-4xl tracking-tightest leading-snug text-foreground">
                  "{p.detail.quote}"
                </p>
              </blockquote>
            )}

            <div className="reveal">
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tightest mb-6">Il risultato</h2>
              <p className="text-lg leading-relaxed text-foreground/80">{p.detail.outcome}</p>
              {p.result && (
                <p className="mt-6 inline-block text-primary font-medium">→ {p.result}</p>
              )}
            </div>
          </div>
        </article>
      )}

      {!p.detail && (
        <section className="container-editorial pb-24">
          <p className="text-lg max-w-3xl leading-relaxed text-foreground/80">{p.description}</p>
          {p.result && <p className="mt-6 text-primary font-medium">→ {p.result}</p>}
        </section>
      )}

      {/* NAV */}
      <nav className="border-t border-border">
        <div className="container-editorial py-10 flex flex-col md:flex-row justify-between gap-6">
          <Link to={`/lavori/${prev.slug}`} className="group">
            <p className="eyebrow mb-2 inline-flex items-center gap-2"><ArrowLeft size={12}/> Progetto precedente</p>
            <p className="font-display font-bold text-xl md:text-2xl tracking-tightest group-hover:text-primary transition-colors">
              {prev.client}
            </p>
          </Link>
          <Link to={`/lavori/${next.slug}`} className="group md:text-right">
            <p className="eyebrow mb-2 inline-flex items-center gap-2 md:justify-end">Progetto successivo <ArrowRight size={12}/></p>
            <p className="font-display font-bold text-xl md:text-2xl tracking-tightest group-hover:text-primary transition-colors">
              {next.client}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default LavoroDettaglio;
