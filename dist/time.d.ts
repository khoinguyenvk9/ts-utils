/**
 * Formats a date to a readable string (e.g., "Jan 1, 2024")
 * @param date - The date to format
 * @param format - The format type ('short', 'medium', or 'long')
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export declare function formatDate(date: Date, format?: 'short' | 'medium' | 'long', locale?: 'en' | 'vi'): string;
/**
 * Formats a date to a time string (e.g., "3:45 PM")
 * @param date - The date to format
 * @param use24Hour - Whether to use 24-hour format
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export declare function formatTime(date: Date, use24Hour?: boolean, locale?: 'en' | 'vi'): string;
/**
 * Formats a date to a combined date and time string
 * @param date - The date to format
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export declare function formatDateTime(date: Date, locale?: 'en' | 'vi'): string;
/**
 * Returns a relative time string (e.g., "2 hours ago", "in 3 days")
 * @param date - The date to compare against now
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export declare function getRelativeTime(date: Date, locale?: 'en' | 'vi'): string;
/**
 * Converts milliseconds to a human-readable duration
 * @param milliseconds - The duration in milliseconds
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export declare function formatDuration(milliseconds: number, locale?: 'en' | 'vi'): string;
/**
 * Adds a specified number of days to a date
 */
export declare function addDays(date: Date, days: number): Date;
/**
 * Adds a specified number of hours to a date
 */
export declare function addHours(date: Date, hours: number): Date;
/**
 * Adds a specified number of minutes to a date
 */
export declare function addMinutes(date: Date, minutes: number): Date;
/**
 * Checks if a date is in the past
 */
export declare function isPast(date: Date): boolean;
/**
 * Checks if a date is in the future
 */
export declare function isFuture(date: Date): boolean;
/**
 * Gets the start of the day (midnight) for a given date
 */
export declare function startOfDay(date: Date): Date;
/**
 * Gets the end of the day (23:59:59.999) for a given date
 */
export declare function endOfDay(date: Date): Date;
/**
 * Checks if two dates are on the same day
 */
export declare function isSameDay(date1: Date, date2: Date): boolean;
