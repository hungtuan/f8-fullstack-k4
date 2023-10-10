// Destructuring

// const users = {
//   name: "Hoàng An",
//   email: "u@gmail.com",
//   age: 31,
//   "address-shipping": "Hà Nội",
// };

// // const {
// //   name: username,
// //   email,
// //   age = 30,
// //   "address-shipping": addressShipping,
// // } = users;

// // console.log(username, email, age, addressShipping);

// const { name: username, email, ...rest } = users;
// console.log(rest);
// const users = [
//   {
//     id: 1,
//     name: "User 1",
//     email: "user1@gmail.com",
//   },

//   {
//     id: 2,
//     name: "User 2",
//     email: "user2@gmail.com",
//   },

//   {
//     id: 3,
//     name: "User 3",
//     email: "user3@gmail.com",
//   },
// ];

// const getUser = (userId) => users.find(({ id }) => id === userId);

// console.log(getUser(2));

// const showMessage = ({ msg, type }) =>
//   `<div class="msg msg-${type}">${msg}</div>`;
// console.log(showMessage({ msg: "Đăng ký thành công", type: "success" }));

// console.log(showMessage({ msg: "Đăng ký thất bại", type: "error" }));

// const getPriceProduct = ({ price, currency = "vnđ", seps = "," }) => {
//   console.log(price, currency, seps);
// };

// getPriceProduct({
//   price: 12000,
// });

// getPriceProduct({
//   price: 15000,
//   seps: ".",
// });

// const users = [
//   "Hoàng An",
//   "hoangan@gmail.com",
//   31,
//   "Hà Nội",
//   { course: "Fullstack", price: 250000 },
// ];

// const [username, email, , address, phone = "No"] = users;
// console.log(username, email, address, phone);

// const [username, email, ...rest] = users;

// console.log(username, email);
// console.log(rest);
// const [username, email, age, address, { course, price }] = users;
// console.log(username, email, age, course, price);
// let a = 10;
// let b = 20;

// [a, b] = [b, a];
// console.log(a, b);

// const users = { name: "Hoàng An", email: "hoangan@gmail.com" };

// const key = "name";

// const { [key]: username } = users;

// console.log(username);

/*  Spread Operator*/
// const oldObject = {
//   name: "Hoàng An",
//   email: "an@gmail.com",
// };

// const newObject = {
//   course: "fullstack",
// };

// console.log({ ...oldObject });

// const oldArr = ["Hoàng An", "hoangan@gmail.com"];

// const newArr = ["fullstack", ...oldArr];

// console.log(newArr);

// const sum = (a, b, c) => a + b + c;
// const values = [10, 20, 30];
// console.log(sum(...values));

// const initial = {
//   name: "Hoàng An",
//   email: "an@gmail.com",
// };

// const newObj = { ...initial, email: "contact@gmail.com" };

// console.log(initial);
// console.log(newObj);

// const initialValue = ["User 1", "User 2", "User 3"];

// const newArr = [...initialValue];

// newArr.push("User 4");

// console.log(newArr);

/* Enhance Object Literal */

// const username = "Hoàng An";
// const email = "an@gamil.com";
// const age = undefined;
// const address = "Hà Nội";

// const users = {
//   username,
//   email,
//   age,
//   address: address,
// };

// console.log(users);

// const getName = function () {
//   return "Hoàng An";
// };

// const getEmail = function () {
//   return "an@gmail.com";
// };

// const users = {
//   getName,
//   getEmail,
// };

// const users = {
//   getName() {
//     return "Hoàng An";
//   },
//   getEmail() {
//     return "email";
//   },
// };

// console.log(users);

/*Classes*/

// class User {
//   // Thuộc tính và phương thức
//   //Hàm khởi tạo
//   constructor(name, email) {
//     console.log("Hàm này chạy khi object khởi tạo");
//     //   Định nghĩa các thuộc tính

//     this.name = name;
//     this.email = email;
//   }

//   Định nghĩa các phương thức
//   getName() {
//     return this.name;
//   }

//   getEmail() {
//     return this.email;
//   }
// }

// const user = new User("Hoàng An", "an@gmail.com");
// // console.log(user);
// class Authentication extends User {
//   constructor(name, email) {
//     console.log("Authenication contructor");
//     super(name, email); //Chạy contructor của class cha

//     this.isLogin = true;
//   }

//   getInfo() {
//     return this.getName() + "-" + this.getEmail();
//   }
// }
// const auth = new Authentication("Hoàng An", "an");

// console.log(auth);

// class Authorization extends Authentication {
//   constructor(name, email) {
//     console.log(" contructor");
//     super(name, email); //Chạy contructor của class cha

//     this.role = "subscriber";
//   }

//   getRole() {
//     return this.role;
//   }
// }
// const authon = new Authorization("Hoàng An", "an");

// console.log(authon.getRole());
// console.log(authon.getEmail());

// const Customer = class {
//   constructor() {
//     this.name = "Hoàng An";
//     this.email = "an@gmail.com";
//   }
// };

// const customer = new Customer();
// console.log(customer);

// customElements.define(
//   "hello-world",
//   class extends HTMLElement {
//     connectedCallback() {
//       this.innerText = "Hello F8";
//     }
//   }
// );

/* Static */
// class F8 {
//   constructor() {
//     // Thuộc tính non-static
//     this.name = "F8";
//     this.email = "contact@fullstack.edu.vn";
//   }
//   // Phương thức non-static
//   getName() {
//     return this.name;
//   }

//   //   Thuộc tính static
//   static ceo = "Sơn Đăng";

//   static getCeo() {
//     return this.ceo;
//   }
// }

// /*  */
// console.log(F8.getCeo());
