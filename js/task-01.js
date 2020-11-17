// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// Вариант решения №1
// let h2 = document.getElementById("categories").querySelectorAll("h2");
// let ul = document.getElementById("categories").querySelectorAll("ul");
// console.log(ul);
// for (let i = 0; i < ul.length; i++) {
//   console.log(`${h2[i].innerHTML}`);
//   console.log(`${ul[i].querySelectorAll("li").length}`);
//   // console.log(
//   //   'Категория: ${h2[i].textContent}\nKoличество элементов:${ul[i].querySelectorAll("li").length}'
//   // );
// }
// Вариант решения №2
const categoriesRef = document.querySelectorAll(`.item`);
console.log(`В списке ${categoriesRef.length} категории`);

categoriesRef.forEach(function (menuItem) {
  console.log(
    `Категория: ${menuItem.firstElementChild.textContent}\nKoличество элементов:${menuItem.lastElementChild.children.length}`
  );
});
