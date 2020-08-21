// Convert a date to yyyy mm dd format
//
//
// // Example
// formatYmd(new Date());      // 2020-05-06
// `date` is a `Date` object
export const formatYmd = (date) => date.toISOString().slice(0, 10);
