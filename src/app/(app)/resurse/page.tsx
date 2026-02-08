import { getPayload } from 'payload'
import config from '@/payload.config'
import ResurseContent from './ResurseContent'

export default async function ResursePage() {
  const payload = await getPayload({ config })

  // Fetch both collections in parallel
  const [{ docs: stories }, { docs: articles }] = await Promise.all([
    payload.find({
      collection: 'stories',
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      limit: 50,
    }),
    payload.find({
      collection: 'articles',
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      limit: 50,
    }),
  ])

  // Normalize into a unified content item format
  const storyItems = stories.map((s) => ({
    id: String(s.id),
    type: 'story' as const,
    title: s.title,
    slug: s.slug || '',
    author: s.author as string | undefined,
    authorRole: s.authorRole as string | undefined,
    excerpt: s.excerpt as string | undefined,
    publishedAt: s.publishedAt as string | undefined,
    href: `/povesti/${s.slug}`,
  }))

  const articleItems = articles.map((a) => {
    const org = typeof (a as any).organization === 'object' && (a as any).organization !== null ? (a as any).organization : null
    return {
      id: String(a.id),
      type: 'article' as const,
      title: a.title,
      slug: a.slug || '',
      author: a.author as string | undefined,
      orgName: org ? (org as { name: string }).name : undefined,
      category: a.category as string | undefined,
      publishedAt: a.publishedAt as string | undefined,
      href: `/resurse/${a.slug}`,
    }
  })

  // Merge and sort by date (newest first)
  const allItems = [...storyItems, ...articleItems].sort((a, b) => {
    const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
    const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
    return db - da
  })

  return (
    <div className="py-12 space-y-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Resurse <span style={{ color: 'var(--brand-orange-500)' }}>&amp; Comunitate</span>
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Povești, articole, ghiduri și materiale utile — totul într-un singur loc.
        </p>
      </section>

      {/* Unified tab-filtered content */}
      <ResurseContent items={allItems} />
    </div>
  )
}
