//  Check if a value is a function
//
// // Examples
// isFunction(function() {});          // true
// isFunction(function*() {});         // true
// isFunction(async function() {});    // true
export default function (v) {
  return [
    '[object Function]',
    '[object GeneratorFunction]',
    '[object AsyncFunction]',
    '[object Promise]',
  ].includes(Object.prototype.toString.call(v));
}
