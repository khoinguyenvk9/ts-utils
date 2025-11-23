import {
  formatDate,
  formatTime,
  formatDateTime,
  getRelativeTime,
  formatDuration,
  addDays,
  addHours,
  addMinutes,
} from '../src/time';

console.log('=== Vietnamese Time Formatting Examples ===\n');

const now = new Date();

console.log('=== formatDate() Examples ===\n');

console.log('English (short):', formatDate(now, 'short', 'en'));
console.log('Vietnamese (short):', formatDate(now, 'short', 'vi'));
console.log();

console.log('English (medium):', formatDate(now, 'medium', 'en'));
console.log('Vietnamese (medium):', formatDate(now, 'medium', 'vi'));
console.log();

console.log('English (long):', formatDate(now, 'long', 'en'));
console.log('Vietnamese (long):', formatDate(now, 'long', 'vi'));

console.log('\n=== formatTime() Examples ===\n');

console.log('English (12-hour):', formatTime(now, false, 'en'));
console.log('Vietnamese (12-hour):', formatTime(now, false, 'vi'));
console.log();

console.log('English (24-hour):', formatTime(now, true, 'en'));
console.log('Vietnamese (24-hour):', formatTime(now, true, 'vi'));

console.log('\n=== formatDateTime() Examples ===\n');

console.log('English:', formatDateTime(now, 'en'));
console.log('Vietnamese:', formatDateTime(now, 'vi'));

console.log('\n=== getRelativeTime() Examples ===\n');

// Just now
const justNow = new Date(Date.now() - 30 * 1000); // 30 seconds ago
console.log('30 seconds ago:');
console.log('  English:', getRelativeTime(justNow, 'en'));
console.log('  Vietnamese:', getRelativeTime(justNow, 'vi'));
console.log();

// Minutes ago
const minutesAgo = new Date(Date.now() - 15 * 60 * 1000); // 15 minutes ago
console.log('15 minutes ago:');
console.log('  English:', getRelativeTime(minutesAgo, 'en'));
console.log('  Vietnamese:', getRelativeTime(minutesAgo, 'vi'));
console.log();

// Hours ago
const hoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000); // 3 hours ago
console.log('3 hours ago:');
console.log('  English:', getRelativeTime(hoursAgo, 'en'));
console.log('  Vietnamese:', getRelativeTime(hoursAgo, 'vi'));
console.log();

// Days ago
const daysAgo = addDays(now, -4); // 4 days ago
console.log('4 days ago:');
console.log('  English:', getRelativeTime(daysAgo, 'en'));
console.log('  Vietnamese:', getRelativeTime(daysAgo, 'vi'));
console.log();

// Weeks ago
const weeksAgo = addDays(now, -14); // 2 weeks ago
console.log('2 weeks ago:');
console.log('  English:', getRelativeTime(weeksAgo, 'en'));
console.log('  Vietnamese:', getRelativeTime(weeksAgo, 'vi'));
console.log();

// Months ago
const monthsAgo = addDays(now, -90); // ~3 months ago
console.log('3 months ago:');
console.log('  English:', getRelativeTime(monthsAgo, 'en'));
console.log('  Vietnamese:', getRelativeTime(monthsAgo, 'vi'));
console.log();

// Years ago
const yearsAgo = addDays(now, -730); // 2 years ago
console.log('2 years ago:');
console.log('  English:', getRelativeTime(yearsAgo, 'en'));
console.log('  Vietnamese:', getRelativeTime(yearsAgo, 'vi'));

console.log('\n=== Future Dates (getRelativeTime) ===\n');

// Minutes from now
const minutesFromNow = addMinutes(now, 30);
console.log('30 minutes from now:');
console.log('  English:', getRelativeTime(minutesFromNow, 'en'));
console.log('  Vietnamese:', getRelativeTime(minutesFromNow, 'vi'));
console.log();

// Hours from now
const hoursFromNow = addHours(now, 5);
console.log('5 hours from now:');
console.log('  English:', getRelativeTime(hoursFromNow, 'en'));
console.log('  Vietnamese:', getRelativeTime(hoursFromNow, 'vi'));
console.log();

// Days from now
const daysFromNow = addDays(now, 3);
console.log('3 days from now:');
console.log('  English:', getRelativeTime(daysFromNow, 'en'));
console.log('  Vietnamese:', getRelativeTime(daysFromNow, 'vi'));

console.log('\n=== formatDuration() Examples ===\n');

// Various durations
const durations = [
  { ms: 5000, label: '5 seconds' },
  { ms: 90000, label: '1.5 minutes' },
  { ms: 3600000, label: '1 hour' },
  { ms: 5400000, label: '1.5 hours' },
  { ms: 90000000, label: '25 hours (1+ day)' },
];

durations.forEach(({ ms, label }) => {
  console.log(`${label}:`);
  console.log('  English:', formatDuration(ms, 'en'));
  console.log('  Vietnamese:', formatDuration(ms, 'vi'));
  console.log();
});

console.log('=== Practical Use Cases ===\n');

// Social media post timestamp
const postTime = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago
console.log('Social media post:');
console.log('  English: Posted', getRelativeTime(postTime, 'en'));
console.log('  Vietnamese: Đăng', getRelativeTime(postTime, 'vi'));
console.log();

// Event reminder
const eventTime = addHours(now, 3);
console.log('Event reminder:');
console.log('  English: Meeting starts', getRelativeTime(eventTime, 'en'));
console.log('  Vietnamese: Cuộc họp bắt đầu', getRelativeTime(eventTime, 'vi'));
console.log();

// Video duration
const videoDuration = 125000; // 2 minutes 5 seconds
console.log('Video duration:');
console.log('  English:', formatDuration(videoDuration, 'en'));
console.log('  Vietnamese:', formatDuration(videoDuration, 'vi'));
console.log();

// Last login timestamp
const lastLogin = addDays(now, -7);
console.log('Last login:');
console.log('  English: Last seen', getRelativeTime(lastLogin, 'en'));
console.log('  Vietnamese: Truy cập lần cuối', getRelativeTime(lastLogin, 'vi'));
