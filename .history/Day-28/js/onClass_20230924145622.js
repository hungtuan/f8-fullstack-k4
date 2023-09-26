var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");

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
