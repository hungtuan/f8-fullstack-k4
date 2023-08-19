// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

// var numbers = [5, 9, 1, 0, 6, 8, 9, 9, 0];

// // Số lớn nhất
// var findMax = (numbers) => {
//   var max = numbers[0];
//   var count = 0;
//   for (var i in numbers) {
//     if (numbers[0] < numbers[i]) {
//       max = numbers[i];
//     }
//   }

//   for (var j in numbers) {
//     if (numbers[j] === max) {
//       count++;
//       console.log(`Vị trí max: ${j}`);
//     }
//   }

//   return `Max: ${max}, SL: ${count}`;
// };
// var maxValue = findMax(numbers);
// console.log(maxValue);
// console.log("-------------");
// // Số nhỏ nhất
// var findMin = (numbers) => {
//   var min = numbers[0];
//   var count = 0;
//   for (var i in numbers) {
//     if (numbers[0] > numbers[i]) {
//       min = numbers[i];
//     }
//   }

//   for (var j in numbers) {
//     if (numbers[j] === min) {
//       count++;
//       console.log(`Vị trí min: ${j}`);
//     }
//   }

//   return `Min: ${min}, SL: ${count}`;
// };
// var minValue = findMin(numbers);
// console.log(minValue);

// # Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
// var sum = 0;
// var count = 0;
// var valueSum = 0;

// var isPrime = (numbers) => {
//   // Kiểm tra trường hợp đặc biệt cho các số 0, 1 và các số âm
//   if (numbers <= 1) {
//     return false;
//   }

//   // Kiểm tra các số từ 2 đến căn bậc hai của numbers
//   for (let i = 2; i <= Math.sqrt(numbers); i++) {
//     if (numbers % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// for (var i = 0; i < numbers.length; i++) {
//   if (isPrime(numbers[i]) === true) {
//     count++;
//     sum += numbers[i];
//   }
// }

// if (sum === 0) {
//   console.log("Không có số nguyên tố");
// } else {
//   valueSum = sum / count;
//   console.log(`Trung bình các số nguyên tố: ${valueSum.toFixed(2)}`);
// }

// # Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
var arrs = [6, 3, 6, 3, 6, 3, "9", "9", "9"];
for (var i = 0; i < arrs.length; i++) {}
