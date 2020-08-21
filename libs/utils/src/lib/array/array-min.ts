// Find the minimum item of an array
export default function min(arr) {
  if (!arr || !Array.isArray(arr)) throw new Error('you should pass an array');
  return Math.min(...arr);
}
