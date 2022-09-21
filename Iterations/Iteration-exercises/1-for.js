"use strict";

const sum = (...args) => {
  let x = 0;
  for (let i = 0; i < args.length; i++) {
    x += args[i];
  }
  return x;
  // Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
};

module.exports = { sum };
console.log(sum(1, 2, 3));
