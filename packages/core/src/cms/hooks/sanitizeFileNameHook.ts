import { slugify } from "../../utils/formatters"
import { HookOperationType, PayloadRequest, RequestContext, SanitizedCollectionConfig } from "payload";

type BeforeOperationHookInternal = (args: {
    args?: any;
    /** The collection which this hook is being run on */
    collection: SanitizedCollectionConfig;
    context: RequestContext;
    /**
     * Hook operation being performed
     */
    operation: HookOperationType;
    req: PayloadRequest;
}) => any;

const sanitizeFilenameHook: BeforeOperationHookInternal = ({ req }) => {
  if (req.file?.name) {
    const newName = slugify(req.file.name)
    req.file.name = newName
  }
}

export default sanitizeFilenameHook
