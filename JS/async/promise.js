// function func(resolve, reject) {
//     console.log("In Func...")
//     resolve(10)
// }

// var promise = new Promise(func)
// promise.then((val) =>{
//     console.log(val)
// })
// console.log(promise)

function func(resolve, reject) {
    setTimeout(() => {
        console.log("In setTimout callback")
        resolve("Timed oout for 5 seconds")
    }, 5000);   
}

function callbackfn(value) {
    console.log("In callbackfn function")
    console.log(value)
}

const promise = new Promise(func)

promise
    .then(callbackfn)
    .catch(() =>{
        console.log("Wahala dey")
    })
