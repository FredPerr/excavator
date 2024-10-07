import { type Config, type Plugin as PayloadPlugin } from "payload"
import { ExcavatorOptions } from "./config"
import { initRoles } from "./cms/permissions/roles"

type ExcavatorPluginType = (options: Partial<ExcavatorOptions>) => PayloadPlugin

const ExcavatorPlugin: ExcavatorPluginType =
  (
    opts = {
      allowFirstUserCreation: false,
    }
  ) =>
  (config): Config => {
    initRoles(opts.additionalRoles)
    return config
  }

export default ExcavatorPlugin
