import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
    slug: 'comments',
    admin: {
        useAsTitle: 'authorName',
        defaultColumns: ['authorName', 'status', 'relationType', 'createdAt'],
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
    ],
}
