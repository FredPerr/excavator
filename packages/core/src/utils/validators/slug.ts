/**
 * Validate a slug
 * @param slug The slug to validate
 * @returns Whether the slug is valid
 * @example validateSlug("hello-world") // => true
 * @example validateSlug("hello_world") // => true
 * @example validateSlug("hello world") // => false
 */
export function validateSlug(slug: string): boolean {
  return /^[a-z0-9-_]+$/.test(slug)
}
