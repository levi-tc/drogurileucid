"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export default function StorySubmitForm() {
    const { user } = useUser()
    const displayName = user?.fullName || user?.firstName || ""
    const userEmail = user?.primaryEmailAddress?.emailAddress || ""

    const [form, setForm] = useState({ authorRole: "", title: "", excerpt: "", category: "personal" })
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const res = await fetch("/api/stories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    author: displayName,
                    email: userEmail,
                    authorRole: form.authorRole,
                    title: form.title,
                    excerpt: form.excerpt,
                    category: form.category,
                    status: "pending",
                    body: {
                        root: {
                            type: "root",
                            children: [
                                {
                                    type: "paragraph",
                                    children: [{ type: "text", text: form.excerpt, version: 1 }],
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
                setForm({ authorRole: "", title: "", excerpt: "", category: "personal" })
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
                <div className="text-4xl">🎉</div>
                <p className="font-semibold text-lg">Mulțumim pentru povestea ta!</p>
                <p className="text-sm text-muted-foreground">Echipa noastră o va revizui și o va publica în curând.</p>
                <Button onClick={() => setStatus("idle")} variant="outline">Trimite altă poveste</Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            {/* Auto-filled user info */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 text-sm">
                <div className="size-8 rounded-full bg-black/10 flex items-center justify-center text-xs font-bold">
                    {displayName?.charAt(0) || "?"}
                </div>
                <div>
                    <span className="font-medium">{displayName || "Utilizator"}</span>
                    {userEmail && <span className="text-muted-foreground ml-2 text-xs">({userEmail})</span>}
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Rol / Calitate</label>
                    <input
                        value={form.authorRole}
                        onChange={(e) => setForm((f) => ({ ...f, authorRole: e.target.value }))}
                        className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Părinte, Voluntar, Organizație..."
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Categoria</label>
                    <select
                        value={form.category}
                        onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                        className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                        <option value="personal">Personal</option>
                        <option value="family">Familie</option>
                        <option value="organization">Organizație</option>
                        <option value="professional">Profesional</option>
                    </select>
                </div>
            </div>
            <div className="space-y-1.5">
                <label className="text-sm font-medium">Titlul poveștii *</label>
                <input
                    required
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Dă un titlu poveștii tale"
                />
            </div>
            <div className="space-y-1.5">
                <label className="text-sm font-medium">Povestea ta *</label>
                <textarea
                    required
                    rows={6}
                    value={form.excerpt}
                    onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                    placeholder="Scrie-ți povestea aici... Orice experiență contează."
                />
            </div>
            <div className="flex items-center gap-3">
                <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Se trimite..." : "Trimite povestea"}
                </Button>
                {status === "error" && <p className="text-sm text-red-500">Eroare. Te rugăm încearcă din nou.</p>}
            </div>
        </form>
    )
}
