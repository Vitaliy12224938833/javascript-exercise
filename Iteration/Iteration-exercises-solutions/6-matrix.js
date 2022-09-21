"use strict";
const max = (matrix) => {
  const matrixArray = String(matrix).split(",");
  const maxValue = Math.max(...matrixArray);
  return maxValue;
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
};

module.exports = { max };

console.log(
  max([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
