import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

const categoryLabels: Record<string, string> = {
  prevention: 'Prevenție',
  health: 'Sănătate',
  parents: 'Pentru Părinți',
  education: 'Educație',
  guide: 'Ghid',
}

export default async function ResursePage() {
  const payload = await getPayload({ config })
  const { docs: articles } = await payload.find({
    collection: 'articles',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 100,
  })

  return (
    <div className="py-12 space-y-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Resurse <span style={{ color: 'var(--brand-orange-500)' }}>&amp; Articole</span>
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Ghiduri, informații și materiale utile pentru educație, prevenție și sprijin.
        </p>
      </section>

      {/* Articles grid */}
      <section>
        {articles.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Resursele și articolele vor fi adăugate în curând. Revino!
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const cat = (article.category as string) || ''
              return (
                <Link
                  key={article.id}
                  href={`/resurse/${article.slug}`}
                  className="glass-soft surface-rounded p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold line-clamp-2 flex-1">{article.title}</h3>
                    {cat && (
                      <span
                        className="ml-2 shrink-0 text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ background: '#d6efff', color: '#1f2937' }}
                      >
                        {categoryLabels[cat] || cat}
                      </span>
                    )}
                  </div>
                  {article.author && (
                    <p className="text-xs text-muted-foreground">de {article.author as string}</p>
                  )}
                  {article.publishedAt && (
                    <time className="text-xs text-muted-foreground">
                      {new Date(article.publishedAt).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  )}
                  <span
                    className="text-xs font-medium group-hover:underline mt-auto"
                    style={{ color: 'var(--brand-orange-500)' }}
                  >
                    Citește →
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
