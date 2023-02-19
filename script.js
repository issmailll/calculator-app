let firstOperand = null;
let operator = null;
let secondOperand = null;
let history = [];

function addToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
  firstOperand = null;
  operator = null;
  secondOperand = null;
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function performOperation(newOperator) {
  const display = document.getElementById("display");
  if (!firstOperand) {
    firstOperand = parseFloat(display.value);
    operator = newOperator;
    display.value = "";
  } else if (!secondOperand) {
    operator = newOperator;
  } else {
    calculate();
    operator = newOperator;
  }
}

function calculate() {
  const display = document.getElementById("display");
  secondOperand = parseFloat(display.value);
  let result;
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
  }
  display.value = result;
  history.push(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
  firstOperand = result;
  secondOperand = null;

  const historyList = document.getElementById("history-list");
  const historyItem = document.createElement("li");
  historyItem.textContent = history[history.length - 1];
  historyList.appendChild(historyItem);
}

function resetHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; // remove all history list items
    history = []; // clear history array
  }
  
  const resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click", resetHistory);