import { isObject } from "../../../src/utils/ts/isObject"
import { test, describe, expect } from 'vitest'

describe("isObject", () => {
  test("should return true if the input is an object", () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(false)
    expect(isObject("")).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
})
