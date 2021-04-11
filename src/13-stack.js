/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
const stackarr = [];
class Stack {
  push(element) {
    stackarr.push(element);
  }

  pop() {
    const result = stackarr[stackarr.length - 1];
    stackarr.splice(stackarr.length - 1, 1);
    return result;
  }

  peek() {
    return stackarr[stackarr.length - 1];
  }
}

module.exports = Stack;
