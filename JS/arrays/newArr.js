// let string = "codelect"
// let arr = [4,5,6,7,0,1,2,3]

let string = "someiclon"
let arr = [0,3,2,4,5,1,6,7,8]

// function reArrange(arr,word) {
//     let newString = ""
//     for (let i = 0; i < arr.length; i++) {
//        newString += word[arr[i]]
//     }
//     return newString;
// }

// console.log(reArrange(arr,string))

let arrange = (arr,word) => {
    let newString = ""
    for (let i = 0; i < arr.length; i++) {
       newString += word[arr[i]]
    }
    return newString;
}

console.log(arrange(arr,string))