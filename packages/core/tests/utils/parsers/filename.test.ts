import { parseFilename } from "../../../src/utils/parsers/filename"
import { test, expect } from 'vitest'

test("separates extension from filename with single dot", () => {
  const fileName = "image.jpg"
  const result = parseFilename(fileName)
  expect(result).toEqual({ extension: "jpg", fileName: "image" })
})

test("separates extension from filename with multiple dots", () => {
  const fileName = "long.file.name.with.extension.txt"
  const result = parseFilename(fileName)
  expect(result).toEqual({ extension: "txt", fileName: "long.file.name.with.extension" })
})

test("handles filename without extension", () => {
  const fileName = "no_extension"
  const result = parseFilename(fileName)
  expect(result).toEqual({ extension: undefined, fileName })
})

test("handles empty filename", () => {
  const fileName = ""
  const result = parseFilename(fileName)
  expect(result).toEqual({ extension: undefined, fileName })
})

test("handles filename with leading dot", () => {
  const fileName = ".hidden_file"
  const result = parseFilename(fileName)
  expect(result).toEqual({ extension: undefined, fileName: ".hidden_file" })
})

test("handles filename with trailing dot", () => {
  const fileName = "trailing_dot."
  const result = parseFilename(fileName)
  expect(result).toEqual({ extension: undefined, fileName: "trailing_dot" })
})
