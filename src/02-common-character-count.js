/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  if (s1.length === 0 || s2.length === 0) {
    return common;
  }
  const s1arr = s1.split('');
  const s2arr = s2.split('');
  for (let i = 0; i < s1arr.length; i++) {
    for (let j = 0; j < s2arr.length; j++) {
      if (s1arr[i] === s2arr[j]) {
        common++;
        s2arr.splice(j, 1);
        j = s2arr.length + 1;
      }
    }
  }
  return common;
}

module.exports = getCommonCharacterCount;
