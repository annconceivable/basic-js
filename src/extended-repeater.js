const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = String(str);
  let addition = 
    typeof options.addition === "boolean" 
    || options.addition === null 
    || options.addition 
      ? String(options.addition) 
      : '';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = "";
  if (options.separator) separator = String(options.separator);
  else separator = "+";
  let additionSeparator = "";
  if (options.additionSeparator) additionSeparator = String(options.additionSeparator);
  else additionSeparator = "|";

  let res = "";

  for (let i = 0; i < repeatTimes; i++) {
    res += string;
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += addition;
      if (j + 1 < additionRepeatTimes) {
        res += additionSeparator;
      } 
    }
    if (i + 1 < repeatTimes) {
      res += separator;
    }
  }
  return res;
}

module.exports = {
  repeater
};
