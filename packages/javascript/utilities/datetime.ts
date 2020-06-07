// getting inspired by: https://1loc.dev

// Calculate the number of difference days between two dates
//
//
// // Example
// diffDays(new Date('2014-12-19'), new Date('2020-01-01'));   // 1839
export const diffDays = (date, otherDate) =>
  Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

// Check if a date is between two dates
//
// `min`, `max` and `date` are `Date` instances
export const isBetween = (date, min, max) =>
  date.getTime() >= min.getTime() && date.getTime() <= max.getTime();

// Check if a date is today
//
// `date` is a Date object
export const isToday = (date) =>
  date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);

// Check if a year is leap year
//
export const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//
// Or
// Get the number of days in February
export const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;

// Compare two dates
//
//
// // Example
// compare(new Date('2020-03-30'), new Date('2020-01-01'));    // true
// `a` and `b` are `Date` instances
export const compare = (a, b) => a.getTime() > b.getTime();

// Convert a date to yyyy mm dd format
//
//
// // Example
// formatYmd(new Date());      // 2020-05-06
// `date` is a `Date` object
export const formatYmd = (date) => date.toISOString().slice(0, 10);

// Convert seconds to hh mm ss format
//
//
// // Examples
// formatSeconds(200);     // 00:03:20
// formatSeconds(500);     // 00:08:20
//
// `s` is number of seconds
export const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);
//
// Or
export const formatSeconds = (s) => new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
//
// Or
export const formatSeconds = (s) =>
  [parseInt(s / 60 / 60), parseInt((s / 60) % 60), parseInt(s % 60)]
    .join(':')
    .replace(/\b(\d)\b/g, '0$1');

// Extract year month day hour minute second and millisecond from a date
//
// `extract` is an array of [year, month, day, hour, minute, second, millisecond]
// `date` is a `Date` object
export const extract = (date) =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);

// Format a date for the given locale
//
//
// // Example
// format(new Date(), 'pt-BR');    // 06/05/2020
// `date` is a `Date` object
// `locale` is a locale (en-US, pt-BR, for example)
export const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date);

// Get the current timestamp in seconds
//
export const ts = () => Math.floor(new Date().getTime() / 1000);

// Get the day of the year from a date
//
//
// // Example
// dayOfYear(new Date(2020, 04, 16));      // 137
// `date` is a Date object
export const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

// Get the month name of a date
//
// `date` is a Date object
export const getMonthName = (date) =>
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    ' November',
    'December',
  ][date.getMonth()];

// Get the number of days in given month
//
// `month` is zero-based index
export const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

// Get the tomorrow date
//
export const tomorrow = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date());
//
// Or
export const tomorrow = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);

// Get the weekday of a date
//
// `date` is a Date object
export const getWeekday = (date) =>
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];

// Get the yesterday date
//
export const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());
//
// Or
export const yesterday = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);

// Sort an array of dates
//
// `arr` is an array of `Date` items
export const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime());
export const sortAscending = (arr) => arr.sort((a, b) => a.getTime() < b.getTime());

// Validate a gregorian date
//
// `m`: the month (zero-based index)
// `d`: the day
// `y`: the year
export const isValidDate = (m, d, y) =>
  0 <= m && m <= 11 && 0 < y && y < 32768 && 0 < d && d <= new Date(y, m, 0).getDate();
