// // match cắt chuỗi theo biểu thức chính quy
// var fullName = " TẠ HOÀNG AN";
// if (fullName === fullName.toUpperCase()) {
//   console.log("Chuỗi dc viết hoa");
// } else console.log("Không được");

var fullName = "tạ hoàng an";

var tachChuoi = fullName.charAt(0).toUpperCase() + fullName.slice(1);

tachChuoi.split(" ");

console.log(tachChuoi);