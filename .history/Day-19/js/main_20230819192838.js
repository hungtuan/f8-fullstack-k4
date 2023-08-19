// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

var numbers = [5, 9, 1, 0, 6, 8, 9, 9, 0, 0];

var numbersMax = [];

// // Số lớn nhất
var findMax = (numbers) => {
  var max = numbers[0];
  var count = 0;
  for (const i in numbers) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }

  for (const j in numbers) {
    if (numbers[j] === max) {
      count++;
      var index = parseInt(j);
      numbersMax.push(index + 1);
    }
  }

  return `Max: ${max}, SL: ${count}`;
};
var maxValue = findMax(numbers);
console.log(`Ví trí max: ${numbersMax.join(", ")}`);
console.log(maxValue);
console.log("-------------");
// // Số nhỏ nhất
var numbersMin = [];
var findMin = (numbers) => {
  var min = numbers[0];
  var count = 0;
  for (const m in numbers) {
    if (min > numbers[m]) {
      min = numbers[m];
    }
  }

  for (const n in numbers) {
    if (numbers[n] === min) {
      count++;
      var index = parseInt(n);
      numbersMin.push(index + 1);
    }
  }

  return `Min: ${min}, SL: ${count}`;
};
var minValue = findMin(numbers);
console.log(`Ví trí min: ${numbersMin.join(", ")}`);
console.log(minValue);

// # Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
var primeNumbers = []; // Mảng để lưu các số nguyên tố
var sum = 0;
var count = 0;
var valueSum = 0;

var isPrime = (numbers) => {
  // Kiểm tra trường hợp đặc biệt cho các số 0, 1 và các số âm
  if (numbers <= 1) {
    return false;
  }

  // Kiểm tra các số từ 2 đến căn bậc hai của numbers
  for (let i = 2; i <= Math.sqrt(numbers); i++) {
    if (numbers % i === 0) {
      return false;
    }
  }

  return true;
};

for (var i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i]) === true) {
    primeNumbers.push(numbers[i]); // Thêm số nguyên tố vào mảng primeNumbers
    sum += numbers[i];
    count++;
  }
}

if (sum === 0) {
  console.log("Không có số nguyên tố");
} else {
  console.log(`Số nguyên tố trong mảng là: ${primeNumbers.join(", ")}`);
  valueSum = sum / count;
  console.log(`Trung bình các số nguyên tố: ${valueSum.toFixed(2)}`);
}

// # Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
var arrays = [6, 3, 6, 3, 6, 3, "9", "9", "9"];

var removeDuplicates = (arrays) => {
  return arrays.filter((item, index) => arrays.indexOf(item) === index);
};
console.log(removeDuplicates(arrays));

// # Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng

var numbers = [5, 1, 9, 8, 10];
var element = 4;

// Thêm phần tử
numbers.splice(0, 0, element);

numbers.sort((next, prev) => {
  return next - prev;
});

console.log(numbers);
