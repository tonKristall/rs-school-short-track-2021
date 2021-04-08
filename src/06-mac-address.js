/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const valid = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  if (n.length !== 17 || n === '-----------------') { return false; }
  for (let i = 0; i < n.length; i++) {
    if ((i + 1) % 3 === 0 && n[i] !== '-') { return false; }
    if ((i + 1) % 3 !== 0 && valid.indexOf(n[i]) === -1) { return false; }
  }
  return true;
}

module.exports = isMAC48Address;
