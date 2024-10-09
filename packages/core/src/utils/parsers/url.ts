/**
 * Get the relative url from an absolute url
 * @param absoluteUrl The absolute url
 * @param keepSearch Whether to keep the search part of the url
 * @param keepHash Whether to keep the hash part of the url
 * @returns The relative url
 * @example
 * const url = getRelativeUrl("https://example.com/path/to/file?search=1#hash")
 * console.log(url) // "/path/to/file?search=1#hash"
 */
export function getRelativeUrl(
  absoluteUrl: string,
  keepSearch: boolean = true,
  keepHash = true
): string {
  try {
    const parsedUrl = new URL(absoluteUrl)
    return `${parsedUrl.pathname}${keepSearch ? parsedUrl.search : ""}${keepHash ? parsedUrl.hash : ""}`
  } catch {
    return absoluteUrl
  }
}

/**
 * Get the absolute url from a relative url
 * @param relativeUrl The relative url
 * @param publicServerURL The public server url
 * @returns The absolute url
 * @example
 * const url = getAbsoluteUrl("/path/to/file?search=1#hash")
 * console.log(url) // "https://example.com/path/to/file?search=1#hash"
 * @throws Error if NEXT_PUBLIC_SERVER_URL is not set
 */
export function getAbsoluteUrl(relativeUrl: string, publicServerURL: string): string {
  if (!publicServerURL) throw new Error("NEXT_PUBLIC_SERVER_URL is not set")

  return new URL(relativeUrl, publicServerURL).toString()
}
