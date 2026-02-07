"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Comment = {
    id: number
    authorName: string
    message: string
    isTeamMember: boolean
    teamRole: string
    createdAt: string
}

export default function CommentsSection({
    parentId,
    parentType,
    comments: initialComments,
}: {
    parentId: number
    parentType: "story" | "organization"
    comments: Comment[]
}) {
    const [comments] = useState(initialComments)
    const [form, setForm] = useState({ authorName: "", message: "" })
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const body: Record<string, unknown> = {
                authorName: form.authorName,
                message: form.message,
                relationType: parentType,
                status: "pending",
            }
            if (parentType === "story") body.story = parentId
            if (parentType === "organization") body.organization = parentId

            const res = await fetch("/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            if (res.ok) {
                setStatus("success")
                setForm({ authorName: "", message: "" })
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    return (
        <section className="space-y-6">
            <h3 className="text-lg font-semibold">
                Comentarii {comments.length > 0 && `(${comments.length})`}
            </h3>

            {/* Existing comments */}
            {comments.length > 0 ? (
                <div className="space-y-3">
                    {comments.map((c) => (
                        <div
                            key={c.id}
                            className={`surface-rounded p-4 ${c.isTeamMember ? "border-l-4" : ""}`}
                            style={c.isTeamMember ? { borderColor: "var(--brand-orange-500)", background: "rgba(254,101,79,0.04)" } : {}}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm">{c.authorName}</span>
                                {c.isTeamMember && (
                                    <span
                                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                                        style={{ background: "#fed18c", color: "#1f2937" }}
                                    >
                                        {c.teamRole || "Echipă"}
                                    </span>
                                )}
                                <span className="text-xs text-muted-foreground ml-auto">
                                    {new Date(c.createdAt).toLocaleDateString("ro-RO")}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{c.message}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-muted-foreground">Fii primul care lasă un comentariu.</p>
            )}

            {/* New comment form */}
            <div className="glass-soft surface-rounded p-5 space-y-4">
                <h4 className="font-medium text-sm">Lasă un comentariu</h4>
                {status === "success" ? (
                    <div className="text-center py-4 space-y-2">
                        <p className="text-sm font-medium">Mulțumim! 💬</p>
                        <p className="text-xs text-muted-foreground">Comentariul tău va fi vizibil după aprobare.</p>
                        <Button size="sm" variant="outline" onClick={() => setStatus("idle")}>
                            Scrie alt comentariu
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            required
                            value={form.authorName}
                            onChange={(e) => setForm((f) => ({ ...f, authorName: e.target.value }))}
                            className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                            placeholder="Numele tău"
                        />
                        <textarea
                            required
                            rows={3}
                            value={form.message}
                            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                            className="w-full rounded-lg border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                            placeholder="Scrie un comentariu..."
                        />
                        <div className="flex items-center gap-3">
                            <Button type="submit" size="sm" disabled={status === "sending"}>
                                {status === "sending" ? "Se trimite..." : "Trimite"}
                            </Button>
                            {status === "error" && <p className="text-xs text-red-500">Eroare. Încearcă din nou.</p>}
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}
