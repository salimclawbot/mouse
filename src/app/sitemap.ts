import { MetadataRoute } from 'next'
import { guides, site } from '@/lib/content'
import { getAllSlugs } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const redirectingSlugs = new Set([
    "best-ergonomic-mouse-for-wrist-pain-office",
    "best-vertical-mouse-graphic-designers",
    "best-vertical-mouse-left-handed-users",
    "how-long-adjust-vertical-mouse",
    "how-long-adjust-vertical-mouse-2026",
    "how-to-set-up-vertical-mouse",
    "how-to-set-up-vertical-mouse-correctly",
    "kensington-pro-fit-ergo-review-2026",
  ]);
  const articleSlugs = getAllSlugs();
  const publishedSlugs = Array.from(new Set([
    ...guides.map((guide) => guide.slug),
    ...articleSlugs,
  ])).filter((slug) => !redirectingSlugs.has(slug));
  const guideUrls = publishedSlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: guides.find((guide) => guide.slug === slug)?.updated || "2026-08-18",
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/editorial-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/corrections-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...guideUrls,
  ]
}
