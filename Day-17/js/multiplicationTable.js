// # Bài 7: Vẽ bảng cửu chương
var multiplicationTable = document.getElementsByClassName(
  "multiplicationtable"
)[0];

for (var i = 1; i <= 10; i++) {
  var row = document.createElement("div");
  row.style.display = "flex";
  row.style.flexDirection = "column";
  row.style.alignItems = "stretch";
  row.style.justifyContent = "center";
  row.style.rowGap = "6px";
  row.style.padding = "3px";
  row.textContent = "";
  for (var j = 1; j <= 10; j++) {
    var product = i * j;
    var equation = `${i} x ${j} = ${product}`;

    var cell = document.createElement("span");
    cell.textContent = equation;

    row.appendChild(cell);
  }
  multiplicationTable.appendChild(row);
}

container2.appendChild(multiplicationTable);
