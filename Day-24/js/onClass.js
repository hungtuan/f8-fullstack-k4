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

// Truy cập thông qua tên thẻ html
// var titleList = document.getElementsByTagName("h2");
// console.log(titleList);

// Truy cập thông qua selector css(Trả về phần tử đầu tiên)
// var title = document.querySelector(".title");
// console.log(title);

// Truy cập thông qua selector css(Trả về tất cả phần tử)
// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

// var first = document.querySelector(".content .first");
// console.log(first);

// var last = document.querySelector(".content .last");
// console.log(last);

// var content = document.querySelector(".content");
// var first = document.querySelector(".first");
// var last = document.querySelector(".last");

// var input = document.login_form.fullname;
// console.log(input);

// var btn = document.login_form.btn;
// console.log(btn);

// Các trường hợp đặc biệt
// Truy xuất vào thẻ head: document.head
// Truy xuất vào thẻ body: document.body
// console.log(document.head);
// Truy cập vào form và các field thông qua thuộc tính name

// 2. DOM Event: Gán sự kiện vào các thẻ html

// I - Event handler
// TenElement.tenSuKien = function() {
// Body
// }

// var btn = document.querySelector(".btn");
// console.log(btn);

// btn.onclick = () => {
//   console.log("Hello F8");
// };

// btn.onmousedown = () => {
//   console.log("Bấm chuột xuống");
// };

// btn.onmouseup = () => {
//   console.log("Nhả chuột");
// };

// btn.onmousemove = () => {
//   console.log("Di chuyển chuột");
// };

// var inputEl = document.querySelector(".name");
// inputEl.onkeyup = () => {
//   console.log("Nhả phím");
// };

// inputEl.onkeydown = () => {
//   console.log("Bấm phím");
// };

// inputEl.onkeypress = () => {
//   console.log("Bấm phím kí tự");
// };

// inputEl.onchange = () => {
//   console.log("Đã thay đổi");
// };

// // Nhấn vào ô input
// inputEl.onfocus = () => {
//   console.log("Focus");
// };

// // Nhả ra input
// inputEl.onblur = () => {
//   console.log("Blur");
// };

// II - Event listener
// 1. addEventListener
// 2. removeEventListener

// Cách xịn hơn
// btn.addEventListener("click", () => {
//   console.log("Hello 01");
// });

// btn.addEventListener("dblclick", () => {
//   console.log("Hello F99 02");
// });

// inputEl.onfocus = () => {
//   console.log("Focus 1");
// };
// // Ghi đè focus 1
// inputEl.onfocus = () => {
//   console.log("Focus 2");
// };

// var handlerClick = (e) => {
//   // e = event object
//   console.log("F8 nhấn");
//   console.log(this);
//   console.log(e);
// };

// btn.addEventListener("click", handlerClick);

// inputEl.addEventListener("change", function () {
//   btn.removeEventListener("click", handlerClick);
// });

// var items = document.querySelectorAll("ul li");

// console.log(items);

// items.forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", function () {
//     console.log(this);
//   });
// });

// 3. Dom HTML: Thay đổi nội dung và thuộc tính của thẻ HTML
// 1 - Lấy nội dung thẻ html(bao gồm thẻ html và khoảng trắng)
// var content = document.querySelector(".content");
// console.log(content.innerHTML);
// // 2 - innerText => Lấy nội dung bên trong thẻ html(Chỉ lấy text và loại bỏ khoảng trắng)
// console.log(content.innerText);
// // 3 - textContent => Lấy nội dung bên trong thẻ html(Chỉ lấy text và loại bot khoảng trắng)
// console.log(content.textContent);
// // 4 - outerHTML => Lấy nội dung bên trong bao gồm element tác động
// console.log(content.outerHTML);

// 3.1 - Cập nhật nội dụng thẻ html
// content.innerHTML = "<h2>Hoàng An</h2>";
// content.innerText = "<h2>Hoàng An</h2>";
// content.outerHTML = "<h2>Hoàng An</h2>";
// content.outerText = "<h2>Hoàng An</h2>";

// Bài tập:

// var value = document.querySelector(".value");

// var btnAdd = document.querySelector(".add");

// btnAdd.addEventListener("click", function () {
//   value.innerHTML++;
// });

// var btnMinus = document.querySelector(".minus");

