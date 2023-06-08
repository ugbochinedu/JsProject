// function buyVehicle(year) {
//     return `This vehile of year ${year} has ${this.wheel} wheel`
// }

// let vehicle = {wheel : 4, buyVehicle}
// let vehicle2 = {wheel : 5, buyVehicle}

// console.log(vehicle.buyVehicle(2015))
// console.log(vehicle2.buyVehicle(3023))

// let array = [2, 3, 4, 5, 6];
// console.log(array.length)

// Array.prototype.lol = function (){
//     return this.reduce((a,b) => a + b)
// }

// console.log(array.lol)

// Rabbit.prototype.toString = function() {
//     return `a ${this.type} rabbit`;
// };
//     console.log(String(blackRabbit));

// let sym = Symbol("name");
// console.log(sym == Symbol("name"));
// Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym]);

// const toStringSymbol = Symbol("toString");
// Array.prototype[toStringSymbol] = function () {
//   return `${this.length} cm of blue yarn`;
// };
// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]());

// let uche = "chukwu"[Symbol.iterator]();
// console.log(uche.next());
// console.log(uche.next());

// console.log(uche.next());
// console.log(uche.next());
// console.log(uche.next());
// console.log(uche.next());

// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.content = [];
//         for (let y = 0; y < height; y++) {
//             for (let x = 0; x < width; x++) {
//             this.content[y * width + x] = element(x, y);
//             }
//         }
//     }
//     get(x, y) {
//         return this.content[y * this.width + x];
//     }
//     set(x, y, value) {
//         this.content[y * this.width + x] = value;
//     }
// }

// let calc = {
//     get ans(){
//         return Math.floor(Math.random() * 100)
//     }
// }

// console.log(calc.ans)

// function canYouSpotTheProblem() {
//     "use strict";
//     for (counter = 0; counter < 10; counter++) {
//     console.log("Happy happy");
//     }
// }

// canYouSpotTheProblem()

import { formatDate } from "./format-date";
console.log(formatDate(new Date(2017, 9, 13),
"dddd the Do"));


// import {days as dayNames} from "date-names";
// console.log(dayNames.length);