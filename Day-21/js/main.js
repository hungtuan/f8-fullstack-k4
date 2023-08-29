// // # Bài 1:
// var errors = {
//   name: {
//     required: "Vui lòng nhập họ tên",
//     min: "Họ tên phải từ 5 ký tự",
//   },
//   email: {
//     email: "Định dạng email không hợp lệ",
//     unique: "Email đã có người sử dụng",
//     required: "Vui lòng nhập địa chỉ email",
//   },
//   password: {
//     required: "Vui lòng nhập mật khẩu",
//     same: "Mật khẩu phải khớp với mật khẩu nhập lại",
//   },
// };

// var getError = (field) => {
//   if (errors[field]) {
//     for (var key in errors[field]) {
//       return errors[field][key];
//     }
//   } else {
//     return "Không có lỗi";
//   }
// };

// console.log(getError("email"));

// // # Bài 2:
// // Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, age và address.
// // Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.
// // Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.

// const Customer = function (name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
// };

// const createCustomers = (customers) => {
//   const customerSort = customers.sort((a, b) => a.age - b.age);

//   const result = customerSort.map((value) => {
//     const customShortName = value.name.split(" ");
//     const firstName = customShortName[0];
//     const lastName = customShortName[2];
//     const shortName = `${firstName} ${lastName}`;
//     return { ...value, shortName };
//   });
//   return result;
// };

// const customers = [
//   { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
//   { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
//   { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
// ];

// const result = createCustomers(customers);
// console.log(result);

// // # Bài 3:
// // Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng có 3 thuộc tính: name, password và email.
// // Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.

// const User = function (name, password, email) {
//   this.name = name;
//   this.password = password;
//   this.email = email;
//   this.role = "user";
// };

// const data = [];

// const handleRegister = (name, password, email) => {
//   // Không hợp lệ
//   if (!name || !password || !email) {
//     console.log("Thông tin đăng ký không đầy đủ. Vui lòng kiểm tra lại.");
//     return;
//   }
//   // Hợp lệ
//   const user = new User(name, password, email);
//   data.push(user);
//   return data;
// };

// const handleLogin = (email, password) => {
//   for (const user of data) {
//     if ((email === user.email) & (password === user.password)) {
//       return user;
//     }
//   }

//   console.log("Thông tin đăng nhập không hợp lệ");
// };

// handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
// handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
// const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

// console.log(data);
// console.log(dataLogin);
