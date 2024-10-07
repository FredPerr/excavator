/**
 * Capitalize the first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Capitalize the first letter of all words in a string
 */
export function capitalizeAll(str: string): string {
  return str.split(" ").map(capitalize).join(" ")
}

/**
 * Convert a string (with or without dashes and spaces) to camel case.
 */
export function toCamelCase(str: string): string {
  return str.replace(/[- ]([a-z])/g, (_, letter) => letter.toUpperCase())
}

/**
 * Convert a string (with or without dashes and spaces) to pascal case.
 */
export function toPascalCase(str: string): string {
  return capitalize(toCamelCase(str))
}

/**
 * Convert a string (with or without dashes and spaces) to snake case.
 * Any capital letters will be converted to lowercase and an underscore will be added before it.
 * Any dash will be converted to an underscore.
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/[- ]/g, "_")
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
}

/**
 * Convert a string to kebab case.
 * Any capital letters will be converted to lowercase and a dash will be added before it.
 * Any underscore will be converted to a dash.
 * @param str The string to convert to kebab case.
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/[_ ]/g, "-")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
}
