/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let indexmin = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[indexmin]) {
      indexmin = i;
    }
  }
  arr.splice(indexmin, 1);
  const maxnum = arr.join('') * 1;
  return maxnum;
}

module.exports = deleteDigit;
