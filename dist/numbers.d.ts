/**
 * Formats a number as currency
 * @param value - The number to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - Locale for formatting (default: 'en-US')
 */
export declare function toCurrency(value: number, currency?: string, locale?: string): string;
/**
 * Formats a number with thousand separators
 * @param value - The number to format
 * @param locale - Locale for formatting (default: 'en-US')
 */
export declare function formatNumber(value: number, locale?: string): string;
/**
 * Formats a number as a percentage
 * @param value - The number to format (e.g., 0.75 becomes "75%")
 * @param decimals - Number of decimal places (default: 0)
 */
export declare function toPercentage(value: number, decimals?: number): string;
/**
 * Safely parses an integer with a default value
 */
export declare function parseIntSafe(value: string | number, defaultValue?: number): number;
/**
 * Safely parses a float with a default value
 */
export declare function parseFloatSafe(value: string | number, defaultValue?: number): number;
/**
 * Checks if a number is an integer
 */
export declare function isInteger(value: number): boolean;
/**
 * Checks if a number is a float (has decimal part)
 */
export declare function isFloat(value: number): boolean;
/**
 * Checks if a number is positive (> 0)
 */
export declare function isPositive(value: number): boolean;
/**
 * Checks if a number is negative (< 0)
 */
export declare function isNegative(value: number): boolean;
/**
 * Checks if a number is zero
 */
export declare function isZero(value: number): boolean;
/**
 * Checks if a number is finite (not Infinity or -Infinity)
 */
export declare function isFiniteNumber(value: number): boolean;
/**
 * Checks if a number is between min and max (inclusive)
 */
export declare function between(value: number, min: number, max: number): boolean;
/**
 * Rounds a number up to the nearest integer
 */
export declare function ceil(value: number): number;
/**
 * Rounds a number down to the nearest integer
 */
export declare function floor(value: number): number;
/**
 * Removes the decimal part of a number
 */
export declare function truncateDecimals(value: number): number;
/**
 * Returns the absolute value of a number
 */
export declare function abs(value: number): number;
/**
 * Returns the sign of a number (-1, 0, or 1)
 */
export declare function sign(value: number): number;
/**
 * Rounds a number up to a specified number of decimal places
 */
export declare function roundUp(value: number, decimals?: number): number;
/**
 * Rounds a number down to a specified number of decimal places
 */
export declare function roundDown(value: number, decimals?: number): number;
/**
 * Rounds to the nearest multiple of a given number
 * @param value - The number to round
 * @param multiple - The multiple to round to
 */
export declare function roundToNearest(value: number, multiple: number): number;
/**
 * Calculates the greatest common divisor (GCD) of two numbers
 */
export declare function gcd(a: number, b: number): number;
/**
 * Calculates the least common multiple (LCM) of two numbers
 */
export declare function lcm(a: number, b: number): number;
/**
 * Constrains a number to be at least the minimum value
 */
export declare function minValue(value: number, minVal: number): number;
/**
 * Constrains a number to be at most the maximum value
 */
export declare function maxValue(value: number, maxVal: number): number;
/**
 * Fixes floating point precision issues
 * @param value - The number to fix
 * @param precision - Number of decimal places (default: 10)
 */
export declare function toFixedNumber(value: number, precision?: number): number;
/**
 * Checks if two numbers are equal within a tolerance
 */
export declare function areEqual(a: number, b: number, tolerance?: number): boolean;
/**
 * Formats a number in compact notation (1K, 1M, 1B, etc.)
 */
export declare function toCompact(value: number, decimals?: number): string;
/**
 * Formats bytes to human-readable format (KB, MB, GB, etc.)
 */
export declare function formatBytes(bytes: number, decimals?: number): string;
/**
 * Converts a number to ordinal (1st, 2nd, 3rd, etc.)
 */
export declare function toOrdinal(num: number): string;
/**
 * Converts a number to words (English, up to 999,999,999,999)
 */
export declare function toWords(num: number): string;
/**
 * Converts a number to Vietnamese words (up to 999,999,999,999)
 */
export declare function toWordsVietnamese(num: number): string;
/**
 * Calculates the percentage change between two numbers
 */
export declare function percentageChange(oldValue: number, newValue: number): number;
/**
 * Calculates what percentage one number is of another
 */
export declare function percentageOf(value: number, total: number): number;
/**
 * Interpolates between two numbers
 * @param start - Starting value
 * @param end - Ending value
 * @param t - Interpolation factor (0 to 1)
 */
export declare function lerp(start: number, end: number, t: number): number;
/**
 * Inverse lerp - finds the interpolation factor for a value between start and end
 */
export declare function inverseLerp(start: number, end: number, value: number): number;
