// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.list = null;
  }

  get size() {
    return '';
  }

  enqueue(element) {
    if (this.list === null) {
      this.list = new ListNode(element);
    } else {
      const nextlist = new ListNode(element);
      nextlist.next = this.list;
      this.list = nextlist;
    }
  }

  dequeue() {
    let nextlist = null;
    let newlist = null;
    while (this.list.next !== null) {
      nextlist = new ListNode(this.list.value);
      nextlist.next = newlist;
      newlist = nextlist;
      this.list = this.list.next;
    }
    const listup = this.list.value;
    this.list = newlist;
    if (this.list !== null) {
      nextlist = null;
      newlist = null;
      while (this.list.next !== null) {
        nextlist = new ListNode(this.list.value);
        nextlist.next = newlist;
        newlist = nextlist;
        this.list = this.list.next;
      }
      nextlist = new ListNode(this.list.value);
      nextlist.next = newlist;
      newlist = nextlist;
      this.list = newlist;
    }
    return listup;
  }
}

module.exports = Queue;
