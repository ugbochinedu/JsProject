let prompt = require("prompt-sync")();

let arr = [9, 9]
let newArr = []

function plusOne(params) {
    for (let i = 0; i < arr.length; i++) {
       if(i != arr.length - 1){
        newArr.push(params[i])
       }else {
        newArr.push(params[arr.length -1] + 1)
       }
    }
    whenlastDigitIsTen(newArr)
        
     return newArr
}

function whenlastDigitIsTen(newArr) {
    if(newArr[newArr.length - 1] == 10){
        newArr.pop(newArr.length - 1)
        newArr.push(1)
        newArr.push(0)
    }
}

console.log(plusOne(arr))
