import { validateNortAmericanPhone as validatePhone } from "../../../src/utils/validators/phone"
import { test, describe, expect } from 'vitest'

describe("phone validation", () => {
  test("should validate phone", () => {
    expect(validatePhone("+1 1234567890")).toBe(true)
    expect(validatePhone("(416) 123-4567")).toBe(true)
    expect(validatePhone("+11234567890")).toBe(true)
    expect(validatePhone("+1234567890")).toBe(true)
    expect(validatePhone("2 234 567 8901")).toBe(false)
    expect(validatePhone("223 456 7890")).toBe(true)
    expect(validatePhone("1234567890")).toBe(true)
    expect(validatePhone("0000000000")).toBe(true)
  })
})
