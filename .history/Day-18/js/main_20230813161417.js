// // match cắt chuỗi theo biểu thức chính quy
// var fullName = " TẠ HOÀNG AN";
// if (fullName === fullName.toUpperCase()) {
//   console.log("Chuỗi dc viết hoa");
// } else console.log("Không được");

var fullName = "tạ hoàng an";

fullName = fullName.charAt(0) + fullName.toUpperCase();

for (var i = 1; i < fullName.length; i++) {
  var char = fullName.charAt(i);

  if (char === " ") {
    var index = i + 1;
    fullName =
      fullName.slice(0, index) +
      fullName.charAt(index).toUpperCase() +
      fullName.slice(index + 1);
  }
}
console.log(fullName);
