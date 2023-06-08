let prompt = require("prompt-sync")();

// let day1 = {
//   today: "Saturday",
//   events: ["eating", "dancing", "cooking"],
// };
// console.log(Object.assign(day1, {me:"edu"}));
// console.log(day1.events[0])
// day1.events.push("coming")
// console.log(day1)

// let me = "come"
// console.log(me.repeat(3))

// let journal = [];

// function addEntry(event, name) {
//   journal.push({ event, name });
//   console.log(journal);
// }

// addEntry("cook", "edu");

// console.log("coconut".indexOf("c"));

// let sentence = "I am a good boy";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(" "));
// console.log("la".repeat(4));

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }
// console.log(max(4, 1, 9, -2));

// function num(...numbers) {
//   let result = -Infinity;
//   for (let x of numbers) {
//     if (x > result) {
//       result = x;
//     }
//     return result;
//   }
// }

// console.log(num(1, 2, 3, 4, 5, 6, 8));

// let n = [2,3,4,5,6,7,9]

// console.log(Math.max(...n))
// let m = [2,3,4,...n,8,3,3,0]
// console.log(m)

// let num1 = 12
// let num2 = 45

// sum = num1 + num2
// console.log(sum)

// function printName(name,int) {
//   function printHello() {
//     console.log(`Hello ${name} ${int}`);
//   }
//   printHello();
// }

// printName();
// printName("legend", 2,3,4,5)

// function index(base) {
//     return number => number * base;
// }

// let baseTwo = index(2)
// let baseThree = index(2)
// console.log(baseTwo(3))
// console.log(baseThree(5))
// console.log(typeof baseTwo)

// function double(num) {
//     console.log(num* 2)
// }

// let numbers= [2,3,4,5,6,7]
// numbers.forEach((value)=> double(value))

// NO 1
// let word = "netyyheff"

// function loop(para) {
//     for (let index = 0; index <= para.length - 1; index++) {
//         console.log(para[index])
//     }
// }

// loop(word)

// // NO 2
// let sample = "neByBeff"

// function countBs(params) {
//     let count = 0;
//     for (let index = 0; index <= params.length - 1; index++) {
//         if (params[index] == "B"){
//             count += 1
//         }
//     }
//     return count
// }

// console.log(countBs(sample))


// let sampleOne = "neByBeff"

// function countAnyLetter(params, arg) {
//     let count = 0;
//     for (let index = 0; index <= params.length - 1; index++) {
//         if (params[index] == arg){
//             count += 1
//         }
//     }
//     return count
// }

// console.log(countAnyLetter(sampleOne, "f"))

// let splitedSentence = ("How can mirrors be real").split(" ")
// console.log(splitedSentence)
// let Jaden_Cased = ""

// for (let index = 0; index < splitedSentence.length; index++) {
//     let capitalizeWord = splitedSentence[index][0].toUpperCase() + splitedSentence[index].slice(1)
//     Jaden_Cased = Jaden_Cased + " "+ capitalizeWord 
// }

// console.log(Jaden_Cased)

let ages = {
    ugo : 39,
    me : 85,
    you : 43
}

console.log(`my age is ${ages["ugo"]}`)