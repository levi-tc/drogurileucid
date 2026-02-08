"use client"

import { useState } from "react"
import Link from "next/link"

type ContentType = "all" | "stories" | "articles" | "orgPosts"

interface ContentItem {
    id: string
    type: "story" | "article"
    title: string
    slug: string
    author?: string
    authorRole?: string
    excerpt?: string
    category?: string
    orgName?: string
    publishedAt?: string
    href: string
}

const tabs: { key: ContentType; label: string }[] = [
    { key: "all", label: "Toate" },
    { key: "stories", label: "Povești" },
    { key: "articles", label: "Articole & Ghiduri" },
    { key: "orgPosts", label: "De la organizații" },
]

const typeBadge: Record<string, { label: string; bg: string }> = {
    story: { label: "Poveste", bg: "#fed99b" },
    article: { label: "Articol", bg: "#d6efff" },
}

export default function ResurseContent({ items }: { items: ContentItem[] }) {
    const [active, setActive] = useState<ContentType>("all")

    const filtered = items.filter((item) => {
        if (active === "all") return true
        if (active === "stories") return item.type === "story"
        if (active === "articles") return item.type === "article" && !item.orgName
        if (active === "orgPosts") return item.type === "article" && !!item.orgName
        return true
    })

    return (
        <div className="space-y-8">
            {/* Tab filters */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActive(tab.key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === tab.key
                                ? "bg-black text-white shadow-sm"
                                : "bg-black/5 text-black/70 hover:bg-black/10"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content grid */}
            {filtered.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                    Nu sunt resurse disponibile în această categorie.
                </p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item) => {
                        const badge = typeBadge[item.type]
                        return (
                            <Link
                                key={`${item.type}-${item.id}`}
                                href={item.href}
                                className="glass-soft surface-rounded p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300 group"
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="font-semibold line-clamp-2 flex-1 text-sm">
                                        {item.title}
                                    </h3>
                                    <span
                                        className="shrink-0 text-[10px] px-2 py-0.5 rounded-full font-medium"
                                        style={{ background: badge.bg, color: "#1f2937" }}
                                    >
                                        {badge.label}
                                    </span>
                                </div>

                                {/* Author / org info */}
                                <div className="flex items-center gap-2">
                                    {item.author && (
                                        <span className="text-xs text-muted-foreground">
                                            de {item.author}
                                        </span>
                                    )}
                                    {item.orgName && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 text-muted-foreground">
                                            {item.orgName}
                                        </span>
                                    )}
                                </div>

                                {item.excerpt && (
                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                        &ldquo;{item.excerpt}&rdquo;
                                    </p>
                                )}

                                <div className="flex items-center justify-between mt-auto">
                                    {item.publishedAt && (
                                        <time className="text-[10px] text-muted-foreground">
                                            {new Date(item.publishedAt).toLocaleDateString("ro-RO", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </time>
                                    )}
                                    <span
                                        className="text-xs font-medium group-hover:underline ml-auto"
                                        style={{ color: "var(--brand-orange-500)" }}
                                    >
                                        Citește →
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
