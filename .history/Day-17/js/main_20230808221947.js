// # Bài 1: Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
var km = 121;

function price(km) {
  if (km > 5) {
    return 11000;
  } else if (km <= 1) {
    return 15000;
  } else {
    return 13500;
  }
}
price(km);
console.log(`Số tiền/km: ${price(km)}đ`);

var priceValue = price(km);

function totalPrice(km, priceValue) {
  if (km > 120) {
    var discount = 0.1;
    return priceValue * km - priceValue * km * discount;
  } else return priceValue * km;
}
var totalPrice = totalPrice(km, priceValue);
console.log(`Đã đi được ${km}km, Tổng tiền: ${totalPrice}đ`);

// # Bài 2: Tính tiền điện
// Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau
// Input: Số điện tiêu thụ hàng tháng
// Output: Hiển thị số tiền phải đóng
var electricity = 400;

function price(electricity) {
  if (electricity >= 0 && electricity <= 50) {
    //0-50
    return 1678;
  } else if (electricity >= 51 && electricity <= 100) {
    //51-100
    return 1734;
  } else if (electricity >= 101 && electricity <= 200) {
    //101-200
    return 2014;
  } else if (electricity >= 201 && electricity <= 300) {
    //201-300
    return 2536;
  } else if (electricity >= 301 && electricity <= 400) {
    //301-400
    return 2834;
  } else {
    //>400
    return 2927;
  }
}

var priceElectric = price(electricity);
console.log(priceElectric);

function ElectricityBill(electricity, price) {
  if (electricity >= 0 && electricity <= 50) {
    //0-50
    return electricity * price;
  } else if (electricity >= 51 && electricity <= 100) {
    //51-100
    return electricity * price;
  } else if (electricity >= 101 && electricity <= 200) {
    //101-200
    return electricity * price;
  } else if (electricity >= 201 && electricity <= 300) {
    //201-300
    return electricity * price;
  } else if (electricity >= 301 && electricity <= 400) {
    //301-400
    return electricity * price;
  } else {
    //>400
    return electricity * price;
  }
}
var bill = ElectricityBill(electricity, priceElectric);
console.log(`Số tiền tiêu thụ hàng tháng là: ${bill}đ`);
// # Bài 3: Tính giá trị biểu thức
// Cho trước số nguyên n. Tính giá trị biểu thức sau
// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
var n = 5;
var total = 0;
var count = 1;
for (var i = 1; i <= n; i++) {
  count++;
  total += i * count;
}
console.log(`Tổng S là: ${total}`);

// # Bài 4: Viết hàm kiểm tra số nguyên tố
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về
// Gọi hàm trong câu điều kiện if else

// var flag = true;
// var n = 7;

// if (n < 2) {
//   flag = false;
// }

// for (var i = 2; i < n - 1; i++) {
//   if (n % i === 0) {
//     flag = false;
//     break;
//   }
// }

// function isPrime(flag) {
//   if (flag === false) {
//     return console.log("Không phải số nguyên tố");
//   } else {
//     return console.log("Là số nguyên tố");
//   }
// }

// isPrime(flag);

// # Bài 5: Vẽ tam giác số
// Vẽ tam giác số sau với N dòng

// 1

// 2 3

// 4 5 6

// 7 8 9 10

// 11 12 13 14 15
// var string = "";
// var count = 1;
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     string += count + " ";
//     count++;
//   }
//   string += "\n\n";
// }
// console.log(string);

// # Bài 8: Tính giá trị biểu thức không dùng vòng lặp
// Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
// var n = 3;
// function calculateHarmonicSeriesSum(n, current = 1) {
//   if (current > n) {
//     return 0;
//   }
//   // Tính tổng và tiếp tục đệ quy
//   return 1 / current + calculateHarmonicSeriesSum(n, current + 1);
// }

// var sum = calculateHarmonicSeriesSum(n);
// // Làm tròn kết quả đến 2 chữ số sau dấu thập phân
// var roundedSum = sum.toFixed(2);
// console.log(`Tổng của chuỗi với n = ${n} là: ${roundedSum}`);
