// # Bài 2
// Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
// Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

Object.prototype.getCurrency = function (currency) {
  if (isNaN(this) && isNaN(parseFloat(this))) {
    console.log("Không đúng");
  }

  // Chuyển giá trị thành chuỗi
  let formattedValue = Number(this).toLocaleString();

  // Nếu có đơn vị tiền tệ, thêm nó vào chuỗi kết quả
  if (currency) {
    formattedValue += ` ${currency}`;
  }

  return formattedValue;
};

//Case 1
var price = 12000;
console.log(price.getCurrency("đ"));

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ"));
