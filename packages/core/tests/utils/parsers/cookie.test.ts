import { getCookieValue } from "../../../src/utils/parsers/cookie"
import { test, describe, expect } from 'vitest'

describe("cookie operations", () => {
  const cookie = "name=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"

  test("should get the value of a cookie", () => {
    expect(getCookieValue("name", cookie)).toBe("John Doe")
    expect(getCookieValue("expires", cookie)).toBe("Thu, 18 Dec 2013 12:00:00 UTC")
    expect(getCookieValue("path", cookie)).toBe("/")
  })
})
