"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = isArray;
exports.isObject = isObject;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isFunction = isFunction;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
exports.isMap = isMap;
exports.isSet = isSet;
exports.isEmptyArray = isEmptyArray;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyString = isEmptyString;
exports.isEmptyMap = isEmptyMap;
exports.isEmptySet = isEmptySet;
exports.isEmpty = isEmpty;
exports.isPrimitive = isPrimitive;
exports.hasProperty = hasProperty;
/**
 * Checks if a value is an array
 */
function isArray(value) {
    return Array.isArray(value);
}
/**
 * Checks if a value is a plain object (not null, not array, not date, etc.)
 */
function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);
}
/**
 * Checks if a value is a string
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * Checks if a value is a number (and not NaN)
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
/**
 * Checks if a value is a boolean
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}
/**
 * Checks if a value is a function
 */
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Checks if a value is null
 */
function isNull(value) {
    return value === null;
}
/**
 * Checks if a value is undefined
 */
function isUndefined(value) {
    return value === undefined;
}
/**
 * Checks if a value is null or undefined
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Checks if a value is a Date object
 */
function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
/**
 * Checks if a value is a RegExp
 */
function isRegExp(value) {
    return value instanceof RegExp;
}
/**
 * Checks if a value is a Map
 */
function isMap(value) {
    return value instanceof Map;
}
/**
 * Checks if a value is a Set
 */
function isSet(value) {
    return value instanceof Set;
}
/**
 * Checks if an array is empty
 */
function isEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
}
/**
 * Checks if an object is empty (has no own properties)
 */
function isEmptyObject(value) {
    return isObject(value) && Object.keys(value).length === 0;
}
/**
 * Checks if a string is empty (length === 0)
 */
function isEmptyString(value) {
    return typeof value === 'string' && value.length === 0;
}
/**
 * Checks if a Map is empty
 */
function isEmptyMap(value) {
    return value instanceof Map && value.size === 0;
}
/**
 * Checks if a Set is empty
 */
function isEmptySet(value) {
    return value instanceof Set && value.size === 0;
}
/**
 * Universal empty check - works with arrays, objects, strings, Maps, and Sets
 * Returns true for null and undefined as well
 */
function isEmpty(value) {
    if (value === null || value === undefined)
        return true;
    if (typeof value === 'string')
        return value.length === 0;
    if (Array.isArray(value))
        return value.length === 0;
    if (value instanceof Map || value instanceof Set)
        return value.size === 0;
    if (isObject(value))
        return Object.keys(value).length === 0;
    return false;
}
/**
 * Checks if a value is a primitive type (string, number, boolean, null, undefined, symbol, bigint)
 */
function isPrimitive(value) {
    return value === null ||
        value === undefined ||
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'symbol' ||
        typeof value === 'bigint';
}
/**
 * Type guard for checking if a value has a specific property
 */
function hasProperty(value, property) {
    return typeof value === 'object' && value !== null && property in value;
}
