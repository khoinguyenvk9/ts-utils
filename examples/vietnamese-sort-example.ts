/**
 * Example usage of Vietnamese sorting functions
 * Run with: npx ts-node examples/vietnamese-sort-example.ts
 */

import { compareVietnamese, sortVietnamese, sortVietnameseBy } from '../src/strings';

console.log('=== Vietnamese Sorting Examples ===\n');

// Example 1: Basic string sorting
console.log('1. Basic Vietnamese string sorting:');
const words = ['đàn', 'dân', 'ăn', 'ân', 'bàn', 'đen', 'dễ'];
console.log('Original:', words);
console.log('Sorted:', sortVietnamese(words));
console.log();

// Example 2: City names
console.log('2. Vietnamese city names:');
const cities = ['Đà Nẵng', 'Hà Nội', 'Hải Phòng', 'Cần Thơ', 'Đồng Nai', 'An Giang'];
console.log('Original:', cities);
console.log('Sorted:', sortVietnamese(cities));
console.log();

// Example 3: Names with tones
console.log('3. Names with different tones:');
const names = ['Hùng', 'Hưng', 'Hồng', 'Hông', 'Hăng', 'Hâng'];
console.log('Original:', names);
console.log('Sorted:', sortVietnamese(names));
console.log();

// Example 4: Case sensitivity (lowercase comes before uppercase for same base)
console.log('4. Case-sensitive sorting:');
const mixed = ['An', 'an', 'Ân', 'ân', 'Ăn', 'ăn'];
console.log('Original:', mixed);
console.log('Sorted:', sortVietnamese(mixed));
console.log();

// Example 5: Sorting objects by Vietnamese property
console.log('5. Sorting objects by Vietnamese property:');
const people = [
  { name: 'Đỗ Văn A', age: 30 },
  { name: 'Nguyễn Văn B', age: 25 },
  { name: 'Lê Thị C', age: 28 },
  { name: 'Đinh Văn D', age: 35 },
  { name: 'Âu Dương E', age: 22 },
];
console.log('Original:', people.map(p => p.name));
const sorted = sortVietnameseBy(people, 'name');
console.log('Sorted:', sorted.map(p => p.name));
console.log();

// Example 6: Demonstrating đ vs d ordering
console.log('6. Demonstrating đ comes after d:');
const dvsd = ['đá', 'dá', 'đâu', 'dâu', 'đen', 'den'];
console.log('Original:', dvsd);
console.log('Sorted:', sortVietnamese(dvsd));
console.log();

// Example 7: Demonstrating ă vs â ordering
console.log('7. Demonstrating ă comes before â:');
const avsa = ['ân', 'ăn', 'âm', 'ăm', 'ấm', 'ắm'];
console.log('Original:', avsa);
console.log('Sorted:', sortVietnamese(avsa));
console.log();

// Example 8: Using compareVietnamese directly
console.log('8. Using compareVietnamese for custom comparisons:');
console.log('compareVietnamese("đàn", "dân"):', compareVietnamese('đàn', 'dân'), '(positive = đ comes after d)');
console.log('compareVietnamese("ăn", "ân"):', compareVietnamese('ăn', 'ân'), '(negative = ă comes before â)');
console.log('compareVietnamese("Hà Nội", "Hải Phòng"):', compareVietnamese('Hà Nội', 'Hải Phòng'), '(negative = à comes before ả)');
