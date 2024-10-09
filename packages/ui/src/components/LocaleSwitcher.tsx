//"use client"
//import { useLocale, useConfig } from "@fredperr/excavator/next"
//import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "../primitives/select"
//
//export function LocaleSwitcher() {
//  const {
//    config: { localization },
//  } = useConfig()
//
//  const { locale, switchLocale } = useLocale()
//
//  if (!locale) {
//    console.error("LocaleSwitcher: locale is not defined")
//    return
//  }
//
//  if (!localization) {
//    console.error("LocaleSwitcher: localization is not defined")
//    return
//  }
//
//  return (
//    <Select defaultValue={locale.code}>
//      <SelectTrigger className="w-fit gap-2">
//        <SelectValue placeholder={locale.code.toUpperCase()} />
//      </SelectTrigger>
//      <SelectContent>
//        {localization.locales.map(l => (
//          <SelectItem
//            className="flex"
//            key={l.code}
//            value={l.code}
//            onClick={async () => {
//              await switchLocale(l.code)
//            }}
//          >
//            {typeof l.label === "string"
//              ? l.label.toUpperCase()
//              : l.label[locale.code]?.toUpperCase()}
//          </SelectItem>
//        ))}
//      </SelectContent>
//    </Select>
//  )
//}
