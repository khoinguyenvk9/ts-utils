"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.formatTime = formatTime;
exports.formatDateTime = formatDateTime;
exports.getRelativeTime = getRelativeTime;
exports.formatDuration = formatDuration;
exports.addDays = addDays;
exports.addHours = addHours;
exports.addMinutes = addMinutes;
exports.isPast = isPast;
exports.isFuture = isFuture;
exports.startOfDay = startOfDay;
exports.endOfDay = endOfDay;
exports.isSameDay = isSameDay;
/**
 * Formats a date to a readable string (e.g., "Jan 1, 2024")
 */
function formatDate(date, format = 'medium') {
    const formatOptions = {
        short: { month: 'short', day: 'numeric', year: 'numeric' },
        medium: { month: 'long', day: 'numeric', year: 'numeric' },
        long: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
    };
    return date.toLocaleDateString('en-US', formatOptions[format]);
}
/**
 * Formats a date to a time string (e.g., "3:45 PM")
 */
function formatTime(date, use24Hour = false) {
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: !use24Hour,
    });
}
/**
 * Formats a date to a combined date and time string
 */
function formatDateTime(date) {
    return `${formatDate(date)} at ${formatTime(date)}`;
}
/**
 * Returns a relative time string (e.g., "2 hours ago", "in 3 days")
 */
function getRelativeTime(date) {
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
    const suffix = isPast ? 'ago' : 'from now';
    const prefix = isPast ? '' : 'in ';
    if (diffSecs < 60) {
        return 'just now';
    }
    else if (diffMins < 60) {
        return `${prefix}${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ${suffix}`;
    }
    else if (diffHours < 24) {
        return `${prefix}${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ${suffix}`;
    }
    else if (diffDays < 7) {
        return `${prefix}${diffDays} ${diffDays === 1 ? 'day' : 'days'} ${suffix}`;
    }
    else if (diffWeeks < 4) {
        return `${prefix}${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weeks'} ${suffix}`;
    }
    else if (diffMonths < 12) {
        return `${prefix}${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ${suffix}`;
    }
    else {
        return `${prefix}${diffYears} ${diffYears === 1 ? 'year' : 'years'} ${suffix}`;
    }
}
/**
 * Converts milliseconds to a human-readable duration
 */
function formatDuration(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
        return `${days}d ${hours % 24}h`;
    }
    else if (hours > 0) {
        return `${hours}h ${minutes % 60}m`;
    }
    else if (minutes > 0) {
        return `${minutes}m ${seconds % 60}s`;
    }
    else {
        return `${seconds}s`;
    }
}
/**
 * Adds a specified number of days to a date
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
/**
 * Adds a specified number of hours to a date
 */
function addHours(date, hours) {
    const result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
}
/**
 * Adds a specified number of minutes to a date
 */
function addMinutes(date, minutes) {
    const result = new Date(date);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
}
/**
 * Checks if a date is in the past
 */
function isPast(date) {
    return date.getTime() < new Date().getTime();
}
/**
 * Checks if a date is in the future
 */
function isFuture(date) {
    return date.getTime() > new Date().getTime();
}
/**
 * Gets the start of the day (midnight) for a given date
 */
function startOfDay(date) {
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);
    return result;
}
/**
 * Gets the end of the day (23:59:59.999) for a given date
 */
function endOfDay(date) {
    const result = new Date(date);
    result.setHours(23, 59, 59, 999);
    return result;
}
/**
 * Checks if two dates are on the same day
 */
function isSameDay(date1, date2) {
    return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());
}
