import type { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
    slug: 'resources',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'createdAt'],
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'body',
            type: 'richText',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'Articol', value: 'article' },
                { label: 'Ghid', value: 'guide' },
                { label: 'PDF', value: 'pdf' },
                { label: 'Plan', value: 'plan' },
            ],
            defaultValue: 'article',
        },
        {
            name: 'attachment',
            type: 'upload',
            relationTo: 'media',
        },
    ],
    hooks: {
        beforeChange: [
            ({ data, operation }) => {
                if (operation === 'create' && data?.title && !data?.slug) {
                    data.slug = data.title
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-|-$/g, '')
                }
                return data
            },
        ],
    },
}
