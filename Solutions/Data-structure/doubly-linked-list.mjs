class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.tail = node;
      this.head = this.tail;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  append(value) {
    this.length++;
    const node = new Node(value);
    node.prev = this.tail;
    if (!this.tail) {
      this.tail = node;
      this.head = this.tail;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  insertAt(value, index) {
    if (index > this.length) {
      throw new Error(`index:${index} exceeds list length: ${this.length}`);
    }
    if (index === 0) this.prepend(value);
    if (index === this.length) this.append(value);
    let curr = this.head;
    for (let i = 0; curr && i < index; i++) {
      curr = curr.next;
    }
    const node = new Node(value);
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    if (node.prev) node.prev.next = node;
    this.length++;
    return;
  }

  logAllValue() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  remove(value) {
    let curr = this.head;
    for (let i = 0; i < this.length; i++) {
      if (curr.value === value) {
        if (!curr) return;
        if (!curr.next) return this.pop();
        if (!curr.prev) return this.shift();
        if (curr.next && curr.prev) {
          const node = curr;
          node.next.prev = node.prev;
          node.prev.next = node.next;
          this.length--;
          return curr.value;
        }
      }
      curr = curr.next;
    }
  }

  removeAt(index) {
    let curr = this.head;
    for (let i = 0; curr && i < index; i++) {
      curr = curr.next;
    }
    this.remove(curr.value);
    return curr.value;
  }

  pop() {
    if (!this.head) return null;
    const tail = this.tail;
    this.tail = tail.prev;
    if (this.tail) this.tail.next = null;
    this.length--;
    return tail.value;
  }

  shift() {
    if (this.length === 0) return null;
    const head = this.head;
    this.head = head.next;
    this.head.prev = null;
    this.length--;
    return head.value;
  }

  get(index) {
    let curr = this.head;
    for (let i = 0; curr && i < index; i++) {
      curr = curr.next;
    }
    return curr.value;
  }
}
