// Check if a date is today
//
// `date` is a Date object
export default function (date) {
  return (
    date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)
  );
}
