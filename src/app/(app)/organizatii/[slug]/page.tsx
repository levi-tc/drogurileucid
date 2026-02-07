import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import CommentsSection from '../../povesti/[slug]/CommentsSection'

export default async function OrgDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
        collection: 'organizations',
        where: { slug: { equals: slug } },
        limit: 1,
    })

    const org = docs[0]
    if (!org) notFound()

    // Fetch approved comments for this organization
    const { docs: comments } = await payload.find({
        collection: 'comments',
        where: {
            relationType: { equals: 'organization' },
            organization: { equals: org.id },
            status: { equals: 'approved' },
        },
        sort: 'createdAt',
        limit: 100,
    })

    const logo = typeof org.logo === 'object' && org.logo !== null ? org.logo : null

    return (
        <div className="py-12 max-w-3xl mx-auto space-y-10">
            {/* Header */}
            <header className="space-y-4">
                <div className="flex items-center gap-4">
                    {logo && 'url' in logo && (
                        <Image
                            src={logo.url as string}
                            alt={(logo.alt as string) || org.name}
                            width={64}
                            height={64}
                            className="rounded-xl object-contain"
                        />
                    )}
                    <div>
                        <h1 className="text-2xl md:text-4xl font-extrabold">{org.name}</h1>
                        {org.type && (
                            <span className="text-sm text-muted-foreground capitalize">
                                {org.type === 'supporter' ? 'Susținător' : org.type === 'partner' ? 'Partener' : org.type === 'clinic' ? 'Clinică' : 'Școală'}
                            </span>
                        )}
                    </div>
                </div>
                {org.website && (
                    <a
                        href={org.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm hover:underline"
                        style={{ color: 'var(--brand-orange-500)' }}
                    >
                        {org.website} ↗
                    </a>
                )}
            </header>

            {/* Description */}
            {org.description && (
                <article className="prose prose-sm max-w-none">
                    {/* @ts-expect-error Lexical data passed as serialized JSON */}
                    <RichText data={org.description} />
                </article>
            )}

            {/* Comments */}
            <CommentsSection
                parentId={org.id as number}
                parentType="organization"
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
