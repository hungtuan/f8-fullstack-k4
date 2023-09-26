// var checkAll = document.querySelector(".check-all");
// var checkItems = document.querySelectorAll(".check-item");

// var count = 0;

// var btnDelete = document.createElement("button");
// btnDelete.disabled = true;
// btnDelete.innerText = "Xóa đã chọn:(";
// var textNode = document.createTextNode(0);
// btnDelete.append(textNode);
// btnDelete.append(")");
// document.body.append(btnDelete);

// checkAll.addEventListener("change", function () {
//   var status = this.checked;

//   checkItems.forEach(function (checkItem) {
//     checkItem.checked = status;
//   });

//   if (status) {
//     count = checkItems.length;
//     btnDelete.disabled = false;
//   } else {
//     count = 0;
//     btnDelete.disabled = true;
//   }
//   textNode.data = count;
// });

// checkItems.forEach(function (checkItem) {
//   checkItem.addEventListener("change", function () {
//     // if (!this.checked) {
//     //   checkAll.checked = false;
//     //   return;
//     // }
//     // var status = Array.from(checkItems).every((checkItem) => {
//     //   return checkItem.checked;
//     // });
//     // checkAll.checked = status;

//     //
//     if (this.checked) {
//       count++;
//     } else {
//       count--;
//     }
//     // Nếu count với số lượng checkbox bằng nhau
//     if (count === checkItems.length) {
//       checkAll.checked = true;
//     } else {
//       checkAll.checked = false;
//     }

//     // Cập nhạt số lượng cho nút xóa
//     textNode.data = count;
//     if (count > 0) {
//       btnDelete.disabled = false;
//     } else {
//       btnDelete.disabled = true;
//     }
//   });
// });

// Lắng nghe sự kiện scrolll(Kéo thanh cuộn trình duyệt)

// window.addEventListener("scroll", function () {
//   //   Lấy tọa độ
//   var x = window.scrollX;
//   var y = window.scrollY;
//   console.log(`x = ${x} , y = ${y}`);
// });

// var gotoBtn = document.querySelector(".goto");
// gotoBtn.addEventListener("click", function () {
//   window.scroll({
//     top: 0,

//     behavior: "smooth",
//   });
// });
var btnTop = document.querySelector(".top");

window.addEventListener("scroll", function () {
  //   Lấy tọa độ
  var y = window.scrollY;

  if (y >= 50) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

var btnTop = document.querySelector(".top");
btnTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// kéo giữ thanh menu
var header = document.querySelector(".header");
var headerInner = header.children[0];
var headerNav = header.children[1];
var headerInnerHeight = headerInner.clientHeight;
var headerNavHeight = headerNav.clientHeight;

window.addEventListener("scroll", function () {
  var y = this.window.scrollY;
  if (y >= headerInnerHeight) {
    headerNav.classList.add("fixed");
    document.body.style.paddingTop = `${headerNavHeight}px`;
  } else {
    headerNav.classList.remove("fixed");
    document.body.style.paddingTop = "";
  }
});
