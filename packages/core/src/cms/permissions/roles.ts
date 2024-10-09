import { deepMerge, PayloadRequest } from "payload"
import { Role } from "."
import { getUserRole } from "../fields"

const defaultRoles: Role[] = [
  {
    label: {
      fr: "Administrateur",
      en: "Administrator",
    },
    level: 3,
  },
  {
    label: {
      fr: "Éditeur",
      en: "Editor",
    },
    level: 10,
  },
  {
    label: {
      fr: "Utilisateur",
      en: "User",
    },
    level: 100,
  },
  {
    label: {
      fr: "Anonyme",
      en: "Anonymous",
    },
    level: 1000,
  },
] as const

export let ROLES: Role[] = defaultRoles

export function initRoles(moreRoles?: Role[]) {
  if (!moreRoles) return
  ROLES = deepMerge(defaultRoles, moreRoles)
}

export function isRole(role: object): role is Role {
  if (typeof role !== "object") return false

  if (!Object.hasOwn(role, "label")) return false

  if (!Object.hasOwn(role, "level")) return false

  return true
}

export function hasPermission(roleLevel: number, ...allowedLevel: number[]): boolean {
  return allowedLevel.includes(roleLevel)
}

export function hasPermissionLevel(roleLevel: number, allowedLevel: number): boolean {
  return roleLevel <= allowedLevel
}

export function getRoleByLevel(level: number): Role | undefined {
  return ROLES.find(role => role.level === level)
}

export function hasPermisionForRequest(request: PayloadRequest, allowedLevel: number): boolean {
  const roleNum = getUserRole({ req: request })

  if (roleNum === null)
    return false

  return hasPermissionLevel(roleNum, allowedLevel)
}
