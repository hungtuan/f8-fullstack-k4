//Number = Kiểu dữ liệu nguyên thủy
// Hàm tạo của number là Number

// console.log([Number]);

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

// var numbers = [1, 5, 9, 2, 8, 6];
// var sum = (numbers) => {
//   console.log(numbers);
//   var total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== true) {
//       numbers[i] = Number(numbers[i]);
//       if (
//         !Number.isNaN(numbers[i]) &&
//         numbers[i] % 2 === 0 &&
//         Math.abs(numbers[i]) !== Infinity
//       ) {
//         total += numbers[i];
//       }
//     }
//   }
//   return total;
// };

// console.log(sum(numbers));

// Kiểm tra 1 số nguyên
// var a = 123;
// console.log(Number.isInteger(a));

// Bài tập: Kiểm tra 1 số không phải số nguyên
// var b = 12.5;
// if (
//   Math.abs(b) !== Infinity &&
//   typeof b === "number" &&
//   !Number.isNaN(b) &&
//   !Number.isInteger(b)
// ) {
//   console.log("Không phải số nguyên");
// }

// Lấy chữ số phần thập phân
// Dùng hàm toFixed(number) => Trả về 1 chuỗi
// var a = 12.5678;
// a = a.toFixed(2);
// console.log(a);

// Định dạng tiền tệ
// var price = 12000000;
// price = price.toLocaleString("vi", {
//   style: "currency",
//   currency: "VND",
// });
// console.log(price);

// Math => Đối tượng toán học

// console.log(Math);

// 1. abs() => Lấy giá trị tuyệt đối
// console.log(Math.abs("-10"));
// console.log(Math.abs("10"));

// 2. ceil() => Luôn làm tròn lên
// console.log(Math.ceil(10.1));

// 3. floor() => Luôn làm tròn xuống
// console.log(Math.floor(10.9));

// 4. round() => Làm tròn theo nguyên tắc làm tròn
// console.log(Math.round(10.5));

// 5. min(), max() => Tìm giá trị nhỏ nhất , lớn nhất
// console.log(Math.min(5, 9, 1, -1));
// console.log(Math.max(5, 9, 1, -1));
// console.log(Math.max());
// console.log(Math.min());

// 6. random() => Trả về số ngẫu nhiên >0 và < 1
// console.log(Math.random());

// DOM = Document Object Model
// Mô hình hóa tài tiệu HTML thành đối tượng => Thao tác thay đổi chỉ sửa HTML
// Các loại DOM

// 1. DOM Element: Truy xuất vào các thẻ HTML => Trả về object(Node)
// var title = document.getElementById("title");
// console.log(title);

// Truy xuất qua class
// Muốn truy cập tới 1 element cụ thẻ => Lặp qua từng phần tử
// var titleList = document.getElementsByClassName("title");
// console.log(titleList[0]);

// Truy cập thoonh qua tên thẻ html
// var titleList = document.getElementsByTagName("h2");
// console.log(titleList);

// Truy cập thông qua selector css(Trả về phần tử đầu tiên)
// var title = document.querySelector(".title");
// console.log(title);

// Truy cập thông qua selector css(Trả về tất cả phần tử)
// var titleList = document.querySelectorAll(".title");

// console.log(titleList);

var title = document.querySelector(".content .first");
console.log(title);

// 2. DOM CSS: Thay đổi các thuộc tính CSS(inline)
// 3. DOM Event: Gán sự kiện vào các thẻ html
// 4. Dom Event Listener: Lắng nghe các sự kiện từ phía người dùng tác động lên
// 5. Dom Navigation: Truy xuất vào các thẻ html theo phân cấp: cha, con, kế tiếp, lùi
// 6. Dom Nodes: Thao tác với các thẻ html thông qua Object
// 7. Dom HTML: Thay đổi nội dung và thuộc tính của thẻ HTML
