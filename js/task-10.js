function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector('div#boxes');
const counter = document.querySelector('input');
const creatBtn = document.querySelector('button[data-create]');
const destroytBtn = document.querySelector('button[data-destroy]');
creatBtn.addEventListener('click', onCreatBtnclick);
function onCreatBtnclick() {
  let lastDiv;
  const finLastDiv = el => {
    if (el.children[el.children.length - 1]) {
      finLastDiv(el.children[el.children.length - 1]);
    } else {
      lastDiv = el;
    }
  };

  for (let i = 0; i < counter.value; i++) {
    const container = document.createElement('div');
    container.style.width = 30 + 10 * i + 'px';
    container.style.height = 30 + 10 * i + 'px';
    container.style.background = getRandomHexColor();
    if (counter.value == 1) {
      boxes.appendChild(container);
      break;
    }
    finLastDiv(boxes);
    lastDiv.appendChild(container);
  }
}
// (boxes.children[boxes.children.length - 1]).appendChild(container);
