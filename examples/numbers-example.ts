import {
  toCurrency,
  formatNumber,
  toPercentage,
  parseIntSafe,
  parseFloatSafe,
  isInteger,
  isFloat,
  isPositive,
  isNegative,
  isZero,
  isFiniteNumber,
  between,
  ceil,
  floor,
  truncateDecimals,
  abs,
  sign,
  roundUp,
  roundDown,
  roundToNearest,
  gcd,
  lcm,
  minValue,
  maxValue,
  toFixedNumber,
  areEqual,
  toCompact,
  formatBytes,
  toOrdinal,
  toWords,
  toWordsVietnamese,
  percentageChange,
  percentageOf,
  lerp,
  inverseLerp,
} from '../src/numbers';

console.log('=== Number Formatting Examples ===\n');

console.log('toCurrency(1234.56):', toCurrency(1234.56)); // "$1,234.56"
console.log('toCurrency(1234.56, "EUR", "de-DE"):', toCurrency(1234.56, 'EUR', 'de-DE')); // "1.234,56 €"
console.log('formatNumber(1234567.89):', formatNumber(1234567.89)); // "1,234,567.89"
console.log('toPercentage(0.756, 2):', toPercentage(0.756, 2)); // "75.60%"
console.log('toPercentage(0.5):', toPercentage(0.5)); // "50%"

console.log('\n=== Safe Parsing Examples ===\n');

console.log('parseIntSafe("42"):', parseIntSafe("42")); // 42
console.log('parseIntSafe("invalid", 10):', parseIntSafe("invalid", 10)); // 10
console.log('parseFloatSafe("3.14"):', parseFloatSafe("3.14")); // 3.14
console.log('parseFloatSafe("invalid", 0.5):', parseFloatSafe("invalid", 0.5)); // 0.5

console.log('\n=== Number Type Checking Examples ===\n');

console.log('isInteger(42):', isInteger(42)); // true
console.log('isInteger(42.5):', isInteger(42.5)); // false
console.log('isFloat(3.14):', isFloat(3.14)); // true
console.log('isFloat(42):', isFloat(42)); // false
console.log('isPositive(5):', isPositive(5)); // true
console.log('isNegative(-5):', isNegative(-5)); // true
console.log('isZero(0):', isZero(0)); // true
console.log('isFiniteNumber(42):', isFiniteNumber(42)); // true
console.log('isFiniteNumber(Infinity):', isFiniteNumber(Infinity)); // false

console.log('\n=== Number Range Examples ===\n');

console.log('between(5, 1, 10):', between(5, 1, 10)); // true
console.log('between(15, 1, 10):', between(15, 1, 10)); // false

console.log('\n=== Rounding Examples ===\n');

console.log('ceil(4.2):', ceil(4.2)); // 5
console.log('floor(4.8):', floor(4.8)); // 4
console.log('truncateDecimals(4.9):', truncateDecimals(4.9)); // 4
console.log('roundUp(3.14159, 2):', roundUp(3.14159, 2)); // 3.15
console.log('roundDown(3.14159, 2):', roundDown(3.14159, 2)); // 3.14
console.log('roundToNearest(47, 10):', roundToNearest(47, 10)); // 50
console.log('roundToNearest(43, 10):', roundToNearest(43, 10)); // 40

console.log('\n=== Mathematical Operations Examples ===\n');

console.log('abs(-42):', abs(-42)); // 42
console.log('sign(-42):', sign(-42)); // -1
console.log('sign(42):', sign(42)); // 1
console.log('sign(0):', sign(0)); // 0
console.log('gcd(48, 18):', gcd(48, 18)); // 6
console.log('lcm(12, 18):', lcm(12, 18)); // 36
console.log('minValue(5, 10):', minValue(5, 10)); // 10 (at least 10)
console.log('maxValue(15, 10):', maxValue(15, 10)); // 10 (at most 10)

console.log('\n=== Precision Examples ===\n');

console.log('0.1 + 0.2:', 0.1 + 0.2); // 0.30000000000000004
console.log('toFixedNumber(0.1 + 0.2):', toFixedNumber(0.1 + 0.2)); // 0.3
console.log('areEqual(0.1 + 0.2, 0.3):', areEqual(0.1 + 0.2, 0.3)); // true

console.log('\n=== Compact Formatting Examples ===\n');

