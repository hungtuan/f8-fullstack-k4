// // match cắt chuỗi theo biểu thức chính quy
// var fullName = " TẠ HOÀNG AN";
// if (fullName === fullName.toUpperCase()) {
//   console.log("Chuỗi dc viết hoa");
// } else console.log("Không được");

var fullName = "tạ hoàng an";

// fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);

// for (var i = 1; i < fullName.length; i++) {
//   var char = fullName.charAt(i);

//   if (char === " ") {
//     var index = i + 1;
//     fullName =
//       fullName.slice(0, index) +
//       fullName.charAt(index).toUpperCase() +
//       fullName.slice(index + 1);
//   }
// }
// console.log(fullName);
/* Ý tưởng
tìm vị trí đầu tiên xuất hiện
tìm lại từ đầu ới content mới => lặp
*/
//
var content = `ipsum dolor sit amet Lorem, lorem consectetur adipisicing elit. Asperiores, nisiipsam alias repudiandae impedit est quo possimus aperiam vero nam suscipit
assumenda quis. At dignissimos magni architecto excepturi Lorem sapiente nesciunt!`;

var keyword = "LOREM";

var heading = `<p>Tìm kiếm với từ khóa: ${keyword}</p>`;

var footer = `<p>Đã tìm thấy từ khóa 0 kết quả với từ khóa ${keyword}</p>`;

result = "";

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
result +=
  content.slice(0, position) +
  `<span>${content.slice(position, position + keyword.length)}</span>` +
  content.slice(position + keyword.length);
document.write(heading + result + footer);
