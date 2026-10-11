import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { company } from "../data/company";

interface LogoProps {
  /** Aplica fundo claro atrás do logótipo (útil sobre fundos escuros). */
  onDark?: boolean;
  className?: string;
}

export function Logo({ onDark = false, className = "" }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center rounded-xl transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label={`${company.name} — página inicial`}
    >
      <span
        className={
          onDark
            ? "inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-soft"
            : "inline-flex items-center"
        }
      >
        <img
          src={logo}
          alt={`${company.name} — logótipo`}
          width={881}
          height={346}
          className="h-9 w-auto sm:h-10"
          loading="eager"
          decoding="async"
        />
      </span>
    </Link>
  );
}
