module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'assets/js/script.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};
