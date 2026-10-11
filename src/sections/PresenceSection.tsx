import { MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { contacts } from "../data/contacts";
import { businessAreas } from "../data/businessAreas";

const presence = [
  {
    locality: "Alto Molócuè",
    description:
      "Sede da empresa e localização de todas as unidades de negócio: combustíveis, residencial, ferragem e serviços de catering.",
    activitySlugs: ["combustiveis", "residencial", "ferragem", "catering"] as const,
    highlight: true,
  },
  {
    locality: "Gilé",
    description:
      "Distrito onde a empresa opera um posto de combustível, contribuindo para a mobilidade de pessoas e mercadorias na região.",
    activitySlugs: ["combustiveis"] as const,
    highlight: false,
  },
];

export function PresenceSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Presença empresarial"
            title="Cobertura comercial na província da Zambézia"
            description="A empresa possui actualmente presença em Alto Molócuè e Gilé, permitindo uma cobertura comercial relevante na região."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {presence.map((item, index) => (
            <Reveal key={item.locality} delay={index * 100}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${
                  item.highlight ? "border-brand-blue/30 bg-brand-blue-soft/50" : "border-line bg-surface"
                }`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{item.locality}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.activitySlugs.map((slug) => {
                    const area = businessAreas.find((a) => a.slug === slug);
                    if (!area) return null;
                    return (
                      <li
                        key={slug}
                        className="rounded-full border border-brand-navy/15 bg-white px-3 py-1 text-xs font-medium text-brand-navy"
                      >
                        {area.shortTitle}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Sede: {contacts.address.line1}, {contacts.address.line2} — {contacts.address.locality}.
            </p>
            <Button
              href={contacts.mapUrl}
              external
              variant="outline"
              icon={<Navigation className="h-4 w-4" />}
            >
              Ver localização
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
