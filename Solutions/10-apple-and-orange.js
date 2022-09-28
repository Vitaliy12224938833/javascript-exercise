"use strick";

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const eachApples = apples.map((item) => item + a);
  const eachOranges = oranges.map((item) => item + b);
  let apple = 0;
  let orange = 0;
  eachApples.map((item) => (item >= s && item <= t ? apple++ : false));
  eachOranges.map((item) => (item >= s && item <= t ? orange++ : false));
  return `${apple}\n${orange}`;
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
