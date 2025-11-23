import {
  isArray,
  isObject,
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isDate,
  isEmptyArray,
  isEmptyObject,
  isEmptyString,
  isEmpty,
  isPrimitive,
  hasProperty,
} from '../src/types';

console.log('=== Type Checking Examples ===\n');

// Type checking
console.log('isArray([1, 2, 3]):', isArray([1, 2, 3])); // true
console.log('isArray("hello"):', isArray("hello")); // false
console.log('isObject({}):', isObject({})); // true
console.log('isObject([]):', isObject([])); // false
console.log('isObject(null):', isObject(null)); // false
console.log('isString("hello"):', isString("hello")); // true
console.log('isNumber(42):', isNumber(42)); // true
console.log('isNumber(NaN):', isNumber(NaN)); // false
console.log('isBoolean(true):', isBoolean(true)); // true
console.log('isFunction(() => {}):', isFunction(() => {})); // true
console.log('isNull(null):', isNull(null)); // true
console.log('isUndefined(undefined):', isUndefined(undefined)); // true
console.log('isNullOrUndefined(null):', isNullOrUndefined(null)); // true
console.log('isNullOrUndefined(undefined):', isNullOrUndefined(undefined)); // true
console.log('isDate(new Date()):', isDate(new Date())); // true

console.log('\n=== Empty Checking Examples ===\n');

// Empty checking
console.log('isEmptyArray([]):', isEmptyArray([])); // true
console.log('isEmptyArray([1, 2, 3]):', isEmptyArray([1, 2, 3])); // false
console.log('isEmptyObject({}):', isEmptyObject({})); // true
console.log('isEmptyObject({ name: "John" }):', isEmptyObject({ name: "John" })); // false
console.log('isEmptyString(""):', isEmptyString("")); // true
console.log('isEmptyString("hello"):', isEmptyString("hello")); // false

console.log('\n=== Universal isEmpty() Examples ===\n');

// Universal isEmpty
console.log('isEmpty(null):', isEmpty(null)); // true
console.log('isEmpty(undefined):', isEmpty(undefined)); // true
console.log('isEmpty(""):', isEmpty("")); // true
console.log('isEmpty([]):', isEmpty([])); // true
console.log('isEmpty({}):', isEmpty({})); // true
console.log('isEmpty(new Map()):', isEmpty(new Map())); // true
console.log('isEmpty(new Set()):', isEmpty(new Set())); // true
console.log('isEmpty("hello"):', isEmpty("hello")); // false
console.log('isEmpty([1, 2, 3]):', isEmpty([1, 2, 3])); // false
console.log('isEmpty({ key: "value" }):', isEmpty({ key: "value" })); // false

console.log('\n=== Primitive Checking Examples ===\n');

console.log('isPrimitive("hello"):', isPrimitive("hello")); // true
console.log('isPrimitive(42):', isPrimitive(42)); // true
console.log('isPrimitive(true):', isPrimitive(true)); // true
console.log('isPrimitive(null):', isPrimitive(null)); // true
console.log('isPrimitive(undefined):', isPrimitive(undefined)); // true
console.log('isPrimitive({}):', isPrimitive({})); // false
console.log('isPrimitive([]):', isPrimitive([])); // false

console.log('\n=== hasProperty() Examples ===\n');

const user = { name: 'John', age: 30 };
console.log('hasProperty(user, "name"):', hasProperty(user, 'name')); // true
console.log('hasProperty(user, "email"):', hasProperty(user, 'email')); // false
console.log('hasProperty(null, "name"):', hasProperty(null, 'name')); // false

console.log('\n=== Practical Use Cases ===\n');

// Practical use case: validate function input
function processData(data: unknown) {
  if (isNullOrUndefined(data)) {
    console.log('Error: Data is null or undefined');
    return;
  }

  if (isArray(data)) {
    if (isEmpty(data)) {
      console.log('Warning: Array is empty');
    } else {
      console.log(`Processing array with ${data.length} items`);
    }
  } else if (isObject(data)) {
    if (isEmpty(data)) {
      console.log('Warning: Object is empty');
    } else {
      console.log(`Processing object with ${Object.keys(data).length} properties`);
    }
  } else if (isString(data)) {
    if (isEmpty(data)) {
      console.log('Warning: String is empty');
    } else {
      console.log(`Processing string: "${data}"`);
    }
  } else {
    console.log(`Processing ${typeof data}: ${data}`);
  }
}

processData([1, 2, 3]);
processData([]);
processData({ name: 'John' });
processData({});
processData('hello');
processData('');
processData(null);
processData(42);
