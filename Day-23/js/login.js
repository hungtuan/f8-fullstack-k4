var inputEmailLogin = document.querySelector(".form-login.form .email-input");
var errEmail = document.querySelector(".err-email");
var inputPasswordLogin = document.querySelector(
  ".form-login.form .password-input"
);
var errPassword = document.querySelector(".err-pass");
var showHideEle = document.querySelector(".show-hide");
var eyeNormalEle = document.querySelector(".show-hide i");

// Kiểm tra định dạng Email khi người dùng nhập
inputEmailLogin.oninput = function () {
  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i;

  if (regex.test(inputEmailLogin.value)) {
    errEmail.innerText = ""; // Đúng định dạng, xóa thông báo lỗi
    inputEmailLogin.parentElement.classList.remove("invalid");

    if (inputPasswordLogin.value === "") {
      errPassword.innerText = "Vui lòng nhập thông tin";
      inputPasswordLogin.parentElement.classList.add("invalid");
    }
  } else {
    errEmail.innerText = "Vui lòng nhập đúng định dạng email";
    errPassword.innerText = "Vui lòng nhập thông tin";
    inputEmailLogin.parentElement.classList.add("invalid");
    inputPasswordLogin.parentElement.classList.add("invalid");
  }

  if (inputEmailLogin.value === "") {
    errEmail.innerText = "Vui lòng nhập thông tin";
  }

  if (!regex.test(inputEmailLogin.value) && inputPasswordLogin.value) {
    errPassword.innerText = "";
    inputPasswordLogin.parentElement.classList.remove("invalid");
  }
};

// Kiểm tra Email khi người dùng ra khỏi trường nhập
inputEmailLogin.onblur = function () {
  if (!inputEmailLogin.value && !inputPasswordLogin.value) {
    errEmail.innerText = "Vui lòng nhập thông tin";
    errPassword.innerText = "Vui lòng nhập thông tin";
    inputEmailLogin.parentElement.classList.add("invalid");
    inputPasswordLogin.parentElement.classList.add("invalid");
  }
};

// Kiểm tra Mật khẩu khi người dùng nhập
inputPasswordLogin.oninput = function () {
  if (!inputEmailLogin.value) {
    errPassword.innerText = "Vui lòng nhập thông tin";
    inputPasswordLogin.parentElement.classList.add("invalid");
  } else {
    errPassword.innerText = "";
    inputPasswordLogin.parentElement.classList.remove("invalid");
  }

  if (inputPasswordLogin.value === "") {
    errPassword.innerText = "Vui lòng nhập thông tin";
    inputPasswordLogin.parentElement.classList.add("invalid");
  }

  if (inputPasswordLogin.value) {
    errPassword.innerText = "";
    inputPasswordLogin.parentElement.classList.remove("invalid");

    if (inputEmailLogin.value === "") {
      errEmail.innerText = "Vui lòng nhập thông tin";
      inputEmailLogin.parentElement.classList.add("invalid");
    }
  }
};

// Kiểm tra Mật khẩu khi người dùng ra khỏi trường nhập
inputPasswordLogin.onblur = function () {
  if (!inputEmailLogin.value && !inputPasswordLogin.value) {
    errEmail.innerText = "Vui lòng nhập thông tin";
    errPassword.innerText = "Vui lòng nhập thông tin";
    inputEmailLogin.parentElement.classList.add("invalid");
    inputPasswordLogin.parentElement.classList.add("invalid");
  }

  if (inputPasswordLogin.value) {
    errPassword.innerText = "";
    inputPasswordLogin.parentElement.classList.remove("invalid");
  }
};

// Hiển thị hoặc ẩn Mật khẩu khi người dùng nhấp vào biểu tượng
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
