import { Check } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { values } from "../data/company";

export function ValuesSection() {
  return (
    <section className="section-y bg-brand-navy-deep">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Nossos valores"
            title="Princípios que orientam a nossa actividade"
            description="A actuação da Raldo Céu Azul, E.I. é orientada por um conjunto de valores que definem a forma como trabalhamos e nos relacionamos."
            tone="light"
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal as="li" key={value} delay={(index % 4) * 70}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-colors duration-300 hover:border-brand-blue/50 hover:bg-white/10">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-white">{value}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
