const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  const result = [];
  let newNum = num;
  for (const key in romanNumerals) {
    while (newNum >= romanNumerals[key]) {
      if (romanNumerals[key] <= newNum) {
        result.push(key);
        newNum -= romanNumerals[key];
      }
    }
  }
  return result.join("");
}

console.log(convertToRoman(83));
