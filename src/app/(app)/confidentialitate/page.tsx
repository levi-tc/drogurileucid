import { getPayload } from 'payload'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate (GDPR) – Asociația Antidrog',
  description: 'Politica de confidențialitate și protecția datelor personale conform GDPR.',
}

const DEFAULT_CONTENT = [
  { heading: '1. Cine suntem', text: 'Asociația „Drogurile Ucid Visurile Copiilor", cu sediul în Selimbar str. Doamna Stanca nr.57 ap.10 Jud. Sibiu, înregistrată în Registrul Asociațiilor și Fundațiilor cu nr.5/A/I/2026, CIF 53448715, reprezentată de dl. Badea George Gabriel în calitate de Președinte.\n\nE-mail GDPR: drogurileucidvisurilecopiilor@gmail.com\nTelefon: +40 730 173 727' },
  { heading: '2. Ce date prelucrăm', text: 'În funcție de cum folosești site-ul, putem prelucra:\n• Date de contact: nume, prenume, e-mail, telefon (dacă le trimiți).\n• Conținut trimis de utilizator: „povestea ta" (text), eventual atașamente, plus datele pe care alegi să le incluzi în poveste.\n• Date tehnice: IP, identificatori cookie, tip browser/dispozitiv, pagini vizitate.\n• Date din comunicări: mesajele trimise către noi, solicitări, feedback.' },
  { heading: '3. Scopuri și temeiuri legale (art. 6 GDPR)', text: 'Prelucrăm datele doar dacă avem un temei legal:\n\n• Răspuns la solicitări / contact – interes legitim (art. 6(1)(f)) sau măsuri precontractuale (art. 6(1)(b)).\n• Publicarea „poveștilor din comunitate" – consimțământ (art. 6(1)(a)) pentru publicare; interes legitim pentru moderare (art. 6(1)(f)).\n• Securitate și prevenirea abuzurilor – interes legitim (art. 6(1)(f)).\n• Cookies/analytics – consimțământ pentru cookie-urile neesențiale (Legea 506/2004, art. 4(5)).' },
  { heading: '4. Copii și minori', text: 'Site-ul se adresează și părinților/tinerilor. Dacă prelucrarea se bazează pe consimțământ pentru servicii online oferite direct unui copil, este validă de regulă de la 16 ani; sub 16 ani e necesar acordul părintelui/tutorelui.\n\nNu solicităm intenționat date sensibile de la minori. Dacă observăm astfel de date, le putem șterge/anonimiza.' },
  { heading: '5. Cât păstrăm datele', text: '• Mesaje de contact: 12–24 luni de la soluționare.\n• Povești trimise dar nepublicate: 6–12 luni apoi ștergere/anonimizare.\n• Povești publicate: până la retragerea consimțământului / cerere de ștergere.\n• Loguri de securitate: 30–180 zile.\n• Cookie-uri: conform Politicii de Cookie-uri.' },
  { heading: '6. Cui dezvăluim datele', text: 'Putem folosi furnizori (împuterniciți GDPR) pentru: găzduire web, mentenanță, e-mail, servicii anti-spam, analytics, platforme de social media (TikTok/Instagram/Facebook).\n\nCu fiecare furnizor relevant avem contract de împuternicit (DPA).' },
  { heading: '7. Transferuri în afara SEE', text: 'Dacă folosim servicii care pot transfera date în afara Spațiului Economic European, vom face transferul doar cu garanții legale (ex. clauze standard).' },
  { heading: '8. Drepturile tale', text: 'Ai dreptul de:\n• Acces, rectificare, ștergere, restricționare, opoziție\n• Portabilitate (când e aplicabil)\n• Retragerea consimțământului (nu afectează prelucrările anterioare)\n• Plângere la ANSPDCP' },
  { heading: '9. Cum îți exerciți drepturile', text: 'Scrie-ne la: drogurileucidvisurilecopiilor@gmail.com\nÎți putem cere informații rezonabile pentru identificare.' },
  { heading: '10. Securitatea datelor', text: 'Aplicăm măsuri tehnice/organizatorice: HTTPS/SSL, control acces, backup, actualizări, limitarea accesului la date.' },
  { heading: '11. Modificări', text: 'Putem actualiza politica; publicăm versiunea nouă cu dată.' },
]

export default async function ConfidentialitatePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let globalData: { lastUpdated?: string; content?: any } | null = null

  try {
    const payload = await getPayload({ config })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globalData = await (payload as any).findGlobal({ slug: 'privacy-policy' })
  } catch {
    // Payload not available or global not yet created — use fallback
  }

  const hasPayloadContent = globalData?.content != null

  return (
    <div className="py-12 space-y-10 max-w-4xl mx-auto">
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Politica de Confidențialitate (GDPR)
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
          {DEFAULT_CONTENT.map((section, i) => (
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
