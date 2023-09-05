// # Bài 3
// Viết lại hàm push() trong Array. Đặt tên là push2()
Array.prototype.push2 = function (element) {
  // Thêm phần tử vào cuối mảng
  this[this.length] = element;

  // Trả về độ dài mới của mảng
  return this.length;
};

// Sử dụng hàm push2
var myArray = [1, 2, 3];
myArray.push2(4);

console.log(myArray); // Hiển thị: [1, 2, 3, 4]
