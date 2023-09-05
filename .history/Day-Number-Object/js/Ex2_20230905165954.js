// # Bài 2
// Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
// Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

Number.prototype.getCurrency = function (currencySymbol) {
  // Kiểm tra nếu giá trị không phải là số hoặc là chuỗi số hợp lệ
  if (isNaN(this) && isNaN(parseFloat(this))) {
    throw new Error(
      "Invalid input. The input must be a number or a valid numeric string."
    );
  }

  // Chuyển giá trị thành chuỗi
  let formattedValue = this.toString();

  // Tìm vị trí của dấu thập phân (nếu có)
  const decimalIndex = formattedValue.indexOf(".");

  // Xử lý phần nguyên
  let integerPart = formattedValue;
  let decimalPart = "";

  if (decimalIndex !== -1) {
    integerPart = formattedValue.slice(0, decimalIndex);
    decimalPart = formattedValue.slice(decimalIndex + 1);
  }

  // Thêm dấu phẩy ngăn cách hàng nghìn vào phần nguyên
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Kết hợp lại phần nguyên và phần thập phân (nếu có)
  formattedValue = integerPart + (decimalPart ? `.${decimalPart}` : "");

  // Nếu có đơn vị tiền tệ, thêm nó vào chuỗi kết quả
  if (currencySymbol) {
    formattedValue += ` ${currencySymbol}`;
  }

  return formattedValue;
};

// Sử dụng phương thức
var price1 = 12000;
console.log(price1.getCurrency("đ")); // Hiển thị: 12,000 đ

var price2 = "12000000";
console.log(price2.getCurrency("đ")); // Hiển thị: 12,000,000 đ
