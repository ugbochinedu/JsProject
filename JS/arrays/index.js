let prompt = require("prompt-sync")();

// const numbers = []
// const numbers1 = new Array(100) // lenght of the array is declared
// const numbers3 = new Array(1,2,3,4,5)  // initialized
// const numbers2 = [3,4,5,6,4,3,4,5]

// numbers2.unshift(2)
// console.log(numbers2)
// numbers2.shift()
// console.log(numbers2)
// console.log(numbers2.slice(0,3))
// console.log(numbers2.splice(0,4))

// let vehicles = []
// let rowOne = ["car", 2000]
// let rowTwo = ["Truck", 500]
// let rowThree = ["Bike", 6500]
// let rowFour = ["Scooter", 1500]

// vehicles.push(rowOne)
// vehicles.push(rowTwo)
// vehicles.push(rowThree)
// vehicles.push(rowFour)
// console.table(vehicles)

// console.log(vehicles[0][0])

// vehicles[0].push(["Toyota", "Nissan"])
// vehicles[1].push(["Toyota", "Nissan"])
// vehicles[2].push(["Null"])
// console.table(vehicles)

// NO 1

// let dataSet = [[1,2,3],[4,5,6],[7,8,9]]

// let inputRow = parseInt(prompt("Enter the row you want"))
// let start =  parseInt(prompt("Enter the begin you want"))
// let end = parseInt(prompt("Enter the end you want"))

// let newDataSet = []
// newDataSet.push(dataSet[inputRow].slice(start,end + 1))

// console.log(newDataSet)

//  N0 2

// let starting =  parseInt(prompt("Enter the begin you want"))
// let ending = parseInt(prompt("Enter the end you want"))

// function rangeOfNumbers(startingValue, endingValue) {
//     let rangeArr = []
//     for (let index = startingValue; index <= endingValue; index++) {
//          rangeArr.push(index);
//     }
//     return rangeArr;
// }

// console.log(rangeOfNumbers(starting , ending))

//             // NO 3

// let arrayOfNumbers = [1,2,3,4,5,6,6]

// function AddElementsInAnArray(input) {
//     sum = 0;
//     for (const iterator of input) {
//         sum += iterator;
//     }
//     return sum;
// }

// console.log(AddElementsInAnArray(arrayOfNumbers))

// N0 4

// let startingPoint = parseInt(prompt("Enter the begin you want: "));
// let endingPoint = parseInt(prompt("Enter the end you want: "));
// let inputStep = parseInt(prompt("Enter the step: "));
// let newArr = [];

// function Output(start, end, step) {
//   if (isNaN(step) && end > start) step = 1;
//   if (isNaN(step) && end < start) step = -1;

//   return appendIntoNewArray(start, end, step);
// }

// function appendIntoNewArray(start, end, step) {
//   start > end ? forLoopWhenStartIsGreater(start, end, step)
//     : forLoopWhenEndIsGreater(start, end, step);

//   return newArr;
// }

// function forLoopWhenStartIsGreater(start, end, step) {
//   for (let i = start; i >= end; i -= step) newArr.push(i);
// }

// function forLoopWhenEndIsGreater(start, end, step) {
//   for (let j = start; j < end; j += step) newArr.push(j);
// }

// console.log(Output(startingPoint, endingPoint, inputStep));

//  NO 5

// let numberOne = 12;
// let numberTwo = 12;

// function deepEqual(objOne, objTwo) {
//   if (typeof objOne == typeof objTwo && objOne == objTwo) {
//     return true;
//   } else if (typeof objOne == typeof objTwo && objOne != objTwo) {
//     return false;
//   }else if (typeof objOne != typeof objTwo && objOne == objTwo){
//     return true;
//   }else if (typeof objOne == typeof objTwo && objOne === objTwo){
//     return true;
//   }else if(typeof objOne == typeof objTwo && objOne !== objTwo ){
//     return false;
//   }
// }
// console.log(deepEqual(numberOne, numberTwo));

