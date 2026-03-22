import GuidePage, { generateStaticParams as generateGuideStaticParams } from "../../guides/[slug]/page";
import { guides, site } from "@/lib/content";

export function generateStaticParams() {
  return generateGuideStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) return {};

  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: `/articles/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${site.url}/articles/${guide.slug}`,
      images: [{ url: guide.heroImage }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: guide.title,
      description: guide.description,
      images: [guide.heroImage],
    },
  };
}

export default GuidePage;
