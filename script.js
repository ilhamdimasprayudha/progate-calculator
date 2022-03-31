let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const percentage = document.querySelector(".percentage");
const power = document.querySelector(".power");

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(prevNumber) / 100;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const inputPercentage = () => {
  currentNumber = currentNumber / 100;
};

const inputPower = () => {
  currentNumber = currentNumber * currentNumber;
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(event.target.value);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

percentage.addEventListener("click", (event) => {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
});

power.addEventListener("click", (event) => {
  inputPower(event.target.value);
  updateScreen(currentNumber);
});
