
    
    module.exports = {
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      globals: {
        suite: true,
        test: true,
        describe: true,
        it: true,
        expect: true,
        assert: true,
        vitest: true,
        vi: true,
        beforeAll: true,
        afterAll: true,
        beforeEach: true,
        afterEach: true,
      },
      extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "plugin:tailwindcss/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsonc/recommended-with-jsonc",
      ],
      plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "tailwindcss",
        "no-relative-import-paths",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      rules: {
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "react/no-unknown-property": ["error", { ignore: ["css", "tw"] }],
        "react/jsx-curly-brace-presence": [
          "error",
          {
            props: "never",
            children: "never",
            propElementValues: "always",
          },
        ],
        quotes: ["error", "double", { avoidEscape: true }],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { ignoreRestSiblings: true, argsIgnorePattern: "_+" },
        ],
        "no-console": "error",
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              ["index", "sibling", "parent", "object"],
            ],
            pathGroups: [
              {
                pattern: "@/**",
                group: "internal",
              },
              {
                pattern: "shared/assets/**",
                group: "internal",
              },
              {
                pattern: "generated/**",
                group: "internal",
              },
            ],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
        "sort-imports": ["error", { ignoreDeclarationSort: true }],
      },
      settings: {
        "import/resolver": {
          typescript: {},
        },
        "import/resolvers": {
          node: {
            extensions: [".ts", ".tsx"],
          },
        },
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        react: {
          version: "detect",
        },
      },
      overrides: [
        {
          files: ["**/*.tsx"],
          rules: {
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "react/no-unescaped-entities": "off",
          },
        },
        {
          files: ["**/*.js"],
          rules: {
            "import/order": "off",
          },
        },
        {
          files: ["**/*.spec.ts{,x}"],
          rules: {
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
          },
        },
        {
          files: ["src/esg.x/**/*", "src/esg.id/**/*"],
          rules: {
            "no-relative-import-paths/no-relative-import-paths": [
              "error",
              { rootDir: "src", prefix: "@" },
            ],
          },
        },
        {
          files: ["**/index.ts{,x}"],
          rules: {
            "no-restricted-syntax": [
              "error",
              {
                selector: "VariableDeclaration, FunctionDeclaration",
                message:
                  "Only import and export statements are allowed in index.ts files.",
              },
            ],
          },
        },
        {
          files: ["src/oneesg/routes/**/index.ts{,x}"],
          rules: {
            "no-restricted-syntax": ["off"],
          },
        },
        {
          files: ["*.json", "*.json5"],
          parser: "jsonc-eslint-parser",
        },
        {
          files: ["*openapi*.json"],
          rules: {
            "jsonc/sort-keys": [
              "error",
              {
                pathPattern: "^$",
                order: ["openapi", "info", "servers", "paths", "components"],
              },
              {
                pathPattern: "",
                order: { type: "asc" },
              },
            ],
          },
        },
      ],
      ignorePatterns: ["!.storybook", "src/oneesg/routeTree.gen.ts"],
    };
    
