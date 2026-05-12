import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";
import { SEO } from "@/components/SEO";

type GalleryItem = NonNullable<import("@/data/projects").Project["gallery"]>[number];
type GalleryRow =
  | { type: "single"; item: GalleryItem }
  | { type: "pair"; items: [GalleryItem, GalleryItem] };

function buildGalleryRows(gallery: GalleryItem[]): GalleryRow[] {
  const rows: GalleryRow[] = [];
  let i = 0;
  while (i < gallery.length) {
    const cur = gallery[i];
    const nxt = gallery[i + 1];
    const curPortrait = cur.aspect === "square" || cur.aspect === "tall";
    const nxtPortrait = !!nxt && (nxt.aspect === "square" || nxt.aspect === "tall");
    if (curPortrait && nxtPortrait) {
      rows.push({ type: "pair", items: [cur, nxt] });
      i += 2;
    } else {
      rows.push({ type: "single", item: cur });
      i++;
    }
  }
  return rows;
}

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

  const seoDescription = `Caso studio: ${p.description.slice(0, 120)}${p.description.length > 120 ? "…" : ""} Cliente: ${p.client}. Scopri il progetto su Studio Miller.`;

  return (
    <>
      <SEO
        title={`${p.title} — Studio Miller`}
        description={seoDescription}
        image={p.image}
        type="article"
        path={`/lavori/${p.slug}`}
      />
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <Link to="/lavori" className="eyebrow inline-flex items-center gap-2 mb-10 hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Torna ai lavori
        </Link>

        <p className="reveal eyebrow text-primary mb-6">{p.tag}</p>
        <h1 className="reveal font-display font-black tracking-tightest leading-[0.88] text-[12vw] md:text-[7vw] lg:text-[6rem] max-w-[16ch]">
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
              className={`w-full h-full ${p.useContain ? "object-contain p-8 md:p-16" : `object-cover ${p.objectPosition ?? "object-center"}`}`}
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
          <p className="eyebrow mb-10 md:mb-14 reveal">Immagini dal progetto</p>
          <div className="space-y-6 md:space-y-10">
            {buildGalleryRows(p.gallery).map((row, rowIdx) => {
              if (row.type === "pair") {
                return (
                  <div key={rowIdx} className="grid md:grid-cols-2 gap-6 md:gap-10">
                    {row.items.map((g, i) => (
                      <figure key={i} className="reveal">
                        <div className={`${g.aspect === "square" ? "aspect-square" : "aspect-[3/4]"} w-full bg-secondary overflow-hidden`}>
                          <img
                            src={g.src}
                            alt={g.caption ?? ""}
                            loading="lazy"
                            className={`w-full h-full ${g.fit === "cover" ? `object-cover ${g.objectPosition ?? "object-center"}` : "object-contain p-6 md:p-12"}`}
                          />
                        </div>
                        {g.caption && (
                          <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">{g.caption}</figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                );
              }
              const g = row.item;
              const isPortrait = g.aspect === "tall" || g.aspect === "square";
              const aspectClass = g.aspect === "square" ? "aspect-square" : g.aspect === "tall" ? "aspect-[3/4]" : "aspect-[16/9]";
              return (
                <figure key={rowIdx} className={`reveal ${isPortrait ? "max-w-sm mx-auto w-full" : ""}`}>
                  <div className={`${aspectClass} w-full bg-secondary overflow-hidden`}>
                    <img
                      src={g.src}
                      alt={g.caption ?? ""}
                      loading="lazy"
                      className={`w-full h-full ${g.fit === "cover" ? `object-cover ${g.objectPosition ?? "object-center"}` : "object-contain p-6 md:p-12"}`}
                    />
                  </div>
                  {g.caption && (
                    <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">{g.caption}</figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </section>
      )}

      {/* NAV */}
      <nav className="border-t border-border">
        <div className="container-editorial py-10 flex flex-col md:flex-row justify-between gap-6">
          <Link to={`/lavori/${prev.slug}`} className="group">
            <p className="eyebrow mb-2 inline-flex items-center gap-2"><ArrowLeft size={12}/> Progetto precedente</p>
            <p className="font-display font-bold text-xl md:text-2xl tracking-tightest group-hover:text-primary transition-colors duration-500">
              {prev.client}
            </p>
          </Link>
          <Link to={`/lavori/${next.slug}`} className="group md:text-right">
            <p className="eyebrow mb-2 inline-flex items-center gap-2 md:justify-end">Progetto successivo <ArrowRight size={12}/></p>
            <p className="font-display font-bold text-xl md:text-2xl tracking-tightest group-hover:text-primary transition-colors duration-500">
              {next.client}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default LavoroDettaglio;
