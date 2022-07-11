/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/test.{ts,tsx,js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
  transform: {
      "\\.[jt]sx?$": "babel-jest",
      "\\.[jt]s?$": "babel-jest",
  },
};
