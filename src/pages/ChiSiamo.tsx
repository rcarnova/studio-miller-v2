import { useReveal } from "@/hooks/useReveal";

const team = [
  {
    initials: "MB",
    name: "Massimo Benedetti",
    role: "Storytelling Specialist",
    bio: "Laurea in Sistemi Informativi Territoriali al Politecnico di Torino, Master in Corporate Storytelling. Consulente e formatore, ha affiancato nella realizzazione di strategie di contenuto e narrazione realtà di impresa e professionisti in vari comparti (ITC, Food, Manufacturing).",
  },
  {
    initials: "RC",
    name: "Rosario Carnovale",
    role: "Brand Strategist",
    bio: "Laurea in Comunicazione, Media e Pubblicità, Master in Coaching. Rosario ha sviluppato un'importante esperienza come Sales Manager nell'IT, e in qualità di brand strategist ha affiancato l'ufficio marketing di aziende multinazionali nei settori ITC, Farma, GDO, Food e Manufacturing.",
  },
];

const ChiSiamo = () => {
  useReveal();
  return (
    <>
      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8 reveal">Lo studio</p>
        <h1 className="reveal font-display font-bold tracking-tightest leading-[0.95] text-[14vw] md:text-[8vw] lg:text-[7rem]">
          Chi siamo
        </h1>
        <p className="reveal mt-10 max-w-3xl text-xl md:text-2xl font-display tracking-tightest text-foreground/80 leading-snug">
          Studio Miller è una boutique di branding con sede a Vercelli. Lavoriamo con aziende che
          vogliono costruire un'identità solida, riconoscibile e coerente con la loro strategia.
        </p>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-editorial">
          <p className="eyebrow mb-14 reveal">Team</p>
          <div className="space-y-16 md:space-y-20">
            {team.map((m, i) => (
              <article key={m.name} className="reveal grid md:grid-cols-12 gap-8 md:gap-12 items-start" style={{ transitionDelay: `${i*120}ms` }}>
                <div className="md:col-span-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-4xl md:text-5xl tracking-tightest">
                    {m.initials}
                  </div>
                </div>
                <div className="md:col-span-9 space-y-3">
                  <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tightest leading-tight">{m.name}</h3>
                  <p className="text-primary font-medium">{m.role}</p>
                  <p className="text-foreground/75 text-lg leading-relaxed max-w-3xl pt-2">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <p className="eyebrow mb-14 reveal">Come lavoriamo</p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            { n: "01", t: "Ascolto prima di tutto", d: "Capire l'azienda, il mercato, le persone. Nessuna risposta senza domande giuste." },
            { n: "02", t: "Strategia prima di esecuzione", d: "La piattaforma di marca orienta ogni scelta. Senza, c'è solo decorazione." },
            { n: "03", t: "Identità come fondamento", d: "Tutto parte da chi sei. Il resto — voce, contenuto, campagna — è conseguenza." },
          ].map((s, i) => (
            <div key={s.n} className="reveal" style={{ transitionDelay: `${i*100}ms` }}>
              <p className="font-display font-bold text-primary text-xl mb-4">{s.n}</p>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tightest leading-tight">{s.t}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;
