const inputName = document.querySelector("#name-input");
const nameChanger = document.querySelector("span#name-output");
inputName.addEventListener('input', onInputChanger)
function onInputChanger(event) {
   console.dir (inputName)
    if (inputName.value === "") {
        nameChanger.textContent = "Anonymous"
    }
    else {
        nameChanger.textContent = event.currentTarget.value
    }
}
