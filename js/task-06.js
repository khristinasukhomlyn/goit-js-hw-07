// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

const input = document.querySelector(`#validation-input`);
console.log(`input`, input.dataset.length);
input.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
  if (event.target.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove(`valid`);
  } else if (
    event.currentTarget.value.length === Number(input.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove(`invalid`);
  } else {
    input.classList.add("invalid");
    input.classList.remove(`valid`);
  }
}
