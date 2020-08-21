// Convert camel case to kebab case and vice versa
//
// // Examples
// camelToKebab('backgroundColor');    // 'background-color'
//
//
export default function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
