"use strict";

const sum = (...args) => args.reduce((x, y) => (x + y), 0);
// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

module.exports = { sum };
console.log(sum(10, -1, -1, -1));
