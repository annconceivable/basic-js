const { NotImplementedError } = require('../extensions/index.js');

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
  if (str === '') return '';
  let char = str[0];
  let i = 1;
  let index = 1;
  let arr = [];
  do {
    if (char === str[i]) {
      index++;
    }
    else {
      if (index === 1) {
        arr.push(char);
        char = str[i];
        index = 1;
      }
      else {
        arr.push(String(index) + char);
        console.log(index, char);
        char = str[i];
        index = 1;
      }
    }
    i++;
  }
  while (i < str.length);
  if (index === 1) arr.push(char);
      else arr.push(String(index) + char);
  return(arr.join(''));
}

module.exports = {
  encodeLine
};
