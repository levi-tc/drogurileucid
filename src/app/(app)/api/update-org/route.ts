import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'

// POST /api/update-org — let approved reps update their org's name, type, description
export async function POST(req: NextRequest) {
    try {
        const { orgId, clerkUserId, name, type, description } = await req.json()

        if (!orgId || !clerkUserId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const payload = await getPayload({ config })
        const org = await payload.findByID({ collection: 'organizations', id: orgId })
        if (!org) {
            return NextResponse.json({ error: 'Organization not found' }, { status: 404 })
        }

        // Verify the user is an approved representative
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const reps = Array.isArray((org as any).representatives) ? (org as any).representatives : []
        const isApproved = reps.some(
            (r: { clerkUserId: string; status: string }) =>
                r.clerkUserId === clerkUserId && r.status === 'approved'
        )

        if (!isApproved) {
            return NextResponse.json({ error: 'Not an approved representative' }, { status: 403 })
        }

        // Build update data — only allow name, type, description
        const updateData: Record<string, unknown> = {}
        if (name !== undefined) updateData.name = name
        if (type !== undefined) updateData.type = type
        if (description !== undefined) updateData.description = description

        await payload.update({
            collection: 'organizations',
            id: orgId,
            data: updateData,
            overrideAccess: true,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Org update error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
