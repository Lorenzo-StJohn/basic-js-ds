const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let pointer = l;
  if (pointer.value === k) {
    let newPointer = pointer;
    while (newPointer !== null && newPointer.value === k)
      newPointer = newPointer.next;
    if (newPointer === null) return null;
    pointer.value = newPointer.value;
    pointer.next = newPointer.next;
  }
  while (pointer.next !== null) {
    if (pointer.next.value === k) {
      let newPointer = pointer.next;
      while (newPointer !== null && newPointer.value === k)
        newPointer = newPointer.next;
      if (newPointer === null) pointer.next = null;
      else {
        pointer.next = newPointer;
      }
    } else pointer = pointer.next;
  }
  return l;
}

module.exports = {
  removeKFromList,
};
