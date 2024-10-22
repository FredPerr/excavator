import { Block } from 'payload'
import { imageField, ImageFieldOverrides } from '../fields/image'

type ImageBlockFunction = (imageCollectionSlug: string, overrides: ImageFieldOverrides) => Block

export const ImageBlock: ImageBlockFunction = (imageCollectionSlug, overrides) => {
  return {
    slug: 'image',
    interfaceName: 'ImageBlock',
    labels: {
      singular: 'Image',
      plural: "Images",
    },
    fields: [imageField(imageCollectionSlug, overrides)],
  }

}
