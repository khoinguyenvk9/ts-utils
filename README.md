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
- **Time Utilities**: Date formatting, relative time, duration formatting with English and Vietnamese support
- **Calculations**: Mathematical operations, statistics, conversions
- **Number Utilities**: Formatting, parsing, validation, and advanced number operations
- **String Utilities**: Case conversion, truncation, slugification, and more
- **Type Checking**: Runtime type checking and empty value validation
- **Vietnamese Support**: Vietnamese sorting, number-to-words, and time formatting
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
import { formatDate, formatTime, formatDateTime, getRelativeTime, formatDuration, addDays } from 'ts-utils';

// English (default)
formatDate(new Date(), 'long'); // "Friday, November 22, 2025"
formatTime(new Date()); // "3:45 PM"
formatDateTime(new Date()); // "November 22, 2025 at 3:45 PM"
getRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"
formatDuration(90000); // "1m 30s"

// Vietnamese support
formatDate(new Date(), 'long', 'vi'); // "Thứ Sáu, 22 tháng 11, 2025"
formatTime(new Date(), false, 'vi'); // "3:45 CH"
formatDateTime(new Date(), 'vi'); // "22 tháng 11, 2025 lúc 3:45 CH"
getRelativeTime(new Date(Date.now() - 3600000), 'vi'); // "1 giờ trước"
formatDuration(90000, 'vi'); // "1 phút 30 giây"

// Date manipulation
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

### Number Utilities

Comprehensive number formatting, parsing, and manipulation:

```typescript
import {
  toCurrency, formatNumber, toPercentage,
  toCompact, formatBytes, toOrdinal, toWords,
  parseIntSafe, parseFloatSafe,
  roundUp, roundDown, roundToNearest,
  isInteger, isFloat, isPositive, between,
  gcd, lcm, percentageChange, lerp
} from 'ts-utils';

// Formatting
toCurrency(1234.56); // "$1,234.56"
toCurrency(1234.56, 'EUR', 'de-DE'); // "1.234,56 €"
formatNumber(1234567.89); // "1,234,567.89"
toPercentage(0.756, 2); // "75.60%"
toCompact(1500000); // "1.5M"
formatBytes(1048576); // "1 MB"
toOrdinal(3); // "3rd"
toWords(42); // "forty-two"
toWordsVietnamese(42); // "bốn mươi hai"
toWordsVietnamese(1234567); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"

// Safe parsing with defaults
parseIntSafe("invalid", 10); // 10
parseFloatSafe("3.14"); // 3.14

// Advanced rounding
roundUp(3.14159, 2); // 3.15
roundDown(3.14159, 2); // 3.14
roundToNearest(47, 10); // 50

// Number validation
isInteger(42); // true
isFloat(3.14); // true
isPositive(5); // true
between(5, 1, 10); // true

// Mathematical operations
gcd(48, 18); // 6 (greatest common divisor)
lcm(12, 18); // 36 (least common multiple)
percentageChange(100, 150); // 50 (50% increase)
lerp(0, 100, 0.5); // 50 (linear interpolation)
```

**Features:**
- Currency and number formatting with locale support
- Compact notation (1K, 1M, 1B) and byte formatting
- Number to words (English and Vietnamese) and ordinal conversion
- Vietnamese number reading with proper rules (mốt, lăm, linh)
- Safe parsing with default values
- Multiple rounding strategies
- Floating point precision handling
- Percentage calculations
- Linear interpolation for animations

### Vietnamese Number to Words

Convert numbers to Vietnamese words with proper pronunciation rules:

```typescript
import { toWordsVietnamese } from 'ts-utils';

// Basic numbers
toWordsVietnamese(0); // "không"
toWordsVietnamese(10); // "mười"
toWordsVietnamese(15); // "mười lăm" (special case)
toWordsVietnamese(21); // "hai mươi mốt" (special case)
toWordsVietnamese(25); // "hai mươi lăm" (special case)

// Hundreds with "linh"
toWordsVietnamese(101); // "một trăm linh một"
toWordsVietnamese(105); // "một trăm linh năm"
toWordsVietnamese(305); // "ba trăm linh năm"

// Thousands
toWordsVietnamese(1234); // "một nghìn hai trăm ba mươi bốn"
toWordsVietnamese(25000); // "hai mươi lăm nghìn"

// Millions and Billions
toWordsVietnamese(1000000); // "một triệu"
toWordsVietnamese(1234567); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"
toWordsVietnamese(1000000000); // "một tỷ"

// Negative numbers
toWordsVietnamese(-42); // "âm bốn mươi hai"

// Common use: Currency
const amount = 150000;
console.log(`${toWordsVietnamese(amount)} đồng`); // "một trăm năm mươi nghìn đồng"
```

