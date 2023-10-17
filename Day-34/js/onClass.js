// Async - Await
// Async -> Trả về Promise
// Muons resolve 1 promise => Dùng từ khóa await trước funtion dược gọi
// const getUser = async () => {
//   const usser = ["an", "quan"];
//   return usser;
// };

// getUser().then((data) => {
//   console.log(data);
// });

// const getUser = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("F8");
//     }, 1000);
//   });
// };

// const showUser = async () => {
//   const user = await getUser(); //Mỗi lần await -> 1 lần then
//   console.log(user);
//   console.log("Hoàn thành");
// };

// showUser();

/* IIFE */
// (async () => {
//   const user = await getUser();
//   console.log(user);
// })();

// const getA = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Ảnh 1");
//     }, 1000);
//   });
// };

// const getB = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Ảnh 2");
//     }, 1000);
//   });
// };

// const getC = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Ảnh 3");
//     }, 1000);
//   });
// };

// const getImage = async () => {
//   const image1 = await getA();
//   console.log(image1);

//   const image2 = await getB();
//   console.log(image2);

//   const image3 = await getC();
//   console.log(image3);
// };

// getImage();

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//     salary: 10000,
//   },
//   {
//     id: 2,
//     name: "User 2",
//     salary: 20000,
//   },
//   {
//     id: 3,
//     name: "User 3",
//     salary: 30000,
//   },
// ];

// const getUser = (userId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = users.find(({ id }) => {
//         return id === userId;
//       });
//       resolve(data);
//     }, 1000);
//   });
// };

// const getSalary = (userId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = users.find(({ salary }) => {
//         salary = users.salary;
//       });
//       resolve(data);
//     }, 1000);
//   });
// };

// const lists = [1, 2, 3];

// const getSalary = () => {
//   const promises = lists.map((id) => {
//     return getUser(id);
//   });

//   Promise.all(promises).then((users) => {
//     const salary = users.reduce((total, { salary }) => {
//       return total + salary;
//     }, 0);

//     console.log(salary);
//   });
// };

// getSalary();

// Try - catch -> Xử lý các lỗi ngoại lệ
// try {
//   // Code
//   let a = 10;
//   if (a > 20) {
//     console.log(a);
//   } else {
//     throw new Error("a không nhỏ hơn 20");
//   }
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("Hoàn thành");
// }

// const getUser = () => Promise.reject("Lỗi");

// const showUser = async () => {
//   try {
//     const data = await getUser();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Hoàn thành");
//   }
// };

// showUser();

/* Fetch API */
const serverApi = `http://localhost:3000`;
// fetch(`${serverApi}/users`)
//   .then((response) => {
//     //   Lấy dữ liệu gọi đến hàm json() hoặc text()
//     console.log(response);
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   });

// const getUsers = async () => {
//   const response = await fetch(`${serverApi}/users`);
//   const users = await response.json();
//   document.body.innerHTML = users
//     .map(({ name, email }) => {
//       return `<h2>${name}</h2><h3>${email}</h3>`;
//     })
//     .join("");
// };

// getUsers();

// const getUser = async (id) => {
//   const response = await fetch(`${serverApi}/users/${id}`);
//   const users = await response.json();

//   console.log(users);
// };
// getUser(2);

// const postUser = async (data) => {
//   const response = await fetch(`${serverApi}/users/4`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };

// postUser();
