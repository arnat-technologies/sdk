// Convert camel case to kebab case and vice versa
//
// // Examples
// kebabToCamel('background-color');   // 'backgroundColor'
// camelToKebab('backgroundColor');    // 'background-color'
// kebabToCamel('background-color');   // 'backgroundColor'
//
export default function kebabToCamel(str: string) {
  return str.replace(/-./g, (m) => m.toUpperCase()[1]);
}
