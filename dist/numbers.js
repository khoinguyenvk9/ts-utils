"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCurrency = toCurrency;
exports.formatNumber = formatNumber;
exports.toPercentage = toPercentage;
exports.parseIntSafe = parseIntSafe;
exports.parseFloatSafe = parseFloatSafe;
exports.isInteger = isInteger;
exports.isFloat = isFloat;
exports.isPositive = isPositive;
exports.isNegative = isNegative;
exports.isZero = isZero;
exports.isFiniteNumber = isFiniteNumber;
exports.between = between;
exports.ceil = ceil;
exports.floor = floor;
exports.truncateDecimals = truncateDecimals;
exports.abs = abs;
exports.sign = sign;
exports.roundUp = roundUp;
exports.roundDown = roundDown;
exports.roundToNearest = roundToNearest;
exports.gcd = gcd;
exports.lcm = lcm;
exports.minValue = minValue;
exports.maxValue = maxValue;
exports.toFixedNumber = toFixedNumber;
exports.areEqual = areEqual;
exports.toCompact = toCompact;
exports.formatBytes = formatBytes;
exports.toOrdinal = toOrdinal;
exports.toWords = toWords;
exports.toWordsVietnamese = toWordsVietnamese;
exports.percentageChange = percentageChange;
exports.percentageOf = percentageOf;
exports.lerp = lerp;
exports.inverseLerp = inverseLerp;
/**
 * Formats a number as currency
 * @param value - The number to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - Locale for formatting (default: 'en-US')
 */
function toCurrency(value, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value);
}
/**
 * Formats a number with thousand separators
 * @param value - The number to format
 * @param locale - Locale for formatting (default: 'en-US')
 */
function formatNumber(value, locale = 'en-US') {
    return new Intl.NumberFormat(locale).format(value);
}
/**
 * Formats a number as a percentage
 * @param value - The number to format (e.g., 0.75 becomes "75%")
 * @param decimals - Number of decimal places (default: 0)
 */
function toPercentage(value, decimals = 0) {
    return (value * 100).toFixed(decimals) + '%';
}
/**
 * Safely parses an integer with a default value
 */
function parseIntSafe(value, defaultValue = 0) {
    const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
    return isNaN(parsed) ? defaultValue : parsed;
}
/**
 * Safely parses a float with a default value
 */
function parseFloatSafe(value, defaultValue = 0) {
    const parsed = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(parsed) ? defaultValue : parsed;
}
/**
 * Checks if a number is an integer
 */
function isInteger(value) {
    return Number.isInteger(value);
}
/**
 * Checks if a number is a float (has decimal part)
 */
function isFloat(value) {
    return !Number.isInteger(value) && isFinite(value);
}
/**
 * Checks if a number is positive (> 0)
 */
function isPositive(value) {
    return value > 0;
}
/**
 * Checks if a number is negative (< 0)
 */
function isNegative(value) {
    return value < 0;
}
/**
 * Checks if a number is zero
 */
function isZero(value) {
    return value === 0;
}
/**
 * Checks if a number is finite (not Infinity or -Infinity)
 */
function isFiniteNumber(value) {
    return Number.isFinite(value);
}
/**
 * Checks if a number is between min and max (inclusive)
 */
function between(value, min, max) {
    return value >= min && value <= max;
}
/**
 * Rounds a number up to the nearest integer
 */
function ceil(value) {
    return Math.ceil(value);
}
/**
 * Rounds a number down to the nearest integer
 */
function floor(value) {
    return Math.floor(value);
}
/**
 * Removes the decimal part of a number
 */
function truncateDecimals(value) {
    return Math.trunc(value);
}
/**
 * Returns the absolute value of a number
 */
function abs(value) {
    return Math.abs(value);
}
/**
 * Returns the sign of a number (-1, 0, or 1)
 */
function sign(value) {
    return Math.sign(value);
}
/**
 * Rounds a number up to a specified number of decimal places
 */
function roundUp(value, decimals = 0) {
    const multiplier = Math.pow(10, decimals);
    return Math.ceil(value * multiplier) / multiplier;
}
/**
 * Rounds a number down to a specified number of decimal places
 */
function roundDown(value, decimals = 0) {
    const multiplier = Math.pow(10, decimals);
    return Math.floor(value * multiplier) / multiplier;
}
/**
 * Rounds to the nearest multiple of a given number
 * @param value - The number to round
 * @param multiple - The multiple to round to
 */
function roundToNearest(value, multiple) {
    return Math.round(value / multiple) * multiple;
}
/**
 * Calculates the greatest common divisor (GCD) of two numbers
 */
function gcd(a, b) {
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
/**
 * Calculates the least common multiple (LCM) of two numbers
 */
function lcm(a, b) {
    if (a === 0 || b === 0)
        return 0;
    return Math.abs(Math.floor(a) * Math.floor(b)) / gcd(a, b);
}
/**
 * Constrains a number to be at least the minimum value
 */
function minValue(value, minVal) {
    return Math.max(value, minVal);
}
/**
 * Constrains a number to be at most the maximum value
 */
function maxValue(value, maxVal) {
    return Math.min(value, maxVal);
}
/**
 * Fixes floating point precision issues
 * @param value - The number to fix
 * @param precision - Number of decimal places (default: 10)
 */
function toFixedNumber(value, precision = 10) {
    return parseFloat(value.toFixed(precision));
}
/**
 * Checks if two numbers are equal within a tolerance
 */
function areEqual(a, b, tolerance = 1e-10) {
    return Math.abs(a - b) < tolerance;
}
/**
 * Formats a number in compact notation (1K, 1M, 1B, etc.)
 */
function toCompact(value, decimals = 1) {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const tier = Math.floor(Math.log10(Math.abs(value)) / 3);
    if (tier <= 0)
        return value.toString();
    const suffix = suffixes[tier] || 'E' + (tier * 3);
    const scale = Math.pow(10, tier * 3);
    const scaled = value / scale;
    return scaled.toFixed(decimals) + suffix;
}
/**
 * Formats bytes to human-readable format (KB, MB, GB, etc.)
 */
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}
/**
 * Converts a number to ordinal (1st, 2nd, 3rd, etc.)
 */
