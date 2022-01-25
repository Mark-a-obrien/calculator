
const display = document.querySelector(".display");
let displayValue = "";

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}


function operator(a, b) {
    multiply(a, b);
}




// Numbers
const buttons = document.querySelectorAll(".numbers");
buttons.forEach((button) => {

    button.addEventListener("click", () => {
        displayValue += button.textContent;
        display.textContent = displayValue;
        console.log(displayValue)
        display.setAttribute("style", `background-color: "red";`);
    })
})


const operators = document.querySelectorAll(".operators");