import type { CollectionConfig } from 'payload'
import { moderateComment } from '../lib/moderation'

export const Comments: CollectionConfig = {
    slug: 'comments',
    labels: {
        singular: 'Comentariu',
        plural: 'Comentarii',
    },
    admin: {
        useAsTitle: 'authorName',
        defaultColumns: ['authorName', 'status', 'moderationScore', 'relationType', 'createdAt'],
        description: 'Comentariile sunt auto-moderate la trimitere. Cele curate sunt aprobate instant, cele „la limită" necesită revizuire manuală, iar cele toxice sunt respinse.',
    },
    hooks: {
        beforeChange: [
            ({ data, operation }) => {
                if (operation === 'create' && data?.message) {
                    const result = moderateComment(data.message)
                    data.status = result.action
                    data.moderationScore = result.score
                    data.moderationReason = result.reasons.length > 0
                        ? result.reasons.join(' | ')
                        : 'Comentariu curat'
                }
                return data
            },
        ],
    },
    access: {
        create: () => true,
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'approved' } }
        },
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        { name: 'authorName', type: 'text', required: true, label: 'Nume autor' },
        { name: 'message', type: 'textarea', required: true, label: 'Mesaj' },
        {
            name: 'isTeamMember',
            type: 'checkbox',
            defaultValue: false,
            label: 'Membru echipă',
            admin: { description: 'Bifați dacă acest comentariu este de la un membru al echipei' },
        },
        {
            name: 'teamRole',
            type: 'text',
            label: 'Rol în echipă',
            admin: {
                condition: (data) => data?.isTeamMember,
                description: 'ex. Fondator, Psiholog',
            },
        },
        {
            name: 'status',
            type: 'select',
            label: 'Stare',
            defaultValue: 'pending',
            options: [
                { label: '⏳ În așteptare', value: 'pending' },
                { label: '✅ Aprobat', value: 'approved' },
                { label: '❌ Respins', value: 'rejected' },
            ],
            admin: { position: 'sidebar' },
        },
        {
            name: 'relationType',
            type: 'select',
            required: true,
            label: 'Comentariu pe',
            options: [
                { label: 'Poveste', value: 'story' },
                { label: 'Organizație', value: 'organization' },
                { label: 'Articol', value: 'article' },
            ],
            admin: { position: 'sidebar' },
        },
        {
            name: 'story',
            type: 'relationship',
            label: 'Poveste',
            relationTo: 'stories',
            admin: {
                condition: (data) => data?.relationType === 'story',
            },
        },
        {
            name: 'organization',
            type: 'relationship',
            label: 'Organizație',
            relationTo: 'organizations',
            admin: {
                condition: (data) => data?.relationType === 'organization',
            },
        },
        {
            name: 'article',
            type: 'relationship',
            label: 'Articol',
            relationTo: 'articles',
            admin: {
                condition: (data) => data?.relationType === 'article',
            },
        },
        // ─── Metadate auto-moderare (doar admin) ────────────────────
        {
            name: 'moderationScore',
            type: 'number',
            label: 'Scor moderare',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: '0 = curat, 1-2 = la limită, 3+ = toxic',
            },
            access: {
                read: ({ req }) => !!req.user,
            },
        },
        {
            name: 'moderationReason',
            type: 'textarea',
            label: 'Motiv moderare',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Explicație auto-generată pentru decizia de moderare',
            },
            access: {
                read: ({ req }) => !!req.user,
            },
        },
    ],
}
