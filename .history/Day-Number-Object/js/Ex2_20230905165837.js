// # Bài 2
// Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
// Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

Number.prototype.getCurrency = function (currency) {
  // Chuyển giá trị thành chuỗi và đảm bảo có dấu phẩy ngăn cách hàng nghìn
  let formattedValue = this.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  // Nếu có đơn vị tiền tệ, thêm nó vào chuỗi kết quả
  if (currency) {
    formattedValue += ` ${currency}`;
  }

  return formattedValue;
};

//Case 1
// var price = 12000;
// console.log(price.getCurrency("đ"));

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ"));
