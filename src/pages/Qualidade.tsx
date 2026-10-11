import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { QualitySection } from "../sections/QualitySection";
import { ContactCtaSection } from "../sections/ContactCtaSection";
import { Reveal } from "../components/Reveal";
import { socialResponsibility } from "../data/company";
import { Leaf } from "lucide-react";

export function Qualidade() {
  return (
    <>
      <Seo
        title="Qualidade e compromisso"
        description="O compromisso da Raldo Céu Azul, E.I. com a qualidade dos produtos e serviços, a segurança dos clientes e trabalhadores e a responsabilidade social."
        path="/qualidade"
      />

      <PageHero
        eyebrow="Qualidade e compromisso"
        title="Um compromisso com a qualidade, a segurança e as pessoas"
        description="A Raldo Céu Azul, E.I. considera a qualidade um elemento fundamental para a construção de relações comerciais duradouras e assume a segurança como prioridade em todas as suas actividades."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Qualidade e compromisso" }]}
      />

      <section className="section-y bg-white">
        <div className="container-site max-w-3xl space-y-5 text-base leading-relaxed text-muted">
          <p>
            A segurança assume especial importância nas actividades da empresa, particularmente no
            sector de combustíveis. A empresa procura promover práticas responsáveis relacionadas
            com a segurança dos trabalhadores, dos clientes e das instalações, o manuseamento
            adequado de produtos, a prevenção de acidentes, a protecção ambiental e o cumprimento
            das normas aplicáveis.
          </p>
          <p>
            A Raldo Céu Azul, E.I. procura igualmente garantir atendimento profissional, respeito
            pelos clientes, organização, eficiência e melhoria contínua dos serviços prestados em
            todas as suas áreas de negócio.
          </p>
        </div>
      </section>

      <QualitySection withHeading={false} />

      <section className="section-y bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
              <Leaf className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-brand-navy sm:text-3xl">
              Responsabilidade social
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A empresa reconhece o seu papel enquanto agente económico inserido nas comunidades de
              Alto Molócuè e Gilé, acreditando que o crescimento empresarial deve estar associado à
              criação de valor para a comunidade.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-4">
              {socialResponsibility.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-ink"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
