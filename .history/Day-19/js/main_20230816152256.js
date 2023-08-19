// var arr = [2, "Tuân", 3];
// console.log(arr);
// console.log(typeof arr);

// Kiểm tra mảng
// if (Array.isArray(arr)) {
//   console.log("Đây là mảng");
// } else console.log("KHông phải");

//Thêm phần tử
// Cuối mảng
// arr[arr.length] = "Tuân";

// console.log(arr);

// Sửa phần tử trong mảng
// arr[3] = "Hưng Tuân";
// console.log(arr);
//Truy caapk vào phần tử
// console.log(arr[3]);
//Duyệt mảng
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (var i in arr) {
//   console.log(arr[i]);
// }
// for (var value of arr) {
//   console.log(value);
// }

// Xóa phần tử trong mảng
// var indexDel = 1;
// var newArr = [];
// for (const index in arr) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   newArr[newArr.length] = arr[index];
// }
// console.log(newArr);

// Thêm phần tử vào đầu mảng
// var value = "Tuấn";
// var newArr = [];

// newArr[0] = value;

// for (const index in arr) {
//   newArr[newArr.length] = arr[index];
// }
// console.log(newArr);

//Nối 2 mảng trả về 1 mảng mới
var arr1 = ["A", "B", "C"];
var arr2 = [1, 2, 3];
var newArr = [];
// for (var i = 0; i < arr1.length; i++) {
//   newArr[newArr.length] = arr1[i];
// }

// for (var j = 0; j < arr2.length; j++) {
//   newArr[newArr.length] = arr2[j];
// }
// console.log(newArr);
// for (var index = 0; index < arr1.length + arr2.length; index++) {
//   if (index < arr1.length) {
//     newArr[newArr.length] = arr1[index];
//   } else {
//     newArr[newArr.length] = arr2[index - arr1.length];
//   }
// }

// console.log(newArr);

var arr = [2, "Tuân", 3, "Tuân"];

//1. at(index) => Lấy phần tử mảng theo index

//2. concat(arr1, arr2,...) => Nối mảng rồi trả về mảng mới

// console.log(arr.concat(["a", "b", "c"]));
// console.log(arr.concat("Tuân"));

// 3. indexOf(value) Tìm vị trí xuất hiện đầu tiên trong mảng
// console.log(arr.indexOf("Tuân"));

//4. lastIndexOf(value) Tìm vị trí xuất hiện cuối cùng
// console.log(arr.lastIndexOf("Tuân"));

//4. includes(value) Tìm phần tử trả về true/false
// console.log(arr.includes("Tuân"));

//6.slice(start, end) cắt mảng trả về mảng mới
console.log(arr.slice(2, 3));
