let prompt = require("prompt-sync")();

let lengthOfBoard = prompt("Enter the length: ");
let widthOfBoard = prompt("Enter the Width: ");

function game(length, width) {
  let boardSize = [];
  for (let i = 0; i < length; i++) {
    boardSize.push([]);
    for (let j = 0; j < width; j++) {
       boardSize[i][j] = " "
       if(i % 2 == 0 && j % 2 !=0){
        boardSize[i][j] = "X"
       } else if (i == 1 & j == 1){
        boardSize[i][j] = " "
       }else if(i % 2 != 0 & j % 2 ==0){
        boardSize[i][j] = "X"
       }else{
        boardSize[i][j] = "O"
       }
    }
  }
  return boardSize;
}

console.log(game(lengthOfBoard, widthOfBoard));
console.table(game(lengthOfBoard, widthOfBoard));
