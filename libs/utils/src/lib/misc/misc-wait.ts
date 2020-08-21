// Wait for an amount of time
//
export const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
