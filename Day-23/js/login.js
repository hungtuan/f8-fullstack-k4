var inputEmailLogin = document.querySelector(".email-input");
var errEmail = document.querySelector(".err-email");
var inputPasswordLogin = document.querySelector(".password-input");
var errPassword = document.querySelector(".err-pass");
var showHideEle = document.querySelector(".show-hide");
var eyeNormalEle = document.querySelector(".show-hide i");

function validateEmail(email) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(email);
}

function showError(inputElement, errorElement, errorMessage) {
  errorElement.innerText = errorMessage;
  inputElement.parentElement.classList.add("invalid");
}

function hideError(inputElement, errorElement) {
  errorElement.innerText = "";
  inputElement.parentElement.classList.remove("invalid");
}

inputEmailLogin.addEventListener("input", function () {
  hideError(inputEmailLogin, errEmail);
  hideError(inputPasswordLogin, errPassword);

  if (!inputEmailLogin.value) {
    showError(inputEmailLogin, errEmail, "Vui lòng nhập thông tin");
  } else if (!validateEmail(inputEmailLogin.value)) {
    showError(inputEmailLogin, errEmail, "Vui lòng nhập đúng định dạng email");
    showError(inputPasswordLogin, errPassword, "Vui lòng nhập thông tin");
  } else if (inputPasswordLogin.value) {
    hideError(inputPasswordLogin, errPassword);
  }
});

inputEmailLogin.addEventListener("blur", function () {
  if (!inputEmailLogin.value && !inputPasswordLogin.value) {
    showError(inputEmailLogin, errEmail, "Vui lòng nhập thông tin");
    showError(inputPasswordLogin, errPassword, "Vui lòng nhập thông tin");
  }
});

inputPasswordLogin.addEventListener("input", function () {
  hideError(inputPasswordLogin, errPassword);

  if (!inputEmailLogin.value) {
    showError(inputPasswordLogin, errPassword, "Vui lòng nhập thông tin");
  } else if (inputPasswordLogin.value) {
    hideError(inputPasswordLogin, errPassword);
    if (!validateEmail(inputEmailLogin.value)) {
      showError(inputEmailLogin, errEmail, "Vui lòng nhập thông tin");
    }
  }
});

inputPasswordLogin.addEventListener("blur", function () {
  if (!inputEmailLogin.value && !inputPasswordLogin.value) {
    showError(inputEmailLogin, errEmail, "Vui lòng nhập thông tin");
    showError(inputPasswordLogin, errPassword, "Vui lòng nhập thông tin");
  }
});

// SHOW AND HIDE PASSWORD

eyeNormalEle.classList.add("fa-eye");

showHideEle.addEventListener("click", function () {
  if (inputPasswordLogin.type === "password") {
    inputPasswordLogin.type = "text";
    eyeNormalEle.classList.remove("fa-eye");
    eyeNormalEle.classList.add("fa-eye-slash");
  } else {
    inputPasswordLogin.type = "password";
    eyeNormalEle.classList.remove("fa-eye-slash");
    eyeNormalEle.classList.add("fa-eye");
  }
});
