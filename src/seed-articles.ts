// Seed script — run with: npx tsx src/seed-articles.ts
import { readFileSync } from 'fs'
import { resolve } from 'path'
// Load .env manually since dotenv is not installed
const envPath = resolve(__dirname, '..', '.env')
try {
    const envContent = readFileSync(envPath, 'utf-8')
    for (const line of envContent.split('\n')) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) continue
        const eqIdx = trimmed.indexOf('=')
        if (eqIdx === -1) continue
        const key = trimmed.slice(0, eqIdx).trim()
        const val = trimmed.slice(eqIdx + 1).trim()
        if (!process.env[key]) process.env[key] = val
    }
} catch { /* .env may not exist */ }
import { getPayload } from 'payload'
import config from './payload.config'
import { articles } from './seed-articles-data'

/** Convert plain-text paragraphs into a Lexical root node */
function makeLexicalBody(paragraphs: string[]) {
    return {
        root: {
            type: 'root',
            children: paragraphs.map((p) => ({
                type: 'paragraph',
                children: [{ type: 'text', text: p, version: 1 }],
                version: 1,
            })),
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
        },
    }
}

async function seed() {
    console.log('🌱 Seeding articles…')
    const payload = await getPayload({ config })

    for (const article of articles) {
        const existing = await payload.find({
            collection: 'articles' as any,
            where: { slug: { equals: article.slug } },
            limit: 1,
        })

        if (existing.docs.length > 0) {
            console.log(`  ⏭  "${article.title}" (already exists)`)
            continue
        }

        await payload.create({
            collection: 'articles' as any,
            data: {
                title: article.title,
                slug: article.slug,
                category: article.category,
                author: article.author || undefined,
                status: 'published',
                publishedAt: article.publishedAt,
                body: makeLexicalBody(article.body),
            } as any,
        })
        console.log(`  ✅ Created "${article.title}"`)
    }

    console.log('🎉 Done — seeded', articles.length, 'articles!')
    process.exit(0)
}

seed().catch((err) => {
    console.error('❌ Seed failed:', err)
    process.exit(1)
})
