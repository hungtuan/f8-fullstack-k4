// DOM Navigation
// var title = document.querySelector(".title");
// Chọn thành phần cha gần nhất

// Chọn phần tử con: children
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// var menu = document.querySelector(".menu li");
// // console.log(menu);

// console.log(menu);
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu.children.length);
//   if (menu.children.length === 2) {
//     menu.children.classList.add("has-child");
//   }
// }

// var menu = document.querySelectorAll(".menu li");
// var arrow = document.querySelector(".arrow");

// menu.forEach(function (menuItem) {
//   if (menuItem.children.length === 2) {
//     menuItem.children[1].classList.add("hidden");
//     var link = menuItem.children[0];

//     link.addEventListener("click", function (e) {
//       e.preventDefault();

//       if (!menuItem.children[1].classList.contains("open")) {
//         var subMenuOpen = document.querySelector(".menu ul.open");

//         if (subMenuOpen !== null) {
//           subMenuOpen.classList.remove("open");
//           menuItem.children[1].classList.remove("reverse");
//         }
//       }
//       menuItem.children[0].children[1].classList.toggle("reverse");
//       menuItem.children[1].classList.toggle("open");
//     });
//   }
// });

//
// var last = document.querySelector(".lists .last");

// var prev = last.previousElementSibling;
// console.log(prev);

// // Lấy element đầu tiên
// var lists = document.querySelector(".lists");
// var first = lists.firstElementChild;
// console.log(first);

// // Lấy element cuối cùng
// var last = lists.lastElementChild;
// console.log(last);
