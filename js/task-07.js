// Напиши скрипт, который реагирует на изменение значения input#font
//     - size - control(событие input) и изменяет инлайн -
//         стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector("#font-size-conrtrol");
const text = document.querySelector("#text");
input.addEventListener("input", () => {
  text.style.fontsize = input.value + "px";
});

// let fontSizeControl = document.getElementById('font-size-control');

// fontSizeControl.addEventListener('input', () => {
//   document.getElementById('text').style.fontSize = ${ fontSizeControl.value } px;
// });
