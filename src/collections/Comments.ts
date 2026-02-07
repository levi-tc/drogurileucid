import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
    slug: 'comments',
    admin: {
        useAsTitle: 'body',
        defaultColumns: ['body', 'author', 'story', 'status', 'createdAt'],
    },
    fields: [
        {
            name: 'body',
            type: 'textarea',
            required: true,
            maxLength: 1000,
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'story',
            type: 'relationship',
            relationTo: 'stories',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'approved',
            options: [
                { label: 'Aprobat', value: 'approved' },
                { label: 'În așteptare', value: 'pending' },
                { label: 'Respins', value: 'rejected' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
