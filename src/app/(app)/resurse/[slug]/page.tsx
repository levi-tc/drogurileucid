import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'

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

    return (
        <div className="py-12 max-w-3xl mx-auto space-y-8">
            {/* Header */}
            <header className="space-y-3">
                <h1 className="text-2xl md:text-4xl font-extrabold">{article.title}</h1>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {article.author && <span>de {article.author as string}</span>}
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
        </div>
    )
}
