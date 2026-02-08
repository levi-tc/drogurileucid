import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import AuthGate from '../../AuthGate'
import OrgArticleForm from '../OrgArticleForm'
import RequestRepAccess from '../RequestRepAccess'
import OrgEditForm from '../OrgEditForm'

// Extract plain text from Lexical rich text structure
function extractPlainText(description: unknown): string {
    if (!description || typeof description !== 'object') return ''
    const root = (description as { root?: { children?: { children?: { text?: string }[] }[] } }).root
    if (!root?.children) return ''
    return root.children
        .map((p) => p.children?.map((c) => c.text || '').join('') || '')
        .join('\n')
}

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

    const logo = typeof org.logo === 'object' && org.logo !== null ? org.logo : null

    // Serialize representatives for client components
    const reps = Array.isArray(org.representatives)
        ? org.representatives.map((r: { clerkUserId: string; email: string; status: string }) => ({
            clerkUserId: r.clerkUserId || '',
            email: r.email || '',
            status: r.status || 'pending',
        }))
        : []

    const descriptionText = extractPlainText(org.description)

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

            {/* Edit button — only for approved reps */}
            <OrgEditForm
                orgId={org.id as string}
                currentName={org.name}
                currentType={org.type || 'supporter'}
                currentDescription={descriptionText}
                representatives={reps}
            />

            {/* Description */}
            {org.description && (
                <article className="prose prose-sm max-w-none">
                    {/* @ts-expect-error Lexical data passed as serialized JSON */}
                    <RichText data={org.description} />
                </article>
            )}

            {/* Org posting — auth-gated */}
            <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-6 md:p-10 space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-xl md:text-2xl font-semibold">Publică un articol</h2>
                    <p className="text-sm text-muted-foreground">
                        Ca reprezentant al organizației, poți publica ghiduri și articole care vor apărea în secțiunea Resurse.
                    </p>
                </div>
                <AuthGate message="Conectează-te pentru a publica sau solicita acces ca reprezentant.">
                    <OrgArticleForm
                        orgId={org.id as string}
                        orgName={org.name}
                        representatives={reps}
                    />
                    <RequestRepAccess
                        orgId={org.id as string}
                        orgName={org.name}
                        representatives={reps}
                    />
                </AuthGate>
            </section>
        </div>
    )
}
