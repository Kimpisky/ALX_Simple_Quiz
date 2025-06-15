function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero!";
    }
    return number1 / number2;
}

const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const calculationResultSpan = document.getElementById('calculation-result');

function getParsedNumber(inputElement) {
    return parseFloat(inputElement.value) || 0;
}

document.getElementById('add').addEventListener('click', function() {
    const num1 = getParsedNumber(number1Input);
    const num2 = getParsedNumber(number2Input);
    const result = add(num1, num2);
    calculationResultSpan.textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const num1 = getParsedNumber(number1Input);
    const num2 = getParsedNumber(number2Input);
    const result = subtract(num1, num2);
    calculationResultSpan.textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const num1 = getParsedNumber(number1Input);
    const num2 = getParsedNumber(number2Input);
    const result = multiply(num1, num2);
    calculationResultSpan.textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const num1 = getParsedNumber(number1Input);
    const num2 = getParsedNumber(number2Input);
    const result = divide(num1, num2);
    calculationResultSpan.textContent = result;
});
