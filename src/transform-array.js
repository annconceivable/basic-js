const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!( Array.isArray(arr) )) throw new Error("'arr' parameter must be an instance of the Array!");
		let res = arr.slice();
		let del = 0;
		let cmd = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

		for (let i = 0; i < res.length; i++) {
			if ( ( i == 0 )&&( ( res[i] == cmd[1]) | ( res[i] == cmd[3] ) ) ) {
				res.splice(0, 1);
			}

			if ( ( i == (res.length - 1)) && ( (res[i] == cmd[0]) | (res[i] == cmd[2] ) ) ) {
				res.splice((res.length-1), 1);
			}


			if ( res[i] == cmd[0] ) {
				res.splice(i, 2);
				if ( (res[i] == cmd[1]) | (res[i] == cmd[3]) ) {
					res.splice(i, 1);
				}
			}
			if ( res[i] == cmd[1] ){
				res.splice(i-1, 2);
			}
			if ( res[i] == cmd[2] ){
				res.splice(i, 1, res[i+1]);
			}
			if ( res[i] == cmd[3] ) {
				res.splice(i, 1, res[i-1]);
			}
		}
		return res;
}

module.exports = {
  transform
};
