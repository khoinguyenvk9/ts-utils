# ts-utils

A collection of TypeScript utility functions for form validation, time formatting, calculations, and more.

## Installation

### From npm (when published)

```bash
npm install ts-utils
```

### From GitHub

You can install directly from GitHub without publishing to npm:

```bash
# Using GitHub shorthand
npm install khoinguyenvk9/ts-utils

# Using full GitHub URL
npm install github:khoinguyenvk9/ts-utils

# Using git URL
npm install git+https://github.com/khoinguyenvk9/ts-utils.git

# Install from a specific branch
npm install khoinguyenvk9/ts-utils#branch-name

# Install from a specific tag/release
npm install khoinguyenvk9/ts-utils#v1.0.0
```

## Features

- **Validation**: Email, URL, phone, password, credit card validation and more
- **Time Utilities**: Date formatting, relative time, duration formatting
- **Calculations**: Mathematical operations, statistics, conversions
- **String Utilities**: Case conversion, truncation, slugification, and more
- **Vietnamese Sorting**: Proper Vietnamese alphabet sorting that works on all platforms

## Bundle Size

The library is lightweight and tree-shakeable:

| Import | Size (minified + brotli) |
|--------|--------------------------|
| Entire library | 3.92 KB |
| Vietnamese sorting | 1.75 KB |
| Email validation | 764 B |
| Time formatting | 939 B |
| All validations | 574 B |
| All calculations | 681 B |

**Tree-shaking support:** Modern bundlers will only include the functions you import.

See [SIZE_REPORT.md](SIZE_REPORT.md) for detailed bundle size analysis.

## Usage

### Validation

```typescript
import { isValidEmail, isValidPassword, isValidPhone } from 'ts-utils';

isValidEmail('user@example.com'); // true
isValidPhone('+1-234-567-8900'); // true
isValidPassword('SecurePass123!', { minLength: 8 }); // true
```

### Time Formatting

```typescript
import { formatDate, getRelativeTime, addDays } from 'ts-utils';

formatDate(new Date(), 'long'); // "Friday, November 22, 2025"
getRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"
addDays(new Date(), 7); // Date 7 days from now
```

### Calculations

```typescript
import { average, roundTo, calculatePercentage, isPrime } from 'ts-utils';

average([1, 2, 3, 4, 5]); // 3
roundTo(3.14159, 2); // 3.14
calculatePercentage(25, 100); // 25
isPrime(17); // true
```

### String Utilities

```typescript
import { capitalize, toCamelCase, slugify, truncate } from 'ts-utils';

capitalize('hello world'); // "Hello world"
toCamelCase('hello world'); // "helloWorld"
slugify('Hello World!'); // "hello-world"
truncate('This is a long text', 10); // "This is..."
```

### Vietnamese Sorting

Proper Vietnamese alphabet sorting that works on all platforms (including Android where `localeCompare` may not work correctly):

```typescript
import { sortVietnamese, sortVietnameseBy, compareVietnamese } from 'ts-utils';

// Sort Vietnamese strings
const words = ['đàn', 'dân', 'ăn', 'ân', 'bàn'];
sortVietnamese(words); // ['ăn', 'ân', 'bàn', 'dân', 'đàn']

// Sort Vietnamese city names
const cities = ['Đà Nẵng', 'Hà Nội', 'Hải Phòng', 'Cần Thơ'];
sortVietnamese(cities); // ['Cần Thơ', 'Đà Nẵng', 'Hà Nội', 'Hải Phòng']

// Sort objects by Vietnamese property
const people = [
  { name: 'Đỗ Văn A', age: 30 },
  { name: 'Nguyễn Văn B', age: 25 },
  { name: 'Lê Thị C', age: 28 }
];
sortVietnameseBy(people, 'name');
// Result sorted by Vietnamese name order

// Custom comparison
compareVietnamese('đàn', 'dân'); // positive (đ comes after d)
compareVietnamese('ăn', 'ân'); // negative (ă comes before â)
```

**Features:**
- Correct Vietnamese alphabet order: a, ă, â, b, c, d, đ, e, ê, ...
- Proper tone mark ordering: no tone, acute (á), grave (à), hook (ả), tilde (ã), dot below (ạ)
- Case-sensitive sorting (lowercase before uppercase for same base character)
- Works reliably on Android and all platforms

## API Reference

### Validation Functions

