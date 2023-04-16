const previousInput = document.querySelector('.previous-input');
const currentInput = document.querySelector('.current-input');
const equalsButton = document.querySelector('.data-equal');
const allClearButton = document.querySelector('.data-all-clear');
const deleteButton = document.querySelector('.data-delete')
const operationButtons = document.querySelectorAll('.data-operation');
const numberButtons = document.querySelectorAll('.data-number');

let currentNumber = '',
    previousNumber = '',
    operation = undefined;
