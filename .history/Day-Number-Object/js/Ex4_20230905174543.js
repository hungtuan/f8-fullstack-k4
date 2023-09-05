// # Bài 4
// Viết hàm vòng lặp filter trong Array. Đặt tên là filter2()

// Mảng ban đầu

Array.prototype.filter2 = function (callback) {
  var newArr = [];

  console.log(callback(numbers));

  // for (let i = 0; i < this.length; i++) {
  //     if (callback === true) {
  //         newArr[this.length] =
  //     }
  // }

  return newArr;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sử dụng phương thức filter để lọc các số chẵn
var evenNumbers = numbers.filter2(function (number) {
  return number % 2 === 0; // Chỉ giữ lại các số chẵn
});

console.log(evenNumbers);
