
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let numberA = 5
let numberB = 10
let operator = "plus";

function operate(numberA, operator, numberB) {
    switch(operator) {
        case "plus":
            return add(numberA, numberB);
            break;
        case "minus":
            return subtract(numberA, numberB);
            break;
        case "times":
            return multiply(numberA, numberB);
            break;
        case "division":
            return divide(numberA, numberB);
            break;
    };
};

console.log(operate(numberA, "division", numberB))