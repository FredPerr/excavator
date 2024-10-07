import { Locale, LocaleCode } from "../../cms/localization/types"
import { SanitizedLocalizationConfig } from "payload"

export function findLocaleFromCode(
  code: LocaleCode,
  localization: SanitizedLocalizationConfig
): Locale | null {
  return localization.locales.find(locale => locale.code === code) || null
}
