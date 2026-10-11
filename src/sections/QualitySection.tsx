import { ShieldCheck, HeartHandshake, Leaf } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import {
  qualityCommitments,
  safetyCommitments,
  socialResponsibility,
} from "../data/company";

interface QualitySectionProps {
  withHeading?: boolean;
}

const groups = [
  {
    icon: ShieldCheck,
    title: "Qualidade",
    intro:
      "A qualidade é um elemento fundamental para a construção de relações comerciais duradouras.",
    items: qualityCommitments,
  },
  {
    icon: HeartHandshake,
    title: "Segurança e responsabilidade",
    intro:
      "A segurança assume especial importância nas actividades da empresa, particularmente no sector de combustíveis.",
    items: safetyCommitments,
  },
  {
    icon: Leaf,
    title: "Responsabilidade social",
    intro:
      "A empresa reconhece o seu papel enquanto agente económico inserido nas comunidades de Alto Molócuè e Gilé.",
    items: socialResponsibility,
  },
];

export function QualitySection({ withHeading = true }: QualitySectionProps) {
  return (
    <section className={withHeading ? "section-y bg-surface" : "pb-20 sm:pb-24"}>
      <div className="container-site">
        {withHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Qualidade, segurança e responsabilidade"
              title="Compromissos que sustentam a confiança"
              description="A Raldo Céu Azul, E.I. procura garantir um serviço profissional, seguro e responsável em todas as suas áreas de negócio."
            />
          </Reveal>
        )}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-brand-navy">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{group.intro}</p>
                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
