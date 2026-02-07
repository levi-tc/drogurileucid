import type { CollectionConfig } from 'payload'

export const Organizations: CollectionConfig = {
    slug: 'organizations',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'type', 'featured'],
    },
    access: {
        read: () => true,
        create: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        { name: 'name', type: 'text', required: true },
        {
            name: 'slug',
            type: 'text',
            unique: true,
            admin: { position: 'sidebar' },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.name) {
                            return data.name
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
        { name: 'description', type: 'richText' },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'website',
            type: 'text',
            admin: { description: 'External URL' },
        },
        {
            name: 'type',
            type: 'select',
            options: [
                { label: 'Susținător', value: 'supporter' },
                { label: 'Partener', value: 'partner' },
                { label: 'Clinică', value: 'clinic' },
                { label: 'Școală', value: 'school' },
            ],
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
            label: 'Show on Homepage',
            admin: { position: 'sidebar' },
        },
    ],
}
