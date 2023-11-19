const userNameField = document.querySelector('#user-name');
const userEmailField = document.querySelector('#user-email');
const formSubmitButton = document.querySelector('#form-submit-btn');
const formContainer = document.querySelector('#form');

formContainer.addEventListener('submit', function (event) {
  event.preventDefault();
});

formSubmitButton.addEventListener('click', function () {
  const formData = new FormData(formContainer);

  console.log('Дані форми готуються до відправки!');

  fetch('/', {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(function () {
      alert('Дякую що відправили форму!');
  }).catch(function () {
      alert('Помилка при відправці форми!');
  })

});

