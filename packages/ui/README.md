# Excavator UI (extension of Excavator)

## Getting started

### Installation

```bash
pnpm install @fredperr/excavator-ui
```

If you use the UI extensions, you will need to configure `tailwindcss` and `postcss`:


**In your `postcss.config.js`:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**In your `tailwind.config.js`:**
```typescript
import path from "path";
import type { Config } from "tailwindcss";
import sharedConfig from "@fredperr/excavator-config-tailwind";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.tsx",
    path.join(path.dirname(require.resolve("@fredperr/excavator-ui")), "./**/*.{js,mjs,mdx,tsx,ts}"),
  ],
  presets: [sharedConfig],
  plugin: [require('@fredperr/excavator-config-tailwind/tailwind-config')],
};

export default config;
```
