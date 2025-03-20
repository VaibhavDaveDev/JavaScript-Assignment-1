// Arrow functions for arithmetic operations
const sum = (x, y) => x + y;
const difference = (x, y) => x - y;
const product = (x, y) => x * y;
const divide = (x, y) => {
  if (y === 0) throw new Error("Cannot divide by zero");
  return x / y;
};

// Function to validate input
const isNumberValid = (input) => !isNaN(input) && input.trim() !== "";

let outputDisplay = document.getElementById("result");

// Main function to handle calculation
const performCalculation = () => {
  try {
    let value1 = document.getElementById("num1").value;
    let value2 = document.getElementById("num2").value;
    let operation = document.getElementById("operator").value;

    // Validate input
    if (!isNumberValid(value1) || !isNumberValid(value2)) {
      throw new Error("Please enter valid numeric values.");
    }

    // Convert inputs to numbers
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    // Perform calculation
    let finalResult;
    switch (operation) {
      case "+":
        finalResult = sum(value1, value2);
        break;
      case "-":
        finalResult = difference(value1, value2);
        break;
      case "*":
        finalResult = product(value1, value2);
        break;
      case "/":
        finalResult = divide(value1, value2);
        break;
      default:
        throw new Error("Invalid operator selected.");
    }

    finalResult = parseFloat(finalResult.toFixed(3));
    // Display result
    outputDisplay.style.color = "green";
    outputDisplay.textContent = `Result: ${finalResult}`;
  } catch (error) {
    outputDisplay.style.color = "red";
    outputDisplay.textContent = `Error: ${error.message}`;
  }
};
