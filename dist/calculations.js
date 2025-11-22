"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundTo = roundTo;
exports.calculatePercentage = calculatePercentage;
exports.average = average;
exports.sum = sum;
exports.min = min;
exports.max = max;
exports.median = median;
exports.clamp = clamp;
exports.degreesToRadians = degreesToRadians;
exports.radiansToDegrees = radiansToDegrees;
exports.distance = distance;
exports.randomInt = randomInt;
exports.randomFloat = randomFloat;
exports.isEven = isEven;
exports.isOdd = isOdd;
exports.factorial = factorial;
exports.isPrime = isPrime;
exports.compoundInterest = compoundInterest;
exports.mapRange = mapRange;
/**
 * Rounds a number to a specified number of decimal places
 */
function roundTo(value, decimals = 2) {
    const multiplier = Math.pow(10, decimals);
    return Math.round(value * multiplier) / multiplier;
}
/**
 * Calculates the percentage of a value relative to a total
 */
function calculatePercentage(value, total) {
    if (total === 0)
        return 0;
    return roundTo((value / total) * 100, 2);
}
/**
 * Calculates the average (mean) of an array of numbers
 */
function average(numbers) {
    if (numbers.length === 0)
        return 0;
    return sum(numbers) / numbers.length;
}
/**
 * Calculates the sum of an array of numbers
 */
function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
/**
 * Finds the minimum value in an array of numbers
 */
function min(numbers) {
    if (numbers.length === 0)
        return null;
    return Math.min(...numbers);
}
/**
 * Finds the maximum value in an array of numbers
 */
function max(numbers) {
    if (numbers.length === 0)
        return null;
    return Math.max(...numbers);
}
/**
 * Calculates the median of an array of numbers
 */
function median(numbers) {
    if (numbers.length === 0)
        return null;
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    else {
        return sorted[mid];
    }
}
/**
 * Clamps a value between a minimum and maximum
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Converts degrees to radians
 */
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
/**
 * Converts radians to degrees
 */
function radiansToDegrees(radians) {
    return (radians * 180) / Math.PI;
}
/**
 * Calculates the distance between two points in 2D space
 */
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
/**
 * Generates a random integer between min and max (inclusive)
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Generates a random float between min and max
 */
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Checks if a number is even
 */
function isEven(num) {
    return num % 2 === 0;
}
/**
 * Checks if a number is odd
 */
function isOdd(num) {
    return num % 2 !== 0;
}
/**
 * Calculates the factorial of a number
 */
function factorial(n) {
    if (n < 0)
        throw new Error('Factorial is not defined for negative numbers');
    if (n === 0 || n === 1)
        return 1;
    return n * factorial(n - 1);
}
/**
 * Checks if a number is prime
 */
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
/**
 * Calculates compound interest
 * @param principal - Initial amount
 * @param rate - Annual interest rate (as a decimal, e.g., 0.05 for 5%)
 * @param time - Time in years
 * @param frequency - Number of times interest is compounded per year
 */
function compoundInterest(principal, rate, time, frequency = 1) {
    return principal * Math.pow(1 + rate / frequency, frequency * time);
}
/**
 * Converts a value from one range to another
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
