/**
 * Parse a filename with its extension or not and return the filename and extension.
 *
 * @param fileName The filename to parse.
 * @returns An object with the filename and extension.
 */
export function parseFilename(fileName: string): {
  extension: string | undefined
  fileName: string
} {
  const lastDotIndex = fileName.lastIndexOf(".")

  if (lastDotIndex === -1 || lastDotIndex === 0) {
    return { fileName, extension: undefined }
  }

  const ext = fileName.slice(lastDotIndex + 1)
  const fileNameWithoutExtension = fileName.slice(0, lastDotIndex)

  return { fileName: fileNameWithoutExtension, extension: ext.length == 0 ? undefined : ext }
}
