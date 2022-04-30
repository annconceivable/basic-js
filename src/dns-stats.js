const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  function reverseString(string) {
    let arr = string.split('.');
    arr = arr.reverse();
    return ('.' + arr.join('.') + '.');
  }
  let obj = {};
  let array = domains.map(item => reverseString(item));
  for (let item of array) {
    for (let i = 1; i < item.length; i++) {
      if (item[i] === '.') {
        let subdomain = item.slice(0, i);
        console.log(subdomain);
        obj[subdomain] = (obj[subdomain] + 1) || 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