function toOrdinal(num) {
    const int = Math.floor(num);
    const digits = [int % 10, int % 100];
    const ordinals = ['st', 'nd', 'rd', 'th'];
    const oPattern = [1, 2, 3, 4];
    const tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
        ? int + ordinals[digits[0] - 1]
        : int + ordinals[3];
}
/**
 * Converts a number to words (English, up to 999,999,999,999)
 */
function toWords(num) {
    if (num === 0)
        return 'zero';
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'million', 'billion'];
    function convertHundreds(n) {
        let str = '';
        if (n >= 100) {
            str += ones[Math.floor(n / 100)] + ' hundred';
            n %= 100;
            if (n > 0)
                str += ' ';
        }
        if (n >= 10 && n < 20) {
            str += teens[n - 10];
        }
        else {
            if (n >= 20) {
                str += tens[Math.floor(n / 10)];
                n %= 10;
                if (n > 0)
                    str += '-';
            }
            if (n > 0 && n < 10) {
                str += ones[n];
            }
        }
        return str;
    }
    if (num < 0)
        return 'negative ' + toWords(-num);
    let result = '';
    let scaleIndex = 0;
    while (num > 0) {
        const chunk = num % 1000;
        if (chunk > 0) {
            const chunkWords = convertHundreds(chunk);
            const scale = scales[scaleIndex] ? ' ' + scales[scaleIndex] : '';
            result = chunkWords + scale + (result ? ' ' + result : '');
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }
    return result.trim();
}
/**
 * Converts a number to Vietnamese words (up to 999,999,999,999)
 */
function toWordsVietnamese(num) {
    if (num === 0)
        return 'không';
    const ones = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    const scales = ['', 'nghìn', 'triệu', 'tỷ'];
    function convertHundreds(n, isFirstGroup = false) {
        let str = '';
        const hundreds = Math.floor(n / 100);
        const tens = Math.floor((n % 100) / 10);
        const onesDigit = n % 10;
        // Hundreds place
        if (hundreds > 0) {
            str += ones[hundreds] + ' trăm';
        }
        // Tens place
        if (tens > 0) {
            if (hundreds > 0 && tens === 0 && onesDigit > 0) {
                // If hundreds exist, tens is 0, but ones exist: use "linh" or "lẻ"
                str += ' linh';
            }
            else if (tens === 1) {
                str += (str ? ' ' : '') + 'mười';
            }
            else if (tens > 1) {
                str += (str ? ' ' : '') + ones[tens] + ' mươi';
            }
        }
        else if (hundreds > 0 && onesDigit > 0) {
            // Hundreds exist, no tens, but ones exist
            str += ' linh';
        }
        // Ones place
        if (onesDigit > 0) {
            if (tens >= 2 && onesDigit === 1) {
                // Special case: when tens >= 2, use "mốt" instead of "một"
                str += (str ? ' ' : '') + 'mốt';
            }
            else if (tens >= 1 && onesDigit === 5) {
                // Special case: when tens >= 1, use "lăm" instead of "năm"
                str += (str ? ' ' : '') + 'lăm';
            }
            else {
                str += (str ? ' ' : '') + ones[onesDigit];
            }
        }
        return str;
    }
    if (num < 0)
        return 'âm ' + toWordsVietnamese(-num);
    // Handle numbers greater than max supported
    if (num >= 1000000000000) {
        return num.toString(); // Return as digits if too large
    }
    let result = '';
    let scaleIndex = 0;
    const originalNum = num;
    while (num > 0) {
        const chunk = num % 1000;
        if (chunk > 0) {
            const isFirstGroup = originalNum < 1000 || scaleIndex === Math.floor(Math.log10(originalNum) / 3);
            const chunkWords = convertHundreds(chunk, isFirstGroup);
            const scale = scales[scaleIndex] ? ' ' + scales[scaleIndex] : '';
            result = chunkWords + scale + (result ? ' ' + result : '');
        }
        else if (result && scaleIndex > 0) {
            // Add "không" for empty middle groups in some contexts (optional, can be removed)
            // Vietnamese often omits these, so we'll skip
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }
    return result.trim();
}
/**
 * Calculates the percentage change between two numbers
 */
function percentageChange(oldValue, newValue) {
    if (oldValue === 0)
        return newValue === 0 ? 0 : 100;
    return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
}
/**
 * Calculates what percentage one number is of another
 */
function percentageOf(value, total) {
    if (total === 0)
        return 0;
    return (value / total) * 100;
}
/**
 * Interpolates between two numbers
 * @param start - Starting value
 * @param end - Ending value
 * @param t - Interpolation factor (0 to 1)
 */
function lerp(start, end, t) {
    return start + (end - start) * t;
}
/**
 * Inverse lerp - finds the interpolation factor for a value between start and end
 */
function inverseLerp(start, end, value) {
    if (start === end)
        return 0;
    return (value - start) / (end - start);
}
