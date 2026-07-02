import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
  image?: string;
};

export default function SEO({ title, description, image }: Props) {
  const full = `HavAntar Studio | ${title}`;
  const desc =
    description ??
    "HavAntar Studio designs residential and commercial spaces that elevate how people live, work, and interact with their environment.";
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
