import { Building2, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { LodgeIllustration } from "../components/Illustrations";
import { company, mission } from "../data/company";

const pillars = [
  {
    icon: Building2,
    title: "Diversificação",
    text: "Quatro áreas de negócio que respondem a necessidades distintas do mercado.",
  },
  {
    icon: MapPin,
    title: "Presença local",
    text: `Actividades em ${company.presence.join(" e ")}, na província da ${company.province}.`,
  },
  {
    icon: ShieldCheck,
    title: "Compromisso",
    text: "Foco na qualidade, segurança e satisfação dos clientes e parceiros.",
  },
];

export function AboutIntro() {
  return (
    <section id="apresentacao" className="section-y scroll-mt-24 bg-white">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-line shadow-soft">
              <LodgeIllustration className="h-72 w-full sm:h-80" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-line bg-white p-5 shadow-lift sm:right-auto sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                Sede
              </p>
              <p className="mt-1 text-sm font-medium leading-relaxed text-brand-navy">
                {company.headquarters} — {company.address}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="Quem somos"
              title="Uma empresa moçambicana construída sobre a diversificação"
              description={`A ${company.name} é uma empresa de capitais nacionais, constituída em ${company.founded}, com sede na Vila de Alto Molócuè, Província da ${company.province}.`}
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-base leading-relaxed text-muted">{mission}</p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <li key={pillar.title} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-navy">{pillar.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9">
              <Button to="/sobre" variant="secondary" size="lg">
                Saber mais sobre nós
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