- `isValidEmail(email: string): boolean`
- `isValidUrl(url: string): boolean`
- `isValidPhone(phone: string): boolean`
- `isValidPassword(password: string, options?): boolean`
- `isNotEmpty(value: string): boolean`
- `isInRange(value: number, min: number, max: number): boolean`
- `hasValidLength(value: string, minLength: number, maxLength?: number): boolean`
- `isAlphanumeric(value: string): boolean`
- `isValidCreditCard(cardNumber: string): boolean`
- `isValidZipCode(zipCode: string): boolean`

### Time Functions

- `formatDate(date: Date, format?: 'short' | 'medium' | 'long'): string`
- `formatTime(date: Date, use24Hour?: boolean): string`
- `formatDateTime(date: Date): string`
- `getRelativeTime(date: Date): string`
- `formatDuration(milliseconds: number): string`
- `addDays(date: Date, days: number): Date`
- `addHours(date: Date, hours: number): Date`
- `addMinutes(date: Date, minutes: number): Date`
- `isPast(date: Date): boolean`
- `isFuture(date: Date): boolean`
- `startOfDay(date: Date): Date`
- `endOfDay(date: Date): Date`
- `isSameDay(date1: Date, date2: Date): boolean`

### Calculation Functions

- `roundTo(value: number, decimals?: number): number`
- `calculatePercentage(value: number, total: number): number`
- `average(numbers: number[]): number`
- `sum(numbers: number[]): number`
- `min(numbers: number[]): number | null`
- `max(numbers: number[]): number | null`
- `median(numbers: number[]): number | null`
- `clamp(value: number, min: number, max: number): number`
- `degreesToRadians(degrees: number): number`
- `radiansToDegrees(radians: number): number`
- `distance(x1: number, y1: number, x2: number, y2: number): number`
- `randomInt(min: number, max: number): number`
- `randomFloat(min: number, max: number): number`
- `isEven(num: number): boolean`
- `isOdd(num: number): boolean`
- `factorial(n: number): number`
- `isPrime(num: number): boolean`
- `compoundInterest(principal: number, rate: number, time: number, frequency?: number): number`
- `mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number`

### String Functions

- `capitalize(str: string): string`
- `capitalizeWords(str: string): string`
- `toCamelCase(str: string): string`
- `toPascalCase(str: string): string`
- `toSnakeCase(str: string): string`
- `toKebabCase(str: string): string`
- `truncate(str: string, maxLength: number, ellipsis?: string): string`
- `removeWhitespace(str: string): string`
- `normalizeWhitespace(str: string): string`
- `wordCount(str: string): number`
- `reverse(str: string): string`
- `isPalindrome(str: string): boolean`
- `repeat(str: string, times: number): string`
- `padLeft(str: string, length: number, char?: string): string`
- `padRight(str: string, length: number, char?: string): string`
- `getInitials(name: string): string`
- `randomString(length: number, charset?: string): string`
- `slugify(str: string): string`
- `escapeHtml(str: string): string`
- `unescapeHtml(str: string): string`
- `isNumeric(str: string): boolean`
- `extractNumbers(str: string): number[]`
- `compareVietnamese(str1: string, str2: string): number` - Compare two strings using Vietnamese alphabet order
- `sortVietnamese(strings: string[]): string[]` - Sort an array of strings using Vietnamese alphabet order
- `sortVietnameseBy<T>(array: T[], key: keyof T): T[]` - Sort an array of objects by a Vietnamese string property

## Building

```bash
# Build the TypeScript code
npm run build

# Check bundle sizes
npm run size

# Detailed size analysis (shows what's included)
npm run size:why
```

## Publishing

### Publishing to GitHub

**Important:** The `dist/` folder (compiled JavaScript) is committed to Git to ensure GitHub installations work immediately without requiring a build step.

1. **Build the project first:**
   ```bash
   npm run build
   ```

2. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Create a GitHub repository** and push your code:
   ```bash
   git remote add origin https://github.com/khoinguyenvk9/ts-utils.git
   git branch -M main
   git push -u origin main
   ```

4. **Create a release/tag** (optional but recommended):
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

Now others can install your library using:
```bash
npm install khoinguyenvk9/ts-utils
```

**Note:** Before committing changes, always run `npm run build` to ensure the `dist/` folder is up-to-date with your source code changes.

### Publishing to npm

Before publishing to npm:

1. Update the version in `package.json`
2. Update the author field in `package.json`
3. Run `npm run build` to compile
4. Run `npm publish` to publish to npm

## License

ISC
