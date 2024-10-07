import sharedConfig from "@fredperr/excavator-config-tailwind/tailwind-config";
import path from "path";
import type { Config } from 'tailwindcss'

const config = {
  content: [
    "./src/**/*.tsx",
    path.join(path.dirname(require.resolve("@fredperr/excavator-ui")), "./**/*.{js,mjs,mdx,tsx,ts}"),
  ],
  presets: [sharedConfig],
  plugins: [require('@fredperr/excavator-config-tailwind/tailwind-config')],
} satisfies Config;

export default config;
