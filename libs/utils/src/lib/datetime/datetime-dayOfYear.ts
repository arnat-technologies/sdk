// Get the day of the year from a date
//
//
// // Example
// dayOfYear(new Date(2020, 04, 16));      // 137
// `date` is a Date object
export const dayOfYear = (date) =>
  Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
