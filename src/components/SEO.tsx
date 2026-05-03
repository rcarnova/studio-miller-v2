import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://studiomiller.it";
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6ce6c0b6-f994-4fe6-b106-61868caef7b7";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  path?: string;
};

export function SEO({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  path = "",
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="Studio Miller" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
