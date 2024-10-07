"use client"

import type { Locale } from "payload"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useConfig } from "./ConfigProvider"
import { useAuth } from "./AuthProvider"
import { useSearchParams } from "next/navigation"
import { LocaleCode } from "../../cms/localization/types"
import { findLocaleFromCode } from "../localization"

type LocaleContextType = {
  locale: Locale | null
  switchLocale: (locale: LocaleCode) => Promise<void>
}

const LocaleContext = createContext<LocaleContextType>({
  locale: null,
  switchLocale: async () => {},
})

export const LocaleProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const {
    config: { localization },
  } = useConfig()

  if (!localization)
    throw new Error(
      "Localization is not enabled in the PayloadCMS config, but LocaleProvider is being used."
    )

  const { user } = useAuth()
  const defaultLocale =
    localization && localization.defaultLocale ? localization.defaultLocale : "en"

  const searchParams = useSearchParams()
  const localeFromParams = searchParams.get("lng")
  const localeCodeFromParams: LocaleCode | null =
    (localeFromParams &&
      localization.localeCodes.find(code => code === localeFromParams.toLowerCase().trim())) ||
    null

  const [localeCode, setLocaleCode] = useState<LocaleCode>(
    (localeCodeFromParams as string) || defaultLocale
  )

  const locale = useMemo(
    () => findLocaleFromCode(localeCode, localization),
    [localeCode, localization]
  )

  const switchLocale = React.useCallback(
    async (newLocale: LocaleCode) => {
      if (!localization) return

      const localeToSet =
        localization.localeCodes.indexOf(newLocale) > -1 ? newLocale : defaultLocale

      if (localeToSet !== localeCode) {
        setLocaleCode(localeToSet)
      }
    },
    [localization, user, defaultLocale, localeCode]
  )

  useEffect(() => {
    async function setInitialLocale() {
      let localeToSet = defaultLocale

      if (typeof localeFromParams === "string") {
        localeToSet = localeFromParams
      }
      await switchLocale(localeToSet)
    }

    void setInitialLocale()
  }, [defaultLocale, localization, localeFromParams, user, switchLocale])

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>{children}</LocaleContext.Provider>
  )
}

/**
 * A hook that returns the current locale object.
 */
export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext)

  if (!context.locale) throw new Error("useLocale must be used within a LocaleProvider")

  return context
}
