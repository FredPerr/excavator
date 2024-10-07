import { validateEmail } from "../../../src/utils/validators/email"
import { test, describe, expect } from 'vitest'

describe("email validation", () => {
  test("should validate email", () => {
    expect(validateEmail("abc@gmail.com")).toBe(true)
    expect(validateEmail("abc@gmail")).toBe(false)
    expect(validateEmail("abc")).toBe(false)
    expect(validateEmail("abc@")).toBe(false)
    expect(validateEmail("abc@.com")).toBe(false)
    expect(validateEmail("abc@com")).toBe(false)
    expect(validateEmail("abc.com")).toBe(false)
    expect(validateEmail("abc@com.")).toBe(false)
    expect(validateEmail("abc@.com")).toBe(false)
    expect(validateEmail("abc@com.")).toBe(false)
  })
})
