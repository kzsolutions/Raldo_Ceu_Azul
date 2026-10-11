import { Seo } from "../components/Seo";
import { Hero } from "../sections/Hero";
import { AboutIntro } from "../sections/AboutIntro";
import { BusinessAreasSection } from "../sections/BusinessAreasSection";
import { HighlightBand } from "../sections/HighlightBand";
import { PresenceSection } from "../sections/PresenceSection";
import { PartnershipsSection } from "../sections/PartnershipsSection";
import { ContactCtaSection } from "../sections/ContactCtaSection";

export function Home() {
  return (
    <>
      <Seo
        title="Raldo Céu Azul, E.I. | Combustíveis, Residencial, Ferragem e Catering"
        description="Empresa moçambicana fundada em 2015 com actividades em combustíveis, alojamento, materiais de construção e catering. Presença em Alto Molócuè e Gilé, província da Zambézia."
        path="/"
      />
      <Hero />
      <AboutIntro />
      <BusinessAreasSection />
      <HighlightBand />
      <PresenceSection />
      <PartnershipsSection />
      <ContactCtaSection />
    </>
  );
}
