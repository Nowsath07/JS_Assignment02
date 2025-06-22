function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Enter valid numbers";
    return;
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 === 0 ? "Cannot divide by 0" : num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("result").innerText = result;
}

function square() {
  const num1 = parseFloat(document.getElementById("num1").value);
  if (isNaN(num1)) {
    document.getElementById("result").innerText = "Enter a number in box 1";
    return;
  }
  document.getElementById("result").innerText = num1 * num1;
}

function cube() {
  const num1 = parseFloat(document.getElementById("num1").value);
  if (isNaN(num1)) {
    document.getElementById("result").innerText = "Enter a number in box 1";
    return;
  }
  document.getElementById("result").innerText = num1 * num1 * num1;
}

function resetCalculator() {
  document.getElementById("num1").value = '';
  document.getElementById("num2").value = '';
  document.getElementById("result").innerText = '--';
}