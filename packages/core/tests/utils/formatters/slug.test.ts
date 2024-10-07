import { slugify } from "../../../src/utils/formatters/slug"
import { expect, test } from 'vitest'

test("should slugify a string", () => {
  const str = "áéíóúàèìòùâêîôûäëïöüãẽĩõũāēīōūăĕĭŏŭåçñßÿÆæŒœÅÇÑØøÝŸĲĳŁłŃńŇňŌōŐőˠ"
  expect(slugify(str)).toBe("aeiouaeiouaeiouaeiouaoaeiouaacnsyaaooacnooyyllnnnnoooo")
  expect(slugify("hello world")).toBe("hello-world")
  expect(slugify("hello-World")).toBe("hello-world")
  expect(slugify("hello--world")).toBe("hello-world")
})
