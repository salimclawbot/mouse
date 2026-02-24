import { MetadataRoute } from 'next'
import { guides, site } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const guideUrls = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: g.updated,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    ...guideUrls,
  ]
}
