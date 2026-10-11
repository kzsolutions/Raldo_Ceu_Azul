import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { AreasNegocio } from "./pages/AreasNegocio";
import { AreaPage } from "./pages/AreaPage";
import { Qualidade } from "./pages/Qualidade";
import { Contactos } from "./pages/Contactos";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/areas-de-negocio" element={<AreasNegocio />} />
            <Route path="/combustiveis" element={<AreaPage slug="combustiveis" />} />
            <Route path="/residencial" element={<AreaPage slug="residencial" />} />
            <Route path="/ferragem" element={<AreaPage slug="ferragem" />} />
            <Route path="/catering" element={<AreaPage slug="catering" />} />
            <Route path="/qualidade" element={<Qualidade />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
