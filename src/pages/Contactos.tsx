import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { contacts, units } from "../data/contacts";
import { company } from "../data/company";

const contactCards = [
  {
    icon: Phone,
    title: "Telefone",
    lines: [contacts.phonePrimary.label, contacts.phoneSecondary.label],
    action: { label: "Ligar agora", href: contacts.phonePrimary.href, external: false },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [contacts.whatsapp.label],
    action: { label: "Abrir WhatsApp", href: contacts.whatsapp.href, external: true },
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: [contacts.email.label],
    action: { label: "Enviar e-mail", href: contacts.email.href, external: false },
  },
];

export function Contactos() {
  return (
    <>
      <Seo
        title="Contactos"
        description="Contacte a Raldo Céu Azul, E.I.: telefone +258 87 292 1300, e-mail raldolentino5@gmail.com e WhatsApp. Sede em Alto Molócuè, Estrada Nacional nº 1, Rua da Pista Velha."
        path="/contactos"
      />

      <PageHero
        eyebrow="Contactos"
        title="Fale connosco"
        description="Estamos disponíveis para responder a pedidos de informação, propostas de parceria e solicitações sobre os nossos produtos e serviços."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Contactos" }]}
      />

      <section className="section-y bg-white">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 100}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-lg font-bold text-brand-navy">{card.title}</h2>
                    <ul className="mt-3 flex-1 space-y-1 text-sm text-muted">
                      {card.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button
                        href={card.action.href}
                        external={card.action.external}
                        variant="outline"
                        className="w-full"
                      >
                        {card.action.label}
                      </Button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-brand-navy-deep p-8 text-white">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-6 w-6 text-brand-blue-soft" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg font-bold">Localização</h2>
                <address className="mt-3 not-italic leading-relaxed text-brand-blue-soft/85">
                  <span className="block font-semibold text-white">{company.name}</span>
                  {contacts.address.line1}
                  <br />
                  {contacts.address.line2}
                  <br />
                  {contacts.address.locality}
                  <br />
                  {contacts.address.province}
                </address>
                <div className="mt-6">
                  <Button href={contacts.mapUrl} external variant="light">
                    Ver no mapa
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-line bg-surface p-8">
                <h2 className="text-lg font-bold text-brand-navy">Unidades e actividades</h2>
                <ul className="mt-5 divide-y divide-line">
                  {units.map((unit) => (
                    <li
                      key={`${unit.activity}-${unit.location}`}
                      className="flex items-center justify-between gap-4 py-3 text-sm"
                    >
                      <span className="font-medium text-ink">{unit.activity}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-navy">
                        {unit.location}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
