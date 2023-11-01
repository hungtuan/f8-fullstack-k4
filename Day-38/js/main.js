// // Xử lý hết hạn khi có nhiều API gọi cùng 1 lúc
// let requestTokenRefresh = null;

// const requestRefresh = () => {
//   return new Promise((resolve) => {
//     resolve("New token");
//     console.log("requestRefresh");
//   });
// };

// const fetch = (resource, token) => {
//   setTimeout(() => {
//     console.log(`Request: ${resource} with ${token}`);
//   }, 1000);
// };

// const request = async (resource) => {
//   let isExpired = true;

//   let token = "My token";

//   if (isExpired) {
//     if (!requestTokenRefresh) {
//       requestTokenRefresh = requestRefresh();
//     }
//   }

//   let newToken = await requestTokenRefresh;
//   token = newToken;
//   fetch(resource, token);
// };

// request("slider");
// request("course");
// request("posts");

// Cookie
// document.cookie = "username=hoangan.web@gmail.com";
// document.cookie = "email=hoangan.web@gmail.com";

// Date
// const today = new Date();
// console.log(today.getDay());
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getFullYear());
// console.log(today.getMinutes());
// console.log(today.getMilliseconds());
// console.log(today.getTime());

// today.setDate(30);
// console.log(today);

/* Regular Expression => Biểu thức chính quy */

// So khớp
// Cắt chuỗi
// Thay thế

// Cấu trúc
// const pattern = /regex/modifier

// const pattern = /hoangan/g;
// // console.log({ pattern });
// const str = "hoanganit19";
// const check = pattern.test(str);
// console.log(check);
