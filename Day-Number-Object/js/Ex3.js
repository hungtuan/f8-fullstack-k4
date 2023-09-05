// # Bài 3
// Viết lại hàm push() trong Array. Đặt tên là push2()
Array.prototype.push2 = function (element) {
  this[this.length] = element;
  return this.length;
};

var myArray = [1, 2, 3];
myArray.push2(4);

console.log(myArray);