// btnMinus.addEventListener("click", function () {
//   value.innerHTML--;
// });

// 4. DOM CSS: Thay đổi các thuộc tính CSS(inline)
// var img = document.querySelector("img");
// console.log(img.src);
// console.log(img.title);
// console.log(img.alt);
// console.log(img.width);
// console.log(img.height);

// Thay đổi giá trị thuộc tính
// img.src =
//   "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";

// 2 - Thuộc tính không có sẵn của thẻ html
// Data Attribute
// data-*
// Ví dụ: data-index, data-count
// // Truy cập Data Attribute
// console.log(img.getAttribute("data-count"));
// console.log(img.dataset.count);
// console.log(img.dataset.numberIndex);
// // Cập nhật
// img.setAttribute("data-count", 10);
// img.dataset.numberIndex = "ahihi";

// Xóa thuộc tính
// img.removeAttribute("src");

// Xóa thẻ html
// img.remove();

// var title = document.querySelector(".title");
// console.log(title);
// // Lấy danh sách class
// console.log(title.classList);

// // Các phương thức xử lý class
// // 1. add()
// title.classList.add("title5", "title6");
// // 2.remove() => Xóa class trong element
// title.classList.remove("title2", "title3");
// // 3. contains() => kiểm tra class tồn tại
// console.log(title.classList.contains("title5"));
// // 4. toggle() => Thêm class nếu không tồn tại, xóa class nếu tồn tại
// title.classList.toggle("title6");
// title.classList.toggle("title6");

// BT
// var content = document.querySelector(".content");

// console.log(content.className);

// var btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   if (!content.classList.contains("hidden")) {
//     content.classList.add("hidden");
//     this.innerText = "Hiện";
//   } else {
//     content.classList.remove("hidden");
//     this.innerText = "Ẩn";
//   }
// });

// 4.1 DOM CSS: Thay đổi các thuộc tính CSS(inline) (continue)
// var content = document.querySelector(".content");
// console.log(content.style);
// content.style.color = "red";
// content.style.fontWeight = "bold";
// content.style.textTransform = "uppercase";

// BT
// var css = {
//   color: "red",
//   fontWeight: "bold",
//   textTransform: "uppercase",
//   backgroundImage: `url("https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY")`,
//   transform: `translateX(20px)`,
// };

// Object.assign(content.style, css);
// var btn = document.querySelector(".btn");
// var content = document.querySelector(".content");

// btn.addEventListener("click", function () {
//   var css = {
//     height: 0,
//     padding: 0,
//     opacity: 0,
//     visibility: "hidden",
//     transitionProperty: "opacity, visibility",
//     transition: `0.4s ease`,
//   };

//   if (content.style.opacity === "") {
//     var cssFadeOut = {
//       opacity: 0,
//       visibility: "hidden",
//     };
//     Object.assign(content.style, cssFadeOut);
//   } else {
//     var cssFadeIn = {
//       opacity: "",
//       visibility: "visible",
//       height: "200px",
//     };
//     Object.assign(content.style, cssFadeIn);
//   }

//   Object.assign(content.style, css);
// });

// btn.onmousedown = () => {
//   console.log("Bấm chuột xuống");
// };

// btn.onmouseup = () => {
//   console.log("Nhả chuột");
// };
var btn = document.querySelector(".btn");
var title = document.querySelector(".title");
var name = document.querySelector(".name");

var offsetX = 0;
var offsetY = 0;
var flag = false;

btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    flag = true;
  }
});

document.addEventListener("mousemove", function (e) {
  if (flag) {
    var css = {
      position: "fixed",
      top: `${e.clientY - offsetY}px`,
      left: `${e.clientX - offsetX}px`,
    };
    Object.assign(btn.style, css);
  }
});

document.addEventListener("mouseup", function (e) {
  //   var css = {
  //     position: "fixed",
  //     top: `${e.clientY - offsetY}px`,
  //     left: `${e.clientX - offsetX}px`,
  //   };
  //   Object.assign(btn.style, css);
  flag = false;
});

var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this.href);
});

// 5. Dom Event Listener: Lắng nghe các sự kiện từ phía người dùng tác động lên
// 6. Dom Navigation: Truy xuất vào các thẻ html theo phân cấp: cha, con, kế tiếp, lùi
// 7. Dom Nodes: Thao tác với các thẻ html thông qua Object
