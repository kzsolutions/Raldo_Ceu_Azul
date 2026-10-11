import { Compass, Target } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { mission, vision } from "../data/company";

const cards = [
  { icon: Target, title: "Missão", body: mission, accent: "from-brand-blue/12" },
  { icon: Compass, title: "Visão", body: vision, accent: "from-accent/15" },
];

export function MissionVision() {
  return (
    <section className="section-y bg-white">
      <div className="container-site grid gap-6 md:grid-cols-2">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={index * 120}>
              <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-soft sm:p-10">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent} to-transparent`}
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-brand-navy">{card.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{card.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
