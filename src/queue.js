const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  enqueue(value) {
    let pointer = this;
    if (pointer.value === undefined) {
      this.value = value;
      this.next = null;
    } else {
      while (pointer.next !== null) pointer = pointer.next;
      pointer.next = {
        value,
        next: null,
      };
    }
  }

  dequeue() {
    if (this.value === undefined) return undefined;
    if (this.next === null) {
      const ans = this.value;
      this.value = undefined;
      this.next = undefined;
      return ans;
    }
    const ans = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return ans;
  }
}

module.exports = {
  Queue,
};
