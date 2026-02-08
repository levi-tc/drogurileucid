import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import CommentsSection from '../../povesti/[slug]/CommentsSection'

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'articles',
        where: {
            slug: { equals: slug },
            status: { equals: 'published' },
        },
        limit: 1,
    })

    const article = docs[0]
    if (!article) notFound()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const org = typeof (article as any).organization === 'object' && (article as any).organization !== null
        ? (article as any).organization
        : null

    // Fetch approved comments for this article
    const { docs: comments } = await payload.find({
        collection: 'comments',
        where: {
            relationType: { equals: 'article' },
            article: { equals: article.id },
            status: { equals: 'approved' },
        },
        sort: 'createdAt',
        limit: 100,
    })

    return (
        <div className="py-12 max-w-3xl mx-auto space-y-8">
            {/* Header */}
            <header className="space-y-3">
                <h1 className="text-2xl md:text-4xl font-extrabold">{article.title}</h1>
                <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                    {article.author && <span>de {article.author as string}</span>}
                    {org && 'name' in org && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: '#fed99b', color: '#1f2937' }}>
                            {(org as { name: string }).name}
                        </span>
                    )}
                    {article.publishedAt && (
                        <time>
                            {new Date(article.publishedAt).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                    )}
                </div>
            </header>

            {/* Body */}
            <article className="prose prose-sm max-w-none">
                {/* @ts-expect-error Lexical data passed as serialized JSON */}
                <RichText data={article.body} />
            </article>

            {/* Comments */}
            <CommentsSection
                parentId={article.id as string}
                parentType="article"
                comments={comments.map((c) => ({
                    id: c.id,
                    authorName: c.authorName,
                    message: c.message,
                    isTeamMember: c.isTeamMember || false,
                    teamRole: (c.teamRole as string) || '',
                    createdAt: c.createdAt,
                }))}
            />
        </div>
    )
}
