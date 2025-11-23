/**
 * Checks if a value is an array
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * Checks if a value is a plain object (not null, not array, not date, etc.)
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);
}

/**
 * Checks if a value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Checks if a value is a number (and not NaN)
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Checks if a value is a boolean
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Checks if a value is a function
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * Checks if a value is null
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * Checks if a value is undefined
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Checks if a value is null or undefined
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Checks if a value is a Date object
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Checks if a value is a RegExp
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/**
 * Checks if a value is a Map
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

/**
 * Checks if a value is a Set
 */
export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

/**
 * Checks if an array is empty
 */
export function isEmptyArray(value: unknown): boolean {
  return Array.isArray(value) && value.length === 0;
}

/**
 * Checks if an object is empty (has no own properties)
 */
export function isEmptyObject(value: unknown): boolean {
  return isObject(value) && Object.keys(value).length === 0;
}

/**
 * Checks if a string is empty (length === 0)
 */
export function isEmptyString(value: unknown): boolean {
  return typeof value === 'string' && value.length === 0;
}

/**
 * Checks if a Map is empty
 */
export function isEmptyMap(value: unknown): boolean {
  return value instanceof Map && value.size === 0;
}

/**
 * Checks if a Set is empty
 */
export function isEmptySet(value: unknown): boolean {
  return value instanceof Set && value.size === 0;
}

/**
 * Universal empty check - works with arrays, objects, strings, Maps, and Sets
 * Returns true for null and undefined as well
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}

/**
 * Checks if a value is a primitive type (string, number, boolean, null, undefined, symbol, bigint)
 */
export function isPrimitive(value: unknown): value is string | number | boolean | null | undefined | symbol | bigint {
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
export function hasProperty<K extends string>(
  value: unknown,
  property: K
): value is Record<K, unknown> {
  return typeof value === 'object' && value !== null && property in value;
}
