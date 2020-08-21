// Format a date for the given locale
//
//
// // Example
// format(new Date(), 'pt-BR');    // 06/05/2020
// `date` is a `Date` object
// `locale` is a locale (en-US, pt-BR, for example)
export const format = (date, locale) =>
  new Intl.DateTimeFormat(locale).format(date);
