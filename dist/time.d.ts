/**
 * Formats a date to a readable string (e.g., "Jan 1, 2024")
 */
export declare function formatDate(date: Date, format?: 'short' | 'medium' | 'long'): string;
/**
 * Formats a date to a time string (e.g., "3:45 PM")
 */
export declare function formatTime(date: Date, use24Hour?: boolean): string;
/**
 * Formats a date to a combined date and time string
 */
export declare function formatDateTime(date: Date): string;
/**
 * Returns a relative time string (e.g., "2 hours ago", "in 3 days")
 */
export declare function getRelativeTime(date: Date): string;
/**
 * Converts milliseconds to a human-readable duration
 */
export declare function formatDuration(milliseconds: number): string;
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
