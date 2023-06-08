let pTag = document.querySelector(".ptag");
const inputNumber = document.querySelector("#input");
const guessBtn = document.querySelector(".guess");
const playAgainBtn = document.querySelector("#play-again");
const exitBtn = document.querySelector("#exit");


let playCount = 0;
 
let randomNumber = Math.floor(Math.random() * 10)

const compareGuessedNumber = () => {
    let numberInput = parseInt(inputNumber.value);
    console.log(numberInput);
    console.log(randomNumber)
    if (randomNumber === numberInput) {
        pTag.textContent = "Correct guess";
        playCount++;
        disableBtn();
    } else {
        pTag.textContent = "Incorrect guess, try again"
        playCount++;
        disableBtn();
    }
}

function disableBtn() {
    if (playCount === 5) {
        guessBtn.disabled = true;
        inputNumber.disabled = true;
    }
}

const resetPlayCount = ()=> {
    playCount = 0;
    inputNumber.value = ""
}

const quit = ()=>{
    pTag.disabled = true;
    inputNumber.disabled = true;
    playAgainBtn.disabled = true;
}

guessBtn.addEventListener("click", compareGuessedNumber)
playAgainBtn.addEventListener("click", resetPlayCount)
exitBtn.addEventListener('click', quit)