import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

const SITE_URL = 'https://uniuneaantidrog.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/despre-noi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/galerie`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/organizatii`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/povesti`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/resurse`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/sustinatori`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/confidentialitate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/politica-cookies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/termeni-si-conditii`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  // Dynamic: Organizations
  const { docs: orgs } = await payload.find({
    collection: 'organizations',
    limit: 1000,
    select: { slug: true, updatedAt: true },
  })

  const orgPages: MetadataRoute.Sitemap = orgs
    .filter((org) => org.slug)
    .map((org) => ({
      url: `${SITE_URL}/organizatii/${org.slug}`,
      lastModified: org.updatedAt ? new Date(org.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  // Dynamic: Povesti (Stories)
  const { docs: stories } = await payload.find({
    collection: 'stories',
    limit: 1000,
    select: { slug: true, updatedAt: true },
  })

  const storyPages: MetadataRoute.Sitemap = stories
    .filter((story) => story.slug)
    .map((story) => ({
      url: `${SITE_URL}/povesti/${story.slug}`,
      lastModified: story.updatedAt ? new Date(story.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  // Dynamic: Resurse (Articles)
  const { docs: articles } = await payload.find({
    collection: 'articles',
    where: { status: { equals: 'published' } },
    limit: 1000,
    select: { slug: true, updatedAt: true },
  })

  const articlePages: MetadataRoute.Sitemap = articles
    .filter((article) => article.slug)
    .map((article) => ({
      url: `${SITE_URL}/resurse/${article.slug}`,
      lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  return [...staticPages, ...orgPages, ...storyPages, ...articlePages]
}
