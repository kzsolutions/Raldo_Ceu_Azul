import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../components/Button";
import { FuelIllustration } from "../components/Illustrations";
import { company } from "../data/company";

const facts = [
  { value: "4", label: "Áreas de negócio" },
  { value: "2", label: "Localidades" },
  { value: `${company.founded}`, label: "Ano de constituição" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 15%, rgba(24,120,240,0.5), transparent 42%), radial-gradient(circle at 88% 8%, rgba(201,162,39,0.22), transparent 38%), linear-gradient(135deg, #000060 0%, #000090 55%, #000078 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-site relative grid items-center gap-14 pt-32 pb-20 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-40 lg:pb-28">
        <div className="animate-fade-up">
          <span className="eyebrow !text-brand-blue-soft">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
            Desde {company.founded} · Alto Molócuè e Gilé
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experiência que gera <span className="text-brand-blue">confiança.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-blue-soft/90">
            Combustíveis, alojamento, materiais de construção e catering. Soluções diversificadas
            para pessoas, empresas e instituições na província da {company.province}.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/areas-de-negocio" variant="primary" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
              Conheça os nossos serviços
            </Button>
            <Button
              to="/contactos"
              variant="light"
              size="lg"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Entre em contacto
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-white">{fact.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-brand-blue-soft/70">{fact.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-md">
            <div className="animate-float overflow-hidden rounded-3xl border border-white/15 bg-white/95 p-2 shadow-lift">
              <FuelIllustration className="h-64 w-full rounded-2xl sm:h-72" />
            </div>

            <div className="absolute -left-4 bottom-6 hidden rotate-[-3deg] rounded-2xl border border-line bg-white px-5 py-4 shadow-lift sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Presença</p>
              <p className="mt-1 text-sm font-semibold text-brand-navy">Alto Molócuè · Gilé</p>
            </div>

            <div className="absolute -right-3 top-6 hidden rotate-[3deg] rounded-2xl border border-line bg-brand-navy px-5 py-4 text-white shadow-lift sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue-soft">
                Director-Geral
              </p>
              <p className="mt-1 max-w-[9rem] text-sm font-semibold">{company.director}</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#apresentacao"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-brand-blue-soft/80 transition-colors hover:text-white lg:flex"
      >
        Explorar
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
