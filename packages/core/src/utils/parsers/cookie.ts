"use client"

/**
 * Get the value of a cookie.
 * @param cookiePart The name of the cookie
 * @param cookieStr The string containing all cookies
 * @returns The value of the cookie
 */
export function getCookieValue(cookiePart: string, cookieStr: string): string | undefined {
  return cookieStr
    .split("; ")
    .find(row => row.startsWith(`${cookiePart}=`))
    ?.split("=")[1]
}
