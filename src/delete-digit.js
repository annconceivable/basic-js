const { NotImplementedError } = require('../extensions/index.js');

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
  let str = String(n);
  let arr = [];
  let before = '';
  let after = '';
  for (let i = 0; i < str.length; i++) {
    if (i > 0) before = str.substring(0, i);
    after = str.substring(i + 1, str.length);
    arr.push(+(before + after));
  }
  arr.sort( (a, b) => a - b );
  return(arr[arr.length - 1]);
}

module.exports = {
  deleteDigit
};
