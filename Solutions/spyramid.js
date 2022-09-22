"use strict";

function MMM(n) {
  const pyramida = [];
  const pyramidFloor = [];
  let j = n;
  let strPyramidFloor = ``;
  for (let i = 1; i <= n; i++) {
    pyramidFloor[j] = `$`;
    strPyramidFloor = pyramidFloor.join(` `);
    pyramida[i] = strPyramidFloor;
    j--;
  }
  return `${pyramida.join(`
`)}`;
}
console.log(MMM(10));
