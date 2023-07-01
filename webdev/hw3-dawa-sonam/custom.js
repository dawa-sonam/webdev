var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = this.value;

        if (value === '=') {
            evaluateExpression();
        } else if (value === 'AC') {
            clearDisplay();
        } else if (value === 'xʸ') {
            addToDisplay('**');
        } else if (value === 'EXP') {
            addToDisplay('*Math.pow(10,');
        } else if (value === '√') {
            addToDisplay('Math.sqrt(');
        } else if (value === 'sin') {
            addToDisplay('Math.sin(');
        } else if (value === 'cos') {
            addToDisplay('Math.cos(');
        } else if (value === 'tan') {
            addToDisplay('Math.tan(');
        } else if (value === 'log') {
            addToDisplay('Math.log10(');
        } else if (value === 'ln') {
            addToDisplay('Math.log(');
        } else if (value === 'x!') {
            addToDisplay('factorial(');
        } else {
            addToDisplay(value);
        }
    });
});

function addToDisplay(value) {
    display.value += value;
}

function evaluateExpression() {
    var expression = display.value;

    expression = expression.replace(/x/g, '*');
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/%/g, '%');

    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function factorial(number) {
    if (number < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }
  
    if (number === 0 || number === 1) {
        return 1;
    }
  
    var result = 1;
    for (var i = 2; i <= number; i++) {
        result *= i;
    }
  
    return result;
}
