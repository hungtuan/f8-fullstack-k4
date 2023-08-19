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
// var arr1 = ["A", "B", "C"];
// var arr2 = [1, 2, 3];
// var newArr = [];
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
// console.log(arr.slice(2, 3));

//7. join nối phần từ mảng thành 1 chuỗi
// console.log(arr.join(" "));

// var fullName = "Tạ Hoàng An";

// var takeName = fullName.split(" ");
// console.log(takeName.slice(-1).join());

// 8. push()  Thêm phàn tử vào cuối mảng
// var arr = [2, "Tuân", 3];
// var count = arr.push("A", "B", "C", "D");

// console.log(count);
// console.log(arr);

// 9. unshift() thêm phần tử vào đầu mảng

// var count = arr.unshift("A", "B", "C", "D");

// console.log(count);
// console.log(arr);

//10 pop() Xóa phần tử cuối mảng và trả về giá trị vừa xóa
// var value = arr.pop();
// console.log(value);
// console.log(arr);

//11 shift() Xóa phần tử đầu mảng và trả về giá trị vừa xóa
// var value = arr.shift();
// console.log(value);
// console.log(arr);

//12 splice(index, number) Xóa number phần tử từ vị trí index
// var result = arr.splice(1, 1, "A", "B", "C");
// console.log(result);
// console.log(arr);

//13 sort() Sắp xếp mâng theo thứ tự tăng dần(chỉ sắp xếp chuỗi)

// var arr = [
//   "Nguyễn Hoàng An",
//   "Nguyễn Chí Nam",
//   "Hoàng Văn Thanh",
//   "Đặng Ngọc Khải",
// ];

// // Sắp xếp tăng dần

// var getFirstName = (arr) => {
//   return arr.split(" ").slice(-1).join();
// };

// arr.sort((next, prev) => {
//   if (getFirstName(prev) > getFirstName(next)) {
//     return -1;
//   }
// });

// console.log(arr);

// 1. fill(value) thay đổi tất cả phần tử thành 1 giá trị
// var arr = [
//   "Nguyễn Hoàng An",
//   "Nguyễn Chí Nam",
//   "Hoàng Văn Thanh",
//   "Đặng Ngọc Khải",
// ];
// arr.fill(null);
// console.log(arr);

//2 forEach(callback)
/* */

// arr.forEach((value, index) => {
//   console.log(value, index);
// });

// 3. map(callback)
/*
 -Vòng lặp trả về 1 mảng mới
 -Số lượng phần tử mảng mới luôn bằng số lượng phần tử mảng ban đầu
 -Giá trị phần tử của mảng mới phụ thuộc vào return của callback
 */
// var html = `<ul>${arr
//   .map((value) => {
//     return `<li>${value}</li>`;
//   })
//   .join("")}</ul>`;
// document.write(html);

// var query = [
//   ["name", "F8"], //1
//   ["keyword", "Fullstack"], //2
//   ["category", 1],
// ];
// var result = query
//   .map((value) => {
//     return value.join("=");
//   })
//   .join("&");

// console.log(result);
// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

var numbers = [5, 1, 9, 8, 10];

// Số lớn nhất
var findMax = (numbers) => {
  for (const i of numbers) {
    var max = numbers[0];
    console.log(i);
    if (numbers[0] < numbers[i]) {
      max = numbers[i];

      return `Vị trí ${i} , ${max}`;
    }
  }
};
var maxValue = findMax(numbers);
console.log(maxValue);
