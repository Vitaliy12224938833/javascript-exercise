class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BineryTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  add(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    }

    let curr = this.root;
    while (curr) {
      if (curr.value === value) return;

      const dir = curr.value > value ? "left" : "right";

      if (!curr[dir]) {
        curr[dir] = node;
      }
      curr = curr[dir];
    }
  }

  revers(node = this.root) {
    if (!node) return;
    [node.left, node.right] = [node.right, node.left];
    this.revers(node.left);
    this.revers(node.right);
  }

  addRevers(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    }

    let curr = this.root;
    while (curr) {
      if (curr.value === value) return;

      const dir = curr.value < value ? "left" : "right";

      if (!curr[dir]) {
        curr[dir] = node;
      }
      curr = curr[dir];
    }
  }

  remove(value) {
    if (!this.root) return null;

    let target = this.root;
    let parent = this.root;
    if (this.root.left.value < this.root.right.value) {
      while (target.value !== value && target) {
        parent = target;
        if (value > target.value) {
          target = target.right;
        } else target = target.left;
      }
    } else {
      while (target.value !== value && target) {
        parent = target;
        if (value < target.value) {
          target = target.right;
        } else target = target.left;
      }
    }

    const child = (target.left ? 1 : 0) + (target.right ? 1 : 0);
    const dir = parent.left.value === target.value ? "left" : "right";

    if (child === 0) {
      parent[dir] = null;
      return;
    }

    if (child === 1) {
      const dirTarget = target.left ? "left" : "right";
      parent[dir] = target[dirTarget];
      return;
    }
    if (child === 2) {
      const newChild = this.findMinValue(target.right);
      this.remove(newChild);
      if (parent.value === value) {
        parent.value = newChild;
        return;
      }
      parent[dir].value = newChild;
      return;
    }
  }

  findMaxValue(node = this.root) {
    if (!node) return;
    return node.right ? this.findMaxValue(node.right) : node.value;
  }

  findMinValue(node = this.root) {
    if (!node) return;
    return node.left ? this.findMinValue(node.left) : node.value;
  }
}