**Vietnamese Number Reading Rules:**
- Uses "mười lăm" for 15 (not "mười năm")
- Uses "mốt" instead of "một" when 1 is in ones place and tens >= 2 (21, 31, 91...)
- Uses "lăm" instead of "năm" when 5 is in ones place and tens >= 1 (15, 25, 35...)
- Uses "linh" when hundreds exist but tens are zero (101, 105, 305...)
- Proper scales: trăm (hundred), nghìn (thousand), triệu (million), tỷ (billion)
- Supports negative numbers with "âm" prefix

### Vietnamese Time Formatting

All time formatting functions support Vietnamese locale:

```typescript
import { formatDate, formatTime, formatDateTime, getRelativeTime, formatDuration } from 'ts-utils';

// Date formatting
formatDate(new Date(), 'long', 'en');  // "Sunday, November 23, 2025"
formatDate(new Date(), 'long', 'vi');  // "Chủ Nhật, 23 tháng 11, 2025"

// Time formatting
formatTime(new Date(), false, 'en');  // "3:45 PM"
formatTime(new Date(), false, 'vi');  // "3:45 CH"

// DateTime formatting
formatDateTime(new Date(), 'en');  // "November 23, 2025 at 3:45 PM"
formatDateTime(new Date(), 'vi');  // "23 tháng 11, 2025 lúc 3:45 CH"

// Relative time (past)
getRelativeTime(pastDate, 'en');  // "2 hours ago"
getRelativeTime(pastDate, 'vi');  // "2 giờ trước"

// Relative time (future)
getRelativeTime(futureDate, 'en');  // "in 3 days from now"
getRelativeTime(futureDate, 'vi');  // "3 ngày nữa"

// Duration formatting
formatDuration(90000, 'en');  // "1m 30s"
formatDuration(90000, 'vi');  // "1 phút 30 giây"
```

**Vietnamese Time Translations:**
- vừa xong (just now)
- phút trước/phút nữa (minutes ago/from now)
- giờ trước/giờ nữa (hours ago/from now)
- ngày trước/ngày nữa (days ago/from now)
- tuần trước/tuần nữa (weeks ago/from now)
- tháng trước/tháng nữa (months ago/from now)
- năm trước/năm nữa (years ago/from now)
- giây (seconds), phút (minutes), giờ (hours), ngày (days)

### Type Checking

Runtime type checking and empty value validation utilities:

```typescript
import {
  isArray, isObject, isString, isNumber,
  isEmpty, isEmptyArray, isEmptyObject,
  hasProperty, isPrimitive
} from 'ts-utils';

// Type checking
isArray([1, 2, 3]); // true
isObject({}); // true
isString('hello'); // true
isNumber(42); // true (NaN returns false)

// Empty checking
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty(null); // true
isEmpty(new Map()); // true
isEmpty(new Set()); // true

isEmptyArray([]); // true
isEmptyObject({}); // true

// Property checking
const user = { name: 'John', age: 30 };
hasProperty(user, 'name'); // true
hasProperty(user, 'email'); // false

// Primitive checking
isPrimitive('hello'); // true
isPrimitive(42); // true
isPrimitive({}); // false
```

**Features:**
- TypeScript type guards for accurate type inference
- Universal `isEmpty()` works with arrays, objects, strings, Maps, and Sets
- Handles edge cases (NaN, null, undefined, Date, RegExp, etc.)
- Useful for input validation and data processing

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

- `formatDate(date: Date, format?: 'short' | 'medium' | 'long', locale?: 'en' | 'vi'): string` - Format date with locale support
- `formatTime(date: Date, use24Hour?: boolean, locale?: 'en' | 'vi'): string` - Format time with locale support
- `formatDateTime(date: Date, locale?: 'en' | 'vi'): string` - Format date and time with locale support
- `getRelativeTime(date: Date, locale?: 'en' | 'vi'): string` - Relative time with locale support (e.g., "2 hours ago" or "2 giờ trước")
- `formatDuration(milliseconds: number, locale?: 'en' | 'vi'): string` - Duration formatting with locale support
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

### Number Functions

