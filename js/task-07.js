const input = document.querySelector('#font-size-control');
console.dir(input);
const outputText = document.querySelector('span#text');

input.addEventListener('input', onChangeRange);
function onChangeRange(event) {
  outputText.style.fontSize = `${input.value}px`;
}
