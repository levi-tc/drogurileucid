import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import StorySubmitForm from './StorySubmitForm'

const categoryLabels: Record<string, string> = {
    personal: 'Personal',
    organization: 'Organizație',
    family: 'Familie',
    professional: 'Profesional',
}

const categoryColors: Record<string, string> = {
    personal: '#d6efff',
    organization: '#fed18c',
    family: '#fed99b',
    professional: '#d6efff',
}

export default async function PovestiPage() {
    const payload = await getPayload({ config })
    const { docs: stories } = await payload.find({
        collection: 'stories',
        where: { status: { equals: 'published' } },
        sort: '-publishedAt',
        limit: 50,
    })

    return (
        <div className="py-12 space-y-12">
            {/* Hero */}
            <section className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Povești din <span style={{ color: 'var(--brand-orange-500)' }}>comunitate</span>
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Fiecare poveste contează. Fie că ai trecut printr-o experiență, ești părinte, sau reprezinți o organizație — vocea ta poate salva o viață.
                </p>
            </section>

            {/* Submit Story CTA */}
            <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-6 md:p-10 space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-xl md:text-2xl font-semibold">Împărtășește-ți povestea</h2>
                    <p className="text-sm text-muted-foreground">
                        Povestea ta va fi revizuită de echipa noastră înainte de publicare.
                    </p>
                </div>
                <StorySubmitForm />
            </section>

            {/* Stories grid */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-center">Povești publicate</h2>
                {stories.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                        Încă nu sunt povești publicate. Fii primul care împărtășește!
                    </p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {stories.map((story) => {
                            const cat = (story.category as string) || 'personal'
                            return (
                                <Link
                                    key={story.id}
                                    href={`/povesti/${story.slug}`}
                                    className="glass-soft surface-rounded p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="size-10 rounded-full flex items-center justify-center text-sm font-bold"
                                            style={{ background: categoryColors[cat] }}
                                        >
                                            {(story.author as string)?.charAt(0) || '?'}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">{story.author as string}</div>
                                            {story.authorRole && (
                                                <div className="text-xs text-muted-foreground">{story.authorRole as string}</div>
                                            )}
                                        </div>
                                        <span
                                            className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium"
                                            style={{ background: categoryColors[cat], color: '#1f2937' }}
                                        >
                                            {categoryLabels[cat]}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                        &ldquo;{story.excerpt || 'Citește povestea completă...'}&rdquo;
                                    </p>
                                    <span
                                        className="text-xs font-medium group-hover:underline"
                                        style={{ color: 'var(--brand-orange-500)' }}
                                    >
                                        Citește mai mult →
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </section>
        </div>
    )
}
