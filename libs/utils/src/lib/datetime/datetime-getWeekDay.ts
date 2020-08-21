// Get the weekday of a date
//
// `date` is a Date object
export const getWeekday = (date) =>
  [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][date.getDay()];
