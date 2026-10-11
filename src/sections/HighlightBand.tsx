import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { businessAreas } from "../data/businessAreas";

export function HighlightBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(24,120,240,0.45), transparent 45%), radial-gradient(circle at 0% 90%, rgba(201,162,39,0.16), transparent 40%)",
        }}
      />
      <div className="container-site relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow !text-brand-blue-soft">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
            Diversificação empresarial
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Quatro áreas de negócio. Uma visão de crescimento.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-blue-soft/90">
            A diversificação permite à empresa reduzir a dependência de uma única actividade,
            criar oportunidades comerciais e responder às necessidades de clientes, empresas e
            instituições da região.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="mt-12 flex flex-col gap-3 lg:flex-row lg:items-center">
            {businessAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <li key={area.slug} className="flex items-center gap-3 lg:flex-1">
                  <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-white">{area.shortTitle}</span>
                  </div>
                  {index < businessAreas.length - 1 && (
                    <ArrowRight
                      className="hidden h-5 w-5 shrink-0 text-brand-blue-soft/60 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
