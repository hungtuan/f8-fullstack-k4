//Number = Kiểu dữ liệu nguyên thủy
// Hàm tạo của number là Number

console.log([Number]);

// var a = 10;
// console.log(a, typeof a);

// Số NaN
// NaN trả về trong ác trường hợp sau
// Ép về kiểu số thất bại
// Các phép toán có toán hạng không phải là số(Trừ chuỗi số)

// Khi thực hiện các phép toán số học:
// Các toán hoạng sễ được js tự động ép về kiểu sô,
// nếu có toán hạng nào ép kiểu thất bại
// => Kết quả cuối cùng sẽ trả về NaN

// var a = 10;
// var b = "F8";
// // var c = a + b;
// // var c = a ** b;
// var c = a - b;

// if (Number.isNaN(c)) {
//   console.log("Không phải số");
// } else console.log(c);

// Số Infinity
// Số này xuất hiện khi tràn bộ nhớ lưu trữ
// Kiểm tra
// var a = 1000 ** 1000;
// if (a !== Infinity) {
//   console.log(a);
// } else console.log("Không xử lý được");

// Ép kiểu
// var a = "";
// var a = new Date();
// var a = "123.54a123";
// var a = null; Về NaN hết
// 1. Ép kiểu số nguyên
// a = Number.parseInt(a);
// console.log(a);

// 2. Ép kiểu số thực

// a = Number.parseFloat(a);
// console.log(a);

// 3. Ép kiểu số (Thực, Nguyên)
// a = Number(a);
// var a = +a;

// console.log(a);

// Bài tập: Cho trước 1 mảng, yêu cầu tính tổng các số chẵn

var numbers = [1, 5, 9, 2, 8];
var total = 0;
for (let i = 0; i < numbers.length; i++) {
  if (Number(i)) {
    if (i % 2 === 0) {
      total += i;
    }
  }
}
