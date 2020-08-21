// Calculate the mod of collection index
//
// // Examples
// mod(-1, 5);     // 4
// mod(3, 5);      // 3
// mod(6, 5);      // 1
//
export default function mod(a, b) {
  return ((a % b) + b) % b;
}
