// Get the first defined and non null argument
//
//
//  // Examples
//  coalesce(undefined, null, 'helloworld', NaN);     // 'helloworld'
//
export const coalesce = (...args) =>
  args.find((item) => item !== undefined && item !== null);
