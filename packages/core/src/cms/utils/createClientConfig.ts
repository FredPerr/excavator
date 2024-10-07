import { SanitizedConfig, SanitizedLocalizationConfig } from "payload"

type ClientLocalizationConfig =
  | false
  | Pick<SanitizedLocalizationConfig, "locales" | "defaultLocale" | "localeCodes">

export type ClientConfig = Pick<SanitizedConfig, "localization" | "cookiePrefix">

/** Create the configuration object used on client-side.
 * @param {SanitizedConfig} serverConfig The server configuration object (@payload-config).
 */
export const createClientConfig = (serverConfig: SanitizedConfig): ClientConfig => {
  const localization: ClientLocalizationConfig = serverConfig.localization
    ? {
        locales: serverConfig.localization.locales.map(locale => {
          return {
            code: locale.code,
            label: locale.label,
            rtl: locale.rtl,
            fallbackLocale: locale.fallbackLocale,
          }
        }),
        defaultLocale: serverConfig.localization.defaultLocale,
        localeCodes: serverConfig.localization.localeCodes,
      }
    : false

  return {
    localization,
    cookiePrefix: serverConfig.cookiePrefix,
  }
}
