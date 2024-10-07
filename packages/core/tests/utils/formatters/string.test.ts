import {
  capitalize,
  capitalizeAll,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
} from "../../../src/utils/formatters/string"
import { expect, test, describe } from 'vitest'

describe("string operations", () => {
  test("should capitalize the string (first letter)", () => {
    expect(capitalize("hello")).toBe("Hello")
    expect(capitalize("h")).toBe("H")
    expect(capitalize("")).toBe("")
  })

  test("should capitalize all words in a string", () => {
    expect(capitalizeAll("hello world")).toBe("Hello World")
    expect(capitalizeAll("h")).toBe("H")
    expect(capitalizeAll("")).toBe("")
    expect(capitalizeAll("  ")).toBe("  ")
  })

  test("should be converted to camel case", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld")
    expect(toCamelCase("hello-world-again")).toBe("helloWorldAgain")
    expect(toCamelCase("hello")).toBe("hello")
    expect(toCamelCase("helloWorld")).toBe("helloWorld")
    expect(toCamelCase("hello-world again")).toBe("helloWorldAgain")
  })

  test("should convert to pascal case", () => {
    expect(toPascalCase("hello-world")).toBe("HelloWorld")
    expect(toPascalCase("hello-world-again")).toBe("HelloWorldAgain")
    expect(toPascalCase("hello")).toBe("Hello")
    expect(toPascalCase("helloWorld")).toBe("HelloWorld")
    expect(toPascalCase("hello-world again")).toBe("HelloWorldAgain")
  })

  test("should convert to snake case", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world")
    expect(toSnakeCase("helloWorldAgain")).toBe("hello_world_again")
    expect(toSnakeCase("hello")).toBe("hello")
    expect(toSnakeCase("hello-world")).toBe("hello_world")
    expect(toSnakeCase("hello-world again")).toBe("hello_world_again")
  })

  test("should convert to kebab case", () => {
    expect(toKebabCase("helloWorld")).toBe("hello-world")
    expect(toKebabCase("helloWorldAgain")).toBe("hello-world-again")
    expect(toKebabCase("hello")).toBe("hello")
    expect(toKebabCase("hello-world")).toBe("hello-world")
    expect(toKebabCase("hello_world again")).toBe("hello-world-again")
  })
})
