import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
    slug: 'stories',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'status', 'category', 'publishedAt'],
        description: 'User-submitted stories. New submissions arrive as "Pending" — review and approve or reject them.',
    },
    hooks: {
        beforeChange: [
            ({ data, originalDoc }) => {
                // Auto-set publishedAt when status transitions to published
                if (data?.status === 'published' && originalDoc?.status !== 'published' && !data.publishedAt) {
                    data.publishedAt = new Date().toISOString()
                }
                return data
            },
        ],
    },
    access: {
        // Anyone can submit a story (goes as pending)
        create: () => true,
        // Only published stories are public; admins see all
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'published' } }
        },
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        { name: 'title', type: 'text', required: true },
        {
            name: 'slug',
            type: 'text',
            unique: true,
            admin: { position: 'sidebar' },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.title) {
                            return data.title
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-')
                                .trim()
                        }
                        return value
                    },
                ],
            },
        },
        { name: 'author', type: 'text', required: true },
        { name: 'authorRole', type: 'text', label: 'Author Role' },
        {
            name: 'email',
            type: 'email',
            admin: { description: 'Private — not shown publicly' },
        },
        {
            name: 'excerpt',
            type: 'textarea',
            maxLength: 300,
            admin: { description: 'Short preview for story cards' },
        },
        { name: 'body', type: 'richText', required: true },
        {
            name: 'category',
            type: 'select',
            defaultValue: 'personal',
            options: [
                { label: 'Personal', value: 'personal' },
                { label: 'Organizație', value: 'organization' },
                { label: 'Familie', value: 'family' },
                { label: 'Profesional', value: 'professional' },
            ],
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'pending',
            options: [
                { label: '📝 Draft', value: 'draft' },
                { label: '⏳ Pending', value: 'pending' },
                { label: '✅ Published', value: 'published' },
                { label: '❌ Rejected', value: 'rejected' },
            ],
            admin: {
                position: 'sidebar',
                description: 'Submissions arrive as Pending. Review and set to Published or Rejected.',
            },
        },
        {
            name: 'adminNotes',
            type: 'textarea',
            label: 'Admin Notes',
            admin: {
                position: 'sidebar',
                description: 'Internal notes — not shown publicly',
            },
            access: {
                // Only admins can read/write admin notes
                read: ({ req }) => !!req.user,
                create: ({ req }) => !!req.user,
                update: ({ req }) => !!req.user,
            },
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
        },
        // Team responses — admin-only replies shown on story page
        {
            name: 'responses',
            type: 'array',
            label: 'Team Responses',
            admin: { description: 'Replies from the team (shown publicly on the story page)' },
            fields: [
                { name: 'responderName', type: 'text', required: true },
                { name: 'responderRole', type: 'text' },
                { name: 'message', type: 'textarea', required: true },
                { name: 'respondedAt', type: 'date' },
            ],
        },
    ],
}
