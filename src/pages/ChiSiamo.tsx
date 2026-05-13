import { useReveal } from "@/hooks/useReveal";
import massimoPhoto from "@/assets/team/massimo-benedetti.png";
import rosarioPhoto from "@/assets/team/rosario-carnovale.png";
import { SEO } from "@/components/SEO";

const team = [
  {
    initials: "MB",
    photo: massimoPhoto,
    name: "Massimo Benedetti",
    role: "Storytelling Specialist",
    bio: "Massimo ha una laurea al Politecnico e un master in Corporate Storytelling, ma quello che conta davvero è che sa ascoltare un'azienda e restituirle la sua storia in modo che finalmente si riconosca. Ha lavorato con realtà che vanno dall'ITC al food al manufacturing, settori diversi, stesso problema: trovare le parole giuste per dire chi sei.",
  },
  {
    initials: "RC",
    photo: rosarioPhoto,
    name: "Rosario Carnovale",
    role: "Brand Strategist",
    bio: "Rosario viene dal mondo delle vendite enterprise, dieci anni in Oracle, startup, imprenditoria. Sa cosa significa stare dall'altra parte del tavolo, capire un cliente prima ancora che sappia cosa vuole. Oggi usa quella stessa capacità per costruire piattaforme di marca che non siano solo belle, ma strategicamente solide.",
  },
];

const ChiSiamo = () => {
  useReveal();
  return (
    <>
      <SEO
        title="Chi siamo - Studio Miller"
        description="Studio Miller è una boutique di branding con sede a Vercelli. Massimo Benedetti e Rosario Carnovale: due professionisti che partono sempre dalle persone."
        path="/chi-siamo"
      />
      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8 reveal">Lo studio</p>
        <h1 className="reveal font-display font-black text-foreground tracking-tightest leading-[0.88] text-[16vw] md:text-[11vw] lg:text-[9rem]">
          Chi siamo
        </h1>
        <div className="reveal mt-10 max-w-3xl text-xl md:text-2xl font-display tracking-tightest text-foreground/80 leading-snug space-y-6">
          <p>
            Siamo una boutique di branding con sede a Vercelli. Lavoriamo con aziende che hanno
            già capito una cosa: il problema non è grafico.
          </p>
          <p>
            Quando tutto si assomiglia, quando i brand sembrano fatti con lo stesso template,
            le stesse parole, gli stessi colori, l'identità diventa il vantaggio competitivo
            più difficile da copiare. Ma per averla, devi sapere chi sei davvero.
          </p>
          <p>Noi partiamo da lì.</p>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-editorial">
          <p className="eyebrow mb-14 reveal">Team</p>
          <div className="space-y-16 md:space-y-20">
            {team.map((m, i) => (
              <article key={m.name} className="reveal grid md:grid-cols-12 gap-8 md:gap-12 items-start" style={{ transitionDelay: `${i*120}ms` }}>
                <div className="md:col-span-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-secondary">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-4xl md:text-5xl tracking-tightest">
                        {m.initials}
                      </div>
                    )}
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
        <div className="max-w-3xl space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p className="reveal">
            Ogni progetto, che tu ci chieda un naming, un logo o una strategia di contenuto,
            inizia sempre allo stesso modo: un workshop con le persone della tua azienda.
          </p>
          <p className="reveal" style={{ transitionDelay: "80ms" }}>
            Non perché siamo romantici. Ma perché in vent'anni abbiamo imparato che l'identità
            di un brand non si inventa a tavolino. Si scopre. Ed è già lì, nelle persone che
            lavorano ogni giorno dentro quell'azienda.
          </p>
          <p className="reveal" style={{ transitionDelay: "160ms" }}>
            Il workshop di Brand Vision è il nostro strumento principale. È il momento in cui
            il tuo team smette di parlare di prodotti e inizia a parlare di valori, di
            direzione, di chi vuole diventare. Da quello costruiamo tutto il resto.
          </p>
          <p className="reveal" style={{ transitionDelay: "240ms" }}>
            Il risultato non è solo un artefatto. È un team che ha ragionato insieme sulla
            propria identità. È internal branding, team building e strategia nello stesso
            processo. È la differenza tra un logo che costa 300 euro e uno che vale 10.000.
          </p>
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;
