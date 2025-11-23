/**
 * Formats a date to a readable string (e.g., "Jan 1, 2024")
 * @param date - The date to format
 * @param format - The format type ('short', 'medium', or 'long')
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export function formatDate(date: Date, format: 'short' | 'medium' | 'long' = 'medium', locale: 'en' | 'vi' = 'en'): string {
  const formatOptions: Record<string, Intl.DateTimeFormatOptions> = {
    short: { month: 'short', day: 'numeric', year: 'numeric' },
    medium: { month: 'long', day: 'numeric', year: 'numeric' },
    long: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
  };

  const localeCode = locale === 'vi' ? 'vi-VN' : 'en-US';
  return date.toLocaleDateString(localeCode, formatOptions[format]);
}

/**
 * Formats a date to a time string (e.g., "3:45 PM")
 * @param date - The date to format
 * @param use24Hour - Whether to use 24-hour format
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export function formatTime(date: Date, use24Hour: boolean = false, locale: 'en' | 'vi' = 'en'): string {
  const localeCode = locale === 'vi' ? 'vi-VN' : 'en-US';
  return date.toLocaleTimeString(localeCode, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: !use24Hour,
  });
}

/**
 * Formats a date to a combined date and time string
 * @param date - The date to format
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export function formatDateTime(date: Date, locale: 'en' | 'vi' = 'en'): string {
  const separator = locale === 'vi' ? 'lúc' : 'at';
  return `${formatDate(date, 'medium', locale)} ${separator} ${formatTime(date, false, locale)}`;
}

/**
 * Returns a relative time string (e.g., "2 hours ago", "in 3 days")
 * @param date - The date to compare against now
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export function getRelativeTime(date: Date, locale: 'en' | 'vi' = 'en'): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.abs(Math.floor(diffMs / 1000));
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  const isPast = diffMs > 0;

  if (locale === 'vi') {
    // Vietnamese locale
    if (diffSecs < 60) {
      return 'vừa xong';
    } else if (diffMins < 60) {
      return isPast
        ? `${diffMins} phút trước`
        : `${diffMins} phút nữa`;
    } else if (diffHours < 24) {
      return isPast
        ? `${diffHours} giờ trước`
        : `${diffHours} giờ nữa`;
    } else if (diffDays < 7) {
      return isPast
        ? `${diffDays} ngày trước`
        : `${diffDays} ngày nữa`;
    } else if (diffWeeks < 4) {
      return isPast
        ? `${diffWeeks} tuần trước`
        : `${diffWeeks} tuần nữa`;
    } else if (diffMonths < 12) {
      return isPast
        ? `${diffMonths} tháng trước`
        : `${diffMonths} tháng nữa`;
    } else {
      return isPast
        ? `${diffYears} năm trước`
        : `${diffYears} năm nữa`;
    }
  } else {
    // English locale (default)
    const suffix = isPast ? 'ago' : 'from now';
    const prefix = isPast ? '' : 'in ';

    if (diffSecs < 60) {
      return 'just now';
    } else if (diffMins < 60) {
      return `${prefix}${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ${suffix}`;
    } else if (diffHours < 24) {
      return `${prefix}${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ${suffix}`;
    } else if (diffDays < 7) {
      return `${prefix}${diffDays} ${diffDays === 1 ? 'day' : 'days'} ${suffix}`;
    } else if (diffWeeks < 4) {
      return `${prefix}${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weeks'} ${suffix}`;
    } else if (diffMonths < 12) {
      return `${prefix}${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ${suffix}`;
    } else {
      return `${prefix}${diffYears} ${diffYears === 1 ? 'year' : 'years'} ${suffix}`;
    }
  }
}

/**
 * Converts milliseconds to a human-readable duration
 * @param milliseconds - The duration in milliseconds
 * @param locale - Language locale ('en' or 'vi'), defaults to 'en'
 */
export function formatDuration(milliseconds: number, locale: 'en' | 'vi' = 'en'): string {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (locale === 'vi') {
    // Vietnamese format
    if (days > 0) {
      return `${days} ngày ${hours % 24} giờ`;
    } else if (hours > 0) {
      return `${hours} giờ ${minutes % 60} phút`;
    } else if (minutes > 0) {
      return `${minutes} phút ${seconds % 60} giây`;
    } else {
      return `${seconds} giây`;
    }
  } else {
    // English format (abbreviated)
    if (days > 0) {
      return `${days}d ${hours % 24}h`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }
}

/**
 * Adds a specified number of days to a date
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Adds a specified number of hours to a date
 */
export function addHours(date: Date, hours: number): Date {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
}

/**
 * Adds a specified number of minutes to a date
 */
export function addMinutes(date: Date, minutes: number): Date {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() + minutes);
  return result;
}

/**
 * Checks if a date is in the past
 */
export function isPast(date: Date): boolean {
  return date.getTime() < new Date().getTime();
}

/**
 * Checks if a date is in the future
 */
export function isFuture(date: Date): boolean {
  return date.getTime() > new Date().getTime();
}

/**
 * Gets the start of the day (midnight) for a given date
 */
export function startOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Gets the end of the day (23:59:59.999) for a given date
 */
export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Checks if two dates are on the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
