// // Template

// // var html = `<h1>F8 - Fullstack</h1>
// // <button>Click me</button>
// // `;

// // root.innerHTML = html;
// // var template = document.querySelector("template");

// // var templateNode = template.content.cloneNode(true);

// // root.append(templateNode);

// // var templateNode2 = template.content.cloneNode(true);
// // root.append(templateNode2);

// var F8 = {
//   render: function (rootEl, option) {
//     var root = document.querySelector(rootEl);

//     var templateEl = document.createElement("template");
//     templateEl.innerHTML = option.template;
//     var templateNode = templateEl.content.cloneNode(true);

//     Array.from(templateNode.children).forEach((el) => {
//       var length = el.getAttribute("v-length");
//       if (length) {
//         var count = length;

//         for (let index = 0; index < length - 1; index++) {
//           count--;

//           var elementNode = el.cloneNode(true);

//           elementNode.innerHTML = elementNode.innerHTML.replaceAll(
//             "{index}",
//             count
//           );

//           templateNode.insertBefore(elementNode, el.nextElementSibling);
//         }
//       }
//     });
//     root.append(templateNode);
//   },
// };

// F8.render("#root", {
//   template: `
//   <h1 v-length="5">Sản phẩm 1</h1>
//   <h2 v-length="3">Sản phẩm 2</h2>
//   <div v-length="3">
//   <h1>Hoàng An</h1>
//   <p>F8</p>
//   </div>
//   `,
// });

// Strict Mode

// "use strict";

// var user = {
//   name: "Hoàng An",
// };

/* Hoisting */
// var getMes = function () {
//   console.log("helo");
// };

/* ES6 */
// let: được phép thay đổi
// const: Không được phép thay đổi, khai báo phải gán luôn

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const use = {
//   name: "Hoàng An",
// };

/* Arrow function */
// const getMes = () => {
//   console.log("Hello");
// };
// getMes();

// 2. Arrow function 1 tham số
// const getMes = (msg) => {
//   console.log(msg);
// };
// getMes("f8");

// 3. Arrow function nhiều tham số
// const getUser = () => ({
//   name: "hoàng AN",
//   email: "Hoangfan@gmail.com",
// });

// // console.log(getUser());

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },

//   {
//     id: 2,
//     name: "User 2",
//   },

//   {
//     id: 3,
//     name: "User 3",
//   },
// ];

// const id = 2;
// const info = users.find((user) => user.id === id);

// console.log(info);

// setTimeout(() => {
//   console.log("Hello");
// }, 1000);

// // Arrow funtion với Closure

// const div = (a) => (b) => a / b;
// const result = div(10);

// console.log(result(5));
// console.log(result(10));

// // Arrow funtion với IIFE(function gọi luôn)
// (() => {
//   console.log("ABC");
// })();

// (function () {
//   console.log("BCD");
// })();

// Nguyên tắc
// Không dùng để thay thế funtion truyền thống
// Không dùng sử dụng làm method của object
// Không được sử dụng xây dụng hàm tạo (function Contructor)
// Không có thuộc thính prototype

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// const customers = {
//   name: "User 1",
//   email: "hoangan@gmail.com",

//   getInfo: function () {
//     return this.name + " - " + this.email;
//   },
// };

// console.log(customers.getInfo());

// const Customer = () => {
//     this.name = name;
//     this.email = email;
// }

// const customer = new Customer;

// Array.prototype.getLength = function () {
//   console.log(this);
// };

// const list = [1, 2, 3];
// list.getLength();
