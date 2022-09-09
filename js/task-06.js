const inputEl = document.querySelector("input")

const validBorder = document.querySelector('validation-input.valid')

inputEl.addEventListener('input', onInputChanger);
function onInputChanger(){
    if (inputEl.value.length < inputEl.dataset.length) {
       
        inputEl.classList.add('invalid')
        
    }
    else {
        inputEl.classList.replace('invalid', 'valid' )
        
    }
}