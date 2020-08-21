// Extract year month day hour minute second and millisecond from a date
//
// `extract` is an array of [year, month, day, hour, minute, second, millisecond]
// `date` is a `Date` object
export const extract = (date) =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);
