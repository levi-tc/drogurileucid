"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'

const categoryLabels: Record<string, string> = {
    prevention: 'Prevenție',
    health: 'Sănătate',
    parents: 'Pentru Părinți',
    education: 'Educație',
    guide: 'Ghid',
}

interface Article {
    id: number
    title: string
    slug: string
    category: string
    author: string
    publishedAt: string
}

export default function LatestArticles() {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/articles?where[status][equals]=published&sort=-publishedAt&limit=3')
            .then((res) => res.json())
            .then((data) => {
                setArticles(data.docs || [])
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="glass-soft surface-rounded p-6 animate-pulse h-40" />
                ))}
            </div>
        )
    }

    if (articles.length === 0) {
        return (
            <p className="text-center text-muted-foreground">
                Articolele vor fi adăugate în curând. Revino!
            </p>
        )
    }

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => {
                const cat = article.category || ''
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
                            <p className="text-xs text-muted-foreground">de {article.author}</p>
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
    )
}
