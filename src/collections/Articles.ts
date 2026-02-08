import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
    slug: 'articles',
    labels: {
        singular: 'Articol',
        plural: 'Articole',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'publishedAt'],
        description: 'Articole și ghiduri. Cele trimise de organizații vin ca „În așteptare".',
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
        { name: 'title', type: 'text', required: true, label: 'Titlu' },
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
        { name: 'body', type: 'richText', required: true, label: 'Conținut' },
        {
            name: 'category',
            type: 'select',
            label: 'Categorie',
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
            label: 'Imagine principală',
            relationTo: 'media',
        },
        {
            name: 'author',
            type: 'text',
            label: 'Autor',
            admin: { description: 'Credit autor (opțional)' },
        },
        {
            name: 'organization',
            type: 'relationship',
            label: 'Organizație',
            relationTo: 'organizations',
            admin: { description: 'Organizația care a trimis acest articol' },
        },
        {
            name: 'clerkUserId',
            type: 'text',
            label: 'ID Utilizator Clerk',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'ID-ul Clerk al celui care a trimis',
            },
        },
        {
            name: 'status',
            type: 'select',
            label: 'Stare',
            defaultValue: 'pending',
            options: [
                { label: '📝 Ciornă', value: 'draft' },
                { label: '⏳ În așteptare', value: 'pending' },
                { label: '✅ Publicat', value: 'published' },
                { label: '❌ Respins', value: 'rejected' },
            ],
            admin: { position: 'sidebar' },
        },
        {
            name: 'publishedAt',
            type: 'date',
            label: 'Data publicării',
            admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
        },
    ],
}
