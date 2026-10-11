import { SectionHeading } from "../components/SectionHeading";
import { BusinessCard } from "../components/BusinessCard";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { businessAreas } from "../data/businessAreas";

export function BusinessAreasSection() {
  return (
    <section id="areas" className="section-y scroll-mt-24 bg-surface">
      <div className="container-site">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Áreas de negócio"
            title="Quatro actividades, um só compromisso"
            description="A estrutura empresarial da Raldo Céu Azul, E.I. reúne combustíveis, alojamento, comércio de materiais de construção e catering, respondendo a diferentes segmentos do mercado."
          />
          <Button to="/areas-de-negocio" variant="outline" className="hidden shrink-0 sm:inline-flex">
            Ver todas as áreas
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {businessAreas.map((area, index) => (
            <Reveal key={area.slug} delay={index * 90}>
              <BusinessCard area={area} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button to="/areas-de-negocio" variant="outline" size="lg" className="w-full">
            Ver todas as áreas
          </Button>
        </div>
      </div>
    </section>
  );
}
