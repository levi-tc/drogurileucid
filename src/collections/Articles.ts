import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
    slug: 'articles',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'publishedAt'],
    },
    access: {
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'published' } }
        },
        create: ({ req }) => !!req.user,
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
            name: 'publishedAt',
            type: 'date',
            admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
        },
    ],
}
