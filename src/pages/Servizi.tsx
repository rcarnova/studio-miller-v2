import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { SEO } from "@/components/SEO";

const services = [
  {
    n: "01",
    t: "Brand Strategy",
    d: [
      "Il brand non è il logo. È la risposta alla domanda: perché esisti e perché qualcuno dovrebbe sceglierti?",
      "Lavoriamo con le persone della tua azienda, non solo con il marketing, per definire identità, positioning, naming e architettura di marca. Tutto parte da un workshop. Tutto deve reggere nel tempo.",
      "Lo abbiamo fatto per ENEA su scala europea, per aziende industriali B2B che esportano in 40 paesi, per PMI che non avevano mai messo a fuoco chi erano.",
    ],
  },
  {
    n: "02",
    t: "Corporate Storytelling",
    d: [
      "La tua azienda ha una storia. Il problema è che spesso non sa ancora come raccontarla, o la racconta in modo diverso a seconda di chi parla.",
      "Costruiamo la narrativa di marca: il messaggio centrale, il tono di voce, la struttura del racconto che tiene insieme tutto, dal sito al pitch, dalla fiera alla brochure.",
      "Perché un brand che racconta bene chi è non ha bisogno di convincere. Attrae.",
    ],
  },
  {
    n: "03",
    t: "Content Strategy",
    d: [
      "Non produciamo contenuti a prescindere. Costruiamo il sistema che rende ogni contenuto coerente con l'identità.",
      "Piano editoriale, linee guida editoriali, copywriting strategico per web. Il risultato non è un calendario pieno, è una voce riconoscibile che serve la strategia, non solo l'algoritmo.",
    ],
  },
  {
    n: "04",
    t: "Video & Campagne",
    d: [
      "Quando l'identità è chiara, la campagna viene da sola. Concept, regia, produzione video e distribuzione digitale, tutto costruito sulla piattaforma di marca, non sul trend del momento.",
      "Abbiamo girato a Villa Necchi per Paderno con uno chef stella Michelin. Abbiamo prodotto il timelapse di Tecnargilla per Inter Ser. Ogni frame racconta chi sei, ma solo se sai chi sei.",
    ],
  },
];

const Servizi = () => {
  useReveal();
  return (
    <>
      <SEO
        title="Servizi — Studio Miller"
        description="Brand strategy, corporate storytelling, content strategy e video. Studio Miller a Vercelli: prima capiamo chi sei, poi costruiamo come comunicarlo."
        path="/servizi"
      />
      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8 reveal">Servizi</p>
        <h1 className="reveal font-display font-black text-foreground tracking-tightest leading-[0.88] text-[16vw] md:text-[11vw] lg:text-[9rem]">
          Cosa facciamo
        </h1>
        <div className="reveal mt-10 max-w-2xl space-y-4 text-lg text-foreground/75 leading-relaxed">
          <p>
            Qualunque cosa tu ci chieda, partiamo sempre dallo stesso punto: capire chi sei. Non chi vorresti sembrare, chi sei davvero, come azienda, come gruppo di persone, come promessa al mercato.
          </p>
          <p>
            Non siamo un'agenzia operativa. Non gestiamo i tuoi social, non facciamo i volantini della settimana. Facciamo una cosa sola, fatta bene: costruiamo l'identità strategica del tuo brand e la rendiamo comunicabile in modo coerente su tutti i touchpoint. Poi il lavoro operativo lo fai tu, o chi vuoi, ma con una bussola chiara.
          </p>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="border-t border-border">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="reveal relative border-b border-border py-12 md:py-16 grid md:grid-cols-12 gap-6 md:gap-12 items-start overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 font-display font-bold text-primary leading-none select-none"
                style={{ fontSize: "min(28vw, 18rem)", opacity: 0.12 }}
              >
                {s.n}
              </span>
              <div className="md:col-span-2">
                <p className="font-display font-bold text-primary text-xl">{s.n}</p>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tightest leading-tight">
                  {s.t}
                </h2>
              </div>
              <div className="md:col-span-5 space-y-4">
                {s.d.map((para, j) => (
                  <p key={j} className="text-lg text-foreground/75 leading-relaxed">{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 reveal">
          <Link
            to="/contatti"
            className="inline-flex items-center gap-3 border border-primary text-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.14em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
          >
            Parliamo del tuo progetto →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Servizi;
