"use strict";

const sum = (...args) => {
  let x = 0;
  for (const num in args) {
    x += args[num];
  }
  return x;
  // Use for..of loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
};

module.exports = { sum };
console.log(sum(10, -1, -1, -1));
