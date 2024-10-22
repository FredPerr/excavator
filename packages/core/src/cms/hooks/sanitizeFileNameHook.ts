import { slugify } from "../../utils/formatters"
import { HookOperationType, PayloadRequest, RequestContext, SanitizedCollectionConfig } from "payload";
import { parseFilename } from "../../utils/parsers";

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
    const { fileName, extension } = parseFilename(req.file.name)
    const newName = slugify(fileName)
    req.file.name = newName + (extension ? `.${extension.toLowerCase()}` : '')
  }
}

export default sanitizeFilenameHook
