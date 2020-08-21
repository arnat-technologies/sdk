// Get the length of a string in bytes
//
// // Examples
// bytes('hello world');       // 11
// bytes('🎉');                // 4
//
export default function bytes(str) {
  return new Blob([str]).size;
}
