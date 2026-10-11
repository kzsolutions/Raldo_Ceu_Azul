import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { HighlightBand } from "../sections/HighlightBand";
import { ContactCtaSection } from "../sections/ContactCtaSection";
import { businessAreas } from "../data/businessAreas";
import { illustrations } from "../components/Illustrations";

export function AreasNegocio() {
  return (
    <>
      <Seo
        title="Áreas de negócio"
        description="As quatro áreas de negócio da Raldo Céu Azul, E.I.: combustíveis, residencial, ferragem e catering, com presença em Alto Molócuè e Gilé."
        path="/areas-de-negocio"
      />

      <PageHero
        eyebrow="Áreas de negócio"
        title="Soluções diversificadas para diferentes necessidades"
        description="A empresa apresenta actualmente uma estrutura empresarial diversificada, constituída por quatro principais áreas de negócio que se complementam."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Áreas de negócio" }]}
      />

      <section className="section-y bg-white">
        <div className="container-site space-y-16">
          {businessAreas.map((area, index) => {
            const Illustration = illustrations[area.slug];
            const Icon = area.icon;
            const reversed = index % 2 === 1;
            return (
              <Reveal key={area.slug}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-3xl border border-line shadow-soft">
                    <Illustration className="h-72 w-full sm:h-80" />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
                        0{index + 1} · {area.shortTitle}
                      </span>
                    </span>
                    <h2 className="mt-5 text-2xl font-bold text-brand-navy sm:text-3xl">{area.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">{area.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {area.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-brand-navy/15 bg-surface px-3 py-1 text-xs font-medium text-brand-navy"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={area.path}
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-navy"
                    >
                      Ver detalhes
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      <span className="sr-only"> de {area.title}</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <HighlightBand />
      <ContactCtaSection />
    </>
  );
}
