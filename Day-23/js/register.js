var inputFullNameRegister = document.querySelector(
  ".form.form-register .name-input"
);
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
var showHideEleRegister = document.querySelector(
  ".form.form-register .show-hide"
);
var eyeNormalEleRegister = document.querySelector(
  ".form.form-register .show-hide i"
);

// Kiểm tra định dạng Email khi người dùng nhập
inputEmailRegister.oninput = function () {
  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i;

  if (regex.test(inputEmailRegister.value)) {
    errEmailRegister.innerText = ""; // Đúng định dạng, xóa thông báo lỗi
    inputEmailRegister.parentElement.classList.remove("invalid");

    if (inputPasswordRegister.value === "") {
      errPasswordRegister.innerText = "Vui lòng nhập thông tin";
      inputPasswordRegister.parentElement.classList.add("invalid");
    }

    if (inputFullNameRegister.value === "") {
      errFullNameRegister.innerText = "Vui lòng nhập thông tin";
      inputFullNameRegister.parentElement.classList.add("invalid");
    }
  } else {
    errEmailRegister.innerText = "Vui lòng nhập đúng định dạng email";
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    errFullNameRegister.innerText = "Vui lòng nhập thông tin";
    inputEmailRegister.parentElement.classList.add("invalid");
    inputPasswordRegister.parentElement.classList.add("invalid");
    inputFullNameRegister.parentElement.classList.add("invalid");
  }

  if (inputEmailRegister.value === "") {
    errEmailRegister.innerText = "Vui lòng nhập thông tin";
  }

  if (!regex.test(inputEmailRegister.value) && inputPasswordRegister.value) {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");
  }

  if (!regex.test(inputEmailRegister.value) && inputFullNameRegister.value) {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }

  if (
    inputEmailRegister.value &&
    inputPasswordRegister.value &&
    inputFullNameRegister.value
  ) {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }

  if (inputEmailRegister.value && inputFullNameRegister.value) {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }
};

// Kiểm tra Email khi người dùng ra khỏi trường nhập
inputEmailRegister.onblur = function () {
  if (
    !inputEmailRegister.value &&
    !inputPasswordRegister.value &&
    !inputFullNameRegister.value
  ) {
    errEmailRegister.innerText = "Vui lòng nhập thông tin";
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    errFullNameRegister.innerText = "Vui lòng nhập thông tin";
    inputEmailRegister.parentElement.classList.add("invalid");
    inputPasswordRegister.parentElement.classList.add("invalid");
    inputFullNameRegister.parentElement.classList.add("invalid");
  }
};

// Kiểm tra Mật khẩu khi người dùng nhập
inputPasswordRegister.oninput = function () {
  if (!inputEmailRegister.value) {
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    inputPasswordRegister.parentElement.classList.add("invalid");
  } else {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");
  }

  if (inputPasswordRegister.value === "") {
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    inputPasswordRegister.parentElement.classList.add("invalid");
  }

  if (inputPasswordRegister.value) {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");

    if (inputEmailRegister.value === "") {
      errEmailRegister.innerText = "Vui lòng nhập thông tin";
      inputEmailRegister.parentElement.classList.add("invalid");
    }

    if (inputFullNameRegister.value === "") {
      errFullNameRegister.innerText = "Vui lòng nhập thông tin";
      inputFullNameRegister.parentElement.classList.add("invalid");
    }
  }

  if (inputPasswordRegister.value.length <= 6) {
    errPasswordRegister.innerText = "Mật khẩu tối thiểu 6-20 ký tự";
    inputPasswordRegister.parentElement.classList.add("invalid");
  }
  if (inputPasswordRegister.value.length === 0) {
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    inputPasswordRegister.parentElement.classList.add("invalid");
  }
};

// Kiểm tra Mật khẩu khi người dùng ra khỏi trường nhập
inputPasswordRegister.onblur = function () {
  if (
    !inputEmailRegister.value &&
    !inputPasswordRegister.value &&
    !inputFullNameRegister.value
  ) {
    errEmailRegister.innerText = "Vui lòng nhập thông tin";
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    errFullNameRegister.innerText = "Vui lòng nhập thông tin";
    inputEmailRegister.parentElement.classList.add("invalid");
    inputPasswordRegister.parentElement.classList.add("invalid");
    inputFullNameRegister.parentElement.classList.add("invalid");
  }

  if (inputPasswordRegister.value) {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");
  }

  if (inputPasswordRegister.value.length <= 6) {
    errPasswordRegister.innerText = "Mật khẩu tối thiểu 6-20 ký tự";
    inputPasswordRegister.parentElement.classList.add("invalid");
  }
  if (inputPasswordRegister.value.length === 0) {
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    inputPasswordRegister.parentElement.classList.add("invalid");
  }
};

// Kiểm tra Tên đầy đủ khi người dùng nhập
inputFullNameRegister.oninput = function () {
  if (!inputEmailRegister.value) {
    errFullNameRegister.innerText = "Vui lòng nhập thông tin";
    inputFullNameRegister.parentElement.classList.add("invalid");
  } else {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }

  if (inputFullNameRegister.value === "") {
    errFullNameRegister.innerText = "Vui lòng nhập thông tin";
    inputFullNameRegister.parentElement.classList.add("invalid");
  }

  if (inputFullNameRegister.value) {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");

    if (inputEmailRegister.value === "") {
      errEmailRegister.innerText = "Vui lòng nhập thông tin";
      inputEmailRegister.parentElement.classList.add("invalid");
    }

    if (inputPasswordRegister.value === "") {
      errPasswordRegister.innerText = "Vui lòng nhập thông tin";
      inputPasswordRegister.parentElement.classList.add("invalid");
    }
  }
};

// Kiểm tra Tên đầy đủ khi người dùng ra khỏi trường nhập
inputFullNameRegister.onblur = function () {
  if (
    !inputEmailRegister.value &&
    !inputPasswordRegister.value &&
    !inputFullNameRegister.value
  ) {
    errEmailRegister.innerText = "Vui lòng nhập thông tin";
    errPasswordRegister.innerText = "Vui lòng nhập thông tin";
    errFullNameRegister.innerText = "Vui lòng nhập thông tin";
    inputEmailRegister.parentElement.classList.add("invalid");
    inputPasswordRegister.parentElement.classList.add("invalid");
    inputFullNameRegister.parentElement.classList.add("invalid");
  }

  if (inputFullNameRegister.value) {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }
};

// Hiển thị hoặc ẩn Mật khẩu khi người dùng nhấp vào biểu tượng
eyeNormalEleRegister.classList.add("fa-eye");

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
