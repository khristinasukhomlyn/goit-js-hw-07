// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector("#controls > input");
const boxes = document.querySelector("#boxes");

let dives = [];

function createDives(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    size += 10;
    let createDiv = document.createElement("div");
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor =
      "#" + ((Math.random() * 0xfffff0) << 0).toString(16);
    dives.push(createDiv);
  }
  boxes.append(...dives);
}

render.addEventListener("click", createBoxes);

function createBoxes() {
  let value = Number(input.value);
  createDives(value);
}
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
  dives = [];
}
destroy.addEventListener("click", destroyBoxes);
