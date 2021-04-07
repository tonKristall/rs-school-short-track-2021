/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minearr = [];
  const str = matrix.length;
  const stb = matrix[0].length;
  for (let i = 0; i < str; i++) {
    minearr[i] = [];
    for (let j = 0; j < stb; j++) {
      minearr[i][j] = null * 1;
    }
  }
  for (let i = 0; i < str; i++) {
    for (let j = 0; j < stb; j++) {
      if (matrix[i][j] === true) {
        if (i - 1 > -1) {
          minearr[i - 1][j]++;
          if (j + 1 < stb) {
            minearr[i - 1][j + 1]++;
          }
          if (j - 1 > -1) {
            minearr[i - 1][j - 1]++;
          }
        }
        if (i + 1 < str) {
          minearr[i + 1][j]++;
          if (j + 1 < stb) {
            minearr[i + 1][j + 1]++;
          }
          if (j - 1 > -1) {
            minearr[i + 1][j - 1]++;
          }
        }
        if (j + 1 < stb) {
          minearr[i][j + 1]++;
        }
        if (j - 1 > -1) {
          minearr[i][j - 1]++;
        }
      }
      // minearr[i][j] = minearr[i][j] * 1;
    }
  }
  return minearr;
}

module.exports = minesweeper;
