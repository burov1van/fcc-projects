const form = document.getElementById("simple-form");
const firstName = document.getElementById("first-name");
const middleName = document.getElementById("middle-name");
const lastName = document.getElementById("last-name");
const ageField = document.getElementById("age");
const formBtn = document.querySelector(".simple-form__button");
const simpleFormFieldset = document.querySelector(".simple-form__fieldset");
function validation (form) {
  console.log(form)
  let result = true
  return result

}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkedRadio = form.querySelector('input[name="gender"]:checked');
  const gender = checkedRadio ? checkedRadio.value : null;
  const newObj = {
    firstName: firstName.value.trim(),
    middleName: middleName.value.trim(),
    lastName: lastName.value.trim(),
    age: Number(ageField.value) || null,
    gender,
  };

form.querySelectorAll('input').forEach(input => {console.log(input)})

  console.log(newObj);

if(validation(this)) {
  alert("Все ок! ")
}
});
