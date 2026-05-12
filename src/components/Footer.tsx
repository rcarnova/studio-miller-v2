import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-editorial py-16 md:py-20 grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-4 space-y-6">
          <Logo size={44} />
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Partiamo sempre dalle persone — le tue.<br />
            Vercelli, Italia.
          </p>
          <a href="mailto:studio@studiomiller.it" className="block text-sm link-underline text-foreground">
            studio@studiomiller.it
          </a>
        </div>
        <div className="md:col-span-2 md:col-start-7 text-sm space-y-3">
          <p className="eyebrow mb-4">Studio</p>
          <p className="text-muted-foreground">P.IVA 02845710029</p>
        </div>
        <div className="md:col-span-2 text-sm space-y-3">
          <p className="eyebrow mb-4">Naviga</p>
          <Link to="/lavori" className="block link-underline hover:text-primary transition-colors duration-500">Lavori</Link>
          <Link to="/servizi" className="block link-underline hover:text-primary transition-colors duration-500">Servizi</Link>
          <Link to="/chi-siamo" className="block link-underline hover:text-primary transition-colors duration-500">Chi siamo</Link>
          <Link to="/contatti" className="block link-underline hover:text-primary transition-colors duration-500">Contatti</Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-editorial py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Studio Miller. Tutti i diritti riservati.</p>
          <p>L'identità è la strategia.</p>
        </div>
      </div>
    </footer>
  );
}
