const numberButtons = document.querySelectorAll(".is-num");
const clearButton = document.querySelector(".is-clear");
const largeDisplay = document.querySelector(".large-display");

let currentInput = "";
let previousInput = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentInput += event.target.textContent;
    largeDisplay.textContent = currentInput;
  });
});

clearButton.addEventListener("click", () => {
  currentInput = "0";
  largeDisplay.textContent = currentInput;
});