function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result = evaluateExpression(expression);
    document.getElementById('display').value = result;
}

function evaluateExpression(expression) {
    let tokens = expression.split(/([\+\-\*\/])/);
    let numbers = [];
    let operators = [];

    // Separate numbers and operators
    tokens.forEach(token => {
        if (!isNaN(parseFloat(token))) {
            numbers.push(parseFloat(token));
        } else {
            operators.push(token);
        }
    });

    // Perform calculations
    while (operators.length > 0) {
        let operator = operators.shift();
        let number2 = numbers.shift();
        let number1 = numbers.shift();

        switch (operator) {
            case '+':
                numbers.unshift(number1 + number2);
                break;
            case '-':
                numbers.unshift(number1 - number2);
                break;
            case '*':
                numbers.unshift(number1 * number2);
                break;
            case '/':
                if (number2 !== 0) {
                    numbers.unshift(number1 / number2);
                } else {
                    alert("Congrats on annihilating the Universe by dividing by zero");
                    return NaN;
                }
                break;
            default:
                break;
        }
    }

    return numbers[0];
}

function calculatePercentage() {
    let expression = document.getElementById('display').value;
    let parts = expression.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1];
    let percentage = parseFloat(lastPart) / 100;
    let result = evaluateExpression(expression.replace(lastPart, percentage));
    document.getElementById('display').value = result;
}

function toggleSign() {
    let display = document.getElementById('display');
    let currentValue = display.value;

    if (currentValue.startsWith('-')) {
        display.value = currentValue.slice(1);
    } else {
        display.value = '-' + currentValue;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function validateInput(input) {
    const pattern = /^[0-9.+\-*/]+$/;

    if (!pattern.test(input.value)) {
        alert(" Nah-ah-ah. Numeric values or operators (+, -, *, /) only please =)");
        input.value = input.value.replace(/[^0-9.+\-*/]/g, '');
    }
}
