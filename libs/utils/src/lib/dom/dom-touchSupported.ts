// Check if the touch events are supported
//
export const touchSupported = () =>
  'ontouchstart' in window ||
  (window.DocumentTouch && document instanceof window.DocumentTouch);
