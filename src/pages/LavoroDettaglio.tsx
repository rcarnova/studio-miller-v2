import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

function extractYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|[?&]v=)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

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
              className={`w-full h-full ${p.slug === "caritas-cascina-ombra" ? "object-contain p-8 md:p-16" : "object-cover"}`}
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

      {p.videoUrl && (
        <section className="container-editorial pb-16">
          <div className="reveal aspect-video w-full bg-ink overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${extractYouTubeId(p.videoUrl)}?rel=0`}
              title={`${p.client} — ${p.title}`}
              className="w-full h-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      )}

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

      {/* GALLERY */}
      {p.gallery && p.gallery.length > 0 && (
        <section className="container-editorial pb-24 md:pb-32">
          <p className="eyebrow mb-10 md:mb-14 reveal">Visual identity</p>

          <div className="space-y-6 md:space-y-10">
            {/* Row 1: simbolo + significato */}
            {p.gallery[0] && p.gallery[1] && (
              <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                <figure className="reveal md:col-span-5">
                  <div className="aspect-square w-full bg-secondary overflow-hidden flex items-center justify-center">
                    <img
                      src={p.gallery[0].src}
                      alt={p.gallery[0].caption ?? ""}
                      loading="lazy"
                      className={`w-full h-full ${p.gallery[0].fit === "cover" ? "object-cover" : "object-contain p-8 md:p-12"}`}
                    />
                  </div>
                  {p.gallery[0].caption && (
                    <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">
                      {p.gallery[0].caption}
                    </figcaption>
                  )}
                </figure>
                <figure className="reveal md:col-span-7">
                  <div className="aspect-[4/3] w-full bg-secondary overflow-hidden flex items-center justify-center">
                    <img
                      src={p.gallery[1].src}
                      alt={p.gallery[1].caption ?? ""}
                      loading="lazy"
                      className={`w-full h-full ${p.gallery[1].fit === "cover" ? "object-cover" : "object-contain p-6 md:p-10"}`}
                    />
                  </div>
                  {p.gallery[1].caption && (
                    <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">
                      {p.gallery[1].caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            )}

            {/* Row 2 & 3: full-width images (colori, coordinata) */}
            {p.gallery.slice(2, 4).map((g, i) => (
              <figure key={`full-${i}`} className="reveal">
                <div className="aspect-[16/9] w-full bg-secondary overflow-hidden flex items-center justify-center">
                  <img
                    src={g.src}
                    alt={g.caption ?? ""}
                    loading="lazy"
                    className={`w-full h-full ${g.fit === "cover" ? "object-cover" : "object-contain p-6 md:p-12"}`}
                  />
                </div>
                {g.caption && (
                  <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">
                    {g.caption}
                  </figcaption>
                )}
              </figure>
            ))}

            {/* Row 4: 3-up application grid (tote, tshirt, mobile) */}
            {p.gallery.length > 4 && (
              <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                {p.gallery.slice(4).map((g, i) => {
                  const colSpan =
                    i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-5" : "md:col-span-3";
                  const aspect =
                    g.aspect === "wide"
                      ? "aspect-[4/3]"
                      : g.aspect === "tall"
                      ? "aspect-[3/4]"
                      : "aspect-square";
                  return (
                    <figure key={`app-${i}`} className={`reveal ${colSpan}`}>
                      <div className={`${aspect} w-full bg-secondary overflow-hidden flex items-center justify-center`}>
                        <img
                          src={g.src}
                          alt={g.caption ?? ""}
                          loading="lazy"
                          className={`w-full h-full ${g.fit === "cover" ? "object-cover" : "object-contain p-6"}`}
                        />
                      </div>
                      {g.caption && (
                        <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">
                          {g.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            )}
          </div>
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
