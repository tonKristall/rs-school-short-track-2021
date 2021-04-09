/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nstr = `${n}`;
  let summ = 0;
  while (nstr.length > 1) {
    summ = 0;
    for (let i = 0; i < nstr.length; i++) {
      summ += nstr[i] * 1;
    }
    nstr = `${summ}`;
  }
  return summ;
}

module.exports = getSumOfDigits;
