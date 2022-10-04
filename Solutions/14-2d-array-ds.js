"use strict"
const matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourGlassSum(arr) {
  const maxX = 3; 
  const maxY = 3; 
  let total = -Infinity; 
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];
      sum += arr[y + 1][x + 1];
      sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];
      if (total < sum) total = sum;
    }
  }
  return total;
}
console.log(hourGlassSum(matrix));
