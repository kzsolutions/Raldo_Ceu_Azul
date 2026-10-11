import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { contacts } from "../data/contacts";

export function ContactCtaSection() {
  return (
    <section className="section-y bg-brand-navy-deep">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-7 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 0%, rgba(24,120,240,0.4), transparent 45%), radial-gradient(circle at 100% 100%, rgba(201,162,39,0.16), transparent 40%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Entre em contacto com a nossa equipa
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-blue-soft/90 sm:text-lg">
                Estamos disponíveis para responder a pedidos de informação, propostas de parceria e
                solicitações sobre os nossos produtos e serviços.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button
                  href={contacts.phonePrimary.href}
                  variant="light"
                  size="lg"
                  icon={<Phone className="h-4 w-4" />}
                >
                  {contacts.phonePrimary.label}
                </Button>
                <Button
                  href={contacts.whatsapp.href}
                  external
                  variant="primary"
                  size="lg"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  WhatsApp
                </Button>
                <Button
                  href={contacts.email.href}
                  variant="outline"
                  size="lg"
                  icon={<Mail className="h-4 w-4" />}
                  className="!bg-transparent !text-white !border-white/30 hover:!bg-white hover:!text-brand-navy"
                >
                  Enviar e-mail
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
