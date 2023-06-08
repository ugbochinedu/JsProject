//let listOfNumbers = [2, 3, 3, 1, 8];

// function multipleByTwo(listOfNumbers) {
//   let newListOfNumbers = [];
//   for (let index = 0; index < listOfNumbers.length; index++) {
//         //newListOfNumbers.push(listOfNumbers[index] * 2);
//   }
//   return newListOfNumbers;
// }

// console.log(multipleByTwo(listOfNumbers));

// function multipleByTwo(listOfNumbers) {
//   for (let index = 0; index < listOfNumbers.length; index++) {
//     let temp = listOfNumbers[index] * 2;
//     listOfNumbers[index] = temp;
//   }
//   return listOfNumbers;
// }

// console.log(multipleByTwo(listOfNumbers));

// console.log("coconut".indexOf("c"))

// function sum(firstName, secondName) {
//   return firstName + secondName;
// }

// let sum = (function (firstName, secondName) {
//   return firstName + secondName;
// })(2, 3);

// console.log(sum);

// function total(number, func) {
//   return number + func(number);
// }

// let result = total(4,(number)=>{
//   return number * 2;
// })

// console.log(result);

// let arrInput = [2, 3, 3, 4, 3, 3, 31, 1, 12,2,2,55,6,7,7 ,4];
// let arrOutput = [];

// for (let index = 0; index < arrInput.length; index++) {
//   if (!arrOutput.includes(arrInput[index])) {
//     arrOutput.push(arrInput[index]);
//   }
// }

// console.log(arrOutput);

// let array = [21, 22, 10, 4, 40, 10, 7, 9, 2, 3];

// function arr(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length ; j++) {
//       if (array[i] < array[j]) {
//         let tempArray = array[j];
//         array[j] = array[i];
//         array[i] = tempArray;
//       }
//     }
//   }
//   console.log(array);
// }

// arr(array);

// for (int i = 0; i <name.length; i++) {
//   for (int j = 1; j < name.length-i; j++) {
//       int counter = j-1;
//       char tempChar = name[j];
//       name[j] = name[counter];
//       name[counter] = tempChar;
//   }
// }

// console.log(screen.width,screen.height)
// console.log(navigator.language)
// console.log(navigator.onLine)
// console.log(history.length )
// console.log(document.body.firstElementChild.textContent)
// console.log(document.body.firstChild)

// // document.querySelector("p").style.color = "red";
// // document.querySelector("h1").style.color = "red";
// // document.querySelector("div").style.color = "red";

// // let cls = document.getElementsByTagName("p")
// // cls.color = "blue"
// // console.log(cls)

// let cls = document.getElementsByClassName("second-div");
// let tag = document.getElementsByTagName("p")
// let id = document.getElementById("fifteen")

// let name = document.createElement("p");
// let name2 = document.createElement("p");

// name.innerHTML = "Change background colour";
// name2.textContent = "Change button colour";

// cls[0].append(name)
// cls[1].prepend(name2)
// cls[1].children[0].textContent += "dffggh"

// document.querySelector("p").style.color = "red"
console.log(screen.width, screen.height);
browserName = window.navigator.appName;
let area = screen.height * screen.width

let page = document.getElementsByClassName("browse");
let header = document.createElement("p");

console.log((page[0].children[0].textContent += browserName));
console.log((page[0].children[1].textContent += area));

header.textContent = "WELCOME TO MY BROWSER!";
console.log(page[0].prepend(header))

let bottom = document.getElementsByClassName("URL")
let newText = document.createElement("p")

newText.textContent = "url: "
bottom[0].append(newText)