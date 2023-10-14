// //class

// class User {
//   constructor() {
//     this.name = "Hoàng an";
//     this.email = "an@gmail.com";
//   }

//   getName() {
//     return this.name;
//   }

//   getEmail() {
//     console.log(this);
//     return this.constructor.getFullEmail();
//   }

//   static getFullName() {
//     return new this().getName();
//   }

//   static getFullEmail() {
//     return new this().email;
//   }
// }

// // console.log(User.getFullName());
// // const user = new User();

// // console.log(user.getEmail());

// class F8 {
//   // Thuộc tính private
//   //   #email = "hoangan@gmail.com";
//   #name;
//   constructor() {
//     this.data = ["Item 1", "Item 2", "Item 3"];
//     this.#name = "Hoàng An";
//   }
//   //   getter
//   get latest() {
//     return this.data[this.data.length - 1];
//   }

//   get getName() {
//     return this.name;
//   }

//   getname() {
//     return this.#name;
//   }

//   //   setter
//   set latest(value) {
//     this.data.push(value);
//   }

//   set setName(value1) {
//     this.#name = value1;
//   }
// }
// const f8 = new F8();
// console.log(f8.getname());
// // f8.latest = "Item 4";

// f8.setName = "Hung Tuan";

// console.log(f8);

// console.log(f8.getname());

// // console.log(f8.latest);
// // console.log(f8.getName);

// // const users = ["Item 1", "Item 2", "Item 3"];

// // Object.defineProperty(Array, "length2", {
// //   get: function () {
// //     return 1;
// //   },
// // });

// // console.log(users.length2);

// ES6 Module
// import getMessage, {
//   User as User2,
//   customer as customer2,
// } from "../modules/function.js";
// const user = new User2();

// console.log(customer2.name);
// console.log(customer2["shiping-name"]);

// console.log(getMessage());
// console.log(user.name);
// console.log(user.email);
// import * as functions from "../modules/function.js";

// const { User, customer } = functions;

// const user = new User();
// console.log(user.name);

/* Bất đồng bộ*/
// 3 cách
// 1.Call back
// 2. Promise
// 3. Async/Await

// const downImage = (callback) => {
//   setTimeout(() => {
//     console.log("ĐÃ tải");

//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const showMessage = () => {
//   console.log("Thành công");
// };

// downImage(showMessage);

// const download1 = (callback) => {
//   setTimeout(() => {
//     console.log("Ảnh 1");

//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const download2 = (callback) => {
//   setTimeout(() => {
//     console.log("Ảnh 2");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1500);
// };

// const download3 = (callback) => {
//   setTimeout(() => {
//     console.log("Ảnh 3");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 500);
// };

// download1(() => {
//   download2(() => {
//     download3(() => {
//       console.log("Đã tải xong");
//     });
//   });
// });

/* Promise */
// Object dùng để xử lý các tiến trình bất đồng bộ
// têm object: Promise

// const getUsers = () => {
//   const promise = new Promise((resolve, reject) => {
//     const users = ["User 1", "User 2", "User 3"];
//     setTimeout(() => {
//       resolve(users);
//       //   Giả sử lấy user thất bại

//       reject("Lỗi mạng");
//     }, 1000);
//   });
//   return promise;
// };

// getUsers()
//   .then((users) => {
//     console.log(users);
//     console.log("Lấy user thành công");
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Hoàn Thành");
//   });

// const getA = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Lỗi 1");
//       //   resolve("Ảnh 1");
//     }, 1000);
//   });
// };

// const getB = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Lỗi 2");

//       //   resolve("Ảnh 2");
//     }, 1000);
//   });
// };

// const getC = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Lỗi 3");

//       //   resolve("Ảnh 3");
//     }, 1000);
//   });
// };

// getA()
//   .then((response) => {
//     console.log(response);
//     return getB();
//   })
//   .catch((error) => {
//     console.log(error);
//     return getB();
//   })
//   .then((response) => {
//     console.log(response);
//     return getC();
//   })
//   .catch((error) => {
//     console.log(error);
//     return getC();
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/* Async Await */
