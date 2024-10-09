import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PhoneInput } from "../dist/components/PhoneInput"
import '@testing-library/jest-dom'


test("loads and displays greeting", async () => {
  render(<PhoneInput data-testid="test" />)

  const input = screen.getByTestId("test")
  await userEvent.click(input)
  await userEvent.type(input, "1234567890")

  expect(input).toHaveValue("(123) 456-7890")

  await userEvent.keyboard("{backspace}")
  expect(input).toHaveValue("(123) 456-789")
  for (let i = 0; i < 6; i++) {
    await userEvent.keyboard("{backspace}")
  }
  expect(input).toHaveValue("(123")
})
