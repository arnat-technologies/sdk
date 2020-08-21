// Check if a string contains only ascii characters
//
export const isAscii = (str) => /^[\x00-\x7F]+$/.test(str);
