/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Capitalizes the first letter of each word in a string
 */
export function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
}

/**
 * Converts a string to camelCase
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
      index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    )
    .replace(/\s+/g, '');
}

/**
 * Converts a string to PascalCase
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter) => letter.toUpperCase())
    .replace(/\s+/g, '');
}

/**
 * Converts a string to snake_case
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
    .replace(/\s+/g, '_');
}

/**
 * Converts a string to kebab-case
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
    .replace(/\s+/g, '-');
}

/**
 * Truncates a string to a specified length and adds ellipsis
 */
export function truncate(str: string, maxLength: number, ellipsis: string = '...'): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - ellipsis.length) + ellipsis;
}

/**
 * Removes all whitespace from a string
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

/**
 * Removes extra whitespace and trims the string
 */
export function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Counts the number of words in a string
 */
export function wordCount(str: string): number {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Reverses a string
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverse(cleaned);
}

/**
 * Repeats a string a specified number of times
 */
export function repeat(str: string, times: number): string {
  return str.repeat(times);
}

/**
 * Pads a string to a certain length with a specified character
 */
export function padLeft(str: string, length: number, char: string = ' '): string {
  return str.padStart(length, char);
}

/**
 * Pads a string to a certain length with a specified character on the right
 */
export function padRight(str: string, length: number, char: string = ' '): string {
  return str.padEnd(length, char);
}

/**
 * Extracts initials from a name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}

/**
 * Generates a random string of specified length
 */
