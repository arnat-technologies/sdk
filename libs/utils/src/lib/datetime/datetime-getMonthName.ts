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
