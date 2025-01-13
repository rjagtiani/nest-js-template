const {pathsToModuleNameMapper} = require('ts-jest');

const {compilerOptions} = require('./tsconfig.json');

module.exports = {
  verbose: true,
  roots: ["<rootDir>/tests"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  coverageDirectory: "coverage",
  coverageReporters: ["json", "text-summary", "html", "lcov"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**/*.ts",
    "!**/*.module.ts",
  ],
  testMatch: ["**/e2e/**/**.test.ts", "**/unit/**/**.test.ts"],
  preset: "ts-jest",
};
