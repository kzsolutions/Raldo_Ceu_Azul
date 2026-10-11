import { Quote } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { company, directorMessage } from "../data/company";

export function DirectorMessage() {
  return (
    <section className="section-y bg-surface">
      <div className="container-site">
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-soft sm:p-12 lg:p-16">
            <Quote
              className="absolute right-8 top-8 h-16 w-16 text-brand-blue/10"
              aria-hidden="true"
            />
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
              Mensagem da direcção
            </span>

            <div className="mt-6 space-y-5">
              {directorMessage.map((paragraph) => (
                <blockquote key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-ink sm:text-xl">
                  {paragraph}
                </blockquote>
              ))}
            </div>

            <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
              >
                {company.director
                  .split(" ")
                  .map((name) => name[0])
                  .slice(0, 3)
                  .join("")}
              </span>
              <span>
                <span className="block font-semibold text-brand-navy">{company.director}</span>
                <span className="block text-sm text-muted">Director-Geral</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
