module.exports = [
  {
    name: 'Entire Library',
    path: 'dist/index.js',
    limit: '20 KB',
  },
  {
    name: 'Validation (all)',
    path: 'dist/validation.js',
    limit: '5 KB',
  },
  {
    name: 'Time utilities (all)',
    path: 'dist/time.js',
    limit: '5 KB',
  },
  {
    name: 'Calculations (all)',
    path: 'dist/calculations.js',
    limit: '5 KB',
  },
  {
    name: 'String utilities (all)',
    path: 'dist/strings.js',
    limit: '10 KB',
  },
  {
    name: 'Vietnamese sorting only',
    path: 'dist/strings.js',
    import: '{ compareVietnamese, sortVietnamese, sortVietnameseBy }',
    limit: '3 KB',
  },
  {
    name: 'Email validation only',
    path: 'dist/validation.js',
    import: '{ isValidEmail }',
    limit: '1 KB',
  },
  {
    name: 'Time formatting only',
    path: 'dist/time.js',
    import: '{ formatDate, formatTime }',
    limit: '1 KB',
  },
];
