import { Check, MapPin, Users } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { BusinessCard } from "../components/BusinessCard";
import { ContactCtaSection } from "../sections/ContactCtaSection";
import { illustrations } from "../components/Illustrations";
import { businessAreas, getBusinessArea, type AreaSlug } from "../data/businessAreas";
import { NotFound } from "./NotFound";

interface AreaPageProps {
  slug: AreaSlug;
}

const seoDescriptions: Record<AreaSlug, string> = {
  combustiveis:
    "Postos de combustível da Raldo Céu Azul, E.I. em Alto Molócuè e Gilé: abastecimento eficiente, seguro e orientado para a satisfação dos clientes.",
  residencial:
    "Residencial da Raldo Céu Azul, E.I. em Alto Molócuè: serviços de alojamento e hospedagem para visitantes, empresas, técnicos e instituições.",
  ferragem:
    "Ferragem da Raldo Céu Azul, E.I. em Alto Molócuè: comercialização de materiais de construção, ferramentas e acessórios para obras e manutenção.",
  catering:
    "Serviços de catering da Raldo Céu Azul, E.I. em Alto Molócuè para eventos, formações, reuniões, cerimónias e eventos institucionais.",
};

export function AreaPage({ slug }: AreaPageProps) {
  const area = getBusinessArea(slug);

  if (!area) {
    return <NotFound />;
  }

  const Illustration = illustrations[area.slug];
  const others = businessAreas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <Seo title={area.title} description={seoDescriptions[area.slug]} path={area.path} />

      <PageHero
        eyebrow="Áreas de negócio"
        title={area.title}
        description={area.tagline}
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Áreas de negócio", to: "/areas-de-negocio" },
          { label: area.shortTitle },
        ]}
      />

      <section className="section-y bg-white">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-muted">
                {area.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-navy">
                    <Check className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                    Destaques
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {area.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-navy">
                    <Users className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                    Para quem
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {area.audience.map((audience) => (
                      <li
                        key={audience}
                        className="rounded-full border border-brand-navy/15 bg-white px-3 py-1 text-xs font-medium text-brand-navy"
                      >
                        {audience}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2 font-medium text-brand-navy">
                  <MapPin className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                  Onde estamos:
                </span>
                {area.locations.map((location) => (
                  <span key={location} className="rounded-full bg-brand-navy/5 px-3 py-1 text-xs font-medium text-brand-navy">
                    {location}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9">
                <Button to="/contactos" variant="primary" size="lg">
                  Pedir informação
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-line shadow-soft">
              <Illustration className="h-80 w-full lg:h-[26rem]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Outras áreas de negócio</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 90}>
                <BusinessCard area={other} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
