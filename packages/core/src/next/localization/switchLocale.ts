//"use server"
//import { LocaleCode } from "../../cms/localization/types"
//import { cookies as nextCookies } from "next/headers"
//
//export async function switchLocaleServerAction(
//  lang: LocaleCode,
//  cookiePrefix: string
//): Promise<void> {
//  (await nextCookies()).set({
//    name: `${cookiePrefix}-lng`,
//    value: lang,
//  })
//}
