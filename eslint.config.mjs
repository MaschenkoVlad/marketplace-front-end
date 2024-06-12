import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];
