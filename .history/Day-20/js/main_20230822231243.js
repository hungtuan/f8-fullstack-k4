// # Bài 1
// Lấy kết quả giao giữa 2 mảng

// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];
// var result = arrA.reduce((prev, current) => {
//   if (arrB.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(result);

// # Bài 2
// Làm phẳng array sau (Chuyển về mảng 1 chiều)
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// var flatten = (arr) => {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
//   }, []);
// };

// console.log(flatten(arr));

// # Bài 3
// Tách phần tử trong mảng theo đúng kiểu dữ liệu

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};

var arrFlat = flatten(arr);
console.log(arrFlat);
var newArr = [];
var arrStrings = [];
var arrNumbers = [];
var arrBoolean = [];

var resultString = arrFlat.reduce((pre, cur) => {
  if (typeof cur === "string") {
    arrStrings.push(cur);
  }
  return arrStrings;
}, 0);

console.log(resultString);

// var resultNumber = arrFlat.reduce((pre, cur) => {
//   if (Number.isInteger(cur)) {
//     arrNumbers.push(cur);
//   }
//   return arrNumbers;
// }, 0);

// console.log(result);

newArr.push(resultString);
console.log(newArr);
