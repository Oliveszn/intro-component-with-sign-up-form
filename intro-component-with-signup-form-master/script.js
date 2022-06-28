"url strict";

const btn = document.querySelector(".btn");
const firstName = document.querySelector(".fName");
const lastName = document.querySelector(".lName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

console.log(btn);
btn.addEventListener("click", function (e) {
  e.preventDefault();
  checkInputs();
});

const checkInputs = function () {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Looks like this is not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password cannot be less than 8 words");
  } else {
    setSuccessFor(password);
  }
};

const setErrorFor = function (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
};

const setSuccessFor = function (input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
};
