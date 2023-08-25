// Object = Đối tuonwgj

// - Object Literial: Đối tượng nguyên bản (gốc rễ)
// Funtion Contrucor: Hàm tạo

// Khai báo đối tượng

// var user = {
//   name: "Hoàng An",
//   email: "hoangan@fullstack.edu.vn",
//   address: "Hà Nội",
//   "shipping-fast": "GHTK",
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(user.getName());
// TRuy cập vào key trong object
// 1. tên object.tenkey
// 2. teenoject['tenkey']

// console.log(user.name);
// console.log(user.email);
// console.log(user["address"]);
// console.log(user.getName());

// // Thêm key mới
// user.age = 31;
// user["job"] = "Teacher";

// Cập nhật giá trị
// user.age = 32;

// user["age"] = "Nam Từ Liêm- Hà Nội";

// Xóa giá trị
// delete user.address;
// console.log(user);

// Duyệt các key trong object
// for (const key in user) {
//   console.log(key, user[key]);
//   console.log(typeof key);
// }

// Object.keys(user).forEach((key) => {
//   console.log(key, user[key]);
// });

// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   detail: {
//     age: 31,
//     job: "Teacher",
//     histoies: [
//       {
//         year: 2020,
//         name: "Công việc 1",
//       },

//       {
//         year: 2021,
//         name: "Công việc 2",
//       },

//       {
//         year: 2022,
//         name: "Công việc 3",
//       },
//     ],
//   },

//   getInfo: function () {
//     var current = this;
//     return {
//       username: this.name,
//       address: "Hà Nội",
//       getFull: function () {
//         return `
//         Name: ${current.name}
//         Email: ${current.email}
//         Địa chỉ: ${this.address}`;
//       },
//     };
//   },
// };

// console.log(user.getInfo().getFull());
// var customer = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
// };

// Object.prototype.combine = function (...args) {
//   var current = this;
//   return args.map((value) => {
//     return current[value];
//   });
// };

// console.log(customer.combine("name", "email", "age"));

// var service = {
//   name: "Đào tạo lập trình",
//   teacher: "Hoàng An",
// };

// console.log(service.combine("name", "teacher"));
// var user = {
//   name: "Hoàng An",
//   email: "hoangan@gamil.com",
// };

// var course = {
//   courseName: "Fullstack K4",
//   teacher: "Hoàng An F8",
// };

// // Object.asign(target, source)
// var temp = {};
// Object.assign(temp, user);

// var result = Object.assign(temp, course);

// console.log(user);

// console.log(result);
// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// var customer = {
//   name: "Lưu Anh Quân",
//   email: "quan@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(user, customer);

// Tạo ra 1 bản thiết kế cho Object
// Đặt tên theo cú pháp PascalCase

// var User = function () {
//   this.name = "Hoàng An";
//   this.email = "hoangan@gmail.com";
// };

// var Auth = function () {
//   this.getInfo = function () {
//     return new User();
//   };
// };

// var a = new Auth();
// var b = new User();
// var c = "Hoàng An";
// var d;
// console.log(a.constructor.name);
// console.log(b);
// console.log(c.constructor.name);
// console.log(b instanceof User);

// Kieemr tra 1 biến có phải Object không?

// var a = {};
// if (typeof a === "object" && a !== null && !Array.isArray(a)) {
//   console.log(`a là object`);
// } else {
//   console.log("Khác");
// }

// Tạo ra 1 hàm nội bộ bên trong  1 hàm tạo
// var getMessage = function () {
//   return `Hello F8`;
// };

// console.log(window.getMessage());

// User.getMessage2 = function () {
//   return `Hello F8 - 2`;
// };

// console.log(User);

// console.log(User.getMessage2());
// Phân biệt
// -gọi hàm nội bộ của hàm tạo
//  - Gọi phương thức của hàm tạo (Khởi tạo Object)
// Object.asgin()
// Object.keys()
// var a = { name: "An" };
// console.log(a.valueOf());
