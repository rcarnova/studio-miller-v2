import { Link } from "react-router-dom";

type LogoProps = {
  size?: number;
  to?: string;
};

export function Logo({ size = 44, to = "/" }: LogoProps) {
  return (
    <Link to={to} aria-label="Studio Miller — Home" className="inline-flex items-center gap-3 group">
      <span
        className="flex items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold leading-none transition-transform duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <span className="flex flex-col items-center" style={{ fontSize: size * 0.205, lineHeight: 1.05 }}>
          <span className="tracking-[0.04em]">STUDIO</span>
          <span className="tracking-[0.04em]">MILLER</span>
        </span>
      </span>
      <span className="sr-only">Studio Miller</span>
    </Link>
  );
}
