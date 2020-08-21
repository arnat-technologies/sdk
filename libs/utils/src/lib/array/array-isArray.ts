// Check if an object is an array
//
//
export default function isArray(obj?) {
  if (!obj) throw new Error('you should pass an argument');

  return Array.isArray(obj);
}
