/**
 * Validate an email address
 * @param value
 * @returns Whether the email address is valid
 */
export function validateEmail(value: string): boolean {
  return typeof value === "string" && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
}
