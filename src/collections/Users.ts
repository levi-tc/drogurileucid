import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'role'],
    },
    auth: true,
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'clerkId',
            type: 'text',
            unique: true,
            admin: {
                readOnly: true,
                position: 'sidebar',
            },
        },
        {
            name: 'role',
            type: 'select',
            defaultValue: 'individual',
            options: [
                { label: 'Individual', value: 'individual' },
                { label: 'Organizație', value: 'organization' },
                { label: 'Admin', value: 'admin' },
            ],
            required: true,
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'bio',
            type: 'textarea',
        },
    ],
}