console.log('toCompact(1000):', toCompact(1000)); // "1.0K"
console.log('toCompact(1500000):', toCompact(1500000)); // "1.5M"
console.log('toCompact(2500000000):', toCompact(2500000000)); // "2.5B"
console.log('formatBytes(1024):', formatBytes(1024)); // "1 KB"
console.log('formatBytes(1048576):', formatBytes(1048576)); // "1 MB"
console.log('formatBytes(1073741824):', formatBytes(1073741824)); // "1 GB"

console.log('\n=== Ordinal and Words Examples ===\n');

console.log('toOrdinal(1):', toOrdinal(1)); // "1st"
console.log('toOrdinal(2):', toOrdinal(2)); // "2nd"
console.log('toOrdinal(3):', toOrdinal(3)); // "3rd"
console.log('toOrdinal(4):', toOrdinal(4)); // "4th"
console.log('toOrdinal(21):', toOrdinal(21)); // "21st"
console.log('toOrdinal(42):', toOrdinal(42)); // "42nd"
console.log('toOrdinal(100):', toOrdinal(100)); // "100th"

console.log('\ntoWords(0):', toWords(0)); // "zero"
console.log('toWords(42):', toWords(42)); // "forty-two"
console.log('toWords(123):', toWords(123)); // "one hundred twenty-three"
console.log('toWords(1234):', toWords(1234)); // "one thousand two hundred thirty-four"
console.log('toWords(1000000):', toWords(1000000)); // "one million"

console.log('\ntoWordsVietnamese(0):', toWordsVietnamese(0)); // "không"
console.log('toWordsVietnamese(15):', toWordsVietnamese(15)); // "mười lăm"
console.log('toWordsVietnamese(21):', toWordsVietnamese(21)); // "hai mươi mốt"
console.log('toWordsVietnamese(42):', toWordsVietnamese(42)); // "bốn mươi hai"
console.log('toWordsVietnamese(123):', toWordsVietnamese(123)); // "một trăm hai mươi ba"
console.log('toWordsVietnamese(1234):', toWordsVietnamese(1234)); // "một nghìn hai trăm ba mươi bốn"
console.log('toWordsVietnamese(1000000):', toWordsVietnamese(1000000)); // "một triệu"

console.log('\n=== Percentage Calculations Examples ===\n');

console.log('percentageChange(100, 150):', percentageChange(100, 150)); // 50 (50% increase)
console.log('percentageChange(150, 100):', percentageChange(150, 100)); // -33.33 (33.33% decrease)
console.log('percentageOf(25, 100):', percentageOf(25, 100)); // 25 (25 is 25% of 100)
console.log('percentageOf(75, 150):', percentageOf(75, 150)); // 50 (75 is 50% of 150)

console.log('\n=== Interpolation Examples ===\n');

console.log('lerp(0, 100, 0.5):', lerp(0, 100, 0.5)); // 50 (halfway between 0 and 100)
console.log('lerp(0, 100, 0.25):', lerp(0, 100, 0.25)); // 25 (quarter way)
console.log('lerp(0, 100, 0.75):', lerp(0, 100, 0.75)); // 75 (three-quarters way)
console.log('inverseLerp(0, 100, 50):', inverseLerp(0, 100, 50)); // 0.5 (50 is halfway)
console.log('inverseLerp(0, 100, 25):', inverseLerp(0, 100, 25)); // 0.25

console.log('\n=== Practical Use Cases ===\n');

// Shopping cart total formatting
const cartTotal = 1234.567;
console.log(`Cart Total: ${toCurrency(cartTotal)}`);

// File size display
const fileSize = 5242880;
console.log(`File Size: ${formatBytes(fileSize)}`);

// Social media follower counts
const followers = 1250000;
console.log(`Followers: ${toCompact(followers)}`);

// Progress bar (0 to 1 scale)
const progress = 0.7;
console.log(`Progress: ${toPercentage(progress, 1)}`);

// Price change indicator
const oldPrice = 99.99;
const newPrice = 79.99;
const change = percentageChange(oldPrice, newPrice);
console.log(`Price changed by ${change.toFixed(1)}%`);

// Ranking display
const rank = 3;
console.log(`You finished in ${toOrdinal(rank)} place!`);

// Animation interpolation
const startPos = 0;
const endPos = 100;
const animationProgress = 0.3;
const currentPos = lerp(startPos, endPos, animationProgress);
console.log(`Animation position: ${currentPos}`);
