const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
let inputDisplay = document.getElementById("inputDisplay");
let calcAnswer = document.getElementById("calcAnswer");
const buttons = document.querySelectorAll(".buttons");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        

        if(inputDisplay.innerHTML === "0") {
                    inputDisplay.innerHTML =  button.innerHTML
                } else {
                    inputDisplay.innerHTML +=  button.innerHTML;
                }
    })
})


plus.addEventListener("click", () => {
    inputDisplay.innerHTML =  inputDisplay.innerHTML + "+";
})

minus.addEventListener("click", () => {
    inputDisplay.innerHTML =  inputDisplay.innerHTML + "-"
})

multiply.addEventListener("click", () => {
    inputDisplay.innerHTML =  inputDisplay.innerHTML + "*"
})

divide.addEventListener("click", () => {
    inputDisplay.innerHTML =  inputDisplay.innerHTML + "/"
})

clear.addEventListener("click", () => {
    inputDisplay.innerHTML =  "0";
    calcAnswer.innerHTML = "0"
})

equal.addEventListener("click", () => {
    calcAnswer.innerHTML = eval(inputDisplay.innerHTML)
})