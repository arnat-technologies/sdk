// Check if a value is a generator function
//
// // Examples
// isGeneratorFunction(function() {});     // false
// isGeneratorFunction(function*() {});    // true
export default function (v) {
  return Object.prototype.toString.call(v) === '[object GeneratorFunction]';
}
