const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    if (this.data === undefined) return null;
    return this;
  }

  add(data) {
    let node = this;
    while (node.data !== undefined) {
      if (data < node.data) node = node.left;
      else if (data > node.data) node = node.right;
      else return;
    }
    node.data = data;
    node.left = new BinarySearchTree();
    node.right = new BinarySearchTree();
  }

  has(data) {
    let node = this;
    while (node.data !== undefined) {
      if (data < node.data) node = node.left;
      else if (data > node.data) node = node.right;
      else return true;
    }
    return false;
  }

  find(data) {
    let node = this;
    while (node.data !== undefined) {
      if (data < node.data) node = node.left;
      else if (data > node.data) node = node.right;
      else return node;
    }
    return null;
  }

  remove(data) {
    let node = this;
    while (node.data !== data) {
      if (node.data === undefined) return;
      if (data < node.data) node = node.left;
      else if (data > node.data) node = node.right;
    }
    if (node.left.data !== undefined) {
      const extra = node.right;
      node.data = node.left.data;
      node.right = node.left.right;
      node.left = node.left.left;
      while (node.data !== undefined) {
        node = node.right;
      }
      node.data = extra.data;
      node.left = extra.left;
      node.right = extra.right;
    } else if (node.right.data !== undefined) {
      node.data = node.right.data;
      node.left = node.right.left;
      node.right = node.right.right;
    } else node.data = undefined;
  }

  min() {
    let ans = null;
    let node = this;
    while (node.data !== undefined) {
      ans = node.data;
      node = node.left;
    }
    return ans;
  }

  max() {
    let ans = null;
    let node = this;
    while (node.data !== undefined) {
      ans = node.data;
      node = node.right;
    }
    return ans;
  }
}

module.exports = {
  BinarySearchTree,
};
