window.onload = function () {
    let num1 = prompt("Введите 1-е число:");
    let num2 = prompt("Введите 2-е число:");
    let operator = prompt("Введите знак (+, -, *, /):");
  
    if (num1 === null || num2 === null || operator === null) return;
  
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ошибка: нужно ввести числа");
      return;
    }
  
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("operator").textContent = operator;
  
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.style.display = "block";
  
    const correctAnswer = calculate(num1, num2, operator);
  
    document.getElementById("checkBtn").onclick = () => {
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = `Результат: ${correctAnswer}`;
      resultDiv.style.background = "#d4edda";
    };
  };
  
  function calculate(a, b, op) {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b !== 0 ? a / b : "Ошибка (деление на 0)";
      default: return "Неизвестный оператор";
    }
  }
  