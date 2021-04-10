/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

const bin = (array, value, s, e) => {
  const middle = Math.floor((s + e) / 2);
  if (value === array[middle]) {
    return middle;
  }
  if (value > array[middle]) {
    return bin(array, value, middle + 1, e);
  }
  if (value < array[middle]) {
    return bin(array, value, s, middle - 1);
  }
  return false;
};

function findIndex(array, value) {
  return bin(array, value, 0, array.length);
}

module.exports = findIndex;
