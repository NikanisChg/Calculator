// Add value to display
function appendToDisplay( value ){
    document.getElementById('display').value += value;
    }
    
    function calculate() {
    var expression = document.getElementById('display').value;
    if (expression == '') {
    return;
    }
    
    // Evaluate expression with percentage 
    expression = expression.replace(/(\d+\.?\d*)%/g, function(match, number) {
        return '('+number+'/100)';
    });
    
    try {
    // using Function constructor to evaluate the expression
    var result = new Function('return ' + expression)();
    document.getElementById('display').value = result;
    } catch (err) {
    alert("Oops, something went wrong, check what you're inputting!");
    document.getElementById('display').value = '';
    }
    }
    
    // Just add % symbol to the display, doesn't calculate right away
    function calculatePercentage() {
    let display = document.getElementById('display');
    let expression = display.value;
    if (expression !== ''){
    display.value += '%';
    }
    }
    
    // Toggle between positive and negative
    function toggleSign() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    if (currentValue.charAt(0) === '-') {
    display.value = currentValue.substring(1);
    } else {
    display.value = '-' + currentValue;
    }
    }
    
    // clear everything
    function clearDisplay() {
    document.getElementById('display').value = '';
    }
    
    // Validate that only numbers and some operators are entered
    function validateInput(input){
    var pattern = /^[0-9.+\-*/%]+$/;
    if (!pattern.test(input.value)){
    alert("Only numbers and valid operators, please!");
    input.value = input.value.replace(/[^0-9.+\-*/%]/g, ''); 
    }
    }
    