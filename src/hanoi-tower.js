const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(discNumber, turnsSpeed) {
  
  //this is the recursive function that works but take a looot of time to execute with mupliple tests
  
  /*
  function hanoi(discNumber) {
    if (discNumber == 1) return 1;
    else {
      return ( hanoi(discNumber - 1) + 1 + hanoi(discNumber - 1));
    }
  }
  */

  // so I'll just use a formula 2**discNumber - 1 to find out the number of turns

  let turns = Math.pow(2, discNumber) - 1;

  let seconds = Math.floor( turns/(turnsSpeed/3600) );
  
  let res = {'turns': turns,'seconds': seconds};

  return (res);
}


module.exports = {
  calculateHanoi
};
