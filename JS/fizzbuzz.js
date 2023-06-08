for (let number = 0; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0) console.log("fizzbuzz");
  else if (number % 3 === 0) console.log("fizz");
  else if (number % 5 === 0) console.log("buzz");
  else console.log(number);
}

function name() {
    let listOfNames = []

    for(let i = 0; i < 2; i++){
    let name = prompt("What is your name?");
    listOfNames.push(name);
    }  
    console.log(listOfNames)
    check();
}

function check() {
    let yourName = prompt("Enter your name?")
    listOfNames.includes(yourName); 
    alert("Welcome  " + yourName);
}

name();