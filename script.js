function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}

function calculatePercentage() {
    let expression = document.getElementById('display').value;
    // Parse the expression to handle percentage calculation
    let parts = expression.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1];
    let percentage = parseFloat(lastPart) / 100;
    let result = eval(expression.replace(lastPart, percentage));
    document.getElementById('display').value = result;
}

function toggleSign() {
    let display = document.getElementById('display');
    let currentValue = display.value;
    
    // Check if the current value is already negative
    if (currentValue.startsWith('-')) {
        // Remove the negative sign
        display.value = currentValue.slice(1);
    } else {
        // Add a negative sign
        display.value = '-' + currentValue;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function validateInput(input) {
    // Regular expression to allow numeric values (including decimals) and operators (+, -, *, /)
    const pattern = /^[0-9.+\-*/]+$/;

    // Check if the input matches the pattern
    if (!pattern.test(input.value)) {
        // If input does not match, show alert
        alert("Nah-nah-nah. Please enter numeric values or operators (+, -, *, /) only.");
        // Remove non-numeric characters and invalid operators from the input
        input.value = input.value.replace(/[^0-9.+\-*/]/g, '');
    }
}

