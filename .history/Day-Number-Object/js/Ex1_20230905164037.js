// # Bài 1
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

// Yêu cầu chi tiết:
// Hàm return về giá trị
// Ép ràng buộc kiểu dữ liệu là số
// Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
var sum = (...args) => {
  return args.every(Number)
    ? args.reduce((a, b) => +a + +b)
    : "Không đúng dữ liệu";
};
console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3));