- `toCurrency(value: number, currency?: string, locale?: string): string` - Format as currency
- `formatNumber(value: number, locale?: string): string` - Format with thousand separators
- `toPercentage(value: number, decimals?: number): string` - Format as percentage
- `parseIntSafe(value: string | number, defaultValue?: number): number` - Safe integer parsing
- `parseFloatSafe(value: string | number, defaultValue?: number): number` - Safe float parsing
- `isInteger(value: number): boolean` - Check if number is an integer
- `isFloat(value: number): boolean` - Check if number has decimal part
- `isPositive(value: number): boolean` - Check if number is positive
- `isNegative(value: number): boolean` - Check if number is negative
- `isZero(value: number): boolean` - Check if number is zero
- `isFiniteNumber(value: number): boolean` - Check if number is finite
- `between(value: number, min: number, max: number): boolean` - Check if number is in range
- `ceil(value: number): number` - Round up to nearest integer
- `floor(value: number): number` - Round down to nearest integer
- `truncateDecimals(value: number): number` - Remove decimal part
- `abs(value: number): number` - Get absolute value
- `sign(value: number): number` - Get sign of number (-1, 0, or 1)
- `roundUp(value: number, decimals?: number): number` - Round up to decimal places
- `roundDown(value: number, decimals?: number): number` - Round down to decimal places
- `roundToNearest(value: number, multiple: number): number` - Round to nearest multiple
- `gcd(a: number, b: number): number` - Greatest common divisor
- `lcm(a: number, b: number): number` - Least common multiple
- `minValue(value: number, minVal: number): number` - Constrain to minimum value
- `maxValue(value: number, maxVal: number): number` - Constrain to maximum value
- `toFixedNumber(value: number, precision?: number): number` - Fix floating point precision
- `areEqual(a: number, b: number, tolerance?: number): boolean` - Compare with tolerance
- `toCompact(value: number, decimals?: number): string` - Format as 1K, 1M, 1B, etc.
- `formatBytes(bytes: number, decimals?: number): string` - Format as KB, MB, GB, etc.
- `toOrdinal(num: number): string` - Convert to ordinal (1st, 2nd, 3rd)
- `toWords(num: number): string` - Convert to English words (forty-two)
- `toWordsVietnamese(num: number): string` - Convert to Vietnamese words (bốn mươi hai)
- `percentageChange(oldValue: number, newValue: number): number` - Calculate percentage change
- `percentageOf(value: number, total: number): number` - Calculate what percentage value is of total
- `lerp(start: number, end: number, t: number): number` - Linear interpolation
- `inverseLerp(start: number, end: number, value: number): number` - Inverse linear interpolation

### Type Checking Functions

- `isArray(value: unknown): value is unknown[]` - Check if value is an array
- `isObject(value: unknown): value is Record<string, unknown>` - Check if value is a plain object
- `isString(value: unknown): value is string` - Check if value is a string
- `isNumber(value: unknown): value is number` - Check if value is a number (excludes NaN)
- `isBoolean(value: unknown): value is boolean` - Check if value is a boolean
- `isFunction(value: unknown): value is Function` - Check if value is a function
- `isNull(value: unknown): value is null` - Check if value is null
- `isUndefined(value: unknown): value is undefined` - Check if value is undefined
- `isNullOrUndefined(value: unknown): value is null | undefined` - Check if value is null or undefined
- `isDate(value: unknown): value is Date` - Check if value is a valid Date object
- `isRegExp(value: unknown): value is RegExp` - Check if value is a RegExp
- `isMap(value: unknown): value is Map<unknown, unknown>` - Check if value is a Map
- `isSet(value: unknown): value is Set<unknown>` - Check if value is a Set
- `isEmptyArray(value: unknown): boolean` - Check if value is an empty array
- `isEmptyObject(value: unknown): boolean` - Check if value is an empty object
- `isEmptyString(value: unknown): boolean` - Check if value is an empty string
- `isEmptyMap(value: unknown): boolean` - Check if value is an empty Map
- `isEmptySet(value: unknown): boolean` - Check if value is an empty Set
- `isEmpty(value: unknown): boolean` - Universal empty check (works with arrays, objects, strings, Maps, Sets, null, undefined)
- `isPrimitive(value: unknown): value is string | number | boolean | null | undefined | symbol | bigint` - Check if value is a primitive type
- `hasProperty<K extends string>(value: unknown, property: K): value is Record<K, unknown>` - Check if value has a specific property

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
