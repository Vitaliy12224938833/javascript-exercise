"use strict";

const sum = (...args) => {
  let x = 0;
  let i = 0;
  while (i < args.length) {
    x += args[i];
    i++;
  }
  return x;
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
};

module.exports = { sum };
console.log(sum(1, 2, 3));
