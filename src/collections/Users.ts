import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Utilizator',
    plural: 'Utilizatori',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email adăugat implicit
  ],
}
