module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.base.setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '/src/main.ts',
    '/src/polyfills.ts',
    '/models/',
    '/environments/',
    '/*.module.ts',
    '/index.ts'
  ],
  testMatch: ['<rootDir>/src/**/*.spec.ts']
};
