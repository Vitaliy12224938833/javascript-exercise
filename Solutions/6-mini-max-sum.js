"use strict";

function miniMaxSum(arr) {
  const minItem = Math.min(...arr);
  const maxItem = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const minSum = Math.abs(sum - maxItem);
  const maxSum = Math.abs(sum - minItem);
  return console.log(minSum, maxSum);
}
miniMaxSum([7, 69, 2, 221, 8974]);
