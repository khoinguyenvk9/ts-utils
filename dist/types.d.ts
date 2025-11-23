/**
 * Checks if a value is an array
 */
export declare function isArray(value: unknown): value is unknown[];
/**
 * Checks if a value is a plain object (not null, not array, not date, etc.)
 */
export declare function isObject(value: unknown): value is Record<string, unknown>;
/**
 * Checks if a value is a string
 */
export declare function isString(value: unknown): value is string;
/**
 * Checks if a value is a number (and not NaN)
 */
export declare function isNumber(value: unknown): value is number;
/**
 * Checks if a value is a boolean
 */
export declare function isBoolean(value: unknown): value is boolean;
/**
 * Checks if a value is a function
 */
export declare function isFunction(value: unknown): value is Function;
/**
 * Checks if a value is null
 */
export declare function isNull(value: unknown): value is null;
/**
 * Checks if a value is undefined
 */
export declare function isUndefined(value: unknown): value is undefined;
/**
 * Checks if a value is null or undefined
 */
export declare function isNullOrUndefined(value: unknown): value is null | undefined;
/**
 * Checks if a value is a Date object
 */
export declare function isDate(value: unknown): value is Date;
/**
 * Checks if a value is a RegExp
 */
export declare function isRegExp(value: unknown): value is RegExp;
/**
 * Checks if a value is a Map
 */
export declare function isMap(value: unknown): value is Map<unknown, unknown>;
/**
 * Checks if a value is a Set
 */
export declare function isSet(value: unknown): value is Set<unknown>;
/**
 * Checks if an array is empty
 */
export declare function isEmptyArray(value: unknown): boolean;
/**
 * Checks if an object is empty (has no own properties)
 */
export declare function isEmptyObject(value: unknown): boolean;
/**
 * Checks if a string is empty (length === 0)
 */
export declare function isEmptyString(value: unknown): boolean;
/**
 * Checks if a Map is empty
 */
export declare function isEmptyMap(value: unknown): boolean;
/**
 * Checks if a Set is empty
 */
export declare function isEmptySet(value: unknown): boolean;
/**
 * Universal empty check - works with arrays, objects, strings, Maps, and Sets
 * Returns true for null and undefined as well
 */
export declare function isEmpty(value: unknown): boolean;
/**
 * Checks if a value is a primitive type (string, number, boolean, null, undefined, symbol, bigint)
 */
export declare function isPrimitive(value: unknown): value is string | number | boolean | null | undefined | symbol | bigint;
/**
 * Type guard for checking if a value has a specific property
 */
export declare function hasProperty<K extends string>(value: unknown, property: K): value is Record<K, unknown>;
