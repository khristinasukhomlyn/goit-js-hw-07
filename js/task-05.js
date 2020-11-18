// Напиши скрипт который, при наборе текста в инпуте input#name
//     - input(событие input), подставляет его текущее значение в
// span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log("output", output);

input.addEventListener("input", onInputChange);

output.textContent =
  input.value === "" ? "незнакомец" : event.currentTarget.value;

// function onInputChange(event) {
//   input.value === " "
//     ? (output.textContent = "незнакомец")
//     : (output.textContent = event.currentTarget.value);
// }
