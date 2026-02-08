import type { CollectionConfig } from 'payload'
import { moderateComment } from '../lib/moderation'

export const Comments: CollectionConfig = {
    slug: 'comments',
    admin: {
        useAsTitle: 'authorName',
        defaultColumns: ['authorName', 'status', 'moderationScore', 'relationType', 'createdAt'],
        description: 'Comments are auto-moderated on submission. Clean ones are approved instantly, borderline ones need manual review, and toxic ones are rejected.',
    },
    hooks: {
        beforeChange: [
            ({ data, operation }) => {
                // Only auto-moderate on creation, not on admin edits
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
        // Anyone can submit a comment
        create: () => true,
        // Only approved comments are public
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'approved' } }
        },
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        { name: 'authorName', type: 'text', required: true, label: 'Name' },
        { name: 'message', type: 'textarea', required: true },
        {
            name: 'isTeamMember',
            type: 'checkbox',
            defaultValue: false,
            label: 'Team Member',
            admin: { description: 'Check if this comment is from a team member' },
        },
        {
            name: 'teamRole',
            type: 'text',
            label: 'Team Role',
            admin: {
                condition: (data) => data?.isTeamMember,
                description: 'e.g. Fondator, Psiholog',
            },
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'pending',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Approved', value: 'approved' },
                { label: 'Rejected', value: 'rejected' },
            ],
            admin: { position: 'sidebar' },
        },
        // Polymorphic relationship — comment can belong to a story OR organization
        {
            name: 'relationType',
            type: 'select',
            required: true,
            label: 'Comment On',
            options: [
                { label: 'Story', value: 'story' },
                { label: 'Organization', value: 'organization' },
                { label: 'Article', value: 'article' },
            ],
            admin: { position: 'sidebar' },
        },
        {
            name: 'story',
            type: 'relationship',
            relationTo: 'stories',
            admin: {
                condition: (data) => data?.relationType === 'story',
            },
        },
        {
            name: 'organization',
            type: 'relationship',
            relationTo: 'organizations',
            admin: {
                condition: (data) => data?.relationType === 'organization',
            },
        },
        {
            name: 'article',
            type: 'relationship',
            relationTo: 'articles',
            admin: {
                condition: (data) => data?.relationType === 'article',
            },
        },
        // ─── Auto-moderation metadata (admin-only) ────────────────────
        {
            name: 'moderationScore',
            type: 'number',
            label: 'Moderation Score',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: '0 = clean, 1-2 = borderline, 3+ = toxic',
            },
            access: {
                read: ({ req }) => !!req.user,
            },
        },
        {
            name: 'moderationReason',
            type: 'textarea',
            label: 'Moderation Reason',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Auto-generated explanation for the moderation decision',
            },
            access: {
                read: ({ req }) => !!req.user,
            },
        },
    ],
}
