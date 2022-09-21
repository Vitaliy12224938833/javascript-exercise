"use strict";

const sum = (...args) => {
  let x = 0;
  let i = 0;
  do {
    x += args[i];
    i++;
  } while (i < args.length);
  return x;
  // Use do..while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
};

module.exports = { sum };
console.log(sum(10, -1, -1, -1));
