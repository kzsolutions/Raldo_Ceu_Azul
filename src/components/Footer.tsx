import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { company } from "../data/company";
import { contacts } from "../data/contacts";
import { navItems, footerAreas } from "../data/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep text-brand-blue-soft/90">
      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-blue-soft/75">
              Empresa moçambicana constituída em {company.founded}, com actividades em
              combustíveis, residencial, ferragem e catering, em Alto Molócuè e Gilé.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Navegação</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Áreas de negócio">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Áreas de negócio</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerAreas.map((area) => (
                <li key={area.to}>
                  <Link to={area.to} className="transition-colors hover:text-white">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contactos</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={contacts.phonePrimary.href} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                  {contacts.phonePrimary.label}
                </a>
              </li>
              <li>
                <a href={contacts.phoneSecondary.href} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                  {contacts.phoneSecondary.label}
                </a>
              </li>
              <li>
                <a href={contacts.email.href} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                  {contacts.email.label}
                </a>
              </li>
              <li>
                <a
                  href={contacts.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {contacts.address.line1}, {contacts.address.line2}
                  <br />
                  {contacts.address.locality}, {contacts.address.province}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-brand-blue-soft/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Todos os direitos reservados.
          </p>
          <p>NUIT {company.nuit} · Província da {company.province}</p>
        </div>
      </div>
    </footer>
  );
}
