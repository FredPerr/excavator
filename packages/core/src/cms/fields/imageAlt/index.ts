import { deepMerge, TextField } from "payload"

type Overrides = Partial<Omit<TextField, "type">>

export function imageAltField(overrides: Overrides = {}): TextField {
  const field: TextField = {
    type: "text",
    localized: true,
    required: true,
    name: "alt",
    label: {
      fr: "Texte alternatif (alt)",
      en: "Alternative text (alt)",
    },
    minLength: 3,
    admin: {
      description: {
        fr: "Description de l'image pour les lecteurs d'écran. Ce champ est requis pour optimiser le SEO.",
        en: "Description of the image for screen readers. This field is required to optimize SEO.",
      },
      placeholder: {
        fr: "Jardin communautaire de la rue des Lilas",
        en: "Community garden on Lilac Street",
      },
      autoComplete: "off",
    },
  }
  return deepMerge<TextField, Overrides>(field, overrides)
}
