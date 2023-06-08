//let prompt = require("prompt-sync")();

function getData(url,success,error) {
    if(!url){
        return
    }

    const xhr = new XMLHttpRequest()
    xhr.open("GET",url)
    xhr.send()
    xhr.onload = function () {
        if(xhr.status === 200){
            console.log("Success")
            success(xhr.responseText)
        }else{
            error(xhr.status)
        }
    }
}

function successhandler(status) {
    console.log(status)
}
function errorhandler(status) {
    console.log(status)
}

const url = prompt("Enter a URL")
//getData(url,successhandler,errorhandler)
getData(url, (res1) =>{
    console.log("Success 1", res1)
    getData("https://reqres.in/api/users/2", (res2) => {
        console.log("Success 2", res2)
        getData("https://reqres.in/api/user/3", (res3) => {
            console.log("Success 3", res3)
        }, errorhandler)
    },errorhandler)
},errorhandler)

//https://reqres.in/api/users/2