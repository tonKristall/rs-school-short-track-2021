/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length !== 0) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let n = 0;
      const el = str[i];
      if (el !== str[i + 1]) {
        result += el;
      } else {
        while (el === str[i] && i < str.length) {
          i++;
          n++;
        }
        i--;
        result += `${n}${el}`;
        n = 0;
      }
    }
    return result;
  }
  return str;
}

module.exports = encodeLine;
