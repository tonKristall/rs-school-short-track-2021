/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 *name ='doc', 'doc', 'image', 'doc(1)', 'doc'
 *result =
 *
 */
function renameFiles(names) {
  const result = [];
  if (names.length > 0) {
    result.push(names[0]);
    for (let i = 1; i < names.length; i++) {
      if (result.indexOf(names[i]) < 0) {
        result.push(names[i]);
      } else {
        let k = 1;
        let el = `${names[i]}(${k})`;
        while (result.indexOf(el) > -1) {
          k++;
          el = `${names[i]}(${k})`;
        }
        result.push(el);
      }
    }
  }
  return result;
}

module.exports = renameFiles;
