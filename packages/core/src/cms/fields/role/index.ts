import { deepMerge, FieldAccess, Option, SelectField, TypeWithID, User, Validate } from "payload"
import { hasPermissionLevel, ROLES } from "../../permissions/roles"
import { Role } from "../../permissions"

type Overrides = Partial<
  Omit<SelectField, "type" | "localized" | "role" | "required" | "options" | "validate">
>

type TDataWithRole = TypeWithID & { role: string } // The role field is a string, but represents a number.

type RoleFieldAccess<TData extends TDataWithRole> = FieldAccess<TData, TData>

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export function getUserRole({ req: { user } }: { req: { user?: User | null } }): number | null {
  if (!user) return null

  if (!user["role"]) return null

  const roleStr = user["role"]
  const roleNum = parseInt(roleStr, 10)

  if (isNaN(roleNum)) return null

  return roleNum
}

function readAccess<TData extends TDataWithRole>(): RoleFieldAccess<TData> {
  return ({ req: { user } }) => {
    const roleNum = getUserRole({ req: { user } })
    if (roleNum === null) {
      console.warn("User has no role field or the role field is not a number.")
      return false
    }
    return hasPermissionLevel(roleNum, 10)
  }
}

function writeAccess<TData extends TDataWithRole>(): RoleFieldAccess<TData> {
  return ({ req: { user } }) => {
    const roleNum = getUserRole({ req: { user } })
    if (roleNum === null) {
      console.warn("User has no role field or the role field is not a number.")
      return false
    }

    if (roleNum > 50) return false

    return true
  }
}

const validate: Validate<string, any, any, SelectField> = async value => {
  if (!value) return "Role is required"

  const newRole = parseInt(value, 10)

  if (!newRole) return "The provided role is invalid."

  return true
}

export function roleField<TData extends TDataWithRole>(overrides: Overrides = {}): SelectField {
  const options: Option[] = ROLES.map(role => ({
    label: role.label,
    value: `${role.level}`,
  }))

  return deepMerge<SelectField, Overrides>(
    {
      type: "select",
      name: "role",
      label: {
        en: "Role",
        fr: "Rôle",
      },
      access: {
        read: readAccess<TData>(),
        update: writeAccess<TData>(),
      },
      options,
      required: true,
      defaultValue: "100",
      validate,
      admin: {
        position: "sidebar",
      },

      hooks: {
        beforeValidate: [
          async ({ req, data, value }) => {
            const referer = req.headers.get("referer")
            const origin = req.headers.get("origin")
            if (SERVER_URL && origin && referer) {
              const originUrl = new URL(origin)
              const refererUrl = new URL(referer)
              const serverURL = new URL(SERVER_URL)

              if (originUrl.origin !== serverURL.origin && refererUrl.origin !== serverURL.origin)
                return value

              if (refererUrl.pathname == "/admin/create-first-user") {
                let role: Role | undefined = undefined
                for (const r of ROLES) {
                  if (!role || r.level < role.level) {
                    role = r
                  }
                }
                if (!role)
                  throw new Error(
                    "The lowest role is not defined. Please define roles for the plugin."
                  )
                return role.level.toString()
              }
            }

            const userRole = getUserRole({ req })
            if (!userRole)
              throw new Error("User has no role field or the role field is not a number.")
            if (value < userRole) throw new Error("User cannot set a role lower than their own.")

            if (!data)
              throw new Error(
                "Data is not defined in the role beforeValidation hook for the role field."
              )

            return value
          },
        ],
      },
    },
    overrides
  )
}
