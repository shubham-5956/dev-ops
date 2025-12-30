import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  // Base JavaScript rules
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react
    },
    languageOptions: {
      parser: babelParser, // OBJECT, not string
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
        babelOptions: {
          presets: ["@babel/preset-react"]
        }
      },
      globals: globals.browser
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // React 17+ JSX transform
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error"
    }
  }
];
