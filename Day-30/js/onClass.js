// var slider = document.querySelector(".slider");

// // Tạo event
// var finishEvent = new Event("finish");

// slider.addEventListener("input", function () {
//   var value = value.this;
//   if (+value === 100) {
//     finishEvent.adc = "xyz";
//     slider.addEventListener(finishEvent);
//   }
// });

// slider.addEventListener("mousedown", function (e) {
//   finishEvent.intialOffsetX = e.offSetX;
//   finishEvent.intialOffsetY = e.offSetY;
// });

// // Khi nào có nhu cầu -> Lắng nghe sự kiện finish
// slider.addEventListener("finish", function (e) {
//   console.log(e);
// });

// var slider1 = document.querySelector(".slide-1");

// slider1.addEventListener("over", function () {
//   //   console.log(this.data);
// });

// var slider2 = document.querySelector(".slide-2");

// slider2.addEventListener("over", function (e) {
//   console.log(this.data);
//   console.log(e);
// });

/* Trigger Event */
// 1. Dùng phương thức có sẵn: click(), submit(); focus(); ->Giới hạn vài sự kiệ phổ biến
// 2. Dùng dispatchEvent() -> Áp dụng với tất cả sự kiện;

// var btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   console.log("hello");
// });

// setInterval(() => {
//   btn.click();
// }, 1000);
// var search = document.querySelector(".search");
// search.focus();

// var quantity = document.querySelector(".quantity input");

// var minusBtn = quantity.previousElementSibling;
// var plusBtn = quantity.nextElementSibling;

// var changeEvent = new Event("change");

// quantity.addEventListener("change", function () {
//   var value = this.value;
//   console.log(value);
// });

// minusBtn.addEventListener("click", function () {
//   quantity.value--;
//   quantity.dispatchEvent(changeEvent);
// });

// plusBtn.addEventListener("click", function () {
//   quantity.value++;
//   quantity.dispatchEvent(changeEvent);
// });
// HTMLElement.prototype.css = function (style = {}) {
//   Object.assign(this.style, style);
// };
// var content = document.querySelector(".content");

// console.log(content);

// content.css({
//   color: "red",
//   fontWeigh: "bold",
// });

// Web component -> Tạo ra các thành phần cho trang web: header, footer, slidebar, carousel -> Dưới dạng html riêng
/* Custom Element*/
// -Tìm hiểu kề thừa HTML element: Cách kế thừa, vòng đời component(Lifecycle Callback)
// -Shadow DOM -> đóng gói tách biệt ra khỏi DOM thật
// - Template và Slot
// var helloWorld = function () {
//   // Kế thừa HTMLElement
//   //   return Reflect.construct(HTMLElement, [], helloWorld);
//   //   //   Thay thế super() trong class
// };

// helloWorld.prototype = Object.create(HTMLElement.prototype);

// // Khi thẻ html được hình thành
// helloWorld.prototype.connectedCallback = function () {
//   var name = this.getAttribute("name");
//   var email = this.getAttribute("email");
//   var borderWidth = this.getAttribute("border-width");
//   var borderColor = this.getAttribute("border-color");
//   var borderRadius = this.getAttribute("border-radius");
//   var padding = this.getAttribute("padding");
//   var colorText = this.getAttribute("color");

//   var html = `<div class="box">
//   <h1>Học lập trình không khó</h1>
//   <h2>${name}</h2>
//   <h2>${email}</h2>
//   </div>`;

//   this.innerHTML = html;

//   var style = document.createElement("style");
//   style.textContent = `
//   .box {
//     border: ${borderWidth ?? 0} solid ${borderColor ?? "#000"};
//     border-radius: ${borderRadius ?? 0};
//     padding: ${padding};
//     color: ${colorText};

//   }`;

//   this.prepend(style);
// };
// customElements.define("hello-world", helloWorld);

/* Shalow DOM */
// Shadow HOST
// var content = document.querySelector(".content");

// // Shadow ROOT
// var shadow = content.attachShadow({
//   mode: "open",
// });

// shadow.innerHTML = `<h1>Học lập trình không khó</h1>`;

// var style = document.createElement("style");
// style.innerText = `h1 {
//     color: red;
// }`;

// shadow.prepend(style);
