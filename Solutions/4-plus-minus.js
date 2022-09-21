"use strict";

function plusMinus(arr) {
  let amountPosNum = 0;
  let amountNegNum = 0;
  let amountZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      amountPosNum++;
    } else if (arr[i] < 0) {
      amountNegNum++;
    } else {
      amountZeros++;
    }
  }
  const propPosValues = (amountPosNum / arr.length).toFixed(6);
  const propNegValues = (amountNegNum / arr.length).toFixed(6);
  const propZeros = (amountZeros / arr.length).toFixed(6);
  return console.log(`${propPosValues}
${propNegValues}
${propZeros}`);
}
plusMinus([1, 1, 0, -1, -1]);
