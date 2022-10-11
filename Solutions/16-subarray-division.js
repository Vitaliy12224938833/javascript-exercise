"use strict";
function birthday(s, d, m) {
  let result = 0;
  let sumPiece = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < m; j++) {
      sumPiece += s[i + j];
    }
    if (sumPiece === d) {
      result++;
    }
    sumPiece = 0;
  }
  return result;
}

console.log(
  birthday(
    [
      3, 5, 4, 1, 2, 5, 3, 4, 3, 2, 1, 1, 2, 4, 2, 3, 4, 5, 3, 1, 2, 5, 4, 5, 4,
      1, 1, 5, 3, 1, 4, 5, 2, 3, 2, 5, 2, 5, 2, 2, 1, 5, 3, 2, 5, 1, 2, 4, 3, 1,
      5, 1, 3, 3, 5,
    ],
    18,
    6
  )
);