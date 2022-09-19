function compareTriplets(a, b) {
  let bobPoints = 0;
  let alicePoints = 0;
  const result = [];
  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] < b[i]) {
      bobPoints++;
    } else if (a[i] > b[i]) {
      alicePoints++;
    }
  }
  result.push(alicePoints);
  result.push(bobPoints);
  return result;
}
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
