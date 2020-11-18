// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredientsRef = document.querySelector(`#ingredients`);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const items = [];

// ingredients.map((ingredient) => {
//   const item = document.createElement(`li`);
//   item.textContent = ingredient;
//   items.push(item);
// });

// ingredientsRef.append(...items);

const items = ingredients.map((ingredient) => {
  const item = document.createElement(`li`);
  item.textContent = ingredient;
  item.textContent = ingredient;
  return item;
});
