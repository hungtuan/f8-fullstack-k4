var arr = [2, "Tuân", 3];
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

var value = "Tuấn";
var newArr = [];
newArr[0] = value;

for (const index in arr) {
  newArr[newArr.length] = arr[index];
}
console.log(newArr);