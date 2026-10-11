import { Award, Expand, MapPinned, Puzzle, Repeat, Users } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { differentials } from "../data/company";

const icons = [Award, Puzzle, MapPinned, Users, Repeat, Expand];

export function DifferentialsSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Porque escolher a Raldo Céu Azul, E.I."
            description="Um conjunto de características que distinguem a empresa no mercado e sustentam a confiança dos nossos clientes e parceiros."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={(index % 3) * 90}>
                <article className="group h-full rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
