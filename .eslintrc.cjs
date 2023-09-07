module.exports = {
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
    extraFileExtensions: [".scss"]
  },
  plugins: ["react-refresh", "import"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-explicit-any": ["off"],
    "import/order": [
      "error",
      {
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
        groups: ["internal", "builtin", "external", ["parent", "sibling"], "object", "index", "type"],
        pathGroups: [
          {
            pattern: "@shared/**",
            group: "parent",
            position: "before"
          },
          {
            pattern: "@config/**",
            group: "parent",
            position: "before"
          }
        ]
      }
    ],
    // Disable `react/jsx-uses-react` since it's no longer necessary: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {}
    }
  }
};
