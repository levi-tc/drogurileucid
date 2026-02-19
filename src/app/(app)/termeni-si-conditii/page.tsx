import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții – Asociația Antidrog',
  description: 'Termenii și condițiile de utilizare a site-ului uniuneaantidrog.com.',
}

const DEFAULT_SECTIONS = [
  {
    heading: '1. Despre site',
    text: 'uniuneaantidrog.com este o platformă informativă și comunitară privind prevenirea consumului de droguri și sprijin pentru persoane/familii, operată de Asociația „Drogurile Ucid Visurile Copiilor".',
  },
  {
    heading: '2. Acceptarea termenilor',
    text: 'Prin utilizarea site-ului, accepți acești termeni. Dacă nu ești de acord, te rugăm să nu folosești site-ul.',
  },
  {
    heading: '3. Servicii și conținut',
    text: 'Site-ul poate include:\n• Articole și resurse\n• Pagini de prezentare\n• Posibilitatea de a trimite povești (revizuite înainte de publicare)\n\nNe rezervăm dreptul de a modifica/întrerupe funcții, fără răspundere, cu excepția cazurilor impuse de lege.',
  },
  {
    heading: '4. Regulile comunității (pentru „Povești")',
    text: 'Este interzis să trimiți sau să publici:\n• Conținut ilegal, instigator, defăimător, amenințător\n• Date personale ale altora fără drept (nume, telefon, adresă, școală etc.)\n• Conținut care încurajează consumul de substanțe\n• Conținut cu violență extremă sau auto-vătămare în detaliu\n\nPutem refuza publicarea, edita pentru anonimizare sau șterge conținutul care încalcă regulile.',
  },
  {
    heading: '5. Declarații și garanții ale utilizatorului',
    text: 'Când trimiți o poveste, declari că:\n• Ai dreptul să o trimiți\n• Nu încalci drepturi de autor\n• Nu divulgi date personale ale altora fără consimțământ',
  },
  {
    heading: '6. Licență pentru conținutul trimis',
    text: 'Dacă alegi publicarea, acorzi Operatorului o licență neexclusivă, gratuită, pe durată nedeterminată, pentru a reproduce, publica și promova povestea pe site și canalele proiectului, cu respectarea opțiunii tale (nume/pseudonim/anonim). Îți poți retrage consimțământul pentru publicare.',
  },
  {
    heading: '7. Disclaimer medical și urgențe',
    text: 'Conținutul de pe site are scop informativ și nu înlocuiește consultul medical/psihologic sau intervenția de urgență.\n\nDacă tu sau cineva este în pericol imediat, sună 112.',
  },
  {
    heading: '8. Linkuri către terți și social media',
    text: 'Putem afișa linkuri către rețele sociale (TikTok/Instagram/Facebook) și alte site-uri; nu controlăm conținutul lor.',
  },
  {
    heading: '9. Proprietate intelectuală',
    text: 'Textele, grafica, logo-urile și structura site-ului aparțin Operatorului sau partenerilor. Nu ai dreptul să copiezi/republici fără acord, cu excepțiile legale.',
  },
  {
    heading: '10. Răspundere',
    text: 'Nu garantăm că site-ul va funcționa neîntrerupt sau fără erori. În limita permisă de lege, nu răspundem pentru pierderi indirecte rezultate din utilizarea site-ului.',
  },
  {
    heading: '11. Legea aplicabilă și jurisdicție',
    text: 'Legea română. Litigiile se soluționează de instanțele competente de la sediul Operatorului, dacă legea nu impune altfel.',
  },
  {
    heading: '12. Contact',
    text: 'E-mail: drogurileucidvisurilecopiilor@gmail.com\nTelefon: +40 730 173 727',
  },
  {
    heading: 'Politica de moderare a conținutului',
    text: 'Toate poveștile sunt revizuite înainte de publicare.\nPutem cere clarificări, putem anonimiza date și putem refuza publicarea.\nPrioritate: protecția minorilor și a datelor personale.',
  },
]

export default async function TermeniSiConditiiPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let globalData: { lastUpdated?: string; content?: any } | null = null

  try {
    const payload = await getPayload({ config })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globalData = await (payload as any).findGlobal({ slug: 'terms-conditions' })
  } catch {
    // Payload not available — use fallback
  }

  const hasPayloadContent = globalData?.content != null

  return (
    <div className="py-12 space-y-10 max-w-4xl mx-auto">
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Termeni și Condiții
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
