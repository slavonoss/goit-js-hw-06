function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('button');
const colorName = document.querySelector('span.color');
const body = document.querySelector('body');
btn.addEventListener('click', onChangeHexColor);
function onChangeHexColor() {
  const hexColor = getRandomHexColor();
  colorName.textContent = hexColor;
  body.style.background = hexColor;
  btn.style.background = hexColor;
}
