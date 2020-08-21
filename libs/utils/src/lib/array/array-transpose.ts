// Swap the rows and columns of a matrix
//
//
// // Example
// transpose([             // [
//     [1, 2, 3],          //      [1, 4, 7],
//     [4, 5, 6],          //      [2, 5, 8],
//     [7, 8, 9],          //      [3, 6, 9],
// ]);                     //  ]
//
export default function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}
