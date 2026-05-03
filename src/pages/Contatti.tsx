import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";

const Contatti = () => {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Compila tutti i campi.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Messaggio inviato. Ti rispondiamo a breve.");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contatti — Studio Miller"
        description="Hai un progetto di branding o comunicazione? Scrivici. Studio Miller è a Vercelli, lavoriamo con aziende in tutta Italia."
        path="/contatti"
      />
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-8 reveal">Contatti</p>
        <h1 className="reveal font-display font-black text-foreground tracking-tightest leading-[0.88] text-[16vw] md:text-[11vw] lg:text-[9rem]">
          Parliamoci
        </h1>
        <p className="reveal mt-10 max-w-2xl text-xl md:text-2xl font-display tracking-tightest text-foreground/75 leading-snug">
          Hai un progetto? Vuoi capire se possiamo lavorare insieme? Scrivici.
        </p>
      </section>

      <section className="container-editorial pb-24 md:pb-32 grid lg:grid-cols-12 gap-16 pt-12">
        <form onSubmit={onSubmit} className="reveal lg:col-span-7 space-y-8">
          <div>
            <label htmlFor="name" className="eyebrow block mb-3">Nome</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-3 text-lg transition-colors"
              placeholder="Come ti chiami"
            />
          </div>
          <div>
            <label htmlFor="email" className="eyebrow block mb-3">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-3 text-lg transition-colors"
              placeholder="nome@azienda.it"
            />
          </div>
          <div>
            <label htmlFor="message" className="eyebrow block mb-3">Messaggio</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-3 text-lg transition-colors resize-none"
              placeholder="Raccontaci il tuo progetto"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {submitting ? "Invio…" : "Invia →"}
          </button>
        </form>

        <aside className="reveal lg:col-span-5 space-y-10 lg:pl-8 lg:border-l lg:border-border">
          <div>
            <p className="eyebrow mb-3">Email</p>
            <a href="mailto:studio@studiomiller.it" className="font-display text-2xl md:text-3xl tracking-tightest hover:text-primary transition-colors">
              studio@studiomiller.it
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Sede</p>
            <p className="font-display text-2xl md:text-3xl tracking-tightest">Vercelli, Italia</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Social</p>
            <a href="#" className="link-underline text-lg">LinkedIn →</a>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Contatti;
