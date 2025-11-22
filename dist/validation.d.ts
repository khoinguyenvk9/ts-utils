/**
 * Validates if a string is a valid email address
 */
export declare function isValidEmail(email: string): boolean;
/**
 * Validates if a string is a valid URL
 */
export declare function isValidUrl(url: string): boolean;
/**
 * Validates if a string is a valid phone number (basic validation)
 */
export declare function isValidPhone(phone: string): boolean;
/**
 * Validates if a password meets minimum security requirements
 * @param password - The password to validate
 * @param minLength - Minimum length (default: 8)
 * @param requireUppercase - Require at least one uppercase letter (default: true)
 * @param requireLowercase - Require at least one lowercase letter (default: true)
 * @param requireNumber - Require at least one number (default: true)
 * @param requireSpecialChar - Require at least one special character (default: true)
 */
export declare function isValidPassword(password: string, options?: {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireSpecialChar?: boolean;
}): boolean;
/**
 * Validates if a string is not empty (after trimming whitespace)
 */
export declare function isNotEmpty(value: string): boolean;
/**
 * Validates if a value is within a specified range
 */
export declare function isInRange(value: number, min: number, max: number): boolean;
/**
 * Validates if a string matches a minimum and maximum length
 */
export declare function hasValidLength(value: string, minLength: number, maxLength?: number): boolean;
/**
 * Validates if a string contains only alphanumeric characters
 */
export declare function isAlphanumeric(value: string): boolean;
/**
 * Validates if a string is a valid credit card number (Luhn algorithm)
 */
export declare function isValidCreditCard(cardNumber: string): boolean;
/**
 * Validates if a string is a valid ZIP code (US format)
 */
export declare function isValidZipCode(zipCode: string): boolean;
