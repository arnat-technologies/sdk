// Easing functions
//
// Some easing functions
// See https://gist.github.com/gre/1650294 and https://easings.net
//
export const linear = (t) => t;
//
export const easeInQuad = (t) => t * t;
export const easeOutQuad = (t) => t * (2 - t);
export const easeInOutQuad = (t) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//
export const easeInCubic = (t) => t * t * t;
export const easeOutCubic = (t) => --t * t * t + 1;
export const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//
export const easeInQuart = (t) => t * t * t * t;
export const easeOutQuart = (t) => 1 - --t * t * t * t;
export const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
//
export const easeInQuint = (t) => t * t * t * t * t;
export const easeOutQuint = (t) => 1 + --t * t * t * t * t;
export const easeInOutQuint = (t) =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
//
export const easeInSine = (t) => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
export const easeOutSine = (t) => Math.sin((Math.PI / 2) * t);
export const easeInOutSine = (t) =>
  (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
//
export const easeInElastic = (t) => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
export const easeOutElastic = (t) => ((0.04 * t) / --t) * Math.sin(25 * t);
export const easeInOutElastic = (t) =>
  (t -= 0.5) < 0
    ? (0.02 + 0.01 / t) * Math.sin(50 * t)
    : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1;
