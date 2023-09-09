var inputFullNameRegister = document.querySelector(
  ".form-register .name-input"
);
var errFullNameRegister = document.querySelector(
  ".form-register .err-fullName"
);
var inputEmailRegister = document.querySelector(".form-register .email-input");
var errEmailRegister = document.querySelector(".form-register .err-email");
var inputPasswordRegister = document.querySelector(
  ".form-register .password-input"
);
var errPasswordRegister = document.querySelector(".form-register .err-pass");
var showHideEleRegister = document.querySelector(".form-register .show-hide");
var eyeNormalEleRegister = document.querySelector(
  ".form-register .show-hide i"
);

function validateEmail(email) {
  var regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  return regex.test(email);
}

function showError(element, message) {
  element.innerText = message;
  element.parentElement.classList.add("invalid");
}

function hideError(element) {
  element.innerText = "";
  element.parentElement.classList.remove("invalid");
}

function validateForm() {
  var email = inputEmailRegister.value;
  var password = inputPasswordRegister.value;
  var fullName = inputFullNameRegister.value;

  if (!email || !password || !fullName) {
    showError(errEmailRegister, "Vui lòng nhập thông tin");
    showError(errPasswordRegister, "Vui lòng nhập thông tin");
    showError(errFullNameRegister, "Vui lòng nhập thông tin");
    return;
  }

  if (!validateEmail(email)) {
    showError(errEmailRegister, "Vui lòng nhập đúng định dạng email");
    showError(errPasswordRegister, "Vui lòng nhập thông tin");
    showError(errFullNameRegister, "Vui lòng nhập thông tin");
    return;
  }

  hideError(errEmailRegister);

  if (password.length <= 6) {
    showError(errPasswordRegister, "Mật khẩu tối thiểu 6-20 ký tự");
  } else {
    hideError(errPasswordRegister);
  }

  hideError(errFullNameRegister);
}

inputEmailRegister.addEventListener("input", function () {
  validateForm();
});

inputEmailRegister.addEventListener("blur", function () {
  if (!inputEmailRegister.value) {
    validateForm();
  }
});

inputPasswordRegister.addEventListener("input", function () {
  validateForm();
});

inputPasswordRegister.addEventListener("blur", function () {
  if (!inputPasswordRegister.value) {
    validateForm();
  }
});

inputFullNameRegister.addEventListener("input", function () {
  validateForm();
});

inputFullNameRegister.addEventListener("blur", function () {
  if (!inputFullNameRegister.value) {
    validateForm();
  }
});

showHideEleRegister.addEventListener("click", function () {
  if (inputPasswordRegister.type === "password") {
    inputPasswordRegister.type = "text";
    eyeNormalEleRegister.classList.remove("fa-eye");
    eyeNormalEleRegister.classList.add("fa-eye-slash");
  } else {
    inputPasswordRegister.type = "password";
    eyeNormalEleRegister.classList.remove("fa-eye-slash");
    eyeNormalEleRegister.classList.add("fa-eye");
  }
});
