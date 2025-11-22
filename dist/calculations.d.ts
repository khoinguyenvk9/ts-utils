/**
 * Rounds a number to a specified number of decimal places
 */
export declare function roundTo(value: number, decimals?: number): number;
/**
 * Calculates the percentage of a value relative to a total
 */
export declare function calculatePercentage(value: number, total: number): number;
/**
 * Calculates the average (mean) of an array of numbers
 */
export declare function average(numbers: number[]): number;
/**
 * Calculates the sum of an array of numbers
 */
export declare function sum(numbers: number[]): number;
/**
 * Finds the minimum value in an array of numbers
 */
export declare function min(numbers: number[]): number | null;
/**
 * Finds the maximum value in an array of numbers
 */
export declare function max(numbers: number[]): number | null;
/**
 * Calculates the median of an array of numbers
 */
export declare function median(numbers: number[]): number | null;
/**
 * Clamps a value between a minimum and maximum
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Converts degrees to radians
 */
export declare function degreesToRadians(degrees: number): number;
/**
 * Converts radians to degrees
 */
export declare function radiansToDegrees(radians: number): number;
/**
 * Calculates the distance between two points in 2D space
 */
export declare function distance(x1: number, y1: number, x2: number, y2: number): number;
/**
 * Generates a random integer between min and max (inclusive)
 */
export declare function randomInt(min: number, max: number): number;
/**
 * Generates a random float between min and max
 */
export declare function randomFloat(min: number, max: number): number;
/**
 * Checks if a number is even
 */
export declare function isEven(num: number): boolean;
/**
 * Checks if a number is odd
 */
export declare function isOdd(num: number): boolean;
/**
 * Calculates the factorial of a number
 */
export declare function factorial(n: number): number;
/**
 * Checks if a number is prime
 */
export declare function isPrime(num: number): boolean;
/**
 * Calculates compound interest
 * @param principal - Initial amount
 * @param rate - Annual interest rate (as a decimal, e.g., 0.05 for 5%)
 * @param time - Time in years
 * @param frequency - Number of times interest is compounded per year
 */
export declare function compoundInterest(principal: number, rate: number, time: number, frequency?: number): number;
/**
 * Converts a value from one range to another
 */
export declare function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
