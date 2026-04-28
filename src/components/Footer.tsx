import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="container-editorial py-12 md:py-16 grid gap-10 md:grid-cols-3 items-start">
        <div className="space-y-4">
          <Logo size={44} />
          <p className="text-sm text-muted-foreground max-w-xs">
            Boutique di branding e content strategy. Costruiamo brand che sanno chi sono.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="eyebrow mb-3">Studio</p>
          <p>Vercelli, Italia</p>
          <a href="mailto:studio@studiomiller.it" className="block link-underline">
            studio@studiomiller.it
          </a>
          <p className="text-muted-foreground">P.IVA 02845710029</p>
        </div>

        <div className="text-sm space-y-2 md:text-right">
          <p className="eyebrow mb-3">Naviga</p>
          <Link to="/lavori" className="block link-underline">Lavori</Link>
          <Link to="/servizi" className="block link-underline">Servizi</Link>
          <Link to="/contatti" className="block link-underline">Contatti</Link>
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
