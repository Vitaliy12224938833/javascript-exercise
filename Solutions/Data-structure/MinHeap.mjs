export class MinHeap {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  peec() {
    return this.data[0];
  }

  size() {
    return this.length;
  }

  add(value) {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  addArray(array) {
    for (const value of array) {
      this.add(value);
    }
  }

  delete() {
    if (this.length === 0) return;

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  heapifyUp(index) {
    if (!index) return;

    const parent = Math.floor((index - 1) / 2);
    const parentValue = this.data[parent];
    const value = this.data[index];

    if (parentValue > value) {
      this.data[index] = parentValue;
      this.data[parent] = value;
      this.heapifyUp(parent);
    }
  }

  heapifyDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    if (index >= this.length || leftIndex >= this.length) return;

    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const value = this.data[index];

    if (leftValue >= rightValue && value >= rightValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = value;
      this.heapifyDown(rightIndex);
    } else if (rightValue >= leftValue && value >= leftValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = value;
      this.heapifyDown(leftIndex);
    }
  }
}