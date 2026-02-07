import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
    slug: 'stories',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'category', 'status', 'publishedAt'],
    },
    access: {
        // Anyone can submit a story (goes as draft)
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
            defaultValue: 'draft',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
            ],
            admin: { position: 'sidebar' },
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
