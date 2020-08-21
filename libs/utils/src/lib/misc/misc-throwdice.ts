// Emulate a dice throw
//
//
// // Examples
// throwdice();    // 4
// throwdice();    // 1
// throwdice();    // 6
export const throwdice = () => ~~(Math.random() * 6) + 1;
