import { validateSlug } from "../../../src/utils/validators/slug"
import { test, describe, expect } from 'vitest'

describe("slug validation", () => {
  test("validates a slug", () => {
    expect(validateSlug("hello-world")).toBe(true)
  })
  test("validates a slug with underscores", () => {
    expect(validateSlug("hello_world")).toBe(true)
  })
  test("invalidates a slug with spaces", () => {
    expect(validateSlug("hello world")).toBe(false)
  })
})
