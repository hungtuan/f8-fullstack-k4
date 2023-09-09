var btnModal = document.querySelector(".btn-login");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var btnLogin = document.querySelector(".modal-login");
var btnRegister = document.querySelector(".modal-register");
var loginContent = document.querySelector(".login-content");
var registerContent = document.querySelector(".register-content");

var inputEmailLogin = document.querySelector(".form-login.form .email-input");
var inputPasswordLogin = document.querySelector(
  ".form-login.form .password-input"
);
var errEmail = document.querySelector(".err-email");
var errPassword = document.querySelector(".err-pass");

var inputFullNameRegister = document.querySelector(".form.form-register");
var errFullNameRegister = document.querySelector(
  ".form.form-register .err-fullName"
);
var inputEmailRegister = document.querySelector(
  ".form.form-register .email-input"
);
var errEmailRegister = document.querySelector(".form.form-register .err-email");
var inputPasswordRegister = document.querySelector(
  ".form.form-register .password-input"
);
var errPasswordRegister = document.querySelector(
  ".form.form-register .err-pass"
);

// Hàm để thiết lập lại các trường và thông báo lỗi
function resetFieldsAndErrors() {
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

// Ẩn hiện modal
btnModal.addEventListener("click", function () {
  modal.classList.add("show");
  registerContent.classList.add("display-none");
  btnLogin.classList.remove("no-active");
  btnRegister.classList.add("no-active");
  loginContent.classList.remove("display-none");
  registerContent.classList.add("display-none");

  resetFieldsAndErrors();
});

overlay.addEventListener("click", function () {
  modal.classList.remove("show");
});

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
};

// Chuyển tab trong modal
btnRegister.addEventListener("click", function () {
  btnRegister.classList.remove("no-active");
  btnLogin.classList.add("no-active");
  registerContent.classList.remove("display-none");
  loginContent.classList.add("display-none");

  resetFieldsAndErrors();
});

btnLogin.addEventListener("click", function () {
  btnLogin.classList.remove("no-active");
  btnRegister.classList.add("no-active");
  loginContent.classList.remove("display-none");
  registerContent.classList.add("display-none");

  resetFieldsAndErrors();
});
