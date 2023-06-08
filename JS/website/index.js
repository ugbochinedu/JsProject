// let fetchAPI = fetch("https://api.kanye.rest/").then((response) => {
//   console.log(response.json());
// });

// function getData(url) {
//   var res;
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://api.kanye.rest/");
//   xhr.send();
//   xhr.onload = function () {
//     res = xhr.response;
//   };

//   return res;
// }

// getData("lll");

// function changeQuote() {
//     let pagePortion = document.getElementsByClassName("line");
//     let createElement = document.createElement("p");
//     console.log(pagePortion[0].prepend(createElement));
//     console.log("New quote");
//     fetch("https://api.kanye.rest/").then((response) => {
//     console.log(response.json());
//     });
// };

// document.getElementById("submit").onclick = changeQuote

let pagePortion = document.getElementsByClassName("line");
let createElement = document.createElement("p");
console.log(pagePortion[0].prepend(createElement));
let button = document.getElementById('submit');
let dataArray = []
let count = 0;

button.addEventListener('click', () => {
    fetch("https://api.kanye.rest/")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        createElement.textContent = JSON.stringify(data.quote);
        count += 1;
        saveToList(JSON.stringify(data.quote));
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  function saveToList(data) {
      dataArray.push(data)
  } 

let butt = document.getElementById("submit1")
butt.addEventListener('click',() =>{
    if (count > 0) {
        createElement.textContent = dataArray.pop()
        count -= 1
    }else{
        butt.ariaDisabled
    }
})


// // createElement.textContent = "WELCOME TO MY BROWSER!";

// let display = document.getElementById("submit").onclick = fetchAPI
// createElement.textContent = display;





// var count = 0; x
// function submitHandler(){
//     count +=1;
//     console.log
// }


// fetch("https://api.kanye.rest")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not OK');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
