import { Briefcase, Users } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { DirectorMessage } from "../sections/DirectorMessage";
import { MissionVision } from "../sections/MissionVision";
import { ValuesSection } from "../sections/ValuesSection";
import { DifferentialsSection } from "../sections/DifferentialsSection";
import { ContactCtaSection } from "../sections/ContactCtaSection";
import { company, humanResourcesValues, managementAreas } from "../data/company";

export function Sobre() {
  return (
    <>
      <Seo
        title="Sobre nós"
        description="Conheça a Raldo Céu Azul, E.I.: empresa moçambicana constituída em 2015, com sede em Alto Molócuè, missão, visão, valores, recursos humanos e gestão."
        path="/sobre"
      />

      <PageHero
        eyebrow="Sobre nós"
        title="Uma trajectória marcada pela diversificação"
        description={`A ${company.name} desenvolve actividade em diferentes sectores, procurando aproveitar oportunidades de negócio e contribuir para a dinamização da economia local.`}
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Sobre nós" }]}
      />

      <section className="section-y bg-white">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                A {company.name} é uma empresa de capitais nacionais, constituída em{" "}
                {company.founded}, com sede na Vila de Alto Molócuè, Província da {company.province}.
                A empresa desenvolve actividades em diferentes sectores, procurando aproveitar
                oportunidades de negócio e contribuir para a dinamização da economia local.
              </p>
              <p>
                A sua diversificação empresarial permite oferecer produtos e serviços a diferentes
                segmentos do mercado, estabelecendo relações com particulares, empresas,
                instituições públicas, organizações e outros agentes económicos.
              </p>
              <p>
                A existência de actividades em diferentes sectores demonstra a capacidade da
                empresa de identificar oportunidades, investir em novos negócios e adaptar-se às
                necessidades do mercado. Actualmente, a empresa possui presença empresarial em{" "}
                {company.presence.join(" e ")}, permitindo uma cobertura comercial relevante na
                região.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {[
                ["Denominação", company.name],
                ["NUIT", company.nuit],
                ["Ano de constituição", String(company.founded)],
                ["Sede", company.headquarters],
                ["Endereço", company.address],
                ["Director-Geral", company.director],
                ["Presença", company.presence.join(" e ")],
                ["Principais actividades", "Combustíveis, Residencial, Ferragem e Catering"],
              ].map(([label, value]) => (
                <div key={label} className="bg-surface px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-brand-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <DirectorMessage />
      <MissionVision />
      <ValuesSection />

      <section className="section-y bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Recursos humanos"
              title="As pessoas no centro da organização"
              description="A empresa reconhece que os seus colaboradores constituem um dos principais activos da organização, promovendo um ambiente de trabalho baseado em responsabilidade, respeito e profissionalismo."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {humanResourcesValues.map((value) => (
                <li
                  key={value}
                  className="rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium text-brand-navy"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                <Briefcase className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-brand-navy">Gestão e organização</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A Direcção-Geral, liderada por {company.director}, assegura a orientação
                estratégica da empresa, a coordenação das actividades e a gestão dos recursos.
              </p>
              <h4 className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <Users className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                Principais áreas funcionais
              </h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {managementAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <DifferentialsSection />
      <ContactCtaSection />
    </>
  );
}
