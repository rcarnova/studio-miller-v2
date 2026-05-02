import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    n: "01",
    t: "Brand Strategy",
    d: "Partiamo sempre da un workshop con le persone della tua azienda. Identità, positioning, naming, architettura di marca — tutto costruito su chi sei davvero, non su chi vorresti sembrare.",
  },
  {
    n: "02",
    t: "Corporate Storytelling",
    d: "La tua azienda ha una storia. Il problema è che spesso non sa ancora come raccontarla. Lavoriamo con i tuoi team per trovare la narrativa che il mercato ricorda — e che i tuoi colleghi sentono propria.",
  },
  {
    n: "03",
    t: "Content Strategy",
    d: "Contenuti che servono la strategia, non solo il feed. Piano editoriale, copywriting, content per web e social costruiti a partire dall'identità — non dall'algoritmo.",
  },
  {
    n: "04",
    t: "Video & Campagne Digitali",
    d: "Dalla piattaforma di marca alla campagna video distribuita sui canali digitali. Ideazione, produzione, distribuzione. Ogni frame racconta chi sei.",
  },
];

const Servizi = () => {
  useReveal();
  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8 reveal">Servizi</p>
        <h1 className="reveal font-display font-bold tracking-tightest leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem]">
          Cosa facciamo
        </h1>
        <div className="reveal mt-10 max-w-2xl space-y-4 text-lg text-foreground/70 leading-relaxed">
          <p>
            Qualunque cosa tu ci chieda — un naming, un logo, una campagna — iniziamo
            sempre allo stesso modo: un workshop con le persone della tua azienda.
          </p>
          <p>
            Perché un brand che non sa chi è non può comunicare a nessuno.
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
              <div className="md:col-span-5">
                <p className="text-lg text-foreground/75 leading-relaxed">{s.d}</p>
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
