module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'modules/**/*.{js}',
      '!**/node_modules/**',
    ],
    roots: [
      'modules/',
    ],
  };