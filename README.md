# Excavator

Prepare the terrain for the real website more quickly with this PayloadCMS plugin.

## What is Excavator?

A **PayloadCMS 3.0** plugin providing faster-to-use CMS recurring code utilities and NextJS utilities.

PayloadCMS gives the developer basically complete control over what he want to do.
But, sometimes, we need to do the same thing over and over again.

## Getting started

### Installation

```bash
pnpm install @fredperr/excavator
```

If you want the UI extensions too (based on ShadCN):

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
import type { Config } from "tailwindcss";
import sharedConfig from "@fredperr/excavator-config-tailwind";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
```

## What it does?

Excavator can be divised between three main parts:

1. **CMS utilities**: utilities to make the CMS development faster.
   - **CMS collections**: configurable common collections.
   - **CMS fields**: configurable common fields (e.g. phone number, email, country).
   - **CMS components**: components that can be used in the CMS (e.g. redirection to website, custom buttons).
   - **CMS hooks**: common recurring hooks.
   - **CMS utils**: utilities that are specific to PayloadCMS.
   - **CMS validations & formats**: common validations & formats for fields and documents.
   - **CMS permissions**: role based permission system.
   - **CMS blocks**: recurring blocks in the payload environment.
   - **CMS content creation**: utilities to create content in the CMS and serve it (content builder).
   - **Send email when CMS error or event**: send email when an error or event occurs in the CMS.

2. **NextJS utilities**: utilities to make the NextJS development faster.

   - **NextJS components**: components that can be used in the NextJS (often based on shadcn + tailwind).
   - **NextJS hooks**: hooks that can be used in the NextJS.
   - **NextJS utils**: utilities that can be used in the NextJS.
   - **NextJS validations**: validations that can be used in the NextJS (such as for forms).
   - **NextJS localization**: locale utilities for simple localization.

3. **Utilities**: utilities that can be used in both CMS and NextJS.
   - **Common utils**: JS & TS utilities (e.g. string transformations, algorithms)
   - **Common validations & formats**: validations and formats that can be used in both CMS and NextJS.

> some of the parts overlap such as validation and formating.

## How to use it?

1. Install the plugin in your PayloadCMS project:

```bash
pnpm install @fredperr/excavator
```

2. Import the plugin in your PayloadCMS config (`payload.config.ts`):

```typescript
import { ExcavatorPlugin } from "@fredperr/excavator/cms"
import { buildConfig } from "payload"

// ...

export default buildConfig({
  // Make sure to configure the editor if using lexical in the utilities (e.g. the content builder).
  editor: lexicalEditor({
    features({ defaultFeatures }) {
      return [
        ...defaultFeatures,
        /*
        BlocksFeature({
          blocks: [...],
        }),
        */
      ]
    },
  }),

  // Configure your localization if using the localization utilities.
  localization: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },

  plugins: [
    // ...
    Excavator({
      // Configure the plugin here (see the documentation).
    }),
    // other plugins here.
  ],
})
```

### Package structure

The package is divided into three main parts:

- `@fredperr/excavator/cms`: utilities for the CMS.
- `@fredperr/excavator/next`: utilities for NextJS.
- `@fredperr/excavator/utils`: utilities that can be used in both CMS and NextJS.

Since PayloadCMS depends on NextJS, the structure of this plugin follows this cascade structure:

```plaintext
@fredperr/excavator/cms
|
|- depends on -> @fredperr/excavator/next
                 |
                 |-> depends on -> @fredperr/excavator/utils
```

Most utilities that can be used in both NextJS and Payload will be found inside the `utils` package.
But if a utility can't be used on its own as a JS or TS utility because it relies on NextJS, it will be found in the `next` package.
If the utility depends on PayloadCMS, it will be found in the `cms` package.

### Documentation

The documentation is available in the [docs](./docs) folder.
An example project using most, if not all, functionalities is available in the [example](./example) folder.
This project act as the testing ground for the plugin.

### PayloadCMS version

> The plugin is made for PayloadCMS 3. The plugin won't work with PayloadCMS 2.
> PayloadCMS 3 is still in beta but should not have any breaking changes (after version 3.0.0-beta.79) according to the Payload Team.
> So make sure to use a version above that one.
