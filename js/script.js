const previousInput = document.querySelector('.previous-input');
const currentInput = document.querySelector('.current-input');
const equalsButton = document.querySelector('.data-equal');
const allClearButton = document.querySelector('.data-all-clear');
const operationButtons = document.querySelectorAll('.data-operation');
const numberButtons = document.querySelectorAll('.data-number');
let currentNum = '',
    previousNum = '',
    operation = undefined;

function updateDisplay() {
    currentInput.value = currentNum === '' && currentInput.value === 0 ? '' : currentNum;

    if (operation != undefined) {
        previousInput.value = previousNum + operation;
    } else {
        previousInput.value = '';
    }
}

function appendNumber(number) {
    currentNum += number;
}

function chooseOperation(operator) {
    if (currentNum === '') return;
    if (previousNum != '') compute();

    operation = operator;
    previousNum = currentNum;
    currentNum = '';
}

function compute() {
    let total;
    const prev = parseInt(previousNum);
    const curr = parseInt(currentNum);

    if (isNaN(prev) || isNaN(curr)) return;

    switch(operation) {
        case '+':
            total = prev + curr;
            break;
        case '-':
            total = prev - curr;
            break;
        case '*':
            total = prev * curr;
            break;
        case '/':
            total = prev / curr;
            break;
        default:
            return '';
    }

    currentNum = total;
    previousNum = '';
    operation = undefined;
}

function clear() {
    currentNum = '';
    previousNum = '';
    operation = undefined;
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.innerText)
    updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText)
    updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
  compute();
  updateDisplay();
});

allClearButton.addEventListener('click', button => {
  clear();
  updateDisplay();
});

