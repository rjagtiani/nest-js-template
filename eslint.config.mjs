// @ts-check

import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import jestPlugin from 'eslint-plugin-jest';
import importPlugin from 'eslint-plugin-import';

export default tslint.config(
    {
        ignores: ['**/build/**', '**/dist/**', 'tests/*', '*.mjs', "*.config.js"],
    },
    eslint.configs.recommended,
    {
        files: ["**/*.ts"],
        plugins: {
            '@typescript-eslint': tslint.plugin,
            jest: jestPlugin,
            import: importPlugin,
        },
        languageOptions: {
            parser: tslint.parser,
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            "@typescript-eslint/no-unused-vars": "error",
            "no-unused-vars": "off",
            'import/no-unresolved': 'error',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Built-in imports (come from NodeJS native) go first
                        'external', // <- External imports
                        'internal', // <- Absolute imports
                        ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled
                        'index', // <- index imports
                        'unknown', // <- unknown
                    ],
                    pathGroups: [
                        {
                            pattern: '**/new-relic/**', // Allow logger and tracer before than all
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: '**/configuration/**', // Allow logger and tracer before than all
                            group: 'internal',
                        },
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
                        order: 'asc',
                        /* ignore case. Options: [true, false] */
                        caseInsensitive: true,
                    },
                },
            ],
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts'],
            },
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },
    },
    {
        // disable type-aware linting on JS files
        files: ['**/*.js'],
        extends: [tslint.configs.disableTypeChecked],
    },
    {
        // enable jest rules on test files
        files: ['test/**'],
        extends: [jestPlugin.configs['flat/recommended']],
    },
);
