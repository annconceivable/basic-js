const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.length++;
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ( position > this.length || position <= 0 || typeof position !== "number" ) {
      this.length = 0;
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      position--;
      for (let i = position; i < this.length - 1; i++) {
        this.array[i] = this.array[i + 1];
      }
      this.array.pop();
      this.length--;
    }
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    let resultingArray = this.array;
    this.array = [];
    this.length = 0;
    return resultingArray.join("~~");
    
  }
};

module.exports = {
  chainMaker
};
