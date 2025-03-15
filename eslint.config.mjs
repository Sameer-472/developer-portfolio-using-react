import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": ["error"],  // Error for unused variables
      // ...fixupConfigRules(pluginReactConfig), // Spread inside the `rules` object
    },
  }
];
