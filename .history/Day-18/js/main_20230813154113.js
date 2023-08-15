// // match cắt chuỗi theo biểu thức chính quy
// var fullName = " TẠ HOÀNG AN";
// if (fullName === fullName.toUpperCase()) {
//   console.log("Chuỗi dc viết hoa");
// } else console.log("Không được");

var fullName = "tạ hoàng an";
var chuHoa = fullName.toUpperCase();

var tachChuoi = chuHoa.split(" ");
console.log(tachChuoi);

for (var i = 0; i < tachChuoi.length; i++) {
  var chuyenChuoi = tachChuoi[i].slice(0);
  console.log(chuyenChuoi);
}
