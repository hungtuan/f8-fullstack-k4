var arr = ["3", 2, 3];
console.log(arr);
console.log(typeof arr);

// Kiểm tra mảng
if (Array.isArray(arr)) {
  console.log("Đây là mảng");
} else console.log("KHông phải");

//Thêm phần tử
// Cuối mảng
arr[arr.length] = "Tuân";
arr[arr.length] = "Tuân";

console.log(arr);

// Sửa phần tử trong mảng
arr[3] = "Hưng Tuân";
console.log(arr);