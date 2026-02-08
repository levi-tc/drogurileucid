import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
    slug: 'articles',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'publishedAt'],
    },
    hooks: {
        beforeChange: [
            ({ data, originalDoc }) => {
                if (data?.status === 'published' && originalDoc?.status !== 'published' && !data.publishedAt) {
                    data.publishedAt = new Date().toISOString()
                }
                return data
            },
        ],
    },
    access: {
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'published' } }
        },
        create: () => true,
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
        { name: 'body', type: 'richText', required: true },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'Prevenție', value: 'prevention' },
                { label: 'Sănătate', value: 'health' },
                { label: 'Pentru Părinți', value: 'parents' },
                { label: 'Educație', value: 'education' },
                { label: 'Ghid', value: 'guide' },
            ],
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'author',
            type: 'text',
            admin: { description: 'Optional author credit' },
        },
        {
            name: 'organization',
            type: 'relationship',
            relationTo: 'organizations',
            admin: { description: 'Organization that submitted this article' },
        },
        {
            name: 'clerkUserId',
            type: 'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Clerk user ID of submitter',
            },
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
            admin: { position: 'sidebar' },
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
        },
    ],
}
