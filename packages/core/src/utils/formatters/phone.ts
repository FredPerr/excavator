/** Format north american phone numbers
 *
 * @param {string} phone - The phone number to format
 * @returns {string} The formatted phone number
 * @example formatNorthAmerica("1234567890") // => "(123) 456-7890"
 * @example formatNorthAmerica("1234567") // => "123-4567"
 * @example formatNorthAmerica("123") // => "123"
 * @example formatNorthAmerica("123456789012345") // => "(123) 456-7890"
 */
export function formatNorthAmerica(phone: string): string {
  const cleanedNumber = phone.replace(/\D/g, "").replace(/^0+/, "")
  const numberLength = cleanedNumber.length

  const hasAreaCode = numberLength > 0
  const hasCentral = numberLength >= 4
  const hasSubscriber = numberLength >= 7

  const areaCode = cleanedNumber.substring(0, 3)

  const areaCodePart = hasAreaCode ? `(${areaCode}` : ""
  const central = hasCentral ? `) ${cleanedNumber.substring(3, 6)}` : ""
  const subscriber = hasSubscriber ? `-${cleanedNumber.substring(6, 10)}` : ""

  return `${areaCodePart}${central}${subscriber}`
}
