// // match cắt chuỗi theo biểu thức chính quy
// var fullName = " TẠ HOÀNG AN";
// if (fullName === fullName.toUpperCase()) {
//   console.log("Chuỗi dc viết hoa");
// } else console.log("Không được");

var fullName = "tạ hoàng an";

for (var i = 0; i < fullName.length; i++) {
  var char = fullName.charAt(i);
  console.log(char);
  if (char === " ") {
    var index = index + 1;
  }
  fullName =
    fullName.slice(0, index) +
    fullName.charAt(index).toUpperCase() +
    // fullName.slice(index + 1);
}
console.log(fullName);
