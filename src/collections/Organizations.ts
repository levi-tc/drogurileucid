import type { CollectionConfig } from 'payload'

export const Organizations: CollectionConfig = {
    slug: 'organizations',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'website', 'createdAt'],
    },
    fields: [
        {
            name: 'name',
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
            name: 'description',
            type: 'richText',
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'website',
            type: 'text',
        },
        {
            name: 'members',
            type: 'relationship',
            relationTo: 'users',
            hasMany: true,
        },
    ],
    hooks: {
        beforeChange: [
            ({ data, operation }) => {
                if (operation === 'create' && data?.name && !data?.slug) {
                    data.slug = data.name
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
