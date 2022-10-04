"use strict";

function getTotalX(a, b) {
  let validCount = 0;
  const minEllB = Math.min(...b);
  for (let x = 1; x <= minEllB; x++) {
    if (a.every((ell) => x % ell === 0)) {
      if (b.every((ell) => ell % x === 0)) {
        validCount++;
      }
    }
  }
  return validCount;
}

console.log(getTotalX([2], [20, 30, 12]));
console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([3, 4], [24, 48]));
console.log(getTotalX([1], [72, 48]));
console.log(getTotalX([2, 3, 6], [42, 84])); //2
console.log(getTotalX([3, 9, 6], [36, 72])); //2
