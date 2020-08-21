// Get the sum of array of numbers
export default function sum(arr?) {
  if (!arr || !Array.isArray(arr)) throw new Error('should pass an array');

  return arr.reduce((a, b) => a + b, 0);
}

// @G4t0*.201e
