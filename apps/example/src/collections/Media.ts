import { getUserRole, imageAltField } from '@fredperr/excavator/cms/fields'
import type { Access, CollectionConfig } from 'payload'
import { sanitizeFilenameHook } from '@fredperr/excavator/cms/hooks'

const editAccess: Access = ({ req }) => {
  if (!req.user) return false

  const role = getUserRole({ req })
  return role && role <= 10 ? true : false
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: editAccess,
  },
  fields: [imageAltField()],
  upload: {
    disableLocalStorage: false, // should be true when using buckets.
    mimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
      'image/gif',
      'video/mp4',
      'video/quicktime',
      'video/x-msvideo',
      'video/x-ms-wmv',
      'video/mpeg',
      'video/webm',
    ],
    imageSizes: [
      {
        name: 'small',
        width: 320,
        height: 240,
        withoutEnlargement: true,
      },
      {
        name: 'medium',
        width: 640,
        height: 480,
      },
      {
        name: 'large',
        width: 1024,
        height: 768,
      },
    ],
  },
  hooks: {
    beforeOperation: [sanitizeFilenameHook],
  },
}
