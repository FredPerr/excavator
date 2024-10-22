import { FieldHook, TextField, TextFieldSingleValidation } from "payload"
import { validateSlug } from "../../utils/validators/slug"
import { deepMerge } from "payload"
import { slugify } from "../../utils/formatters/slug"
import { isObject } from "../../utils/ts/isObject"

type Overrides = Partial<Omit<TextField, "type" | "localized">>
type SlugField = (createFromField?: string, overrides?: Overrides) => TextField

const validateField: TextFieldSingleValidation = (value, { required }) => {
  if (!required && !value) return true

  const valid: boolean = value ? validateSlug(value) : false
  return (
    valid ||
    "The slug must contain only lowercase letters, numbers, hyphens, and underscores and not be empty"
  )
}

const slugifyField: (createdFromField?: string) => FieldHook<any, string, any> =
  createdFromField =>
  ({ value, data, collection }) => {
    if (!createdFromField) return slugify(value || "")

    if (!data || !isObject(data) || !data[createdFromField]) {
      console.warn(
        `The field ${createdFromField} does not exist, is empty, or is not a string in the data object for the collection ${collection?.slug || "unknown"}`
      )
      return slugify(value || "")
    }
    return slugify(data[createdFromField])
  }

export const slugField: SlugField = (createdFromField?: string, overrides?: Overrides) => {
  const base: TextField = {
    type: "text",
    name: "slug",
    label: "Slug",
    localized: true,
    required: true,
    unique: true,
    admin: {
      position: "sidebar",
      readOnly: !!createdFromField,
      description: {
        en: !!createdFromField
          ? `This field is automatically generated from the "${createdFromField}" field`
          : "A unique identifier for this document",
        fr: !!createdFromField
          ? `Ce champ est généré automatiquement à partir du champ "${createdFromField}"`
          : "Un identifiant unique pour ce document",
      },
    },
    hooks: {
      beforeValidate: [slugifyField(createdFromField)],
    },

    validate: validateField,
  }

  return deepMerge<TextField, Overrides>(base, overrides || {})
}
