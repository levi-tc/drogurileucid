import type { CollectionConfig } from 'payload'

export const Organizations: CollectionConfig = {
    slug: 'organizations',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'status', 'type', 'featured'],
        description: 'Organization listings. New submissions arrive as "Pending" — review and approve or reject them.',
    },
    hooks: {
        beforeChange: [
            ({ data, originalDoc }) => {
                // Auto-set approvedAt when status transitions to approved
                if (data?.status === 'approved' && originalDoc?.status !== 'approved') {
                    data.approvedAt = new Date().toISOString()
                }
                return data
            },
        ],
    },
    access: {
        // Anyone can submit an organization listing (goes as pending)
        create: () => true,
        // Only approved organizations are public; admins see all
        read: ({ req }) => {
            if (req.user) return true
            return { status: { equals: 'approved' } }
        },
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        { name: 'name', type: 'text', required: true },
        {
            name: 'representatives',
            type: 'array',
            maxRows: 3,
            label: 'Representatives',
            admin: {
                description: 'Up to 3 verified representatives. The first is auto-added from submission.',
            },
            fields: [
                {
                    name: 'clerkUserId',
                    type: 'text',
                    required: true,
                    label: 'Clerk User ID',
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
                    defaultValue: 'pending',
                    options: [
                        { label: '⏳ Pending', value: 'pending' },
                        { label: '✅ Approved', value: 'approved' },
                    ],
                    admin: { description: 'Approve to grant posting rights' },
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
            name: 'status',
            type: 'select',
            defaultValue: 'pending',
            options: [
                { label: '⏳ Pending', value: 'pending' },
                { label: '✅ Approved', value: 'approved' },
                { label: '❌ Rejected', value: 'rejected' },
            ],
            admin: {
                position: 'sidebar',
                description: 'Submissions arrive as Pending. Review and set to Approved or Rejected.',
            },
        },
        {
            name: 'adminNotes',
            type: 'textarea',
            label: 'Admin Notes',
            admin: {
                position: 'sidebar',
                description: 'Internal notes — not shown publicly',
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
            admin: { position: 'sidebar', readOnly: true },
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
