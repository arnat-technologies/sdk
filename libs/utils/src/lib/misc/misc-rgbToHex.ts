// Convert rgb color to hex
//
//
// // Example
// rgbToHex(0, 255, 255);      // '#00ffff'
//
export const rgbToHex = (red, green, blue) =>
  `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
//
// Or
export const rgbToHex = (red, green, blue) =>
  `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
