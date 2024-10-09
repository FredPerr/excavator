import { getRelativeUrl, getAbsoluteUrl } from "../../../src/utils/parsers/url"
import { expect, test } from 'vitest'

test("gets relative url from absolute url", () => {
  const url = getRelativeUrl("https://example.com/path/to/file?search=1#hash")
  expect(url).toBe("/path/to/file?search=1#hash")
})

test("gets relative url from absolute url without search", () => {
  const url = getRelativeUrl("https://example.com/path/to/file?search=1#hash", false)
  expect(url).toBe("/path/to/file#hash")
})

test("gets relative url from absolute url without hash", () => {
  const url = getRelativeUrl("https://example.com/path/to/file?search=1#hash", true, false)
  expect(url).toBe("/path/to/file?search=1")
})

test("gets relative url from absolute url without search and hash", () => {
  const url = getRelativeUrl("https://example.com/path/to/file?search=1#hash", false, false)
  expect(url).toBe("/path/to/file")
})

test("gets relative url from invalid url", () => {
  const url = getRelativeUrl("invalid_url")
  expect(url).toBe("invalid_url")
})

test("throws error if NEXT_PUBLIC_SERVER_URL is not set", () => {
  // @ts-ignore
  const strNull = null as string
  expect(() => getAbsoluteUrl("/path/to/file?search=1#hash", strNull)).toThrow()
})
