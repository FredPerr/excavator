/**
 * Validate a north american phone number
 * A north american phone number is a phone number that starts with a +1 country code or not, followed by a 10 digit number
 * @param {string} phone - The phone number to validate
 * @returns {boolean} Whether the phone number is valid
 */
export function validateNortAmericanPhone(phone: string): boolean {
  const cleanedNumber = phone.replace(/\D/g, "").replace(/^0+/, "")
  const numberLength = cleanedNumber.length

  if (phone.startsWith("+")) {
    return numberLength === 11
  }

  return numberLength === 10
}
