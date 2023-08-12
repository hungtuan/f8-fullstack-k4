// # Bài 1: N số fibonaci
// Hiển thị N số Fibonaci đầu tiên
// Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonaci

// var fibonaci = (n) => {
//   if (n === 0 || n === 1) {
//     {
//       return n;
//     }
//   }
//   return fibonaci(n - 1) + fibonaci(n - 2);
// };

// console.log("danh sách 10 số fibonaci");
// var number = 10;

// var stringListFibonaci = "";
// for (var i = 0; i < number; i++) {
//   stringListFibonaci += fibonaci(i).toString();
//   if (i < number - 1) {
//     stringListFibonaci += ", ";
//   }
// }

// console.log(stringListFibonaci);

// # Bài 2: Đảo ngược số
// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược
// Ví dụ: Khi gọi hàm và truyền đối số 12345 sẽ trả về kết quả 54321

// var reverseNumber = (number) => {
//   var reversed = 0;

//   while (number > 0) {
//     var lastDigit = number % 10;
//     var reversed = reversed * 10 + lastDigit;
//     number = Math.floor(number / 10);
//   }
//   return reversed;
// };

// var number = 12345;
// console.log(reverseNumber(number));

// # Bài 3: Viết hàm chuyển số thành chữ
// Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám
// Ràng buộc: Số cần chuyển đổi có giá trị từ 0 đến 9999

function numberToWords(number) {
  const ones = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];

  const tens = [
    "",
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
  ];

  const units = ["", "ngàn", "triệu", "tỷ"];

  if (number === 0) {
    return "không";
  }

  const numStr = number.toString();
  const numArray = numStr.padStart(12, "0").split("").map(Number); // Tối đa 12 chữ số

  let words = "";
  let unitIndex = Math.floor((numArray.length - 1) / 3); // Số lượng nhóm 3 chữ số

  for (let i = 0; i < numArray.length; i += 3) {
    const chunk = numArray.slice(i, i + 3);
    const chunkStr = chunk.join("").replace(/^0+/, ""); // Loại bỏ số 0 đầu tiên

    if (chunkStr.length === 0) {
      unitIndex--;
      continue;
    }

    let chunkWords = "";

    if (chunk[0] !== 0) {
      chunkWords += `${ones[chunk[0]]} trăm `;
    }

    if (chunk[1] === 1) {
      chunkWords += `${tens[chunk[1] + chunk[2]]} `;
    } else {
      chunkWords += `${tens[chunk[1]]} ${ones[chunk[2]]} `;
    }

    chunkWords += units[unitIndex] + " ";
    words += chunkWords;

    unitIndex--;
  }

  return words.trim();
}

const number = 4298;
console.log(numberToWords(number));
