import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Cookie-uri – Asociația Antidrog',
  description: 'Informații despre cookie-urile folosite pe site-ul uniuneaantidrog.com.',
}

const DEFAULT_SECTIONS = [
  {
    heading: '1. Ce sunt cookie-urile',
    text: 'Cookie-urile sunt fișiere mici salvate pe dispozitivul tău de către site-urile web pe care le vizitezi. Ele sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, precum și pentru a furniza informații proprietarilor site-ului.',
  },
  {
    heading: '2. Ce tipuri folosim',
    text: 'A) Strict necesare (nu cer consimțământ) – securitate, sesiune, preferințe esențiale.\n\nB) Funcționale – îmbunătățirea experienței (necesită consimțământ dacă nu sunt strict necesare).\n\nC) Statistice/Analytics – analiza traficului pe site (necesită consimțământ).\n\nD) Marketing/Social media – conținut din rețele sociale, publicitate direcționată (necesită consimțământ).\n\nÎn România, stocarea/accesarea informației pe echipamentul utilizatorului este permisă, de regulă, doar cu acord și informare prealabilă, conform Legii 506/2004, art. 4 alin. (5).',
  },
  {
    heading: '3. Gestionarea consimțământului',
    text: 'La prima vizită îți afișăm un banner cu opțiuni:\n\n• „Accept toate"\n• „Respinge"\n• „Personalizează" (preferințe pe categorii)\n\nPoți schimba oricând preferințele din „Setări cookies" (link permanent în footer).',
  },
  {
    heading: '4. Lista cookie-urilor',
    text: 'Cookie-urile utilizate pe acest site sunt:\n\n• Cookie-uri strict necesare: sesiune, preferințe de confidențialitate (cookie_consent)\n• Cookie-uri funcționale: preferințe de limbă, setări de afișare\n• Cookie-uri de analiză: statistici de utilizare (dacă sunt activate)\n• Cookie-uri marketing/social media: integrări TikTok, Instagram, Facebook (dacă sunt activate)\n\nNotă: Această listă va fi actualizată pe baza unui audit complet al cookie-urilor.',
  },
]

export default async function PoliticaCookiesPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let globalData: { lastUpdated?: string; content?: any } | null = null

  try {
    const payload = await getPayload({ config })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globalData = await (payload as any).findGlobal({ slug: 'cookie-policy' })
  } catch {
    // Payload not available — use fallback
  }

  const hasPayloadContent = globalData?.content != null

  return (
    <div className="py-12 space-y-10 max-w-4xl mx-auto">
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Politica de Cookie-uri
        </h1>
        <p className="text-sm text-muted-foreground">
          Ultima actualizare:{' '}
          {globalData?.lastUpdated
            ? new Date(globalData.lastUpdated).toLocaleDateString('ro-RO', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })
            : '19.02.2026'}
        </p>
      </header>

      {hasPayloadContent ? (
        <article className="prose prose-sm max-w-none surface-rounded p-6 md:p-10">
          <RichText data={globalData!.content} />
        </article>
      ) : (
        <>
          {DEFAULT_SECTIONS.map((section, i) => (
            <section key={i} className="surface-rounded p-6 md:p-10 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold">{section.heading}</h2>
              {section.text.split('\n\n').map((paragraph, j) => (
                <p key={j} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </>
      )}
    </div>
  )
}
