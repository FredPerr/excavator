import { deepMerge, UploadField } from "payload"

export type ImageFieldOverrides = Partial<Omit<UploadField, "type" | "relationTo">>

export function imageField(imageCollectionSlug: string, overrides: ImageFieldOverrides = {}): UploadField {
  const field: UploadField = {
    type: "upload",
    localized: false,
    required: true,
    name: "image",
    relationTo: imageCollectionSlug,
    label: {
      fr: "Image",
      en: "Image",
    },
  }
  return deepMerge<UploadField, ImageFieldOverrides>(field, overrides)
}
