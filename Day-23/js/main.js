const btnModal = document.querySelector(".btn-login");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnLogin = document.querySelector(".modal-login");
const btnRegister = document.querySelector(".modal-register");
const loginContent = document.querySelector(".login-content");
const registerContent = document.querySelector(".register-content");

const inputEmailLogin = document.querySelector(".form-login.form .email-input");
const inputPasswordLogin = document.querySelector(
  ".form-login.form .password-input"
);
const errEmail = document.querySelector(".err-email");
const errPassword = document.querySelector(".err-pass");

const inputFullNameRegister = document.querySelector(
  ".form-register.form .name-input"
);
const errFullNameRegister = document.querySelector(
  ".form-register.form .err-fullName"
);
const inputEmailRegister = document.querySelector(
  ".form-register.form .email-input"
);
const errEmailRegister = document.querySelector(
  ".form-register.form .err-email"
);
const inputPasswordRegister = document.querySelector(
  ".form-register.form .password-input"
);
const errPasswordRegister = document.querySelector(
  ".form-register.form .err-pass"
);

function resetFormFields() {
  inputEmailLogin.form.reset();
  errEmail.innerText = "";
  inputEmailLogin.parentElement.classList.remove("invalid");

  inputPasswordLogin.form.reset();
  errPassword.innerText = "";
  inputPasswordLogin.parentElement.classList.remove("invalid");

  inputFullNameRegister.form.reset();
  errFullNameRegister.innerText = "";
  inputFullNameRegister.parentElement.classList.remove("invalid");

  inputEmailRegister.form.reset();
  errEmailRegister.innerText = "";
  inputEmailRegister.parentElement.classList.remove("invalid");

  inputPasswordRegister.form.reset();
  errPasswordRegister.innerText = "";
  inputPasswordRegister.parentElement.classList.remove("invalid");
}

function showLoginTab() {
  btnLogin.classList.remove("no-active");
  btnRegister.classList.add("no-active");
  loginContent.classList.remove("d-none");
  registerContent.classList.add("d-none");
  resetFormFields();
}

function showRegisterTab() {
  btnRegister.classList.remove("no-active");
  btnLogin.classList.add("no-active");
  registerContent.classList.remove("d-none");
  loginContent.classList.add("d-none");
  resetFormFields();
}

btnModal.addEventListener("click", function () {
  modal.classList.add("show");
  showLoginTab();
});

overlay.addEventListener("click", function () {
  modal.classList.remove("show");
});

document.onkeyup = function (el) {
  if (el.key === "Escape") {
    modal.classList.remove("show");
  }
};

btnRegister.addEventListener("click", showRegisterTab);

btnLogin.addEventListener("click", showLoginTab);
