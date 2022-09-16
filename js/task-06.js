const inputEl = document.querySelector('input');

const validBorder = document.querySelector('validation-input.valid');

inputEl.addEventListener('blur', onInputChanger);
function onInputChanger() {
  inputEl.classList.add('invalid');
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.replace('invalid', 'valid');
  }
  if (inputEl.value.length != inputEl.dataset.length && inputEl.classList.contains('valid')) {
    inputEl.classList.remove('valid');
  }
}
