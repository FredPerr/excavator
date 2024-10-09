export type Role = {
  /** The lower the number, the higher the permission level. 0 is the highest permission level. */
  level: number
  /** The label of the role in different languages. */
  label: {
    fr: string
    en: string
  }
}

export * from "./roles"
