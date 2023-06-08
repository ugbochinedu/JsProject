const number1 = document.querySelector(".add-input1");
const number2 = document.querySelector(".add-input2");
const addBtn = document.querySelector(".add-btn");
const addPtag = document.querySelector(".ptag");
const select = document.querySelectorAll("#select option");
const additionDiv = document.getElementById(".add-inputs");
const mainSelectBox = document.getElementById("select")
const displaySign = document.querySelector(".displaySign")
const facto = document.querySelector(".facto")



// function menuBox(){
//     let selectOption = mainSelectBox.options[mainSelectBox.selectedIndex]
//     let selectValue = mainSelectBox.value

//     console.log(selectOption);
//     console.log(selectValue);
// }
// mainSelectBox.onclick = menuBox

const addNumbers = () => {            
    let numInput1 = parseInt(number1.value);
    let numInput2 = parseInt(number2.value);
    let selectValue = mainSelectBox.value

    if (selectValue === "1") {
        displaySign.textContent = "+"
        facto.style.display = "none"
        let additionAnswer = numInput1 + numInput2;
        addPtag.textContent = additionAnswer;        
    }
    else if (selectValue === "2") {   
        displaySign.textContent = "-"  
        let subtractionAnswer = numInput1 - numInput2;
        addPtag.textContent = subtractionAnswer;        
    }
    else if (selectValue === "3") {   
        displaySign.textContent = "*"  
        let multiplyAnswer = numInput1 * numInput2;
        addPtag.textContent = multiplyAnswer;        
    }
  };

  const removeAdd = ()=>{
    facto.style.display = "none"
  }
  addBtn.addEventListener('click', addNumbers)
  add.addEventListener('click', removeAdd)

// requirements.forEach(item => {
//     const isValid = item.regex.test(e.target.value);
//     const requirementItem = requirementList[item.index];

//     if (isValid) {
//         requirementItem.firstElementChild.className = "fa-solid fa-check";
//         requirementItem.classList.add("valid");
//     }else{
//         requirementItem.firstElementChild.className = "fa-solid fa-circle";
//         requirementItem.classList.remove("valid");
//     }
// })

// const optionElement = document.querySelector("#mySelect option[value='2']");
// optionElement.classList.add("highlight");

// const selectElement = document.querySelector("#mySelect");

// selectElement.addEventListener("change", (event) => {
//   const selectedOption = event.target.options[event.target.selectedIndex];
//   selectedOption.classList.add("highlight");
// });
