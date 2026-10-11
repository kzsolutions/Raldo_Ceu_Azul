import { Handshake } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { partnerships } from "../data/company";

export function PartnershipsSection() {
  return (
    <section className="section-y bg-surface">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Parcerias"
              title="Vamos construir novas oportunidades"
              description="A Raldo Céu Azul, E.I. está aberta ao estabelecimento de relações comerciais e institucionais. Consideramos as parcerias uma ferramenta fundamental para a expansão dos negócios e a criação de novas oportunidades."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8">
              <Button to="/contactos" variant="primary" size="lg" icon={<Handshake className="h-4 w-4" />}>
                Vamos conversar
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="rounded-2xl border border-line bg-white p-7 shadow-soft sm:p-9">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Procuramos e acolhemos
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {partnerships.map((partner) => (
                <li key={partner} className="flex items-center gap-3 text-sm text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
