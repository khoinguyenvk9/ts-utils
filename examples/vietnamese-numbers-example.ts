import { toWordsVietnamese, toWords } from '../src/numbers';

console.log('=== Vietnamese Number to Words Examples ===\n');

// Basic numbers 0-20
console.log('0:', toWordsVietnamese(0)); // không
console.log('1:', toWordsVietnamese(1)); // một
console.log('5:', toWordsVietnamese(5)); // năm
console.log('10:', toWordsVietnamese(10)); // mười
console.log('11:', toWordsVietnamese(11)); // mười một
console.log('15:', toWordsVietnamese(15)); // mười lăm
console.log('19:', toWordsVietnamese(19)); // mười chín
console.log('20:', toWordsVietnamese(20)); // hai mươi

console.log('\n=== Special Cases (mốt and lăm) ===\n');

console.log('21:', toWordsVietnamese(21)); // hai mươi mốt
console.log('25:', toWordsVietnamese(25)); // hai mươi lăm
console.log('31:', toWordsVietnamese(31)); // ba mươi mốt
console.log('35:', toWordsVietnamese(35)); // ba mươi lăm
console.log('45:', toWordsVietnamese(45)); // bốn mươi lăm
console.log('51:', toWordsVietnamese(51)); // năm mươi mốt
console.log('91:', toWordsVietnamese(91)); // chín mươi mốt
console.log('95:', toWordsVietnamese(95)); // chín mươi lăm

console.log('\n=== Hundreds ===\n');

console.log('100:', toWordsVietnamese(100)); // một trăm
console.log('101:', toWordsVietnamese(101)); // một trăm linh một
console.log('105:', toWordsVietnamese(105)); // một trăm linh năm
console.log('110:', toWordsVietnamese(110)); // một trăm mười
console.log('115:', toWordsVietnamese(115)); // một trăm mười lăm
console.log('121:', toWordsVietnamese(121)); // một trăm hai mươi mốt
console.log('125:', toWordsVietnamese(125)); // một trăm hai mươi lăm
console.log('200:', toWordsVietnamese(200)); // hai trăm
console.log('250:', toWordsVietnamese(250)); // hai trăm năm mươi
console.log('305:', toWordsVietnamese(305)); // ba trăm linh năm
console.log('999:', toWordsVietnamese(999)); // chín trăm chín mươi chín

console.log('\n=== Thousands ===\n');

console.log('1,000:', toWordsVietnamese(1000)); // một nghìn
console.log('1,001:', toWordsVietnamese(1001)); // một nghìn không trăm linh một
console.log('1,234:', toWordsVietnamese(1234)); // một nghìn hai trăm ba mươi bốn
console.log('2,000:', toWordsVietnamese(2000)); // hai nghìn
console.log('2,021:', toWordsVietnamese(2021)); // hai nghìn không trăm hai mươi mốt
console.log('10,000:', toWordsVietnamese(10000)); // mười nghìn
console.log('15,000:', toWordsVietnamese(15000)); // mười lăm nghìn
console.log('25,000:', toWordsVietnamese(25000)); // hai mươi lăm nghìn
console.log('100,000:', toWordsVietnamese(100000)); // một trăm nghìn
console.log('999,999:', toWordsVietnamese(999999)); // chín trăm chín mươi chín nghìn chín trăm chín mươi chín

console.log('\n=== Millions ===\n');

console.log('1,000,000:', toWordsVietnamese(1000000)); // một triệu
console.log('1,234,567:', toWordsVietnamese(1234567)); // một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy
console.log('10,000,000:', toWordsVietnamese(10000000)); // mười triệu
console.log('100,000,000:', toWordsVietnamese(100000000)); // một trăm triệu
console.log('999,999,999:', toWordsVietnamese(999999999)); // chín trăm chín mươi chín triệu chín trăm chín mươi chín nghìn chín trăm chín mươi chín

console.log('\n=== Billions ===\n');

console.log('1,000,000,000:', toWordsVietnamese(1000000000)); // một tỷ
console.log('2,500,000,000:', toWordsVietnamese(2500000000)); // hai tỷ năm trăm triệu
console.log('10,000,000,000:', toWordsVietnamese(10000000000)); // mười tỷ

console.log('\n=== Negative Numbers ===\n');

console.log('-1:', toWordsVietnamese(-1)); // âm một
console.log('-42:', toWordsVietnamese(-42)); // âm bốn mươi hai
console.log('-100:', toWordsVietnamese(-100)); // âm một trăm
console.log('-1000:', toWordsVietnamese(-1000)); // âm một nghìn

console.log('\n=== Common Use Cases ===\n');

// Currency amounts
const prices = [50000, 100000, 250000, 1000000, 5000000];
console.log('Common Vietnamese prices:');
prices.forEach(price => {
  console.log(`${price.toLocaleString('vi-VN')} VNĐ: ${toWordsVietnamese(price)} đồng`);
});

console.log('\n=== Comparison with English ===\n');

const testNumbers = [0, 15, 21, 42, 100, 1234, 1000000];
testNumbers.forEach(num => {
  console.log(`${num}:`);
  console.log(`  Vietnamese: ${toWordsVietnamese(num)}`);
  console.log(`  English: ${toWords(num)}`);
  console.log();
});

console.log('\n=== Years (Vietnamese) ===\n');

const years = [1975, 2000, 2021, 2024];
years.forEach(year => {
  console.log(`Năm ${year}: năm ${toWordsVietnamese(year)}`);
});
