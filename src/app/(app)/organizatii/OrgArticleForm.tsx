"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

interface Representative {
    clerkUserId: string
    email: string
    status: string
}

interface OrgArticleFormProps {
    orgId: string
    orgName: string
    representatives: Representative[]
}

export default function OrgArticleForm({ orgId, orgName, representatives }: OrgArticleFormProps) {
    const { user } = useUser()
    const displayName = user?.fullName || user?.firstName || ""

    // Check if current user is an approved representative
    const isApprovedRep = representatives.some(
        (r) => r.clerkUserId === user?.id && r.status === "approved"
    )

    if (!isApprovedRep) {
        return (
            <div className="text-center py-6 space-y-2">
                <p className="text-sm text-muted-foreground">
                    Doar reprezentanții verificați ai organizației pot publica articole.
                </p>
                <p className="text-xs text-muted-foreground">
                    Dacă ești reprezentantul acestei organizații, solicită acces mai jos.
                </p>
            </div>
        )
    }

    const [form, setForm] = useState({ title: "", category: "guide", body: "" })
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const res = await fetch("/api/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: form.title,
                    category: form.category,
                    author: displayName,
                    organization: orgId,
                    clerkUserId: user?.id || "",
                    status: "pending",
                    body: {
                        root: {
                            type: "root",
                            children: [
                                {
                                    type: "paragraph",
                                    children: [{ type: "text", text: form.body, version: 1 }],
                                    version: 1,
                                },
                            ],
                            direction: "ltr",
                            format: "",
                            indent: 0,
                            version: 1,
                        },
                    },
                }),
            })
            if (res.ok) {
                setStatus("success")
                setForm({ title: "", category: "guide", body: "" })
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className="text-center py-8 space-y-3">
                <div className="text-4xl">📝</div>
                <p className="font-medium">Articolul a fost trimis!</p>
                <p className="text-sm text-muted-foreground">
                    Va fi revizuit de echipa noastră înainte de publicare.
                </p>
                <Button size="sm" variant="outline" onClick={() => setStatus("idle")}>
                    Scrie alt articol
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            {/* Org identity */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 text-sm">
                <div className="size-8 rounded-full bg-black/10 flex items-center justify-center text-xs font-bold">
                    {orgName.charAt(0)}
                </div>
                <div>
                    <span className="font-medium">{orgName}</span>
                    <span className="text-muted-foreground ml-2 text-xs">
                        trimis de {displayName || "reprezentant"}
                    </span>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <input
                    required
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Titlul articolului"
                />
                <select
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                    <option value="guide">Ghid</option>
                    <option value="prevention">Prevenție</option>
                    <option value="health">Sănătate</option>
                    <option value="parents">Pentru Părinți</option>
                    <option value="education">Educație</option>
                </select>
            </div>

            <textarea
                required
                rows={8}
                value={form.body}
                onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                placeholder="Conținutul articolului..."
            />

            <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Se trimite..." : "Publică articolul"}
            </Button>
            {status === "error" && <p className="text-sm text-red-500">Eroare. Te rugăm încearcă din nou.</p>}
        </form>
    )
}
