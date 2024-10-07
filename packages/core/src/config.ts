import { Role } from "./cms/permissions"

type ExcavatorOptions = {
  /** Roles to add to the default roles object.
   *
   * When adding roles, you might want to redeclare
   * the type RoleTag and RoleLevel in a declaration file to override the default one.
   */
  additionalRoles: Role[]

  allowFirstUserCreation: boolean
}

export type { ExcavatorOptions }
