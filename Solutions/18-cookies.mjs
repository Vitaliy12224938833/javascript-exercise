import { MinHeap } from "./Data-structure/MinHeap.mjs";

export function cookies(minValue, array) {
  const heap = new MinHeap();
  heap.addArray(array);
  let counter = 0;

  while (heap.size() > 1) {
    if (heap.peec() > minValue) {
      break;
    }

    heap.add(heap.delete() + heap.delete() * 2);
    counter++;
  }

  if (heap.peec() < minValue) {
    counter = -1;
  }
  return counter;
}

const array = [
  3554, 2227, 8866, 9890, 212, 8669, 2423, 7651, 3878, 3379, 1419, 6134, 5767,
  859, 2848, 9309, 1449, 8408, 8041, 3367, 6676, 6382, 4136, 4871,
];

console.log(cookies(47245, array));
