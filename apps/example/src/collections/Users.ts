import type { CollectionConfig } from 'payload'
import { phoneField, roleField } from '@fredperr/excavator/cms/fields'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    description: {
      fr: "Les utilisateurs de l'application",
      en: 'The users of the application',
    },
  },
  auth: true,
  labels: {
    plural: {
      en: 'Users',
      fr: 'Utilisateurs',
    },
    singular: {
      en: 'User',
      fr: 'Utilisateur',
    },
  },
  fields: [roleField(), phoneField({ required: false })],
}
