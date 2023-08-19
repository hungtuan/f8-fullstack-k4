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
