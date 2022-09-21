"use strict";
function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const leftNum = arr[i];
    firstDiagonal += leftNum[i];
    const rightNum = arr[i];
    secondDiagonal += rightNum[j];
    j--;
  }
  return Math.abs(firstDiagonal - secondDiagonal);
}

console.log(
  diagonalDifference([
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [10, 9, 7, -1],
    [4, 4, -2, 1],
  ])
);
