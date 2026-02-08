"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

interface OrgEditFormProps {
    orgId: string
    currentName: string
    currentType: string
    currentDescription: string
    representatives: { clerkUserId: string; email: string; status: string }[]
}

export default function OrgEditForm({
    orgId,
    currentName,
    currentType,
    currentDescription,
    representatives,
}: OrgEditFormProps) {
    const { user } = useUser()

    const isApprovedRep = representatives.some(
        (r) => r.clerkUserId === user?.id && r.status === "approved"
    )

    const [editing, setEditing] = useState(false)
    const [form, setForm] = useState({
        name: currentName,
        type: currentType,
        description: currentDescription,
    })
    const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle")

    if (!isApprovedRep) return null

    if (!editing) {
        return (
            <Button
                size="sm"
                variant="outline"
                onClick={() => setEditing(true)}
                className="text-xs"
            >
                ✏️ Editează profilul organizației
            </Button>
        )
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("saving")
        try {
            const res = await fetch("/api/update-org", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    orgId,
                    clerkUserId: user?.id || "",
                    name: form.name,
                    type: form.type,
                    description: {
                        root: {
                            type: "root",
                            children: [
                                {
                                    type: "paragraph",
                                    children: [{ type: "text", text: form.description, version: 1 }],
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
                setTimeout(() => window.location.reload(), 1200)
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className="text-center py-4 space-y-2">
                <div className="text-2xl">✅</div>
                <p className="text-sm font-medium">Profilul a fost actualizat!</p>
                <p className="text-xs text-muted-foreground">Se reîncarcă pagina…</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSave} className="space-y-4 p-4 rounded-xl border bg-white/50">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Editează profilul</h3>
                <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                        setEditing(false)
                        setForm({ name: currentName, type: currentType, description: currentDescription })
                    }}
                    className="text-xs"
                >
                    Anulează
                </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Numele organizației</label>
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Tipul organizației</label>
                    <select
                        value={form.type}
                        onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                        className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                        <option value="supporter">Susținător</option>
                        <option value="partner">Partener</option>
                        <option value="clinic">Clinică</option>
                        <option value="school">Școală</option>
                    </select>
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="text-sm font-medium">Descriere</label>
                <textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                    placeholder="Descrie activitatea organizației…"
                />
            </div>

            <div className="flex items-center gap-3">
                <Button type="submit" size="sm" disabled={status === "saving"}>
                    {status === "saving" ? "Se salvează…" : "Salvează modificările"}
                </Button>
                {status === "error" && (
                    <p className="text-xs text-red-500">Eroare. Te rugăm încearcă din nou.</p>
                )}
            </div>
        </form>
    )
}
