import { Fuel, BedDouble, Hammer, UtensilsCrossed, type LucideIcon } from "lucide-react";

export type AreaSlug = "combustiveis" | "residencial" | "ferragem" | "catering";

export interface BusinessArea {
  slug: AreaSlug;
  path: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  paragraphs: string[];
  highlights: string[];
  audience: string[];
  locations: string[];
}

export const businessAreas: BusinessArea[] = [
  {
    slug: "combustiveis",
    path: "/combustiveis",
    title: "Combustíveis",
    shortTitle: "Combustíveis",
    icon: Fuel,
    tagline: "Abastecimento eficiente, seguro e orientado para o cliente.",
    summary:
      "Operação de dois postos de abastecimento de combustíveis, em Alto Molócuè e no Distrito de Gilé.",
    paragraphs: [
      "O posto de combustível de Alto Molócuè constitui uma das principais unidades de negócio da empresa. A sua localização permite atender clientes particulares, empresas, transportadores, instituições e outros utilizadores que necessitam de combustíveis para viaturas e equipamentos.",
      "A Raldo Céu Azul, E.I. possui igualmente um posto de combustível no Distrito de Gilé. A unidade desempenha um papel importante no fornecimento de combustíveis aos consumidores e agentes económicos da região, contribuindo para a mobilidade de pessoas e mercadorias, e representa uma estratégia de expansão e aproximação da empresa a novos mercados.",
    ],
    highlights: [
      "Posto de Combustível de Alto Molócuè",
      "Posto de Combustível de Gilé",
      "Serviço de abastecimento eficiente e seguro",
    ],
    audience: ["Particulares", "Empresas", "Transportadores", "Instituições"],
    locations: ["Alto Molócuè", "Gilé"],
  },
  {
    slug: "residencial",
    path: "/residencial",
    title: "Residencial",
    shortTitle: "Residencial",
    icon: BedDouble,
    tagline: "Alojamento para visitantes, técnicos e instituições.",
    summary:
      "Serviços de alojamento e hospedagem na Vila de Alto Molócuè, com uma oferta pensada para estadias de trabalho e lazer.",
    paragraphs: [
      "A Raldo Céu Azul, E.I. desenvolve actividade no sector de hotelaria e alojamento, através da sua residencial localizada em Alto Molócuè.",
      "A residencial destina-se a proporcionar aos seus clientes um espaço adequado para estadias, oferecendo uma solução de alojamento para visitantes, empresas, técnicos, funcionários em missão, instituições, organizações, viajantes e clientes particulares.",
      "A actividade de alojamento complementa os restantes negócios da empresa e reforça a sua presença no sector de prestação de serviços.",
    ],
    highlights: [
      "Hospedagem na Vila de Alto Molócuè",
      "Adequada para estadias de trabalho e missão",
      "Complemento à presença da empresa no sector de serviços",
    ],
    audience: [
      "Visitantes",
      "Empresas",
      "Técnicos",
      "Funcionários em missão",
      "Instituições",
      "Organizações",
      "Viajantes",
      "Clientes particulares",
    ],
    locations: ["Alto Molócuè"],
  },
  {
    slug: "ferragem",
    path: "/ferragem",
    title: "Ferragem e Materiais de Construção",
    shortTitle: "Ferragem",
    icon: Hammer,
    tagline: "Materiais e ferramentas para construir, manter e reparar.",
    summary:
      "Comercialização de materiais de construção, ferramentas, acessórios e outros artigos destinados a obras e manutenção.",
    paragraphs: [
      "A Raldo Céu Azul, E.I. possui uma ferragem dedicada à comercialização de produtos destinados à construção, manutenção e reparação.",
      "A ferragem procura responder às necessidades de construtores, empreiteiros, empresas, instituições, artesãos, agricultores, proprietários de imóveis e clientes particulares.",
      "Entre as categorias de produtos comercializados podem incluir-se materiais de construção, ferramentas, acessórios e outros artigos relacionados com obras e manutenção.",
    ],
    highlights: [
      "Materiais de construção",
      "Ferramentas e acessórios",
      "Soluções para obras, manutenção e reparação",
    ],
    audience: [
      "Construtores",
      "Empreiteiros",
      "Empresas",
      "Instituições",
      "Artesãos",
      "Agricultores",
      "Proprietários de imóveis",
      "Clientes particulares",
    ],
    locations: ["Alto Molócuè"],
  },
  {
    slug: "catering",
    path: "/catering",
    title: "Catering e Eventos",
    shortTitle: "Catering",
    icon: UtensilsCrossed,
    tagline: "Alimentação e serviço para eventos, formações e cerimónias.",
    summary:
      "Serviços de alimentação e catering em Alto Molócuè, para eventos, instituições, empresas, formações, reuniões e cerimónias.",
    paragraphs: [
      "A Raldo Céu Azul, E.I. presta serviços de catering em Alto Molócuè, constituindo uma importante área de prestação de serviços da empresa.",
      "O serviço pode ser direccionado para conferências, formações, seminários, reuniões, eventos empresariais e institucionais, cerimónias, almoços e jantares, encontros sociais e outros eventos.",
      "A empresa procura combinar qualidade na preparação e apresentação das refeições com pontualidade, organização e profissionalismo no atendimento.",
    ],
    highlights: [
      "Refeições para eventos e cerimónias",
      "Serviço para formações e reuniões",
      "Pontualidade, organização e profissionalismo",
    ],
    audience: [
      "Empresas",
      "Instituições",
      "Organizações",
      "Organizadores de eventos",
    ],
    locations: ["Alto Molócuè"],
  },
];

export function getBusinessArea(slug: string): BusinessArea | undefined {
  return businessAreas.find((area) => area.slug === slug);
}
