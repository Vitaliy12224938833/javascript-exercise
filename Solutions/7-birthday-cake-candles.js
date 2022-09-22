function birthdayCakeCandles(candles) {
  let numCandles = 0;
  const maxCandles = Math.max(...candles)
  for (let i = 0; i < candles.length; i++) {
    if (maxCandles === candles[i]) {
      numCandles++;
    }
  }
  return numCandles;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
