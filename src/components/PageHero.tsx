import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; to?: string }[];
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(24,120,240,0.45), transparent 45%), radial-gradient(circle at 85% 0%, rgba(201,162,39,0.18), transparent 40%)",
        }}
      />
      <div className="container-site relative">
        {breadcrumb && (
          <nav aria-label="Trilha de navegação" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-blue-soft/80">
              {breadcrumb.map((item, index) => (
                <li key={`${item.label}-${index}`} className="flex items-center gap-1">
                  {item.to ? (
                    <Link to={item.to} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/90" aria-current="page">
                      {item.label}
                    </span>
                  )}
                  {index < breadcrumb.length - 1 && (
                    <ChevronRight className="h-4 w-4 opacity-60" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <span className="eyebrow !text-brand-blue-soft">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-blue-soft/90">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
