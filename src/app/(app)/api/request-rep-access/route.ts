import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'

// POST /api/request-rep-access — add a pending representative to an org
export async function POST(req: NextRequest) {
    try {
        const { orgId, clerkUserId, email } = await req.json()

        if (!orgId || !clerkUserId || !email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const payload = await getPayload({ config })

        // Get the current org
        const org = await payload.findByID({ collection: 'organizations', id: orgId })
        if (!org) {
            return NextResponse.json({ error: 'Organization not found' }, { status: 404 })
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const reps = Array.isArray((org as any).representatives) ? (org as any).representatives : []

        // Check if already a rep
        if (reps.some((r: { clerkUserId: string }) => r.clerkUserId === clerkUserId)) {
            return NextResponse.json({ error: 'Already a representative' }, { status: 409 })
        }

        // Check max 3 reps
        if (reps.length >= 3) {
            return NextResponse.json({ error: 'Max representatives reached' }, { status: 400 })
        }

        // Add as pending rep (using overrideAccess to bypass Payload admin requirement)
        const updatedReps = [...reps, { clerkUserId, email, status: 'pending' }]
        await payload.update({
            collection: 'organizations',
            id: orgId,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data: { representatives: updatedReps } as any,
            overrideAccess: true,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Rep access request error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
