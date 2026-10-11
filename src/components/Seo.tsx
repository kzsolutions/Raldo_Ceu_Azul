import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_NAME = "Raldo Céu Azul, E.I.";
const BASE_URL = "https://raldoceuazul.co.mz";

export function Seo({ title, description, path = "/", image = "/logo.jpg" }: SeoProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
