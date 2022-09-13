const form = document.querySelector('form.login-form');
form.addEventListener('submit', onSubmitBtnClick);
function onSubmitBtnClick(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (!email || !password) {
    alert('НЕ всі поля заповнені');
  } else {
    const formData = { email, password };
    console.log(formData);
    event.currentTarget.reset();
  }
}
