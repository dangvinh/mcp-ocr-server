/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'cjs', 'mjs', 'json'],
  roots: ['<rootDir>/tests'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'json'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 75,
      lines: 80,
      statements: 80,
    },
    "./src/cpp/": {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85,
    },
    "./src/api/": {
      branches: 75,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    "./src/utils/": {
      branches: 60,
      functions: 65,
      lines: 70,
      statements: 70,
    },
  },
  testMatch: ['**/?(*.)+(test|spec).ts', '**/?(*.)+(test|spec).tsx'],
};

module.exports = config;
