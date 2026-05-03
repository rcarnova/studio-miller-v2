import { Link } from "react-router-dom";
import logo from "@/assets/logo-studio-miller.png";

type LogoProps = {
  size?: number;
  to?: string;
};

export function Logo({ size = 48, to = "/" }: LogoProps) {
  return (
    <Link to={to} aria-label="Studio Miller — Home" className="inline-flex items-center group">
      <img
        src={logo}
        alt="Studio Miller — studio di comunicazione e branding"
        width={size}
        height={size}
        className="block transition-transform duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      />
    </Link>
  );
}
