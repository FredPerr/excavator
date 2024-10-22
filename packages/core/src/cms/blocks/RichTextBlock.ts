import { HTMLConverter } from '@payloadcms/richtext-lexical'
import { richTextField, RichTextOverrides } from '../fields/richText'
import { Block } from 'payload'

type RichTextBlockFunction = (converters: HTMLConverter[], overrides: RichTextOverrides) => Block

export const RichTextBlock: RichTextBlockFunction = (converters = [], overrides = {}) => {
  return {
    slug: 'richText',
    interfaceName: 'RichTextBlock',
    labels: {
      singular: {
        en: 'Rich Text',
        fr: 'Texte enrichi',
      },
      plural: {
        en: 'Rich Texts',
        fr: 'Textes enrichis',
      },
    },
    fields: [...richTextField(converters, overrides)],
  }
}
