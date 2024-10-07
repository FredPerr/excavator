import type { Config } from "tailwindcss";
import sharedConfig from "@fredperr/excavator-config-tailwind";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
