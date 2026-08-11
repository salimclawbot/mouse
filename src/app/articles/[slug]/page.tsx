import GuidePage, { generateStaticParams as generateGuideStaticParams } from "../../guides/[slug]/page";
import { guides, site } from "@/lib/content";
import { normalizeMetaDescription } from "@/lib/article-page-utils";
import { getArticleVisual } from "@/lib/article-visuals";

export function generateStaticParams() {
  return generateGuideStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) return {};
  const visual = getArticleVisual(slug, guide.title);

  return {
    title: { absolute: guide.title },
    description: normalizeMetaDescription(guide.description),
    alternates: { canonical: `${site.url}/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: normalizeMetaDescription(guide.description),
      url: `${site.url}/guides/${guide.slug}`,
      images: [{ url: `${site.url}${visual.src}`, alt: visual.alt }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: guide.title,
      description: normalizeMetaDescription(guide.description),
      images: [`${site.url}${visual.src}`],
    },
  };
}

export default GuidePage;
