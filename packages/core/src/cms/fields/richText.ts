import { HTMLConverter, HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { deepMerge, Field, RichTextField } from 'payload'

export type RichTextOverrides = Partial<Omit<RichTextField, "type">>

export function richTextField(converters: HTMLConverter[] = [], overrides: RichTextOverrides = {}): Field[] {
  const name = overrides.name || 'content'
  const richTextField: RichTextField = {
    name: name,
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => [...rootFeatures, HTMLConverterFeature({
        converters({ defaultConverters }) {
          return [...defaultConverters, ...converters]
        },
      })],
    }),
    label: {
      fr: 'Contenu textuel',
      en: 'Text content',
    },
    required: true,
    localized: true,
  }

  const finalRichTextField = deepMerge<RichTextField, RichTextOverrides>(richTextField, overrides)

  const lexicalHTMLField = lexicalHTML(name, { name: `${name}_html` })
  return [finalRichTextField, lexicalHTMLField]
}
