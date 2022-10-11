'use strict'

function breakingRecords(scores) {
  const array = [];
  let best = 0;
  let worst = 0;
  for (let i = 0; i < scores.length; i++) {
    array.push(scores[i]);
    const max = Math.max(...array);
    const min = Math.min(...array);
    if (scores[i + 1] > max) {
      best++;
    }
    if (scores[i + 1] < min) {
      worst++;
    }
  }
  return [best, worst];
}
