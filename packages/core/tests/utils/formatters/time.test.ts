import { msToTime } from "../../../src/utils/parsers/time"
import { expect, test } from 'vitest'

test("converts milliseconds to time", () => {
  const time = msToTime(2000)
  expect(time).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 2 })
})

test("converts milliseconds to time with days", () => {
  const time = msToTime(172800000)
  expect(time).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 })
})

test("converts milliseconds to time with hours", () => {
  const time = msToTime(7200000)
  expect(time).toEqual({ days: 0, hours: 2, minutes: 0, seconds: 0 })
})
