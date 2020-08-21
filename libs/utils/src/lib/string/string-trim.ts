// Trim some character
//
//
// // Examples
// trim('/hello world//', '/');        // hello world
// trim('"hello world"', '"');         // hello world
// trim('   hello world ', ' ');       // hello world
//
export default function trim(str, char) {
  return str.split(char).filter(Boolean).join();
}
