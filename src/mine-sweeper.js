const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mines = [] ;
   for (let i = 0; i < matrix.length; i++) {
     mines.push([]);
     for (let j = 0; j < matrix[i].length; j++){
       matrix[i][j] = Number(matrix[i][j]);
       mines[i].push(0);
     }
   }
   
   
   for (let row = 0; row < matrix.length; row++) {
     for (let col = 0; col < matrix[0].length; col++) {
       if ((row === 0 && col > 0 && col < ( matrix[0].length - 1 ))) {
         mines[row][col] = matrix[row][col-1] + matrix[row+1][col-1] + matrix[row+1][col] + matrix[row + 1][col+1] + matrix[row][col+1];
       }
       else if ((row === (matrix.length -1) && col > 0 && col < ( matrix[0].length - 1 ))) {
         
         mines[row][col] = matrix[row][col-1] + matrix[row-1][col-1] + matrix[row-1][col] + matrix[row-1][col+1] + matrix[row][col+1];
       }
       else if (row === 0 && col === 0) {
         
         mines[row][col] = matrix[1][0] + matrix[1][1] + matrix[0][1];
       }
       else if ((row === (matrix.length - 1) && col === 0)) {
         
         mines[row][col] = matrix[row-1][0] + matrix[row-1][1] + matrix[row][1];
       }
       else if (row === 0 && col === (matrix[0].length - 1)){
         
         mines[row][col] = matrix[row][col-1] + matrix[row+1][col-1] + matrix[row+1][col];
   
       }
       else if (row === (matrix.length-1) && col === (matrix[0].length-1)) {
         mines[row][col] = matrix[row][col-1] + matrix[row-1][col-1] + matrix[row-1][col];
        
       }
       else if (col === 0 && row > 0 && row < (matrix.length - 1)) {
         mines[row][col] = matrix[row-1][col] + matrix[row-1][1] + matrix[row][1] + matrix[row+1][1] + matrix[row+1][0];
       }
       else if (col === (matrix[0].length - 1) && row > 0 && row < (matrix.length - 1)) {
         mines[row][col] = matrix[row-1][col] + matrix[row-1][col-1] + matrix[row][col-1] + matrix[row+1][col-1] + matrix[row+1][col];
       }
       else if (row > 0 && row < (matrix.length-1) && col > 0 && col < (matrix[0].length-1)) {
         mines[row][col] = matrix[row-1][col-1] + matrix[row-1][col] + matrix[row-1][col+1] + matrix[row][col+1] +matrix[row+1][col+1] + matrix[row+1][col] + matrix[row+1][col-1] + matrix[row][col-1];
       } 
     }
   }
   return(mines);
   
}

module.exports = {
  minesweeper
};
