// # Bài 1: Hoán vị 2 số
// Input: Cho trước 2 số a, b
// Output: Thực hiện hoán vị 2 số không dùng biến trung gian
var a = 30;
var b = 60;

if (typeof a === "number" && !isNaN(a) && typeof b === "number" && !isNaN(b)) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("Số a là:", a);
  console.log("Số b là:", b);
} else console.log("Không phải là số");

// # Bài 2: Thực hiện phép toán
// Viết chương trình tính toán biểu thức sau
// S = 10 + 20 + 5^10 / 2
var S = 10 + 20 + Math.pow(5, 10) / 2;
console.log(`Kết quả : ${S}`);

// # Bài 3: Tìm số lớn nhất
// Học viên tìm hiểu về câu lệnh rẽ nhánh và giải bài tập sau
// Input:
// Cho trước 3 số a, b, c
// Output:
// Tìm số lớn nhất trong 3 số và hiển thị kết quả
var a = 60;
var b = 30;
var c = 90;

var maxValue = a;
if (b > maxValue) {
  maxValue = b;
}
if (c > maxValue) {
  maxValue = c;
}
console.log("Số lớn nhất là:", maxValue);

// # Bài 4: Kiểm tra số cùng dấu
// Input:
// Cho trước 2 số a, b
// Output:
// Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình

var a = 3;
var b = 3;
if (typeof a === "number" && !isNaN(a) && typeof b === "number" && !isNaN(b)) {
  if ((a <= 0 && b <= 0) || (a >= 0 && b >= 0)) {
    console.log("2 số cùng dấu");
  } else console.log("2 số khác dấu");
} else console.log("Không phải là số");

// # Bài 5: Sắp xếp 3 số
// Input:
// Cho trước 3 số a, b, c
// Output:
// Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
var a = 9;
var b = 6;
var c = 3;
var temp;

if (
  typeof a === "number" &&
  !isNaN(a) &&
  typeof b === "number" &&
  !isNaN(b) &&
  typeof c === "number" &&
  !isNaN(c)
) {
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  if (a > c) {
    temp = a;
    a = c;
    c = temp;
  }
  if (b > c) {
    temp = b;
    b = c;
    c = temp;
  }
  console.log(`3 số tăng dần: ${a}, ${b}, ${c}`);
} else console.log("Không phải số");
