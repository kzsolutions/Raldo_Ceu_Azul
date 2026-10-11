import { businessAreas } from "./businessAreas";

export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

export const navItems: NavItem[] = [
  { label: "Início", to: "/" },
  { label: "Sobre nós", to: "/sobre" },
  {
    label: "Áreas de negócio",
    to: "/areas-de-negocio",
    children: [
      { label: "Visão geral", to: "/areas-de-negocio" },
      ...businessAreas.map((area) => ({ label: area.shortTitle, to: area.path })),
    ],
  },
  { label: "Qualidade e compromisso", to: "/qualidade" },
  { label: "Contactos", to: "/contactos" },
];

export const footerAreas = businessAreas.map((area) => ({
  label: area.shortTitle,
  to: area.path,
}));
