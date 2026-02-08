"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export default function OrgSubmitForm() {
    const { user } = useUser()
    const displayName = user?.fullName || user?.firstName || ""
    const userEmail = user?.primaryEmailAddress?.emailAddress || ""

    const [form, setForm] = useState({ name: "", type: "supporter", website: "", description: "" })
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const res = await fetch("/api/organizations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    type: form.type,
                    website: form.website,
                    representatives: [
                        {
                            clerkUserId: user?.id || "",
                            email: userEmail,
                            status: "approved",
                        },
                    ],
                    status: "pending",
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
                setForm({ name: "", type: "supporter", website: "", description: "" })
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
                <p className="font-semibold text-lg">Cererea a fost trimisă!</p>
                <p className="text-sm text-muted-foreground">Echipa noastră va verifica și aproba organizația în curând.</p>
                <Button onClick={() => setStatus("idle")} variant="outline">Trimite altă cerere</Button>
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
                    <span className="font-medium">{displayName || "Reprezentant"}</span>
                    {userEmail && <span className="text-muted-foreground ml-2 text-xs">({userEmail})</span>}
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium">Numele organizației *</label>
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Asociația Exemplu"
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
                <label className="text-sm font-medium">Website</label>
                <input
                    type="url"
                    value={form.website}
                    onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="https://exemplu.ro"
                />
            </div>
            <div className="space-y-1.5">
                <label className="text-sm font-medium">Descriere *</label>
                <textarea
                    required
                    rows={4}
                    value={form.description}
                    onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                    placeholder="Descrie pe scurt activitatea organizației..."
                />
            </div>
            <div className="flex items-center gap-3">
                <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Se trimite..." : "Trimite cererea"}
                </Button>
                {status === "error" && <p className="text-sm text-red-500">Eroare. Te rugăm încearcă din nou.</p>}
            </div>
        </form>
    )
}
