const first = prompt("Введите первое число:");
const operator = prompt("Выберите операцию: +, -, *, /");
const second = prompt("Введите второе число:");

const expressionText = `${first} ${operator} ${second}`;
document.getElementById("expression").textContent = expressionText;

function showAnswer() {
  try {
    const result = eval(`${first} ${operator} ${second}`);
    document.getElementById("answer").textContent = "Ответ: " + result;
  } catch (e) {
    document.getElementById("answer").textContent = "Ошибка!";
  }
  document.getElementById("answer").style.display = "block";
}