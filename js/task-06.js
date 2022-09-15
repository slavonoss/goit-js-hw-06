const inputEl = document.querySelector('input');

const validBorder = document.querySelector('validation-input.valid');

inputEl.addEventListener('blur', onInputChanger);
function onInputChanger() {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
