// Calculate the number of difference days between two dates
//
// {Example}
// diffDays(new Date('2014-12-19'), new Date('2020-01-01'));   // 1839
export default function (date, otherDate) {
  return Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
}
