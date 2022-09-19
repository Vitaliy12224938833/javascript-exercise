function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    firstDiagonal += num[i];
  }
  let q = 0;
  while (q < arr.length) {
    for (let j = arr.length - 1; j >= 0; j--) {
      const num = arr[q];
      secondDiagonal += num[j];
      q++;
    }
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
