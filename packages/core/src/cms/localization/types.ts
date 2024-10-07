import { Locale as PayloadLocale } from "payload"

export type LocaleCode = string
export type Locale = Omit<PayloadLocale, "code"> & {
  /**
   * value of supported locale
   * @example "en"
   */
  code: LocaleCode
}

export type Dictionary = Record<LocaleCode, string | { [key: string]: string }>
