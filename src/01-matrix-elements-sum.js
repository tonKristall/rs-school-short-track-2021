/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const str = matrix[0].length;
  const stb = matrix.length;
  let sum = 0;
  for (let i = 0; i < str; i++) {
    for (let j = 0; j < stb; j++) {
      if (matrix[j][i] === 0) {
        i++;
        j = -1;
      } else if (i < str) {
        sum += matrix[j][i];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
