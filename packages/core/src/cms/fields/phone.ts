import { deepMerge, TextField, Validate } from "payload"
import { validateNortAmericanPhone } from "../../utils/validators/phone"
import { formatNorthAmerica } from "../../utils/formatters/phone"

type Overrides = Partial<Omit<TextField, "type" | "localized">>

const validateErrors = {
  required: "You need to provide a value for the phone number.",
  format: "The format of your phone number is invalid.",
}

const validate: Validate<string> = (val, { required }) => {
  if (required && !val) return validateErrors.required

  if (!val) return true
  return validateNortAmericanPhone(val) || validateErrors.format
}

export function phoneField(overrides: Overrides = {}): TextField {
  const field: TextField = {
    type: "text",
    name: "phone",
    localized: false,
    required: true,
    label: {
      fr: "Numéro de téléphone",
      en: "Phone number",
    },
    admin: {
      description: {
        fr: "Numéro de téléphone nord-américain de 10 chiffres sans le code du pays (+1)",
        en: "North-american phone number composed of 10 digits without the regional code (+1)",
      },
      position: "sidebar",
      placeholder: "(___) ___-____",
    },
    validate,
    hooks: {
      beforeValidate: [
        ({ value }) => {
          return formatNorthAmerica(value)
        },
      ],
    },
  }
  return deepMerge<TextField, Overrides>(field, overrides)
}
