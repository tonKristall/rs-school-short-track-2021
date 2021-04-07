/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function compare(a, b) {
  return (a - b);
}
function sortByHeight(arr) {
  const sortarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      sortarr.push(arr[i]);
    }
  }
  sortarr.sort(compare);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sortarr.splice(i, 0, -1);
    }
  }
  return sortarr;
}

module.exports = sortByHeight;
