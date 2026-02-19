import type { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacy-policy',
  label: 'Politica de Confidențialitate',
  admin: {
    description:
      'Editează conținutul paginii „Politica de Confidențialitate (GDPR)". Modificările se reflectă automat pe site.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'lastUpdated',
      type: 'date',
      label: 'Ultima actualizare',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayOnly' },
        description: 'Data ultimei actualizări afișată pe pagină.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Conținut pagină',
      required: true,
    },
  ],
}
