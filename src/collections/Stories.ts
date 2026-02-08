import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
    slug: 'stories',
    labels: {
        singular: 'Poveste',
        plural: 'Povești',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'status', 'category', 'publishedAt'],
        description: 'Povești trimise de utilizatori. Noile trimiteri vin ca „În așteptare" — revizuiți și aprobați sau respingeți-le.',
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
        create: () => true,
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'published' } }
        },
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
        { name: 'author', type: 'text', required: true, label: 'Autor' },
        { name: 'authorRole', type: 'text', label: 'Rolul autorului' },
        {
            name: 'email',
            type: 'email',
            admin: { description: 'Privat — nu se afișează public' },
        },
        {
            name: 'excerpt',
            type: 'textarea',
            label: 'Rezumat',
            maxLength: 300,
            admin: { description: 'Scurtă previzualizare pentru carduri' },
        },
        { name: 'body', type: 'richText', required: true, label: 'Conținut' },
        {
            name: 'category',
            type: 'select',
            label: 'Categorie',
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
            label: 'Stare',
            defaultValue: 'pending',
            options: [
                { label: '📝 Ciornă', value: 'draft' },
                { label: '⏳ În așteptare', value: 'pending' },
                { label: '✅ Publicat', value: 'published' },
                { label: '❌ Respins', value: 'rejected' },
            ],
            admin: {
                position: 'sidebar',
                description: 'Trimiterile vin ca „În așteptare". Revizuiți și setați ca Publicat sau Respins.',
            },
        },
        {
            name: 'adminNotes',
            type: 'textarea',
            label: 'Note admin',
            admin: {
                position: 'sidebar',
                description: 'Note interne — nu se afișează public',
            },
            access: {
                read: ({ req }) => !!req.user,
                create: ({ req }) => !!req.user,
                update: ({ req }) => !!req.user,
            },
        },
        {
            name: 'featuredImage',
            type: 'upload',
            label: 'Imagine principală',
            relationTo: 'media',
        },
        {
            name: 'publishedAt',
            type: 'date',
            label: 'Data publicării',
            admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
        },
        {
            name: 'responses',
            type: 'array',
            label: 'Răspunsuri echipă',
            admin: { description: 'Răspunsuri de la echipă (afișate public pe pagina poveștii)' },
            fields: [
                { name: 'responderName', type: 'text', required: true, label: 'Numele celui care răspunde' },
                { name: 'responderRole', type: 'text', label: 'Rolul' },
                { name: 'message', type: 'textarea', required: true, label: 'Mesaj' },
                { name: 'respondedAt', type: 'date', label: 'Răspuns la' },
            ],
        },
    ],
}
