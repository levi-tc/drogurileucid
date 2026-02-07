import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'

export default async function OrganizatiiPage() {
    const payload = await getPayload({ config })
    const { docs: orgs } = await payload.find({
        collection: 'organizations',
        sort: 'name',
        limit: 100,
    })

    return (
        <div className="py-12 space-y-12">
            {/* Hero */}
            <section className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Organizații <span style={{ color: 'var(--brand-orange-500)' }}>partenere</span>
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Descoperă organizațiile care susțin mișcarea noastră și lucrează alături de noi pentru un viitor fără dependențe.
                </p>
            </section>

            {/* Org grid */}
            <section>
                {orgs.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                        Încă nu sunt organizații înregistrate. Contactează-ne dacă dorești să te alături!
                    </p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {orgs.map((org) => {
                            const logo = typeof org.logo === 'object' && org.logo !== null ? org.logo : null
                            return (
                                <Link
                                    key={org.id}
                                    href={`/organizatii/${org.slug}`}
                                    className="glass-soft surface-rounded p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 group"
                                >
                                    <div className="flex items-center gap-3">
                                        {logo && 'url' in logo && (
                                            <Image
                                                src={logo.url as string}
                                                alt={(logo.alt as string) || org.name}
                                                width={48}
                                                height={48}
                                                className="rounded-lg object-contain"
                                            />
                                        )}
                                        <div>
                                            <div className="font-semibold">{org.name}</div>
                                            {org.type && (
                                                <span className="text-xs text-muted-foreground capitalize">
                                                    {org.type === 'supporter' ? 'Susținător' : org.type === 'partner' ? 'Partener' : org.type === 'clinic' ? 'Clinică' : 'Școală'}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {org.website && (
                                        <span className="text-xs text-muted-foreground truncate">{org.website as string}</span>
                                    )}
                                    <span
                                        className="text-xs font-medium group-hover:underline mt-auto"
                                        style={{ color: 'var(--brand-orange-500)' }}
                                    >
                                        Detalii →
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
