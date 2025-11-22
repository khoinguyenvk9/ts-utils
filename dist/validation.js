"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = isValidEmail;
exports.isValidUrl = isValidUrl;
exports.isValidPhone = isValidPhone;
exports.isValidPassword = isValidPassword;
exports.isNotEmpty = isNotEmpty;
exports.isInRange = isInRange;
exports.hasValidLength = hasValidLength;
exports.isAlphanumeric = isAlphanumeric;
exports.isValidCreditCard = isValidCreditCard;
exports.isValidZipCode = isValidZipCode;
/**
 * Validates if a string is a valid email address
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/**
 * Validates if a string is a valid URL
 */
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Validates if a string is a valid phone number (basic validation)
 */
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}
/**
 * Validates if a password meets minimum security requirements
 * @param password - The password to validate
 * @param minLength - Minimum length (default: 8)
 * @param requireUppercase - Require at least one uppercase letter (default: true)
 * @param requireLowercase - Require at least one lowercase letter (default: true)
 * @param requireNumber - Require at least one number (default: true)
 * @param requireSpecialChar - Require at least one special character (default: true)
 */
function isValidPassword(password, options = {}) {
    const { minLength = 8, requireUppercase = true, requireLowercase = true, requireNumber = true, requireSpecialChar = true, } = options;
    if (password.length < minLength)
        return false;
    if (requireUppercase && !/[A-Z]/.test(password))
        return false;
    if (requireLowercase && !/[a-z]/.test(password))
        return false;
    if (requireNumber && !/\d/.test(password))
        return false;
    if (requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(password))
        return false;
    return true;
}
/**
 * Validates if a string is not empty (after trimming whitespace)
 */
function isNotEmpty(value) {
    return value.trim().length > 0;
}
/**
 * Validates if a value is within a specified range
 */
function isInRange(value, min, max) {
    return value >= min && value <= max;
}
/**
 * Validates if a string matches a minimum and maximum length
 */
function hasValidLength(value, minLength, maxLength) {
    const length = value.length;
    if (length < minLength)
        return false;
    if (maxLength !== undefined && length > maxLength)
        return false;
    return true;
}
/**
 * Validates if a string contains only alphanumeric characters
 */
function isAlphanumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value);
}
/**
 * Validates if a string is a valid credit card number (Luhn algorithm)
 */
function isValidCreditCard(cardNumber) {
    const digits = cardNumber.replace(/\D/g, '');
    if (digits.length < 13 || digits.length > 19)
        return false;
    let sum = 0;
    let isEven = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits[i], 10);
        if (isEven) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
        isEven = !isEven;
    }
    return sum % 10 === 0;
}
/**
 * Validates if a string is a valid ZIP code (US format)
 */
function isValidZipCode(zipCode) {
    return /^\d{5}(-\d{4})?$/.test(zipCode);
}
