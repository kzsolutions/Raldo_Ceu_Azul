import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { BusinessArea } from "../data/businessAreas";
import { illustrations } from "./Illustrations";

interface BusinessCardProps {
  area: BusinessArea;
  /** Layout destacado (maior) para grelhas editoriais. */
  featured?: boolean;
}

export function BusinessCard({ area, featured = false }: BusinessCardProps) {
  const Illustration = illustrations[area.slug];
  const Icon = area.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lift ${
        featured ? "sm:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "sm:w-1/2" : ""}`}>
        <Illustration className="h-48 w-full transition-transform duration-700 group-hover:scale-105 sm:h-56" />
        <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white shadow-soft">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? "sm:w-1/2 sm:justify-center" : ""}`}>
        <h3 className="text-xl font-bold text-brand-navy">{area.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{area.summary}</p>
        <Link
          to={area.path}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-navy"
        >
          Conhecer esta área
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
          <span className="sr-only">: {area.title}</span>
        </Link>
      </div>
    </article>
  );
}
