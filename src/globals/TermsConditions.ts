import type { GlobalConfig } from 'payload'

export const TermsConditions: GlobalConfig = {
  slug: 'terms-conditions',
  label: 'Termeni și Condiții',
  admin: {
    description:
      'Editează conținutul paginii „Termeni și Condiții". Modificările se reflectă automat pe site.',
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
