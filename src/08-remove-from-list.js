/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 *
 */

const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  const resultarr = [];
  let m = l;
  while (m.next !== null) {
    if (m.value !== k) resultarr.push(m.value);
    m = m.next;
  }
  resultarr.push(m.value);
  let resultlist = null;
  let r = new ListNode(resultarr[resultarr.length - 1]);
  for (let i = resultarr.length - 2; i > -1; i--) {
    resultlist = new ListNode(resultarr[i]);
    resultlist.next = r;
    r = resultlist;
  }
  return resultlist;
}

module.exports = removeKFromList;
