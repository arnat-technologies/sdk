// Get the number of days in given month
//
// `month` is zero-based index
export const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
