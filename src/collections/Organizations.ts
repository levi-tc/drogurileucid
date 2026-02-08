import type { CollectionConfig } from 'payload'

export const Organizations: CollectionConfig = {
    slug: 'organizations',
    labels: {
        singular: 'Organizație',
        plural: 'Organizații',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'status', 'type', 'featured'],
        description: 'Lista organizațiilor. Noile trimiteri vin ca „În așteptare" — revizuiți și aprobați sau respingeți-le.',
    },
    hooks: {
        beforeChange: [
            ({ data, originalDoc }) => {
                if (data?.status === 'approved' && originalDoc?.status !== 'approved') {
                    data.approvedAt = new Date().toISOString()
                }
                return data
            },
        ],
    },
    access: {
        create: () => true,
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'approved' } }
        },
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        { name: 'name', type: 'text', required: true, label: 'Nume' },
        {
            name: 'representatives',
            type: 'array',
            maxRows: 3,
            label: 'Reprezentanți',
            admin: {
                description: 'Până la 3 reprezentanți verificați. Primul este adăugat automat din trimitere.',
            },
            fields: [
                {
                    name: 'clerkUserId',
                    type: 'text',
                    required: true,
                    label: 'ID Utilizator Clerk',
                },
                {
                    name: 'email',
                    type: 'text',
                    required: true,
                    label: 'Email',
                },
                {
                    name: 'status',
                    type: 'select',
                    label: 'Stare',
                    defaultValue: 'pending',
                    options: [
                        { label: '⏳ În așteptare', value: 'pending' },
                        { label: '✅ Aprobat', value: 'approved' },
                    ],
                    admin: { description: 'Aprobați pentru a acorda drepturi de publicare' },
                },
            ],
        },
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
        { name: 'description', type: 'richText', label: 'Descriere' },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'website',
            type: 'text',
            label: 'Website',
            admin: { description: 'URL extern' },
        },
        {
            name: 'type',
            type: 'select',
            label: 'Tip',
            options: [
                { label: 'Susținător', value: 'supporter' },
                { label: 'Partener', value: 'partner' },
                { label: 'Clinică', value: 'clinic' },
                { label: 'Școală', value: 'school' },
            ],
        },
        {
            name: 'status',
            type: 'select',
            label: 'Stare',
            defaultValue: 'pending',
            options: [
                { label: '⏳ În așteptare', value: 'pending' },
                { label: '✅ Aprobat', value: 'approved' },
                { label: '❌ Respins', value: 'rejected' },
            ],
            admin: {
                position: 'sidebar',
                description: 'Trimiterile vin ca „În așteptare". Revizuiți și setați ca Aprobat sau Respins.',
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
            name: 'approvedAt',
            type: 'date',
            label: 'Aprobat la',
            admin: { position: 'sidebar', readOnly: true },
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
            label: 'Afișează pe pagina principală',
            admin: { position: 'sidebar' },
        },
    ],
}
