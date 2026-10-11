import { Home, Phone } from "lucide-react";
import { Seo } from "../components/Seo";
import { Button } from "../components/Button";
import { contacts } from "../data/contacts";

export function NotFound() {
  return (
    <>
      <Seo
        title="Página não encontrada"
        description="A página que procura não existe ou foi movida. Regresse à página inicial da Raldo Céu Azul, E.I."
        path="/404"
      />

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-navy-deep pt-24 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(24,120,240,0.45), transparent 45%), radial-gradient(circle at 90% 80%, rgba(201,162,39,0.16), transparent 40%)",
          }}
        />
        <div className="container-site relative text-center">
          <p className="text-7xl font-extrabold tracking-tight text-brand-blue sm:text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Página não encontrada</h1>
          <p className="mx-auto mt-4 max-w-lg text-brand-blue-soft/85">
            A página que procura não existe ou foi movida. Pode regressar à página inicial ou entrar
            em contacto com a nossa equipa.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/" variant="light" size="lg" icon={<Home className="h-4 w-4" />}>
              Voltar ao início
            </Button>
            <Button
              href={contacts.phonePrimary.href}
              variant="primary"
              size="lg"
              icon={<Phone className="h-4 w-4" />}
            >
              Ligar {contacts.phonePrimary.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
