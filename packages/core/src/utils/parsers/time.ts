/**
 * Convert milliseconds to time
 * @param {number} duration - The duration in milliseconds
 * @returns An object with the days, hours, minutes, and seconds.
 * @example
 * const time = msToTime(2000)
 * console.log(time) // { days: 0, hours: 0, minutes: 0, seconds: 2 }
 */
export function msToTime(duration: number) {
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  const days = Math.floor(duration / (1000 * 60 * 60 * 24))

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