export function randomString(length: number, charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Slugifies a string (makes it URL-friendly)
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Escapes HTML special characters in a string
 */
export function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return str.replace(/[&<>"'/]/g, (char) => htmlEscapes[char]);
}

/**
 * Unescapes HTML entities in a string
 */
export function unescapeHtml(str: string): string {
  const htmlUnescapes: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x2F;': '/',
  };

  return str.replace(/&(?:amp|lt|gt|quot|#x27|#x2F);/g, (entity) => htmlUnescapes[entity]);
}

/**
 * Checks if a string contains only digits
 */
export function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

/**
 * Extracts numbers from a string
 */
export function extractNumbers(str: string): number[] {
  const matches = str.match(/\d+/g);
  return matches ? matches.map(Number) : [];
}

/**
 * Vietnamese character ordering map
 * Each character is mapped to a unique sortable value
 * Vietnamese alphabet order: a, ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, q, r, s, t, u, ư, v, x, y
 * Tone order for each base: no tone, acute (á), grave (à), hook (ả), tilde (ã), dot below (ạ)
 */
const VIETNAMESE_CHAR_ORDER: Record<string, number> = {
  // Lowercase
  'a': 100, 'á': 101, 'à': 102, 'ả': 103, 'ã': 104, 'ạ': 105,
  'ă': 200, 'ắ': 201, 'ằ': 202, 'ẳ': 203, 'ẵ': 204, 'ặ': 205,
  'â': 300, 'ấ': 301, 'ầ': 302, 'ẩ': 303, 'ẫ': 304, 'ậ': 305,
  'b': 400,
  'c': 500,
  'd': 600,
  'đ': 700,
  'e': 800, 'é': 801, 'è': 802, 'ẻ': 803, 'ẽ': 804, 'ẹ': 805,
  'ê': 900, 'ế': 901, 'ề': 902, 'ể': 903, 'ễ': 904, 'ệ': 905,
  'g': 1000,
  'h': 1100,
  'i': 1200, 'í': 1201, 'ì': 1202, 'ỉ': 1203, 'ĩ': 1204, 'ị': 1205,
  'k': 1300,
  'l': 1400,
  'm': 1500,
  'n': 1600,
  'o': 1700, 'ó': 1701, 'ò': 1702, 'ỏ': 1703, 'õ': 1704, 'ọ': 1705,
  'ô': 1800, 'ố': 1801, 'ồ': 1802, 'ổ': 1803, 'ỗ': 1804, 'ộ': 1805,
  'ơ': 1900, 'ớ': 1901, 'ờ': 1902, 'ở': 1903, 'ỡ': 1904, 'ợ': 1905,
  'p': 2000,
  'q': 2100,
  'r': 2200,
  's': 2300,
  't': 2400,
  'u': 2500, 'ú': 2501, 'ù': 2502, 'ủ': 2503, 'ũ': 2504, 'ụ': 2505,
  'ư': 2600, 'ứ': 2601, 'ừ': 2602, 'ử': 2603, 'ữ': 2604, 'ự': 2605,
  'v': 2700,
  'x': 2800,
  'y': 2900, 'ý': 2901, 'ỳ': 2902, 'ỷ': 2903, 'ỹ': 2904, 'ỵ': 2905,

  // Uppercase (offset by 50 to maintain case sensitivity)
  'A': 150, 'Á': 151, 'À': 152, 'Ả': 153, 'Ã': 154, 'Ạ': 155,
  'Ă': 250, 'Ắ': 251, 'Ằ': 252, 'Ẳ': 253, 'Ẵ': 254, 'Ặ': 255,
  'Â': 350, 'Ấ': 351, 'Ầ': 352, 'Ẩ': 353, 'Ẫ': 354, 'Ậ': 355,
  'B': 450,
  'C': 550,
  'D': 650,
  'Đ': 750,
  'E': 850, 'É': 851, 'È': 852, 'Ẻ': 853, 'Ẽ': 854, 'Ẹ': 855,
  'Ê': 950, 'Ế': 951, 'Ề': 952, 'Ể': 953, 'Ễ': 954, 'Ệ': 955,
  'G': 1050,
  'H': 1150,
  'I': 1250, 'Í': 1251, 'Ì': 1252, 'Ỉ': 1253, 'Ĩ': 1254, 'Ị': 1255,
  'K': 1350,
  'L': 1450,
  'M': 1550,
  'N': 1650,
  'O': 1750, 'Ó': 1751, 'Ò': 1752, 'Ỏ': 1753, 'Õ': 1754, 'Ọ': 1755,
  'Ô': 1850, 'Ố': 1851, 'Ồ': 1852, 'Ổ': 1853, 'Ỗ': 1854, 'Ộ': 1855,
  'Ơ': 1950, 'Ớ': 1951, 'Ờ': 1952, 'Ở': 1953, 'Ỡ': 1954, 'Ợ': 1955,
  'P': 2050,
  'Q': 2150,
  'R': 2250,
  'S': 2350,
  'T': 2450,
  'U': 2550, 'Ú': 2551, 'Ù': 2552, 'Ủ': 2553, 'Ũ': 2554, 'Ụ': 2555,
  'Ư': 2650, 'Ứ': 2651, 'Ừ': 2652, 'Ử': 2653, 'Ữ': 2654, 'Ự': 2655,
  'V': 2750,
  'X': 2850,
  'Y': 2950, 'Ý': 2951, 'Ỳ': 2952, 'Ỷ': 2953, 'Ỹ': 2954, 'Ỵ': 2955,
};

/**
 * Gets the sort order value for a character
 * Vietnamese characters get their mapped value, others use their char code + offset
 */
function getVietnameseCharOrder(char: string): number {
  if (VIETNAMESE_CHAR_ORDER[char] !== undefined) {
    return VIETNAMESE_CHAR_ORDER[char];
  }
  // For non-Vietnamese characters, use Unicode value + large offset
  return char.charCodeAt(0) + 100000;
}

/**
 * Compares two Vietnamese strings for sorting (case-sensitive)
 * Returns: negative if str1 < str2, 0 if equal, positive if str1 > str2
 *
 * @example
 * compareVietnamese('đàn', 'dân'); // positive (đ comes after d)
 * compareVietnamese('ăn', 'ân'); // negative (ă comes before â)
 * compareVietnamese('Hà Nội', 'Hải Phòng'); // negative (a < ả)
 */
export function compareVietnamese(str1: string, str2: string): number {
  const len = Math.min(str1.length, str2.length);

  for (let i = 0; i < len; i++) {
    const order1 = getVietnameseCharOrder(str1[i]);
    const order2 = getVietnameseCharOrder(str2[i]);

    if (order1 !== order2) {
      return order1 - order2;
    }
  }

  // If all compared characters are equal, shorter string comes first
  return str1.length - str2.length;
}

/**
 * Sorts an array of strings using Vietnamese alphabet order (case-sensitive)
 *
 * @example
 * sortVietnamese(['đàn', 'dân', 'ăn', 'ân']); // ['ăn', 'ân', 'dân', 'đàn']
 * sortVietnamese(['Hà Nội', 'Hải Phòng', 'Đà Nẵng']); // ['Hà Nội', 'Hải Phòng', 'Đà Nẵng']
 */
export function sortVietnamese(strings: string[]): string[] {
  return [...strings].sort(compareVietnamese);
}

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
export function sortVietnameseBy<T>(
  array: T[],
  key: keyof T
): T[] {
  return [...array].sort((a, b) => {
    const valueA = String(a[key]);
    const valueB = String(b[key]);
    return compareVietnamese(valueA, valueB);
  });
}
