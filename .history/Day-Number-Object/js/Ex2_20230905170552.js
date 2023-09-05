// # Bài 2
// Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
// Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

// Thêm phương thức getCurrency vào đối tượng Number
Number.prototype.getCurrency = function (currencySymbol) {
  // Kiểm tra nếu đối tượng không phải là số hoặc là chuỗi số hợp lệ
  if (isNaN(this) && isNaN(parseFloat(this))) {
    throw new Error(
      "Invalid input. The input must be a number or a valid numeric string."
    );
  }

  // Chuyển giá trị thành chuỗi
  let formattedValue = this.toString();

  // Tìm vị trí của dấu thập phân (nếu có)
  const decimalIndex = formattedValue.indexOf(".");

  // Tách phần nguyên và phần thập phân (nếu có)
  let integerPart =
    decimalIndex !== -1
      ? formattedValue.slice(0, decimalIndex)
      : formattedValue;
  const decimalPart =
    decimalIndex !== -1 ? formattedValue.slice(decimalIndex + 1) : "";

  // Thêm dấu phẩy ngăn cách hàng nghìn vào phần nguyên
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Kết hợp lại phần nguyên và phần thập phân (nếu có)
  formattedValue = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;

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
