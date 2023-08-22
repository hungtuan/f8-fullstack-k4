var arr1 = [5, 2, 1, 9, 8];
var arr2 = [2, 1, 8, 3];

var result = arr1.reduce((prev, current) => {
  if (arr2.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
