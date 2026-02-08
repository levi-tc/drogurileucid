"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

interface Representative {
    clerkUserId: string
    email: string
    status: string
}

interface RequestRepAccessProps {
    orgId: string
    orgName: string
    representatives: Representative[]
}

export default function RequestRepAccess({ orgId, orgName, representatives }: RequestRepAccessProps) {
    const { user } = useUser()
    const userEmail = user?.primaryEmailAddress?.emailAddress || ""
    const displayName = user?.fullName || user?.firstName || ""

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    // Check current user's relationship to this org
    const existingRep = representatives.find((r) => r.clerkUserId === user?.id)
    const isApproved = existingRep?.status === "approved"
    const isPending = existingRep?.status === "pending"
    const isFull = representatives.length >= 3

    if (isApproved) return null // Already approved — article form shows instead
    if (isPending) {
        return (
            <div className="text-center py-6 space-y-2">
                <div className="text-3xl">⏳</div>
                <p className="text-sm font-medium">Cererea ta este în așteptare</p>
                <p className="text-xs text-muted-foreground">
                    Echipa va aproba accesul tău ca reprezentant al <strong>{orgName}</strong>.
                </p>
            </div>
        )
    }

    if (isFull) {
        return (
            <div className="text-center py-6 space-y-2">
                <p className="text-sm text-muted-foreground">
                    Această organizație are deja numărul maxim de reprezentanți (3).
                </p>
            </div>
        )
    }

    const handleRequest = async () => {
        setStatus("sending")
        try {
            const res = await fetch("/api/request-rep-access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    orgId,
                    clerkUserId: user?.id || "",
                    email: userEmail,
                }),
            })
            if (res.ok) {
                setStatus("success")
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className="text-center py-6 space-y-2">
                <div className="text-3xl">📩</div>
                <p className="text-sm font-medium">Cerere trimisă!</p>
                <p className="text-xs text-muted-foreground">
                    Echipa va revizui cererea ta de a deveni reprezentant al <strong>{orgName}</strong>.
                </p>
            </div>
        )
    }

    return (
        <div className="text-center py-6 space-y-4">
            <p className="text-sm text-muted-foreground">
                Doar reprezentanții verificați pot publica articole.
            </p>
            <div className="inline-flex items-center gap-3 p-3 rounded-lg bg-black/5 text-sm">
                <div className="size-8 rounded-full bg-black/10 flex items-center justify-center text-xs font-bold">
                    {displayName?.charAt(0) || "?"}
                </div>
                <div className="text-left">
                    <div className="font-medium">{displayName}</div>
                    <div className="text-xs text-muted-foreground">{userEmail}</div>
                </div>
            </div>
            <div>
                <Button onClick={handleRequest} disabled={status === "sending"} size="sm">
                    {status === "sending" ? "Se trimite..." : "Solicită acces ca reprezentant"}
                </Button>
            </div>
            {status === "error" && (
                <p className="text-xs text-red-500">Eroare. Te rugăm încearcă din nou.</p>
            )}
        </div>
    )
}
