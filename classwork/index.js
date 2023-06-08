const number = document.querySelector(".manipulateNumber");
const increaseCount = document.querySelector(".btn-one");
const decreaseCount = document.querySelector(".btn-two");
const increaseByValue = document.querySelector(".btn-three");
const decreaseByValue = document.querySelector(".btn-four");
const increaseInput = document.querySelector('#increase-value')
const decreaseInput = document.querySelector('#decrease-value')

let counter = 0;

number.textContent = ` ${counter}`;

function update() {
  number.textContent = counter;
}

const increaseNumber = () => {
  counter++;
  update();
};

const decreaseNumber = () => {
    counter--
    update()
}

const decreaseWithInput = () => {
    const valuedecreaseInput = parseInt(decreaseInput.value);
  if(!isNaN(valuedecreaseInput)){
      counter = counter - valuedecreaseInput;
    // counter -= valuedecreaseInput;
    console.log(counter)
    update();
  }
}


const increaseWithInput = () => {
    const valueIncreaseInput = parseInt(increaseInput.value);
  if(!isNaN(valueIncreaseInput)){
      counter = valueIncreaseInput + counter;
    console.log(counter)
    update();
  }
}

increaseCount.addEventListener("click", increaseNumber);
decreaseCount.addEventListener('click', decreaseNumber);
increaseByValue.addEventListener('click', increaseWithInput)
decreaseByValue.addEventListener('click', decreaseWithInput)