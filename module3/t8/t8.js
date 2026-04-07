const number1Element = document.querySelector(".number1");
const number2Element = document.querySelector(".number2");
const operatorElement = document.querySelector(".operators");
const resultElement = document.querySelector(".result");


function handleResult() {
    let result = 0;
    const operator = operatorElement.value;
    const number1 = +number1Element.value;
    const number2 = +number2Element.value;
    if (operator === "+") {
        result = number1 + number2
    }
    else if (operator === "-") {
        result = number1 - number2
    }
    else if (operator === "/") {
        result = number1 / number2
    }
    else {
        result = number1 * number2
    }
    resultElement.innerHTML = result
}