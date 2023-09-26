var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");

var count = 0;

var btnDelete = document.createElement("button");
btnDelete.disabled = true;
btnDelete.innerText = "Xóa đã chọn:(";
var textNode = document.createTextNode(0);
btnDelete.append(textNode);
btnDelete.append(")");
document.body.append(btnDelete);

checkAll.addEventListener("change", function () {
  var status = this.checked;

  checkItems.forEach(function (checkItem) {
    checkItem.checked = status;
  });

  if (status === true) {
    count = checkItems.length;
    disabled = false;
  } else {
    count = 0;
    disabled = true;
  }
});

checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    if (!this.checked) {
      checkAll.checked = false;
      return;
    }
    var status = Array.from(checkItems).every((checkItem) => {
      return checkItem.checked;
    });
    checkAll.checked = status;
  });
});
