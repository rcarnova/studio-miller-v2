import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { FeaturedCase } from "@/components/FeaturedCase";
import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { SEO, SITE_URL } from "@/components/SEO";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Studio Miller",
  url: SITE_URL,
  description: "Studio di branding e content strategy con sede a Vercelli. Aiutiamo PMI e organizzazioni a costruire identità di marca chiare, distintive e capaci di generare valore.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vercelli",
    addressRegion: "VC",
    postalCode: "13100",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.3247,
    longitude: 8.4209,
  },
  areaServed: [
    { "@type": "City", name: "Vercelli" },
    { "@type": "AdministrativeArea", name: "Piemonte" },
    { "@type": "Country", name: "Italia" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "studio@studiomiller.it",
    contactType: "customer service",
  },
};

const Index = () => {
  useReveal();

  return (
    <>
      <SEO
        title="Studio Miller - Branding, Comunicazione e Content Strategy"
        description="Studio Miller è uno studio di branding e content strategy con sede a Vercelli. Aiutiamo PMI e organizzazioni a costruire identità di marca chiare, distintive e capaci di generare valore."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      {/* HERO */}
      <section className="container-editorial pt-12 md:pt-16 pb-16 md:pb-32 min-h-[92vh] flex flex-col justify-between gap-16 md:gap-20">
        <div>
          <p className="eyebrow mb-10 reveal">STUDIO MILLER - BRANDING</p>
          <h1 className="reveal font-display font-black text-foreground tracking-tightest leading-[0.88] text-[18vw] md:text-[10vw] lg:text-[9vw] xl:text-[10vw] min-[1440px]:text-[13rem] max-w-[12ch] mb-12 md:mb-16">
            L'identità<br />è la<br /><span className="text-primary">strategia.</span>
          </h1>
        </div>
        <div className="reveal mt-16 md:mt-0 flex flex-col md:flex-row md:items-start md:justify-between md:gap-24 border-t border-border pt-10" style={{ transitionDelay: "400ms" }}>
          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-sm">
            Lavoriamo con aziende che hanno già capito una cosa: il problema non è grafico. Partiamo sempre dalle persone, dalle tue.
          </p>
          <Link
            to="/lavori"
            className="inline-flex items-center gap-3 border border-primary text-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.14em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500 shrink-0"
          >
            Vedi i lavori <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* VENTURO */}
      <div className="border-b border-border">
        <div className="container-editorial py-4">
          <p className="text-sm text-foreground/60">
            Studio Miller è il braccio creativo di Venturo.{" "}
            <a
              href="https://www.venturoconsulting.it"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              Scopri Venturo →
            </a>
          </p>
        </div>
      </div>

      {/* STATEMENT */}
      <section className="bg-ink text-background py-32 md:py-56">
        <div className="container-editorial">
          <blockquote className="reveal font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tightest max-w-5xl">
            Il brand non è la comunicazione.<br />
            Il brand è la promessa che la<br />comunicazione mantiene.
          </blockquote>
          <p className="reveal eyebrow mt-12 text-background/40" style={{ transitionDelay: "150ms" }}>
            - Studio Miller
          </p>
        </div>
      </section>

      {/* LAVORI SELEZIONATI */}
      <section className="py-24 md:py-40 border-t border-border">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-20 md:mb-40 reveal">
            <div>
              <p className="eyebrow mb-6">Lavori selezionati</p>
              <h2 className="font-display font-black text-4xl md:text-6xl tracking-tightest leading-tight max-w-2xl">
                Progetti diversi,<br />una sola convinzione:<br />
                <span className="text-foreground/40">l'identità si scopre,<br />non si inventa.</span>
              </h2>
            </div>
            <Link to="/lavori" className="hidden md:inline-flex text-sm font-medium link-underline shrink-0">
              Tutti i progetti →
            </Link>
          </div>

          <div className="space-y-40 md:space-y-64">
            <FeaturedCase project={projects[0]} index={0} size="large" />

            <div className="grid md:grid-cols-2 gap-16 md:gap-20">
              <FeaturedCase project={projects[1]} index={1} size="small" />
              <FeaturedCase project={projects[3]} index={2} size="small" />
            </div>

            <FeaturedCase project={projects[10]} index={3} size="large" />

            <div className="grid md:grid-cols-2 gap-16 md:gap-20">
              <FeaturedCase project={projects[6]} index={4} size="small" />
              <FeaturedCase project={projects[17]} index={5} size="small" />
            </div>
          </div>

          <div className="mt-24 md:hidden reveal">
            <Link to="/lavori" className="text-sm font-medium link-underline text-primary">
              Tutti i progetti →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIZI PREVIEW */}
      <section className="border-t border-border">
        <div className="container-editorial py-32 md:py-40">
          <p className="eyebrow mb-20 reveal">Cosa facciamo</p>
          <div className="grid md:grid-cols-3 items-start divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                n: "01",
                t: "Brand Strategy",
                d: "Partiamo da un workshop con le persone della tua azienda. L'identità si costruisce da dentro.",
              },
              {
                n: "02",
                t: "Corporate Storytelling",
                d: "Troviamo la narrativa che il mercato ricorda, e che i tuoi colleghi sentono propria.",
              },
              {
                n: "03",
                t: "Content & Video",
                d: "Contenuti che servono la strategia, non solo il feed. Dalla piattaforma di marca alla campagna.",
              },
            ].map((s, i) => (
              <div key={s.t} className="reveal py-10 md:py-0 md:px-16 first:md:pl-0 last:md:pr-0 space-y-6" style={{ transitionDelay: `${i * 120}ms` }}>
                <p className="text-primary font-medium text-sm">{s.n}</p>
                <h3 className="font-display font-black text-3xl md:text-4xl tracking-tightest leading-tight">
                  {s.t}
                </h3>
                <p className="text-foreground/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-16 border-t border-border reveal">
            <Link to="/servizi" className="text-primary font-medium link-underline">
              Tutti i servizi →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="border-t border-border">
        <div className="container-editorial py-24 md:py-32 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tightest leading-tight max-w-lg reveal">
            Hai un progetto<br />
            <span className="text-foreground/40">che vale la pena</span><br />
            raccontare?
          </h2>
          <Link
            to="/contatti"
            className="reveal inline-flex items-center gap-3 border border-primary text-primary px-8 py-5 text-sm font-medium uppercase tracking-[0.14em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500 shrink-0"
            style={{ transitionDelay: "200ms" }}
          >
            Parliamone <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
