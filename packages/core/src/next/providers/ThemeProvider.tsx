"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import { Theme } from "../theme/types"
import { getCookieValue } from "../../utils/parsers/cookie"
import { setCookie } from "../browser/setCookie"
import { useConfig } from "./ConfigProvider"

export type ThemeContext = {
  autoMode: boolean
  setTheme: (theme: Theme) => void
  theme: Theme
}

const initialContext: ThemeContext = {
  autoMode: true,
  setTheme: () => null,
  theme: "light",
}

const Context = createContext(initialContext)

const getTheme = (
  cookieKey: string
): {
  theme: Theme
  themeFromCookies: null | string
} => {
  let theme: Theme

  const themeFromCookies = getCookieValue(cookieKey, window.document.cookie) as string | undefined

  if (themeFromCookies === "light" || themeFromCookies === "dark") {
    theme = themeFromCookies as Theme
  } else {
    theme =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
  }

  document.documentElement.setAttribute("data-theme", theme)

  return { theme, themeFromCookies: themeFromCookies || null }
}

export const defaultTheme: Theme = "light"

export const ThemeProvider: React.FC<{
  children?: React.ReactNode
  theme: Theme
  defaultTheme: Theme
}> = ({ children, theme: initialTheme }) => {
  const { config } = useConfig()

  const cookieKey = `${config.cookiePrefix || "payload"}-theme`

  const [theme, setThemeState] = useState<Theme>(initialTheme || defaultTheme)

  const [autoMode, setAutoMode] = useState<boolean>(false)

  useEffect(() => {
    const { theme, themeFromCookies } = getTheme(cookieKey)
    setThemeState(theme)
    setAutoMode(!themeFromCookies)
  }, [cookieKey])

  const setTheme = useCallback(
    (themeToSet: "auto" | Theme) => {
      if (themeToSet === "light" || themeToSet === "dark") {
        setThemeState(themeToSet)
        setAutoMode(false)
        setCookie(cookieKey, themeToSet, 365)
        document.documentElement.setAttribute("data-theme", themeToSet)
      } else if (themeToSet === "auto") {
        // to delete the cookie, we set an expired date
        setCookie(cookieKey, themeToSet, -1)
        const themeFromOS =
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        document.documentElement.setAttribute("data-theme", themeFromOS)
        setAutoMode(true)
        setThemeState(themeFromOS)
      }
    },
    [cookieKey]
  )

  return <Context.Provider value={{ autoMode, setTheme, theme }}>{children}</Context.Provider>
}

export const useTheme = (): ThemeContext => useContext(Context)
