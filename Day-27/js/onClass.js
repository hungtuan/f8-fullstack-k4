// // // // Tạo element
// // // var root = document.querySelector("#root");

// // // var h1 = document.createElement("h1");
// // // h1.innerText = "Fullstack - F8";
// // // h1.id = "title";
// // // h1.className = "title";

// // // // Render Element lên UI
// // // // 1. append() hoặc appendChild() -> Đẩy xuống dưới cùng
// // // // 2. prepend() -> Đẩy lên trên cùng
// // // root.append(h1);

// // // var h2 = document.createElement("h2");
// // // h2.innerText = "F8";

// // // root.prepend(h2);

// // // var btn = document.createElement("button");
// // // btn.innerText = "Click";

// // // root.append(btn);
// // // var count = 0;
// // // btn.addEventListener("click", function () {
// // //   var p = document.createElement("p");
// // //   p.innerText = `Cong việc: ${count++}`;
// // //   root.append(p);
// // //   if (count === 5) {
// // //     h1.style.color = "red";
// // //     h2.innerText = "Tuân";
// // //   }
// // // });

// // // // Tạo ra cặp thẻ ul, li
// // // var ul = document.createElement("ul");

// // // for (let i = 1; i <= 5; i++) {
// // //   var li = document.createElement("li");
// // //   li.className = "item";
// // //   li.innerText = `Item ${i}`;
// // //   ul.append(li);
// // // }
// // // root.prepend(ul);

// // // // insertBefore()
// // // var h3 = document.createElement("h3");

// // // h3.innerText = "Hôm nay";
// // // root.insertBefore(h3, h1);

// // // //
// // // var p = document.createElement("p");
// // // p.innerText = "Sau";

// // // root.insertBefore(p, h3.nextElementSibling);

// // // // Đảo vị trí
// // // // replaceChild() -> Thay thê Node cũ  = Node mới
// // // var h4 = document.createElement("h4");
// // // h4.innerText = "Học lập trình để đi làm";
// // // h4.style.color = "red";
// // // root.replaceChild(h4, h2);
// // // // h2 -> Giải phóng
// // // root.append(h2);

// // // // RemoveChild() -> Xóa node con
// // // root.removeChild(h2);

// // var root = document.querySelector("#root");
// // var count = 0;

// // var h1 = document.createElement("h1");
// // h1.innerText = "Count: ";

// // var textNode = document.createTextNode(0);
// // h1.append(textNode);

// // var btnPrev = document.createElement("button");
// // btnPrev.innerText = "-";

// // var btnNext = document.createElement("button");
// // btnNext.innerText = "+";

// // root.append(h1);

// // var div = document.createElement("div");
// // div.className = "btn";
// // div.style.display = "flex";
// // div.style.gap = `10px`;

// // root.append(h1);
// // div.append(btnPrev);
// // div.insertBefore(btnNext, btnPrev.nextElementSibling);
// // root.append(div);

// // var mousedown = false;

// // var handleIncrement = () => {
// //   textNode.data++;
// //   if (mousedown) {
// //     setTimeout(function () {
// //       handleIncrement();
// //     }, 10);
// //   }
// // };

// // var handlePrev = () => {
// //   textNode.data--;
// //   if (mousedown) {
// //     setTimeout(function () {
// //       handlePrev();
// //     }, 10);
// //   }
// // };

// // btnPrev.addEventListener("click", function () {
// //   textNode.data--;
// // });

// // // btnNext.addEventListener("click", handleIncrement);

// // btnNext.addEventListener("mousedown", function () {
// //   mousedown = true;
// //   handleIncrement();
// // });

// // btnNext.addEventListener("mouseup", function () {
// //   mousedown = false;
// //   handleIncrement();
// // });

// // btnPrev.addEventListener("mousedown", function () {
// //   mousedown = true;
// //   handlePrev();
// // });

// // btnPrev.addEventListener("mouseup", function () {
// //   mousedown = false;
// //   handlePrev();
// // });

// var todoList = document.querySelector(".todo-list");
// var todoForm = todoList.querySelector("form");
// var arr = [];
// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var inputEl = this.children[0];

//   var name = inputEl.value;

//   //   var html = `<p>${name} <span>Xóa</span></p>`;

//   //   todoList.innerHTML += html;

//   var p = document.createElement("p");
//   p.innerText = name;
//   var span = document.createElement("span");
//   span.innerText = "Xóa";
//   p.append(span);
//   todoList.append(p);

//   inputEl.value = "";

//   span.addEventListener("click", function () {
//     p.remove();
//   });
// });

// var comment = document.createComment("Todo List");
// todoList.prepend(comment);

// var content = document.querySelector(".content");
// console.log(content.childNodes);

// console.log(content.firstElementChild);

// // childNodes
// // parentNode
// // nextSibling
// // previousSibling
// // firstChild
// // lastChild
// // -> Trả về Node : text, comment, element, ...
