"use server"
import { LocaleCode } from "../../cms/localization/types"
import { cookies as nextCookies } from "next/headers"

export async function switchLocaleServerAction(
  lang: LocaleCode,
  cookiePrefix: string
): Promise<void> {
  "use server"
  nextCookies().set({
    name: `${cookiePrefix}-lng`,
    value: lang,
    path: "/",
  })
}
