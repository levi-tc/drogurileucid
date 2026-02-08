import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'
import AuthGate from '../AuthGate'
import OrgSubmitForm from './OrgSubmitForm'

export const dynamic = 'force-dynamic'

export default async function OrganizatiiPage() {
    const payload = await getPayload({ config })
    const { docs: orgs } = await payload.find({
        collection: 'organizations',
        where: { status: { equals: 'approved' } },
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
                        Încă nu sunt organizații aprobate. Fii prima organizație care se alătură!
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

            {/* Submit Organization — auth-gated */}
            <section className="glow-wrap glow-blue glow-peach glass surface-rounded p-6 md:p-10 space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-xl md:text-2xl font-semibold">Înscrie-ți organizația</h2>
                    <p className="text-sm text-muted-foreground">
                        Cererea ta va fi evaluată de echipa noastră. Reprezentantul trebuie să fie autentificat.
                    </p>
                </div>
                <AuthGate message="Conectează-te ca reprezentant al organizației pentru a trimite o cerere.">
                    <OrgSubmitForm />
                </AuthGate>
            </section>
        </div>
    )
}
