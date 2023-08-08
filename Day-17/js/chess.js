// # Bài 6: Vẽ bàn cờ vua
var container = document.getElementsByClassName("chess")[0];

for (var i = 1; i <= 8; i++) {
  for (var j = 1; j <= 8; j++) {
    var item = document.createElement("div");
    item.style.display = "inline-block";
    item.style.width = "50px";
    item.style.height = "50px";

    if ((i + j) % 2 === 0) {
      item.style.backgroundColor = "white";
    } else {
      item.style.backgroundColor = "black";
    }

    item.style.verticalAlign = "middle";
    container.appendChild(item);
  }
  var space = document.createElement("br");
  container.appendChild(space);
}
