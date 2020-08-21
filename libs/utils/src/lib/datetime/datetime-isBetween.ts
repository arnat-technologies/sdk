// Check if a date is between two dates
//
// `min`, `max` and `date` are `Date` instances
export default function (date, min, max) {
  return date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
}
