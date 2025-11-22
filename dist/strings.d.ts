/**
 * Capitalizes the first letter of a string
 */
export declare function capitalize(str: string): string;
/**
 * Capitalizes the first letter of each word in a string
 */
export declare function capitalizeWords(str: string): string;
/**
 * Converts a string to camelCase
 */
export declare function toCamelCase(str: string): string;
/**
 * Converts a string to PascalCase
 */
export declare function toPascalCase(str: string): string;
/**
 * Converts a string to snake_case
 */
export declare function toSnakeCase(str: string): string;
/**
 * Converts a string to kebab-case
 */
export declare function toKebabCase(str: string): string;
/**
 * Truncates a string to a specified length and adds ellipsis
 */
export declare function truncate(str: string, maxLength: number, ellipsis?: string): string;
/**
 * Removes all whitespace from a string
 */
export declare function removeWhitespace(str: string): string;
/**
 * Removes extra whitespace and trims the string
 */
export declare function normalizeWhitespace(str: string): string;
/**
 * Counts the number of words in a string
 */
export declare function wordCount(str: string): number;
/**
 * Reverses a string
 */
export declare function reverse(str: string): string;
/**
 * Checks if a string is a palindrome
 */
export declare function isPalindrome(str: string): boolean;
/**
 * Repeats a string a specified number of times
 */
export declare function repeat(str: string, times: number): string;
/**
 * Pads a string to a certain length with a specified character
 */
export declare function padLeft(str: string, length: number, char?: string): string;
/**
 * Pads a string to a certain length with a specified character on the right
 */
export declare function padRight(str: string, length: number, char?: string): string;
/**
 * Extracts initials from a name
 */
export declare function getInitials(name: string): string;
/**
 * Generates a random string of specified length
 */
export declare function randomString(length: number, charset?: string): string;
/**
 * Slugifies a string (makes it URL-friendly)
 */
export declare function slugify(str: string): string;
/**
 * Escapes HTML special characters in a string
 */
export declare function escapeHtml(str: string): string;
/**
 * Unescapes HTML entities in a string
 */
export declare function unescapeHtml(str: string): string;
/**
 * Checks if a string contains only digits
 */
export declare function isNumeric(str: string): boolean;
/**
 * Extracts numbers from a string
 */
export declare function extractNumbers(str: string): number[];
/**
 * Compares two Vietnamese strings for sorting (case-sensitive)
 * Returns: negative if str1 < str2, 0 if equal, positive if str1 > str2
 *
 * @example
 * compareVietnamese('đàn', 'dân'); // positive (đ comes after d)
 * compareVietnamese('ăn', 'ân'); // negative (ă comes before â)
 * compareVietnamese('Hà Nội', 'Hải Phòng'); // negative (a < ả)
 */
export declare function compareVietnamese(str1: string, str2: string): number;
/**
 * Sorts an array of strings using Vietnamese alphabet order (case-sensitive)
 *
 * @example
 * sortVietnamese(['đàn', 'dân', 'ăn', 'ân']); // ['ăn', 'ân', 'dân', 'đàn']
 * sortVietnamese(['Hà Nội', 'Hải Phòng', 'Đà Nẵng']); // ['Hà Nội', 'Hải Phòng', 'Đà Nẵng']
 */
export declare function sortVietnamese(strings: string[]): string[];
/**
 * Sorts an array of objects by a Vietnamese string property (case-sensitive)
 *
 * @example
 * const cities = [
 *   { name: 'Đà Nẵng', population: 1000000 },
 *   { name: 'Hà Nội', population: 8000000 },
 *   { name: 'Hải Phòng', population: 2000000 }
 * ];
 * sortVietnameseBy(cities, 'name');
 * // Result: [{ name: 'Hà Nội', ... }, { name: 'Hải Phòng', ... }, { name: 'Đà Nẵng', ... }]
 */
export declare function sortVietnameseBy<T>(array: T[], key: keyof T): T[];
