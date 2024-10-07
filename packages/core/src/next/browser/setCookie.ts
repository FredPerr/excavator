"use client"

/** Set a cookie on the client side.
 *
 * @param cname The name of the cookie
 * @param cvalue The value of the cookie
 * @param exdays The number of days until the cookie expires
 *
 * Will this function erase other previously set cookies?
 */
export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}
