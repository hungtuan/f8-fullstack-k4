// # Bài 1
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter
// Yêu cầu chi tiết:
// Hàm return về giá trị
// Ép ràng buộc kiểu dữ liệu là số
// Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi

var sum = (...args) => {
  let total = 0;
  for (const arg of args) {
    if (typeof arg !== "number" || isNaN(arg)) {
      return "Dữ liệu truyền vào không đúng";
    } else {
      total += arg;
    }
  }
  return total;
};
console.log(sum("", 2, 3));
// console.log(sum(1, 2, 3));

// # Bài 3
// Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function buildTree(arr, parentId = 0) {
  var result = [];
  // Khai báo một mảng mới để tạo cây nested
  for (var item of arr) {
    // Nếu như có parent,
    // check với parentId để xác định cấp con
    if (item.parent === parentId) {
      // Đệ quy để tạo cây con
      var children = buildTree(arr, item.id);

      if (children.length > 0) {
        // Nếu như tạo được cấp con,
        // đưa vào cấp cha dưới dạng nested
        item.children = children;
      }
      // Xóa key parent cho giống đề bài
      delete item.parent;
      // Truyền item đã tạo nested vào cây nested
      result.push(item);
    }
  }
  // trả về cây nested đã được tạo xong
  return result;
}

var nestedCategories = buildTree(categories);
console.log(JSON.stringify(nestedCategories, null, 2));

// # Bài 4
// Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript
// Lưu ý: Đặt tên là reduce2()
var array = [1, 2, 3, 4];

Array.prototype.reduce2 = function (callback, inputNumber) {
  var accumulator = inputNumber;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

var sum = array.reduce2((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);

console.log("Tổng =", sum);
