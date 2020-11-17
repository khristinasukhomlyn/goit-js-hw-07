// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение
// счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения
// счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

const incremButton = document.querySelector("button[data-action='increment']");
const decremButton = document.querySelector("button[data-action='decrement']");
let counterValue = document.querySelector("#value");

decremButton.addEventListener("click", () => {
  if (counterValue.textContent > 0) counterValue.textContent -= 1;
});
incremButton.addEventListener("click", () => {
  counterValue.textContent = +counterValue.textContent + 1;
});
