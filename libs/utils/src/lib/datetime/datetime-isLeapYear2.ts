// Check if a year is leap year
//
export default function (year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//
// Or
// Get the number of days in February
export const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;
