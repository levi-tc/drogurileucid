import type { GlobalConfig } from 'payload'

export const CookiePolicy: GlobalConfig = {
  slug: 'cookie-policy',
  label: 'Politica de Cookie-uri',
  admin: {
    description:
      'Editează conținutul paginii „Politica de Cookie-uri". Modificările se reflectă automat pe site.',
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
