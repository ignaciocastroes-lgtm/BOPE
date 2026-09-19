import type { MetadataRoute } from 'next'

const BASE = 'https://www.bope.cl'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/arquitectura-legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
