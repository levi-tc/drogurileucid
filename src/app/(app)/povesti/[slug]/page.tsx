import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import CommentsSection from './CommentsSection'

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'stories',
        where: {
            slug: { equals: slug },
            status: { equals: 'published' },
        },
        limit: 1,
    })

    const story = docs[0]
    if (!story) notFound()

    // Fetch approved comments for this story
    const { docs: comments } = await payload.find({
        collection: 'comments',
        where: {
            relationType: { equals: 'story' },
            story: { equals: story.id },
            status: { equals: 'approved' },
        },
        sort: 'createdAt',
        limit: 100,
    })

    return (
        <div className="py-12 max-w-3xl mx-auto space-y-10">
            {/* Header */}
            <header className="space-y-4">
                <div className="flex items-center gap-3">
                    <div
                        className="size-12 rounded-full flex items-center justify-center text-lg font-bold"
                        style={{ background: '#fed18c' }}
                    >
                        {(story.author as string)?.charAt(0) || '?'}
                    </div>
                    <div>
                        <div className="font-semibold">{story.author as string}</div>
                        {story.authorRole && (
                            <div className="text-sm text-muted-foreground">{story.authorRole as string}</div>
                        )}
                    </div>
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold">{story.title}</h1>
                {story.publishedAt && (
                    <time className="text-sm text-muted-foreground">
                        {new Date(story.publishedAt).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                )}
            </header>

            {/* Body */}
            <article className="prose prose-sm max-w-none">
                {/* @ts-expect-error Lexical data passed as serialized JSON */}
                <RichText data={story.body} />
            </article>

            {/* Team Responses */}
            {Array.isArray(story.responses) && story.responses.length > 0 && (
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold">Răspunsuri de la echipă</h3>
                    <div className="space-y-3">
                        {story.responses.map((resp, idx) => (
                            <div key={idx} className="glass-soft surface-rounded p-4 border-l-4" style={{ borderColor: 'var(--brand-orange-500)' }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-semibold text-sm">{resp.responderName}</span>
                                    {resp.responderRole && (
                                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: '#fed18c', color: '#1f2937' }}>
                                            {resp.responderRole}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground">{resp.message}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Comments */}
            <CommentsSection
                parentId={story.id as number}
                parentType="story"
                comments={comments.map((c) => ({
                    id: c.id as number,
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
