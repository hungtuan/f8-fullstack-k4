// # Bài 2
// Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
// Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

Number.prototype.getCurrency = (currency) => {
  return currency.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

//Case 1
var price = 12000;
console.log(price.getCurrency("đ"));

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ"));
